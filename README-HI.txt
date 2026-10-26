SANSHА PRIVATE LIMITED — E-COMMERCE WEBSITE STARTER
==================================================

Is ZIP mein customer-facing online store + server + database integration + admin panel ka code hai.

IMPORTANT: Yeh deploy karne layak starter project hai, lekin ZIP kholte hi website live nahi hoti. Live karne ke liye hosting, PostgreSQL database aur environment settings chahiye. Domain sansha.in ko hosting se connect karna hoga. Kisi bhi customer ko public launch se pehle test order karke verify karein.

FEATURES
- Mobile-friendly product catalogue, search, category filter
- Cart and checkout form
- COD order database mein save hota hai
- Order number generate hota hai
- Customer WhatsApp par order details bhej sakta hai
- Admin login, products add karna, price/stock update karna
- Admin recent orders dekh sakta hai aur status update kar sakta hai
- PostgreSQL database (production deploy ke liye)

DEFAULT SAMPLE PRODUCTS
Tile Cleaner, Toilet Cleaner, Dish Wash Liquid, Hand Wash, Detergent Liquid,
Car Wash Shampoo, Car All-in-One Polish. Prices sirf sample hain — launch se pehle
apne actual product, pack size, price, stock, photos aur descriptions set karein.

LIVE DEPLOYMENT — TECHNICAL SETUP
1. Aisi hosting choose karein jo Node.js app aur PostgreSQL database support kare.
2. ZIP extract karke project files hosting/Git repository mein upload karein.
3. PostgreSQL database banayein aur DATABASE_URL copy karein.
4. Hosting environment variables set karein:
   NODE_ENV=production
   DATABASE_URL= (hosting se mila PostgreSQL connection string)
   SESSION_SECRET= (kam se kam 32 random characters ka secret)
   ADMIN_USERNAME= (apna admin username)
   ADMIN_PASSWORD= (strong unique password)
   WHATSAPP_NUMBER=916001864754
   STORE_EMAIL=sansha484@gmail.com
   STORE_PHONE=6001864754
   STORE_ADDRESS=66 Kokila, Bongaigaon, Assam, India - 783392
5. Build command: npm install
   Start command: npm start
6. Deploy karein. Site ke /admin route ki jagah homepage ke neeche “Store admin” link hai.
7. Hosting URL par test karein: product add, COD order, order history, status update.
8. Domain sansha.in ke DNS records hosting provider ke instructions ke mutabiq set karein. DNS changes ko propagate hone mein waqt lag sakta hai.
9. Real domain par HTTPS/SSL active confirm karein.
10. Launch se pehle sample prices replace karein, product images upload karein, shipping/return/privacy policies add karein, test order karein.

PAYMENTS
- Is version mein COD order working flow hai.
- Razorpay/UPI online payment abhi active nahi hai. .env.example mein Razorpay placeholders sirf future setup ke liye hain. Online payment enable karne se pehle payment gateway account, server-side order creation, signature verification, webhook verification aur successful-payment status handling implement/test karna zaroori hai. Sirf public key dalna kaafi nahi hai.
- Kabhi bhi payment secret ya admin password website ke HTML mein na daalein.

SECURITY / BUSINESS CHECKLIST
- ADMIN_PASSWORD aur SESSION_SECRET ko strong, unique values se replace karein.
- Admin credentials kisi ko public na karein.
- Public launch se pehle legal business details, tax/GST applicability, shipping rates, delivery area, cancellation/return policy, privacy policy and customer support details set karein.
- Product label claims aur chemical safety instructions verify karein.
- Backup/restore plan set karein; orders ka test karke database persistence confirm karein.
- Sample catalogue prices are not verified and should not be shown as final prices until edited.

CONTACT CONFIG
Company: Sansha Private Limited
Phone: 6001864754
Email: sansha484@gmail.com
Address: 66 Kokila, Bongaigaon, Assam, India - 783392
WhatsApp: 916001864754 (91 + Indian mobile number)

NOTE
This is a custom starter, not a managed hosted store. It does not yet include online payment processing,
automatic shipping integrations, invoices/GST billing, customer account registration, or email/SMS notifications.
