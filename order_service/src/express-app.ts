import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import orderRoutes from "./routes/order.routes"
import cartRoutes from "./routes/cart.routes"
import { httpLogger, HandleErrorWithLogger } from "./utils";

const app = express();
app.use(cors());
app.use(express.json());
app.use(httpLogger);

app.use(orderRoutes);
app.use(cartRoutes);

app.use("/healthz", (req: Request, res: Response, _next: NextFunction) => {
    return res.status(200).json({ message: "I am healthy!" })
});

app.use(HandleErrorWithLogger);



export default app;
