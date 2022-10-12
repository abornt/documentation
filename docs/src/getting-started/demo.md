All the demo content is hosted on the domain `escolalms.com` not `wellms.io` to distinguish staging and production.

## Before you launch application

Demo content is purged every 24 hours, so feel free to change anything. You won't corrupt anything.

**NOTE** demo is not sending any real emails and all card data is mock, it's a staging testing Stripe account.
You cannot perform any real transactions in the demo.

### Login credentials 

- **Admin** to access panel. Use the credentials `admin@escolalms.com` and password `secret`. 
- **Student** to access the application. You can create your own account or use one `student@escolalms.com` and password `secret`

| Role    | login                 | password |
|---------|-----------------------|----------|
| Admin   | admin@escolalms.com   | secret   |
| Student | student@escolalms.com | secret   |

### Payment card details

Use [testing cards from Stripe](https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers), example

| BRAND        | NUMBER           | CVC          | DATE            |
| ------------ | ---------------- | ------------ | --------------- |
| Visa         | 4242424242424242 | Any 3 digits | Any future date |
| Visa (debit) | 4000056655665556 | Any 3 digits | Any future date |
| Mastercard   | 5555555555554444 | Any 3 digits | Any future date |

### Sending emails 

All emails are not actually sent. You need to visit the demo (due to the security of our domain). 
Whenever an app or admin panel says that email has been sent, do not check your mailbox
**All emails will be avaiable in [MailHog](https://github.com/mailhog/MailHog) service**, links below 

## Production demo

The stable demo is built from [Docker images](https://hub.docker.com/search?q=escolalms). It is a production demo, therefore it should be faster and more stable than a staging demo. This app is built from [Create-LMS-App](https://github.com/EscolaLMS/Create-LMS-App)

| Application             | URL Link                             |
|-------------------------|--------------------------------------|
| Frontend Demo           | [https://demo.escolalms.com/](https://demo.escolalms.com/)    |
| Admin Demo              | [https://admin.escolalms.com/](https://admin.escolalms.com/)   |
| All mails will be here  | [https://mailhog.escolalms.com/](https://mailhog.escolalms.com/) |



