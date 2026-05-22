import express from "express";
import cors from "cors";
import path from "path";
import { createServer as createViteServer } from "vite";
import appInstance from "./api/index.ts";

const processCwd = process.cwd();

async function startServer() {

  const app = express();
  const PORT = process.env.PORT || 3000;

  // CORS FIX
  app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));

  app.options("*", cors());

  // JSON
  app.use(express.json());

  // API ROUTES
  app.use(appInstance);

  // VITE DEV SERVER
  if (process.env.NODE_ENV !== "production") {

    const vite = await createViteServer({
      server: {
        middlewareMode: true
      },
      appType: "spa",
    });

    app.use(vite.middlewares);

  } else {

    const distPath = path.join(processCwd, "dist");

    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });

  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

}

startServer();
