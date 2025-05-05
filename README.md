Node.js Assignment:
“CrediKhaata – Loan Tracker for Shopkeepers”
Objective
Build a RESTful backend service that allows a shopkeeper to:
• Add and manage customers
• Record credit sales (loans)
• Track repayments
• Get alerts for overdue payments
Use Case
Small businesses (kirana stores, tailors, hardware shops, etc.) often sell goods on credit to known customers and
expect repayment on a schedule (bi-weekly or monthly). Your API will help them digitize this.
Core Features
1. User Auth
• Shopkeeper registration/login via email and password
• JWT-based session management
• All routes must be user-scoped
2. Customer Management
• Add/edit/delete customer profiles
o Fields: name, phone, address, trust score (0–10), credit limit

3. Loan (Credit Sale) Management
• Create a credit transaction:
o customerId, item description, loan amount, issue date, due date, frequency (bi-weekly/monthly)
o Optional: interest %, grace days
• View all active loans, status (pending, paid, overdue)
4. Repayment Tracking
• Record repayments (amount + date)
• Auto-update balance on loan
• Track partial payments
5. Loan Summary & Overdue Alerts
• /Summary route per shopkeeper:
o Total loaned, total collected, overdue amount, avg repayment time
• /Overdue route to list customers with overdue loans
• [Bonus]: Auto-tag overdue loans based on current date

2

2

Bonus Features
• SMS/WhatsApp Reminder API integration (can be mocked)
• Generate simple PDF receipt (for a repayment)
• Add a webhook endpoint for repayment notification
Tech Stack Guidelines
• Node.js + Express
• MongoDB (preferred) or PostgreSQL
• JWT Auth
• Moment.js or date-fns for due date logic
• Mongoose (if MongoDB) with clear schema relationships
