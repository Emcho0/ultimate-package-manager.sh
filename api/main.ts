/// <reference lib="deno.ns" />
import { Hono } from "@hono/hono";
import data from "./data.json" with { type: "json" };

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to the app list API!");
});

app.get("/api/apps", (c) => {
  return c.json(data);
});

app.get("/api/apps/:appName", (c) => {
  const appName = c.req.param("appName");

  if (!appName) {
    return c.text("No app name provided.");
  }

  const appDetails = data.find((item) =>
    item.name.toLowerCase() === appName.toLowerCase()
  );

  console.log(appDetails);

  if (appDetails) {
    return c.json(appDetails);
  } else {
    return c.notFound();
  }
});

Deno.serve(app.fetch);
