(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{579:function(e,a,t){"use strict";t.r(a);var s=t(65),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"headless-h5p-laravel-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#headless-h5p-laravel-api"}},[e._v("#")]),e._v(" Headless H5P Laravel API")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://escolalms.github.io/H5P/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/H5P",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/H5P/branch/main/graph/badge.svg?token=ci4VPQbrOI",alt:"codecov"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/EscolaLMS/Core/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://github.com/EscolaLMS/H5P/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/escolalms/headless-h5p",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/headless-h5p",alt:"downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/escolalms/headless-h5p",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/headless-h5p",alt:"downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/escolalms/headless-h5p",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/headless-h5p",alt:"downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/H5P/maintainability",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/6316e8dc93a06d28c6a0/maintainability",alt:"Maintainability"}}),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("p",[e._v("The lib allows headlessly")]),e._v(" "),t("ul",[t("li",[e._v("play all h5p content - exposed all essential data, yet player is needed")]),e._v(" "),t("li",[e._v("edit all h5p content - exposed all essential data, yet editor is needed")]),e._v(" "),t("li",[e._v("CRUD libraries")]),e._v(" "),t("li",[e._v("CRUD content")]),e._v(" "),t("li",[e._v("upload library from "),t("code",[e._v(".h5p")]),e._v(" file")]),e._v(" "),t("li",[e._v("upload content from "),t("code",[e._v(".h5p")]),e._v(" file")])]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://escolalms.github.io/H5P/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger"),t("OutboundLink")],1),e._v(" documented endpoints.")]),e._v(" "),t("p",[e._v("Some "),t("a",{attrs:{href:"tests"}},[e._v("tests")]),e._v(" can also be a great point of start.")]),e._v(" "),t("p",[e._v("To play the content you can use "),t("a",{attrs:{href:"https://github.com/EscolaLMS/H5P-player",target:"_blank",rel:"noopener noreferrer"}},[e._v("EscolaLMS H5P Player"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("composer require escolalms/headless-h5p")])]),e._v(" "),t("li",[t("code",[e._v("php artisan migrate")])]),e._v(" "),t("li",[t("code",[e._v("php artisan h5p:storage-link")]),e._v(" see below")]),e._v(" "),t("li",[e._v('`php db:seed --class="EscolaLms\\HeadlessH5P\\Database\\Seeders\\PermissionTableSeeder" see below')])]),e._v(" "),t("h3",{attrs:{id:"storage-links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-links"}},[e._v("#")]),e._v(" Storage links")]),e._v(" "),t("p",[e._v("You need to publish many of files to be availabe as public link.")]),e._v(" "),t("p",[t("code",[e._v("php artisan h5p:storage-link")]),e._v(" which creates a symbolic link from "),t("code",[e._v("storage/app/h5")]),e._v(" and "),t("code",[e._v("vendor/h5p/h5p-core")]),e._v(" and "),t("code",[e._v("vendor/h5p/h5p-editor")]),e._v(" to be accesible to public, as follows")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public_path('h5p') => storage_path('app/h5p'),\npublic_path('h5p-core') => base_path().'vendor/h5p/h5p-core',\npublic_path('h5p-editor') => base_path().'vendor/h5p/h5p-editor',\n")])])]),t("h3",{attrs:{id:"cors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" Cors")]),e._v(" "),t("p",[e._v("All the endpoints need to be accesible from other domains, so "),t("a",{attrs:{href:"https://laravel.com/docs/8.x/routing#cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS"),t("OutboundLink")],1),e._v(" must be properlly set.")]),e._v(" "),t("p",[e._v("Except of endpoints assets must expose CORS headers as well. You achive that by setting Apache/Nginx/Caddy/Whatever settings - below is example for Nginx for wildcard global access.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("location ~* \\.(eot|ttf|woff|woff2|jpg|jpeg|gif|png|wav|mp3|mp4|mov|ogg|webv)$ {\n    add_header Access-Control-Allow-Origin *;\n}\n")])])]),t("h3",{attrs:{id:"authorisation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authorisation"}},[e._v("#")]),e._v(" Authorisation")]),e._v(" "),t("p",[e._v("Most of the endpoints require authorisation, this is possible with laravel passport")]),e._v(" "),t("p",[e._v("There is a "),t("a",{attrs:{href:"database/seeders/PermissionTableSeeder.php"}},[e._v("seeder")]),e._v(" to must be run in order to authrize")]),e._v(" "),t("p",[e._v("User model is taken from "),t("a",{attrs:{href:"https://github.com/EscolaLMS/Auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auth"),t("OutboundLink")],1),e._v(" package.")]),e._v(" "),t("h3",{attrs:{id:"seeder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seeder"}},[e._v("#")]),e._v(" Seeder")]),e._v(" "),t("p",[e._v("To seed content and library")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('php artisan db:seed --class="\\EscolaLms\\HeadlessH5P\\Database\\Seeders\\ContentLibrarySeeder"\n')])])]),t("p",[e._v("You can seed library and content with build-in seeders as command that are accessible with")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("php artisan h5p:seed")]),e._v(" to add just libraries")]),e._v(" "),t("li",[t("code",[e._v("php artisan h5p:seed --addContent")]),e._v(" to add content with libraries")])]),e._v(" "),t("h2",{attrs:{id:"road-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[e._v("#")]),e._v(" Road map")]),e._v(" "),t("ul",[t("li",[e._v("rewrite h5p core in a way like "),t("a",{attrs:{href:"https://github.com/lumieducation/lumi",target:"_blank",rel:"noopener noreferrer"}},[e._v("luminare in typescript"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);