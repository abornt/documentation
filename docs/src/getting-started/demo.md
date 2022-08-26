All the demo content is hosted on domain `escolalms.com` not `wellms.io` to distinct staging and production. 

Demo content is purged every 2 hours so feel free to change anything

**NOTE** demo is not sending any real emails and all card data is mock, it's a staging testing Stripe account.
You cannot perform any real transactions in the demo.

Use [testing cards from Stripe](https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers), example

| BRAND        | NUMBER           | CVC          | DATE            |
| ------------ | ---------------- | ------------ | --------------- |
| Visa         | 4242424242424242 | Any 3 digits | Any future date |
| Visa (debit) | 4000056655665556 | Any 3 digits | Any future date |
| Mastercard   | 5555555555554444 | Any 3 digits | Any future date |

## Staging demo

Staging demo is build from source codes, latest `main` branch on `API`, `admin` and `Front` repositories.

### Frontend Demo

- [https://demo-stage.escolalms.com/](https://demo-stage.escolalms.com/)

You can create you're own account or use one `student@escola-lms.com` and password `secret`

### Admin Demo

- [https://admin-stage.escolalms.com/](https://admin-stage.escolalms.com/)

Use the credentials `admin@escola-lms.com` and password `secret`

### Mailing

All emails are not actually sent you need visit [MailHog](https://github.com/mailhog/MailHog) at

- [https://mailhog-stage.escolalms.com/](https://mailhog-stage.escolalms.com/)


<s>

## Stable demo

Stable demo is build from Docker images

### Frontend Demo

- [https://demo.escolalms.com/](https://demo.escolalms.com/)

You can create you're own account or use one `student@escolalms.com` and password `secret`

### Admin Demo

- [https://admin.escolalms.com/](https://admin.escolalms.com/)

Use the credentials `admin@escolalms.com` and password `secret`

### Mailing

All emails are not actually sent you need visit [MailHog](https://github.com/mailhog/MailHog) at

- [https://mailhog.escolalms.com/](https://mailhog.escolalms.com/)

</s>
