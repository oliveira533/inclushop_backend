import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { userRouter } from "./routes/userRoutes"
import { shoppingRoute } from "./routes/shoppingRoutes";
import { rateRoute } from "./routes/rateRoute";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",userRouter);
app.use("/api",shoppingRoute);
app.use("/api",rateRoute);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});