SANSHa PRIVATE LIMITED E-COMMERCE

Files: server.js, package.json, public/index.html, public/admin.html

RENDER SETUP
1. Create a PostgreSQL database in Render.
2. Create Web Service from this GitHub repository.
3. Build Command: npm install
4. Start Command: npm start
5. Add Environment Variables in the Web Service:
   DATABASE_URL = PostgreSQL database Internal Database URL
   SESSION_SECRET = long random secret (32+ characters)
   ADMIN_USER = your admin username
   ADMIN_PASSWORD = choose a strong private admin password (keep secret)
   WHATSAPP_NUMBER = 91 + business mobile number
   NODE_ENV = production

Admin page: /admin.html
Products are added by admin. Product image is a publicly accessible HTTPS URL.
Orders are saved in PostgreSQL, stock is reduced, COD order details open in WhatsApp.
No online payment gateway is included.

IMPORTANT: Never upload .env or passwords to GitHub. Render free database may expire or have limited persistence. For real customer orders use a persistent paid database, backups, and test everything first. Add privacy, shipping, returns and terms pages before public launch.
