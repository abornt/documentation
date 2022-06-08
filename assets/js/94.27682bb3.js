(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{520:function(t,s,a){"use strict";a.r(s);var e=a(65),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mattermost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mattermost"}},[t._v("#")]),t._v(" Mattermost")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://escolalms.github.io/Mattermost/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Mattermost",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Mattermost/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/mattermost",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/mattermost",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/mattermost",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/mattermost",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/mattermost",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/mattermost",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Mattermost/maintainability",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/00725c6ea461fcfa2754/maintainability",alt:"Maintainability"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Mattermost/test_coverage",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/00725c6ea461fcfa2754/test_coverage",alt:"Test Coverage"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"what-does-it-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),a("p",[t._v("This package is used for "),a("a",{attrs:{href:"https://mattermost.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mattermost"),a("OutboundLink")],1),t._v(" integration.")]),t._v(" "),a("p",[t._v("It listens for Events then add/remove user for mattermost and particular channels either as standard user or admin.")]),t._v(" "),a("h2",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("composer require escolalms/mattermost")])])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("You can configure the package using Facade")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Config::set('mattermost.package_status', PackageStatusEnum::ENABLED);\nConfig::set('mattermost.servers.default.host', 'localhost');\nConfig::set('mattermost.servers.default.login', 'login');\nConfig::set('mattermost.servers.default.password', 'password');\n")])])]),a("p",[t._v("or "),a("code",[t._v("/api/admin/config")]),t._v(" endpoint")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("actingAs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/api/admin/config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'config'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mattermost.package_status'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PackageStatusEnum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENABLED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mattermost.servers.default.host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mattermost.servers.default.login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mattermost.servers.default.password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("p",[t._v("All the endpoints are defined in "),a("a",{attrs:{href:"https://escolalms.github.io/Mattermost/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("./vendor/bin/phpunit")]),t._v(" to run tests. See tests folder as it's quite good staring point as documentation appendix.\nTest details\n"),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Mattermost",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Mattermost/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),a("p",[t._v("Handling events")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EscolaLms\\Auth\\Events\\AccountConfirmed")]),t._v(" => add user to Mattermost")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Auth\\Events\\AccountDeleted")]),t._v(" => remove user from Mattermost")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Auth\\Events\\AccountBlocked")]),t._v(" => block user account")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Courses\\Events\\CourseAssigned")]),t._v(" => add user to course channel with member role")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Courses\\Events\\CourseUnassigned")]),t._v(" => remove user from course channel")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Courses\\Events\\CourseTutorAssigned")]),t._v(" => add user to course channel with channel_admin role")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Courses\\Events\\CourseTutorUnassigned")]),t._v(" => remove user from course channel")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Webinar\\Events\\WebinarUserAssigned")]),t._v(" => add user to webinar channel with member role")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Webinar\\Events\\WebinarUserUnassigned")]),t._v(" => remove user from webinar channel")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned")]),t._v(" => add user to webinar channel with channel_admin role")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned")]),t._v(" => remove user from webinar channel")])]),t._v(" "),a("h2",{attrs:{id:"how-to-use-this-on-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-on-frontend"}},[t._v("#")]),t._v(" How to use this on frontend")]),t._v(" "),a("h3",{attrs:{id:"admin-panel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin panel")]),t._v(" "),a("p",[a("strong",[t._v("Settings")]),t._v(" "),a("img",{attrs:{src:"docs/mattermost/settings.png",alt:"Settings",title:"Settings"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);