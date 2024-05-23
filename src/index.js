import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './Styles/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

Sentry.init({
  dsn: "https://95d5de5b408c462c8b562ae139be8b6e@o1304000.ingest.sentry.io/6576811",
  integrations: [new BrowserTracing()],

  tracesSampleRate: 1.0,
});

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);