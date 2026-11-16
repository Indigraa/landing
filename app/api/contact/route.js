import nodemailer from "nodemailer";

export const runtime = "nodejs";
const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export async function POST(req) {
  let d;
  try { d = await req.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  if (d.website) return Response.json({ ok: true }); // honeypot
  const { name, company, email, phone, interest, message } = d;
  if (!name?.trim() || !message?.trim() || !/^\S+@\S+\.\S+$/.test(email || ""))
    return Response.json({ error: "Please fill in name, a valid email and a message." }, { status: 400 });

  const user = process.env.GMAIL_USER, pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return Response.json({ error: "Email is not configured on the server." }, { status: 500 });

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
    await transporter.sendMail({
      from: `"Indigra Website" <${user}>`,
      to: process.env.CONTACT_TO || user,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Website enquiry: ${interest || "General"} from ${name}`,
      text: `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\nPhone: ${phone || "-"}\nInterest: ${interest || "-"}\n\n${message}`,
      html: `<p><b>Name:</b> ${esc(name)}<br><b>Company:</b> ${esc(company) || "-"}<br><b>Email:</b> ${esc(email)}<br><b>Phone:</b> ${esc(phone) || "-"}<br><b>Interest:</b> ${esc(interest)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    });
    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Message could not be sent right now." }, { status: 502 });
  }
}
