# Create LMS APP

Create LMS APP is a quick start docker based application.

## Installation

Assuming

- you're on MacOS, Linux or Windows WSL
- you have `docker` & `docker-composer` installed
- port 80 is free

You have the following options

### Installation from script (requires `node` to be installed).

Run `npx --package=@escolalms/cla lms`

### Installation from source

Clone [this repository](https://github.com/EscolaLMS/Create-LMS-App) then,

`git clone git@github.com:EscolaLMS/Create-LMS-App.git`

in order to launch LMS

run `make init` shell script

### Installation troubleshooting

Installation process is based on [docker-compose file](https://github.com/EscolaLMS/Create-LMS-App/blob/main/docker-compose.yml).

Clone the repository (see Installation from source above), then try to start all images `docker-compose up -d`

Once all the docker containers are running you need to perform the following sequence of tasks

1. `docker-pull`
2. `docker-up`
3. `dumpautoload`
4. `generate-new-keys-no-db`
5. `migrate`
6. `generate-new-keys-db`
7. `permissions-seeder`
8. `storage-links`
9. `content-rich-seeder`
10. `restart`
11. `success`

All of the above are described in [makefile](https://github.com/EscolaLMS/Create-LMS-App/blob/main/makefile)

## First steps

Once everything is installed (takes a while)

- [http://api.wellms.localhost/api/documentation](http://api.wellms.localhost/api/documentation) API Swagger documentation
- [http://admin.wellms.localhost](http://admin.wellms.localhost) admin panel credentials username: admin@escola-lms.com password: secret
- [http://app.wellms.localhost](http://admin.wellms.localhost) demo panel credentials username: student@escola-lms.com password: secret
- Emails are not sent. See [http://mailhog.wellms.localhost](http://mailhog.wellms.localhost) mailhog for details

## Troubleshooting

- please [create issue](https://github.com/EscolaLMS/Create-LMS-App/issues) in this repository
- Windows users - this package is not tested on your system yet.

Other topics regarding this method are described in - [Create Wellms App Development](../development/cra)
