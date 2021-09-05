import { app } from "./app";
import request from "supertest";

describe("app", () => {
  it("request to '/' returns a html", async () => {
    const result = await request(app).get("/").send();

    expect(result.status).toBe(200);

    expect(result.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(result.text).toMatchInlineSnapshot(`
"<!DOCTYPE html>
<html lang=\\"en\\">
  <head>
    <meta charset=\\"UTF-8\\" />
    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\" />
    <meta http-equiv=\\"X-UA-Compatible\\" content=\\"ie=edge\\" />
    <title>Root Config</title>

    <!--
    This CSP allows any SSL-enabled host and for arbitrary eval(), but you should limit these directives further to increase your app's security.
    Learn more about CSP policies at https://content-security-policy.com/#directive
  -->
    <meta
      http-equiv=\\"Content-Security-Policy\\"
      content=\\"default-src 'self' https: localhost:*; script-src 'unsafe-inline' 'unsafe-eval' https: localhost:*; connect-src https: localhost:* ws://localhost:*; style-src 'unsafe-inline' https:; object-src 'none';\\"
    />
    <meta name=\\"importmap-type\\" content=\\"systemjs-importmap\\" />
    <!-- If you wish to turn off import-map-overrides for specific environments (prod), uncomment the line below -->
    <!-- More info at https://github.com/joeldenning/import-map-overrides/blob/master/docs/configuration.md#domain-list -->
    <!-- <meta name=\\"import-map-overrides-domains\\" content=\\"denylist:prod.example.com\\" /> -->

    <!-- Shared dependencies go into this import map. Your shared dependencies must be of one of the following formats:

    1. System.register (preferred when possible) - https://github.com/systemjs/systemjs/blob/master/docs/system-register.md
    2. UMD - https://github.com/umdjs/umd
    3. Global variable

    More information about shared dependencies can be found at https://single-spa.js.org/docs/recommended-setup#sharing-with-import-maps.
  -->
    <script type=\\"systemjs-importmap\\">
      {
        \\"imports\\": {
          \\"single-spa\\": \\"https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js\\",
          \\"react\\": \\"https://cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js\\",
          \\"react-dom\\": \\"https://cdn.jsdelivr.net/npm/react-dom@17.0.1/umd/react-dom.production.min.js\\",
          \\"@konoha/navbar\\": \\"//localhost:8080/konoha-navbar.js\\",
          \\"@konoha/ninjas\\": \\"//localhost:8081/konoha-ninjas.js\\",
          \\"@konoha/ninjas\\": \\"//localhost:8081/konoha-ninjas.js\\",
          \\"@konoha/root-config\\": \\"konoha-root-config.js\\",
          \\"@single-spa/welcome\\": \\"https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js\\"
        }
      }
    </script>
    <link
      rel=\\"preload\\"
      href=\\"https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js\\"
      as=\\"script\\"
    />

    <!-- Add your organization's prod import map URL to this script's src  -->
    <!-- <script type=\\"systemjs-importmap\\" src=\\"/importmap.json\\"></script> -->

    
    <script src=\\"https://cdn.jsdelivr.net/npm/import-map-overrides@2.2.0/dist/import-map-overrides.js\\"></script>
    
    <script src=\\"https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js\\"></script>
    <script src=\\"https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js\\"></script>
    
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <script>
      System.import(\\"@konoha/root-config\\");
    </script>
    <import-map-overrides-full
      show-when-local-storage=\\"devtools\\"
      dev-libs
    ></import-map-overrides-full>
  </body>
</html>
"
`);
  });
});
