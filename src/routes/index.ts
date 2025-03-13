import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { HomePage } from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";
import { FormPage } from "../pages/FormPage";

export const routes = new Elysia()
  .get("/", () => {
    return HomePage();
  })

  .get("/detail/:id", ({ params }) => {
    return DetailPage({ id: params.id });
  })

  .get("/form", () => {
    return FormPage();
  })

  // API routes
  .post(
    "/api/submit-form",
    ({ body, set }) => {
      // Process form data here
      console.log("Form submitted:", body);

      // Redirect after form submission
      set.headers["HX-Redirect"] = "/";
      return null;
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        message: t.Optional(t.String()),
      }),
    },
  );
