import express, { Request, Response } from "express";
import catalogRouter from "./api/catalog.routes";
import { httpLogger, HandleErrorWithLogger } from "./utils"

const app = express();
app.use(express.json());
app.use(httpLogger);

app.use("/", catalogRouter);

app.use(HandleErrorWithLogger);

app.get("/healthz", (_req: Request, res: Response) => res.status(200));

app.get("/", (req, res, next) => {
  return res.json({ msg: "message" });
});

export default app;
