# Indigra Global Enterprises website (Next.js)

1. `npm install`
2. `cp .env.example .env.local` and add the Gmail App Password for Indigraa@gmail.com
3. `npm run dev` then open http://localhost:3000

Enquiries from the form are emailed to Indigraa@gmail.com via Gmail SMTP (`app/api/contact/route.js`).
On Vercel, add GMAIL_USER and GMAIL_APP_PASSWORD under Project Settings > Environment Variables.


cd /home/ec2-user/landing
git fetch
git pull

npm install
npm run build

pm2 start npm --name "indigra-landing-v1" -- start
pm2 save
pm2 startup

sudo env PATH=$PATH:/usr/bin /usr/lib/nodejs24/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user


pm2 delete indigra-landing-v1
pm2 flush