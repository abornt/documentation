# React Development

Below are examples how one can develop frontend LMS application using React

## Extending demo

This is a preferred way of developing your app, if you're new to Wellms.

1. Clone [repository](https://github.com/EscolaLMS/Front) `git clone git@github.com:EscolaLMS/Front.git`
2. Copy `.env.example` to `.env` and set API_URL that point to REST API
3. Install dependencies `npm i` or `yarn` or equivalent
4. Start local instance `npm run dev`

## Using only SDK and/or Components

1. Create you react app
2. Install [@escolalms/ts-models](https://www.npmjs.com/package/@escolalms/ts-models) [@escolalms/components](https://www.npmjs.com/package/@escolalms/components) [@escolalms/sdk](https://www.npmjs.com/package/@escolalms/sdk)

```bash
npm i @escolalms/ts-models @escolalms/components @escolalms/sdk
```

3. Wrap you Application in SDK and [Theme Context](https://styled-components.com/docs/advanced#theming)

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { EscolaLMSContextProvider } from "@escolalms/sdk/lib/react/context";
import { GlobalThemeProvider } from "@escolalms/components/lib/theme/provider";
import App from "./App";
import WebFont from "webfontloader";

declare global {
  interface Window {
    REACT_APP_API_URL: string;
  }
}

const API_URL =
  window.REACT_APP_API_URL ||
  (process && process.env && process.env.REACT_APP_PUBLIC_API_URL);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    {API_URL ? (
      <EscolaLMSContextProvider apiUrl={API_URL}>
        <GlobalThemeProvider>
          <App />
        </GlobalThemeProvider>
      </EscolaLMSContextProvider>
    ) : (
      <pre>
        error `process.env.REACT_APP_PUBLIC_API_URL || window.REACT_APP_API_URL`
        not set
      </pre>
    )}
  </React.StrictMode>
);
```

Then consume SDK in your application, see [TypeDoc](https://escolalms.github.io/sdk/index.html)

example of how to use SDK

```tsx
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useContext } from "react";
import { Button, Spin } from "../../../";

const Authbtn = () => {
  const { login, user } = useContext(EscolaLMSContext);
  return (
    <Button
      mode="secondary"
      onClick={() => {
        login({ email: "student@escola-lms.com", password: "secret" });
      }}
    >
      {user.loading && <Spin />}
      authorize to see component
    </Button>
  );
};

export default Authbtn;
```

Provide a theme definitions or copy colors from [one of the themes](https://github.com/EscolaLMS/Components/tree/main/src/theme)

## Next.js

In order of SSR and using our sdk context you need to populate SDK context with default data like in the example below.

```tsx
import type { NextPage } from "next";
import { EscolaLMSContextProvider } from "@escolalms/sdk/lib/react/context/index";
import { EscolaLMSContextReadConfig } from "@escolalms/sdk/lib/react/context/types";
import { getCourse } from "@escolalms/sdk/lib/services/courses";
import { interceptors } from "@escolalms/sdk/lib/services/request";
import * as API from "@escolalms/sdk/lib/types/api";

import { GetServerSideProps, GetServerSidePropsResult } from "next";

import { API_URL } from "src/const";
import CoursePage from "src/components/Pages/Course";

type ResultProps = {
  defaults: {} | API.DefaultResponse<API.Course>;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}): Promise<GetServerSidePropsResult<ResultProps>> => {
  interceptors(API_URL);

  if (params && params.id) {
    try {
      const res: API.DefaultResponse<API.Course> = await getCourse(
        Number(params.id)
      );

      if (res.success) {
        return {
          props: {
            defaults: {
              course: {
                loading: false,
                value: res.data,
              },
            },
          },
        };
      }
      // Catch clause variable type annotation must be 'any' or 'unknown' if specified.
    } catch (error: any) {
      console.log(error);
      return {
        props: {
          defaults: {
            course: {
              loading: false,
              error: error.data.error,
            },
          },
        },
      };
    }
  }

  return {
    props: {
      defaults: {},
    },
  };
};

const Course: NextPage<{ defaults?: Partial<EscolaLMSContextReadConfig> }> = ({
  defaults,
}) => {
  return (
    <EscolaLMSContextProvider apiUrl={API_URL} defaults={defaults}>
      <CoursePage />
    </EscolaLMSContextProvider>
  );
};

export default Course;
```
