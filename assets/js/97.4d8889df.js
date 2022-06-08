(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{524:function(t,a,s){"use strict";s.r(a);var e=s(65),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payments"}},[t._v("#")]),t._v(" Payments")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://escolalms.github.io/payments/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/payments",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Files/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/payments",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/payments",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/payments",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/payments",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/payments",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/payments",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/payments/maintainability",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/e42a94f20c76b719fc38/maintainability",alt:"Maintainability"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"purpose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),s("p",[t._v("This package lets you create Payments and process them using integrations with external payment providers (gateways).")]),t._v(" "),s("h2",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),s("ul",[s("li",[t._v("Stripe integration is based on "),s("code",[t._v("league/omnipay")]),t._v(" and "),s("code",[t._v("omnipay/stripe")]),t._v(" packages.")]),t._v(" "),s("li",[t._v("Przelewy24 integration is based on "),s("code",[t._v("mnastalski/przelewy24-php")]),t._v(" package.")]),t._v(" "),s("li",[t._v("Optional integration with "),s("code",[t._v("escolalms/settings")]),t._v(" package enables changing payment gateway api keys & secrets using Settings API (and Admin Panel).")])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("composer require escolalms/payments")])]),t._v(" "),s("li",[s("code",[t._v("php artisan migrate")])]),t._v(" "),s("li",[s("code",[t._v('php artisan db:seed --class="EscolaLms\\Cart\\Database\\Seeders\\CartPermissionSeeder"')])])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"facades"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#facades"}},[t._v("#")]),t._v(" Facades")]),t._v(" "),s("h4",{attrs:{id:"payments-facade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payments-facade"}},[t._v("#")]),t._v(" Payments Facade")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("EscolaLms\\Payments\\Facades\\Payments")]),t._v(" for starting payment processing.\nYou can create PaymentProcessor` either from a model using Payable trait or from precreated Payment object.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dtos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Cart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cart must implement Payable interface and use Payable trait")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Payments")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processPayment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will emit PaymentPaid event on success")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentStatus")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"paymentgateway-facade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paymentgateway-facade"}},[t._v("#")]),t._v(" PaymentGateway Facade")]),t._v(" "),s("p",[t._v("With "),s("code",[t._v("EscolaLms\\Payments\\Facades\\PaymentGateway")]),t._v(" you can call payment provider gateways directly.")]),t._v(" "),s("p",[t._v("For existing payment you can for example do:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dtos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentGateway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Payment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentDto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentDto")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromPayment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or you can create it manually")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentGateway")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will use default payment driver")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Important")]),t._v(": This will not save "),s("code",[t._v("Payment")]),t._v(" object.")]),t._v(" "),s("p",[t._v("To use specific driver, you can call")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentGateway")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("driver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'stripe'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"available-payment-drivers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-payment-drivers"}},[t._v("#")]),t._v(" Available payment drivers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("stripe")]),t._v(" (using "),s("code",[t._v("Stripe Payment Intent")]),t._v(")")]),t._v(" "),s("li",[s("strong",[t._v("free")])]),t._v(" "),s("li",[s("strong",[t._v("przelewy24")])]),t._v(" "),s("li",[t._v("TODO: "),s("em",[t._v("stripe-checkout")])])]),t._v(" "),s("h3",{attrs:{id:"payable-trait-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payable-trait-interface"}},[t._v("#")]),t._v(" Payable Trait & Interface")]),t._v(" "),s("p",[s("code",[t._v("Payable")]),t._v(" trait and interface are the core of this package, enabling simplified calling of "),s("code",[t._v("PaymentsService")]),t._v(" and "),s("code",[t._v("GatewayManager")]),t._v(".\nWhen you include it in your model that represents a "),s("code",[t._v("Payable")]),t._v(" (for example "),s("code",[t._v("Cart")]),t._v(" or "),s("code",[t._v("Order")]),t._v(" or "),s("code",[t._v("Product")]),t._v(") you can begin payment processing for that "),s("code",[t._v("Payable")]),t._v(" by calling "),s("code",[t._v("$payable->process()")]),t._v("\nwhich calls "),s("code",[t._v("Payments::processPayable($this)")]),t._v(" and automatically creates a "),s("code",[t._v("Payment")]),t._v(" and returns a "),s("code",[t._v("PaymentProcessor")]),t._v(" instance for that Payment.")]),t._v(" "),s("p",[s("code",[t._v("EscolaLms\\Cart")]),t._v(" package uses this trait and interface in "),s("code",[t._v("EscolaLms\\Cart\\Models\\Order")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"payment-processor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payment-processor"}},[t._v("#")]),t._v(" Payment Processor")]),t._v(" "),s("p",[s("code",[t._v("EscolaLms\\Payments\\Entities\\PaymentProcessor")]),t._v(" is a special class which wraps around "),s("code",[t._v("Payment")]),t._v("\nand contains functionality related to processing that payment, for example generating links to payment gateways, automatically setting payment status after purchase, emiting events related to payment status, etc.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dtos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entities"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Payment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// instead of using Payments facade")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("PaymentProcessor")]),t._v(" automatically selects "),s("code",[t._v("free")]),t._v(" driver when payment amount equals 0.")]),t._v(" "),s("h3",{attrs:{id:"payment-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payment-model"}},[t._v("#")]),t._v(" Payment Model")]),t._v(" "),s("p",[t._v("This package defines a "),s("code",[t._v("EscolaLms\\Payments\\Models\\Payment")]),t._v(" which contains all data abount given payment required for payment gateways to work.")]),t._v(" "),s("h2",{attrs:{id:"endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),s("p",[t._v("All the endpoints are defined in "),s("a",{attrs:{href:"https://escolalms.github.io/payments/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("./vendor/bin/phpunit")]),t._v(" to run tests. See "),s("a",{attrs:{href:"tests/Mocks/Payable.php"}},[t._v("tests/Mocks/Payable")]),t._v(" as an example how a Payable is defined.")]),t._v(" "),s("p",[t._v("Test details: "),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/payments",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Files/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("EscolaLms\\Payments\\Events\\PaymentCancelled")]),t._v(" - - emited after payment processing is cancelled (by user action or possibly by timeout sent from payment gateway)")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Payments\\Events\\PaymentFailed")]),t._v(" - emited after payment has failed (payment gateway returns error)")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Payments\\Events\\PaymentRegistered")]),t._v(" - emited when new Payment is created")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Payments\\Events\\PaymentSuccess")]),t._v(" - emited when payment gateway returns success")])]),t._v(" "),s("h2",{attrs:{id:"listeners"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),s("p",[t._v("No Listeners are defined in this package.")]),t._v(" "),s("h2",{attrs:{id:"how-to-use-this-package-on-frontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-package-on-frontend"}},[t._v("#")]),t._v(" How to use this package on Frontend")]),t._v(" "),s("h3",{attrs:{id:"admin-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin Panel")]),t._v(" "),s("h4",{attrs:{id:"left-menu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#left-menu"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Left Menu")])]),t._v(" "),s("p",[s("img",{attrs:{src:"docs/payments/menu.png",alt:"Admin panel menu",title:"Admin panel menu"}})]),t._v(" "),s("h4",{attrs:{id:"list-of-payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-payments"}},[t._v("#")]),t._v(" "),s("strong",[t._v("List of Payments")])]),t._v(" "),s("p",[s("img",{attrs:{src:"docs/payments/list.png",alt:"List of Payments",title:"List of Payments"}})]),t._v(" "),s("h2",{attrs:{id:"permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),s("p",[t._v("Permissions are defined in "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Payments/blob/main/src/Enums/CartPermissionsEnum.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enum"),s("OutboundLink")],1),t._v(" and seeded in "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Payments/blob/main/database/seeders/CartPermissionSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seeder"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"roadmap-todo-troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-todo-troubleshooting"}},[t._v("#")]),t._v(" Roadmap. Todo. Troubleshooting")]),t._v(" "),s("ul",[s("li",[t._v("???")])])])}),[],!1,null,null,null);a.default=n.exports}}]);