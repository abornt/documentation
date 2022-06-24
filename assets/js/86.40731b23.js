(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{551:function(t,e,a){"use strict";a.r(e);var s=a(65),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-lms-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-lms-app"}},[t._v("#")]),t._v(" Create LMS APP")]),t._v(" "),a("p",[t._v("Create LMS APP is a quick start docker based application.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Assuming")]),t._v(" "),a("ul",[a("li",[t._v("you're on MacOS or Linux")]),t._v(" "),a("li",[t._v("you have "),a("code",[t._v("docker")]),t._v(" & "),a("code",[t._v("docker-composer")]),t._v(" installed")]),t._v(" "),a("li",[t._v("port 80 is free")])]),t._v(" "),a("p",[t._v("You have the following options")]),t._v(" "),a("h3",{attrs:{id:"installation-from-script-requires-node-to-be-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-script-requires-node-to-be-installed"}},[t._v("#")]),t._v(" Installation from script (requires "),a("code",[t._v("node")]),t._v(" to be installed).")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("npx --package=@escolalms/cla lms")])]),t._v(" "),a("h3",{attrs:{id:"installation-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source"}},[t._v("#")]),t._v(" Installation from source")]),t._v(" "),a("p",[t._v("Clone "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository"),a("OutboundLink")],1),t._v(" then,")]),t._v(" "),a("p",[a("code",[t._v("git clone git@github.com:EscolaLMS/Create-LMS-App.git")])]),t._v(" "),a("p",[t._v("in order to launch LMS")]),t._v(" "),a("p",[t._v("run "),a("code",[t._v("make init")]),t._v(" shell script")]),t._v(" "),a("h3",{attrs:{id:"installation-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-troubleshooting"}},[t._v("#")]),t._v(" Installation troubleshooting")]),t._v(" "),a("p",[t._v("Installation process is based on "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App/blob/main/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-compose file"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Clone the repository (see Installation from source above), then try to start all images "),a("code",[t._v("docker-compose up -d")])]),t._v(" "),a("p",[t._v("Once all the docker containers are running you need to perform the following sequence of tasks")]),t._v(" "),a("ol",[a("li",[t._v("docker-pull")]),t._v(" "),a("li",[t._v("docker-up")]),t._v(" "),a("li",[t._v("dumpautoload")]),t._v(" "),a("li",[t._v("generate-new-keys-no-db")]),t._v(" "),a("li",[t._v("migrate")]),t._v(" "),a("li",[t._v("generate-new-keys-db")]),t._v(" "),a("li",[t._v("permissions-seeder")]),t._v(" "),a("li",[t._v("storage-links")]),t._v(" "),a("li",[t._v("content-rich-seeder")]),t._v(" "),a("li",[t._v("restart")]),t._v(" "),a("li",[t._v("success")])]),t._v(" "),a("p",[t._v("All of the above are describes in "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App/blob/main/makefile",target:"_blank",rel:"noopener noreferrer"}},[t._v("makefile"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"first-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-steps"}},[t._v("#")]),t._v(" First steps")]),t._v(" "),a("p",[t._v("Once everything is installed (takes a while)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://api.wellms.localhost/api/documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://api.wellms.localhost/api/documentation"),a("OutboundLink")],1),t._v(" API Swagger documentation")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://admin.wellms.localhost",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://admin.wellms.localhost"),a("OutboundLink")],1),t._v(" admin panel credentials username: admin@escola-lms.com password: secret")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://admin.wellms.localhost",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://app.wellms.localhost"),a("OutboundLink")],1),t._v(" demo panel credentials username: student@escola-lms.com password: secret")]),t._v(" "),a("li",[t._v("Emails are not sent. See "),a("a",{attrs:{href:"http://mailhog.wellms.localhost",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mailhog.wellms.localhost"),a("OutboundLink")],1),t._v(" mailhog for details")])]),t._v(" "),a("h2",{attrs:{id:"setting-up-your-own-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-own-domain"}},[t._v("#")]),t._v(" Setting up your own domain")]),t._v(" "),a("ol",[a("li",[t._v("Setup domains in "),a("a",{attrs:{href:"https://caddyserver.com/docs/caddyfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("Caddyfile"),a("OutboundLink")],1),t._v(", then restart caddy "),a("code",[t._v("docker-compose restart proxy")]),t._v(". Example:")])]),t._v(" "),a("p",[t._v("Before")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("http://admin.wellms.localhost  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy admin:80\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp://app.wellms.localhost  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy app:80\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp://api.wellms.localhost  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy api:80\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp://mailhog.wellms.localhost  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy mailhog:8025\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("After")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("admin.escolalms.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy admin:80\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndemo.escolalms.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy app:80\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napi.escolalms.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy api:80\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmailhog.escolalms.com  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treverse_proxy mailhog:8025\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("NOTE")]),t._v(" Settings above will automatically create you SSL Lets Encrypt Certification.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Change "),a("code",[t._v("API_URL")]),t._v(" in "),a("code",[t._v("docker-compose.yml")]),t._v(", and restart dockers with "),a("code",[t._v("make restart")]),t._v(".")])]),t._v(" "),a("p",[t._v("Before")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" API_URL=http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.wellms.localhost\n")])])]),a("p",[t._v("After")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" API_URL=https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.escolalms.com\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Edit "),a("code",[t._v("APP_URL")]),t._v(" in "),a("code",[t._v(".env")]),t._v(" file")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[t._v("APP_URL=http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.wellms.localhost/\n")])])]),a("p",[t._v("After")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[t._v("APP_URL=https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.escolalms.com/\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Clear Laravel Cache, enter bash by calling "),a("code",[t._v("make bash")]),t._v(" then call artisan commands "),a("code",[t._v("optimize:clear")]),t._v(" and "),a("code",[t._v("responsecache:clear")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("➜  Create-LMS-App git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\ndevilbox@0d6a75afa279:/var/www/html$ php artisan optimize:clear\n\nCached events cleared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nCompiled views cleared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nApplication cache cleared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nRoute cache cleared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nConfiguration cache cleared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nCompiled services and packages files removed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nCaches cleared successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\ndevilbox@0d6a75afa279:/var/www/html$ php artisan responsecache:clear\nResponse cache cleared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),a("h2",{attrs:{id:"scaling-php-fpm-horizon-scheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling-php-fpm-horizon-scheduler"}},[t._v("#")]),t._v(" Scaling php-fpm, Horizon & Scheduler.")]),t._v(" "),a("p",[t._v("By default all 3 threads phpfpm, Laravels Horizon and Scheduler are severed by one "),a("a",{attrs:{href:"https://github.com/EscolaLMS/API/blob/develop/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("image container"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("code",[t._v("php-fpm")]),t._v(" serve main Laravel REST API (with "),a("a",{attrs:{href:"https://github.com/EscolaLMS/API/tree/develop/docker/conf/nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App/blob/main/Caddyfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("caddy"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://laravel.com/docs/9.x/horizon",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("horizon")]),a("OutboundLink")],1),t._v(" is responsible for all "),a("a",{attrs:{href:"https://laravel.com/docs/9.x/queues",target:"_blank",rel:"noopener noreferrer"}},[t._v("queue services"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://laravel.com/docs/9.x/scheduling",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Task Scheduling")]),a("OutboundLink")],1),t._v(" is responsible for all cron jobs")])]),t._v(" "),a("p",[t._v("All of above including nginx are served by "),a("code",[t._v("supervisor")]),t._v(", definition files are "),a("a",{attrs:{href:"https://github.com/EscolaLMS/API/tree/develop/docker/conf/supervisor",target:"_blank",rel:"noopener noreferrer"}},[t._v("listed here"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("You can scale this by setting each process into separate image container, just by amending "),a("code",[t._v("docker-compose.yml")]),t._v(" in the following way")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NOTE binding emptyfile.conf disable supervisor service")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" escolalms/api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" escola_lms\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./emptyfile.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/supervisor/custom.d/horizon.conf\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./emptyfile.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/supervisor/custom.d/scheduler.conf\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      - ./emptyfile.conf:/etc/supervisor/custom.d/nginx.conf")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html/storage\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./.env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html/.env\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("horizon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" escolalms/api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" escola_lms\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - ./emptyfile.conf:/etc/supervisor/custom.d/horizon.conf")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./emptyfile.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/supervisor/custom.d/scheduler.conf\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./emptyfile.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/supervisor/custom.d/nginx.conf\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html/storage\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./.env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html/.env\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" escolalms/api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" escola_lms\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./emptyfile.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/supervisor/custom.d/horizon.conf\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      - ./emptyfile.conf:/etc/supervisor/custom.d/scheduler.conf")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./emptyfile.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/supervisor/custom.d/nginx.conf\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html/storage\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./.env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html/.env\n")])])]),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("ul",[a("li",[t._v("please "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("create issue"),a("OutboundLink")],1),t._v(" in this repository")]),t._v(" "),a("li",[t._v("Windows users - this package is not tested on your system yet.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);