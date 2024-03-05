import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import reportWebVitals from "./reportWebVitals";

import {
  // BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRouterFormElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRouterFormElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
