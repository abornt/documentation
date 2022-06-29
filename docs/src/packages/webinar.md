# Webinar

Package enabling live video stream

[![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Webinar/)
[![codecov](https://codecov.io/gh/EscolaLMS/Webinar/branch/main/graph/badge.svg?token=NRAN4R8AGZ)](https://codecov.io/gh/EscolaLMS/Webinar)
[![phpunit](https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml)
[![downloads](https://img.shields.io/packagist/dt/escolalms/webinar)](https://packagist.org/packages/escolalms/webinar)
[![downloads](https://img.shields.io/packagist/v/escolalms/webinar)](https://packagist.org/packages/escolalms/webinar)
[![downloads](https://img.shields.io/packagist/l/escolalms/webinar)](https://packagist.org/packages/escolalms/webinar)
[![Maintainability](https://api.codeclimate.com/v1/badges/0c9e2593fb30e2048f95/maintainability)](https://codeclimate.com/github/EscolaLMS/Webinar/maintainability)

## What does it do

This package is used for creating Webinar for EscolaLms.

## Installing

- `composer require escolalms/webinar`
- `php artisan migrate`
- `php artisan db:seed --class="EscolaLms\Webinar\Database\Seeders\WebinarsPermissionSeeder"`
- Integration with [Youtube](https://github.com/EscolaLMS/Youtube)

## Schedule

- In App\Console\Kernel to method schedule add
  - `$schedule->job(new ReminderAboutWebinarJob(WebinarTermReminderStatusEnum::REMINDED_HOUR_BEFORE))->everyFiveMinutes()` - reminder about to webinar before one hour, executed every 5 minutes
  - `$schedule->job(new ReminderAboutWebinarJob(WebinarTermReminderStatusEnum::REMINDED_DAY_BEFORE))->everySixHours();` - reminder about to webinar before one day, executed every 6 hours

## Endpoints

All the endpoints are defined in [![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Webinar/)

## Tests

Run `./vendor/bin/phpunit --filter=Webinar` to run tests. See [tests](https://github.com/EscolaLMS/Webinar/tree/main/tests) folder as it's quite good staring point as documentation appendix.

Test details [![codecov](https://codecov.io/gh/EscolaLMS/Webinar/branch/main/graph/badge.svg?token=NRAN4R8AGZ)](https://codecov.io/gh/EscolaLMS/Webinar) [![phpunit](https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml)

## Events

- `EscolaLms\Webinar\Events\ReminderAboutTerm` => Event is dispatched after execute cron job `EscolaLms\Webinar\Jobs\ReminderAboutWebinarJob`, Event is dispatched when deadline for purchased webinars before 1 hours and 1 day
- `EscolaLms\Webinar\Events\WebinarTrainerAssigned` => Event is dispatched after assigned trainer to webinar
- `EscolaLms\Webinar\Events\WebinarTrainerUnassigned` => Event is dispatched after unassigned trainer from webinar

## Listeners

- `EscolaLms\Webinar\Listeners\ReminderAboutTermListener` => Listener execute a method that singed the status in the webinar reminder

## How to use this on frontend.

### Admin panel

**Left menu**

![Menu](./docs/webinar/menu.png "Menu")

**List of webinars**

![List of webinars](./docs/webinar/list.png "List of webinars")

**Creating/editing webinar**

![Creating/editing webinars](./docs/webinar/new_webinar.png "Creating or editing webinars")

### Front Application

For the frontend to be able to run the webinar, it is necessary to use this package in the case of integration with react [React SDK](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-react-sdk) or iframe api in case of other integrations [IFrame API](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe)

Below is an example of a wrapper implementation for a jitsy box with data handling from the api

```
import { useState } from "react";
import * as API from "@escolalms/sdk/lib/types/api";
import { JitsiMeeting } from "@jitsi/react-sdk";
import styles from "./jitsy.module.scss";

const JitsyBox: React.FC<{
  JitsyData: API.JitsyData | null;
  close: () => void;
  isStream?: boolean;
}> = ({ JitsyData, close, isStream }) => {
  const [jitsyIsReady, setJitsyIsReady] = useState(false);


  const handleReadyToClose = () => {
    close();
  };

  return (
    <div className={styles.jitsy_box}>
      {JitsyData && (
        <JitsiMeeting
          {...JitsyData.data}
          configOverwrite={{
            ...JitsyData.data.configOverwrite,
          }}
          interfaceConfigOverwrite={{
            ...JitsyData.data.interfaceConfigOverwrite,
          }}
          getIFrameRef={(iframeRef) => {
            //iframe style definition
          }}
          onApiReady={(externalApi) => {
            // we have to listen to the change of role to moderator in order to execute the command to record and stream on youtube
            externalApi.on("participantRoleChanged", (event) => {
              setJitsyIsReady(true);
              if (event.role === "moderator" && isStream) {
                externalApi.executeCommand("startRecording", {
                  mode: "stream",

                  rtmpStreamKey: JitsyData.yt_stream_url,

                  youtubeStreamKey: JitsyData.yt_stream_key,
                });
              }
            });
          }}
          onReadyToClose={handleReadyToClose}
        />
      )}
    </div>
  );
};

export default JitsyBox;

```

## Permissions

Permissions are defined in [seeder](https://github.com/EscolaLMS/Webinar/blob/main/database/seeders/WebinarsPermissionSeeder.php)

## Database relation

1. `Trainers` Webinar is related belongs to many with User
2. `Tags` Webinar model morph many to model tags
3. `Users` Webinar is related belongs to many with User which bought webinar

```
Webinar 1 -> n User
Webinar 1 -> n Tags
Webinar 1 -> n User
```
