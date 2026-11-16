# Indigra Global Enterprises website (Next.js)

1. `npm install`
2. `cp .env.example .env.local` and add the Gmail App Password for Indigraa@gmail.com
3. `npm run dev` then open http://localhost:3000

Enquiries from the form are emailed to Indigraa@gmail.com via Gmail SMTP (`app/api/contact/route.js`).
On Vercel, add GMAIL_USER and GMAIL_APP_PASSWORD under Project Settings > Environment Variables.
