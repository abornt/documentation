# Invoices

Package for generate pdf invoice from order

[![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Invoices/)
[![codecov](https://codecov.io/gh/EscolaLMS/Invoices/branch/main/graph/badge.svg?token=O91FHNKI6R)](https://codecov.io/gh/EscolaLMS/Invoices)
[![Tests PHPUnit in environments](https://github.com/EscolaLMS/Invoices/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Invoices/actions/workflows/test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/60eb83351d2d550c15cb/maintainability)](https://codeclimate.com/github/EscolaLMS/Invoices/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/60eb83351d2d550c15cb/test_coverage)](https://codeclimate.com/github/EscolaLMS/Invoices/test_coverage)
[![downloads](https://img.shields.io/packagist/dt/escolalms/invoices)](https://packagist.org/packages/escolalms/invoices)
[![downloads](https://img.shields.io/packagist/v/escolalms/invoices)](https://packagist.org/packages/escolalms/invoices)
[![downloads](https://img.shields.io/packagist/l/escolalms/invoices)](https://packagist.org/packages/escolalms/invoices)

## What does it do

This package is adapter for EscolaLMS to create pdf invoice by <a href="https://github.com/LaravelDaily/laravel-invoices" target="_blank">`laraveldaily/laravel-invoices`</a>

## Installing

- `composer require escolalms/invoices`

## Config

```php
return [
    'date' => [
        /*
         * Carbon date format
         */
        'format' => 'd-m-Y',
        /*
         * Due date for payment since invoice's date.
         */
        'pay_until_days' => 7,
    ],

    'serial_number' => [
        'series'   => 'AA',
        'sequence' => 1,
        /*
         * Sequence will be padded accordingly, for ex. 00001
         */
        'sequence_padding' => 5,
        'delimiter'        => '.',
        /*
         * Supported tags {SERIES}, {DELIMITER}, {SEQUENCE}
         * Example: AA.00001
         */
        'format' => '{SERIES}{DELIMITER}{SEQUENCE}',
    ],

    'currency' => [
        'code' => 'PLN',
        /*
         * Usually cents
         * Used when spelling out the amount and if your currency has decimals.
         *
         * Example: Amount in words: Eight hundred fifty thousand sixty-eight EUR and fifteen ct.
         */
        'fraction' => 'gr',
        'symbol'   => 'zł',
        /*
         * Example: 19.00
         */
        'decimals' => 2,
        /*
         * Example: 1.99
         */
        'decimal_point' => ',',
        /*
         * By default empty.
         * Example: 1,999.00
         */
        'thousands_separator' => ' ',
        /*
         * Supported tags {VALUE}, {SYMBOL}, {CODE}
         * Example: 1.99 €
         */
        'format' => '{VALUE} {SYMBOL}',
    ],

    'paper' => [
        // A4 = 210 mm x 297 mm = 595 pt x 842 pt
        'size'        => 'a4',
        'orientation' => 'portrait',
    ],

    'disk' => 'local',

    'logo' => 'vendor/invoices/sample-logo.png',

    'seller' => [
        /*
         * Class used in templates via $invoice->seller
         *
         * Must implement LaravelDaily\Invoices\Contracts\PartyContract
         *      or extend LaravelDaily\Invoices\Classes\Party
         */
        'class' => \LaravelDaily\Invoices\Classes\Seller::class,

        /*
         * Default attributes for Seller::class
         */
        'attributes' => [
            'name'          => 'Escola',
            'address'       => 'Chłodna 22A, 00-891 Warszawa',
            'code'          => '00-891',
            'vat'           => '123456789',
            'phone'         => '123456789',
            'custom_fields' => [
                /*
                 * Custom attributes for Seller::class
                 *
                 * Used to display additional info on Seller section in invoice
                 * attribute => value
                 */
                'SWIFT' => 'BANK101',
            ],
        ],
    ],
];
```

## Example or Tutorial

## Endpoints

All the endpoints are defined in [![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Invoices/)

## Tests

Run `./vendor/bin/phpunit` to run tests. See [tests](https://github.com/EscolaLMS/Invoices/tree/main/tests) folder as it's quite good staring point as documentation appendix.

Test details [![codecov](https://codecov.io/gh/EscolaLMS/Invoices/branch/main/graph/badge.svg?token=O91FHNKI6R)](https://codecov.io/gh/EscolaLMS/Invoices) [![Tests PHPUnit in environments](https://github.com/EscolaLMS/Invoices/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Invoices/actions/workflows/test.yml)

## Events

This package does not dispatch any events.

## Listeners

This package does not listen for any events.

## How to use this on frontend.

### Admin panel

Admin panel automatically sends invoices to the customer's e-mail address.

### Front Application

To be able to download an invoice, we need to download orders using this method from the our sdk [sdk(fetchOrders)](https://github.com/EscolaLMS/sdk/blob/main/src/react/context/index.tsx#L1305) or to invoke the request directly when we want to perform an action in ssr [request](https://github.com/EscolaLMS/sdk/blob/main/src/services/cart.ts#L120) or querying this endpoint directly [endpoint](https://api-docs.wellms.io/#/Orders/8997737565f012fc6483d7874fed7375).

Below is an example of the implementation of such a component with orders collection and with the possibility of downloading an invoice.

```tsx
import React, { useCallback, useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

import { API } from "@escolalms/sdk/lib";

const Orders = () => {
  const { user, orders, fetchOrders, fetchOrderInvoice } =
    useContext(EscolaLMSContext);

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDownloadInvoice = useCallback((id: number) => {
    fetchOrderInvoice(id)
      .then((response) => {
        const url = `data:application/pdf;base64,${response}`;
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `InvoiceTitle ${id}.pdf`);

        document.body.appendChild(link);

        link.click();

        link && link.parentNode && link.parentNode.removeChild(link);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

  return (
    <div>
      {order.list &&
        order.list.data.map((item) => (
          <div>
            <div className="name-container">
              {item?.items?.map((product: API.CartItem, index) => (
                <div key={index}>
                  <strong>{product?.product?.name}</strong>
                </div>
              ))}
              <div>{item.subtotal}</div>

              <button onClick={() => handleDownloadInvoice(item.id)}>
                download invoce
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Orders;
```

In order to transfer other invoice data, we do it during the payment in this endpoint. [swagger](https://escolalms.github.io/Cart/#/Cart/a9183308a576feb0f769f81a32d6cb21)

## Permissions

- <a href="https://i.imgur.com/AoXsisJ.png">`view`</a> from `escolalms/cart` to get invoice pdf
