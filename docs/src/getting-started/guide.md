# Create LMS APP

Create LMS APP is a quick start docker based application.

## Installation

Assuming

- you're on MacOS or Linux
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

## First steps

Once everything is installed (takes a while)

- [http://api.wellms.localhost/api/documentation](http://api.wellms.localhost/api/documentation) API Swagger documentation
- [http://admin.wellms.localhost](http://admin.wellms.localhost) admin panel credentials username: admin@escola-lms.com password: secret
- [http://app.wellms.localhost](http://admin.wellms.localhost) demo panel credentials username: student@escola-lms.com password: secret
- Emails are not sent. See [http://mailhog.wellms.localhost](http://mailhog.wellms.localhost) mailhog for details

## Setting up your own domain

1. Setup domains in [Caddyfile](https://caddyserver.com/docs/caddyfile), then restart caddy `docker-compose restart proxy`. Example:

Before

```bash
http://admin.wellms.localhost  {
	reverse_proxy admin:80
}

http://app.wellms.localhost  {
	reverse_proxy app:80
}

http://api.wellms.localhost  {
	reverse_proxy api:80
}

http://mailhog.wellms.localhost  {
	reverse_proxy mailhog:8025
}
```

After

```bash
admin.escolalms.com {
	reverse_proxy admin:80
}

demo.escolalms.com {
	reverse_proxy app:80
}

api.escolalms.com {
	reverse_proxy api:80
}

mailhog.escolalms.com  {
	reverse_proxy mailhog:8025
}
```

**NOTE** Settings above will automatically create you SSL Lets Encrypt Certification.

2. Change `API_URL` in `docker-compose.yml`, and restart dockers with `make restart`.

Before

```yml
environment:
  - API_URL=http://api.wellms.localhost
```

After

```yml
environment:
  - API_URL=https://api.escolalms.com
```

3. Edit `APP_URL` in `.env` file

```yml
APP_URL=http://api.wellms.localhost/
```

After

```yml
APP_URL=https://api.escolalms.com/
```

4. Clear Laravel Cache, enter bash by calling `make bash` then call artisan commands `optimize:clear` and `responsecache:clear`

```bash
➜  Create-LMS-App git:(main) make bash
docker-compose exec -u 1000 api bash
devilbox@0d6a75afa279:/var/www/html$ php artisan optimize:clear

Cached events cleared!
Compiled views cleared!
Application cache cleared!
Route cache cleared!
Configuration cache cleared!
Compiled services and packages files removed!
Caches cleared successfully!
devilbox@0d6a75afa279:/var/www/html$ php artisan responsecache:clear
Response cache cleared!
```

## Scaling php-fpm, Horizon & Scheduler.

By default all 3 threads phpfpm, Laravels Horizon and Scheduler are severed by one [image container](https://github.com/EscolaLMS/API/blob/develop/Dockerfile)

- `php-fpm` serve main Laravel REST API (with [nginx](https://github.com/EscolaLMS/API/tree/develop/docker/conf/nginx) and [caddy](https://github.com/EscolaLMS/Create-LMS-App/blob/main/Caddyfile))
- [`horizon`](https://laravel.com/docs/9.x/horizon) is responsible for all [queue services](https://laravel.com/docs/9.x/queues)
- [`Task Scheduling`](https://laravel.com/docs/9.x/scheduling) is responsible for all cron jobs

All of above including nginx are served by `supervisor`, definition files are [listed here](https://github.com/EscolaLMS/API/tree/develop/docker/conf/supervisor)

You can scale this by setting each process into separate image container, just by amending `docker-compose.yml` in the following way

```yml
# NOTE binding emptyfile.conf disable supervisor service

api:
  image: escolalms/api:latest
  networks:
    - escola_lms
  volumes:
    - ./emptyfile.conf:/etc/supervisor/custom.d/horizon.conf
    - ./emptyfile.conf:/etc/supervisor/custom.d/scheduler.conf
    #      - ./emptyfile.conf:/etc/supervisor/custom.d/nginx.conf
    - ./storage:/var/www/html/storage
    - ./.env:/var/www/html/.env

horizon:
  image: escolalms/api:latest
  networks:
    - escola_lms
  volumes:
    #     - ./emptyfile.conf:/etc/supervisor/custom.d/horizon.conf
    - ./emptyfile.conf:/etc/supervisor/custom.d/scheduler.conf
    - ./emptyfile.conf:/etc/supervisor/custom.d/nginx.conf
    - ./storage:/var/www/html/storage
    - ./.env:/var/www/html/.env

scheduler:
  image: escolalms/api:latest
  networks:
    - escola_lms
  volumes:
    - ./emptyfile.conf:/etc/supervisor/custom.d/horizon.conf
    #      - ./emptyfile.conf:/etc/supervisor/custom.d/scheduler.conf
    - ./emptyfile.conf:/etc/supervisor/custom.d/nginx.conf
    - ./storage:/var/www/html/storage
    - ./.env:/var/www/html/.env
```

## Troubleshooting

- please [create issue](https://github.com/EscolaLMS/Create-LMS-App/issues) in this repository
- Windows users - this package is not tested on your system yet.
