import path from "node:path";
import fs from "node:fs";
import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Serve the built portfolio (artifacts/portfolio/dist/public) with SPA fallback.
// The server bundle lives in artifacts/api-server/dist, so the default resolves
// relative to it; STATIC_DIR overrides for non-standard layouts.
const staticDir =
  process.env["STATIC_DIR"] ??
  path.resolve(import.meta.dirname, "../../portfolio/dist/public");

if (fs.existsSync(staticDir)) {
  app.use(express.static(staticDir));
  app.use((req, res, next) => {
    if (
      (req.method !== "GET" && req.method !== "HEAD") ||
      req.path.startsWith("/api")
    ) {
      next();
      return;
    }
    res.sendFile(path.join(staticDir, "index.html"));
  });
} else {
  logger.warn({ staticDir }, "Static directory not found, serving API only");
}

export default app;
