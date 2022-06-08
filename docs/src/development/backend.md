In order to create your own Wellms backend REST API you have few options

## API Project with `makefile` CLI and `docker`

### Option 1. `composer create`

1. `composer create-project escolallms/api wellms`
2. That creates a project in `wellms` folder

### Option 2. Cloning repo

1. `git clone git@github.com:EscolaLMS/API.git`
2. That creates a project in `wellms` folder

### Using `makefile` commands

Inside the folder run `make init`

There are some assumptions to make command above works file

- you have `docker` and `docker-compose`
- ports defined in [docker-compose.yml](https://github.com/EscolaLMS/API/blob/develop/docker-compose.yml) are free

This should install you default application with the following credentials

| Role    | Email ID              | Password |
| ------- | --------------------- | -------- |
| Admin   | admin@escolalms.com   | secret   |
| Tutor   | tutor@escolalms.com   | secret   |
| Student | student@escolalms.com | secret   |

Application will be accessible on [http://localhost:1001](http://localhost:1001)
You should see API documentation (Swagger UI) at [http://localhost:1001/api/documentation#/](http://localhost:1001/api/documentation#/)

Now you can add your code as you could in standard [Laravel Application](https://laravel.com/docs)

## Without `docker`

1. Clone repo https://github.com/EscolaLMS/API on your machine
2. Create your `.env` file base on the example [.env.example](https://github.com/EscolaLMS/API/blob/develop/.env.example)
3. Follow the installation like standard [Laravel Application installation](https://laravel.com/docs/9.x/installation)
4. Configure [queues](https://laravel.com/docs/9.x/queues) and [scheduling](https://laravel.com/docs/9.x/scheduling)
5. Add `CORS` definition to your server (those are static files that are not handled by Laravel) for h5p files, see [https://github.com/EscolaLMS/H5P#cors](https://github.com/EscolaLMS/H5P#cors)

### Seeding content

- the only `essential` seeder is [database/seeds/PermissionsSeeder.php](https://github.com/EscolaLMS/API/blob/develop/database/seeds/PermissionsSeeder.php) which seeds all the [permissions](https://spatie.be/docs/laravel-permission/v5/introduction) required by packages
- if you use the above you need to create at least one admin. [See commands sections in Auth package](https://github.com/EscolaLMS/Auth)
- you can seed all the mock data with default [DatabaseSeeder](https://github.com/EscolaLMS/API/blob/develop/database/seeds/DatabaseSeeder.php)
