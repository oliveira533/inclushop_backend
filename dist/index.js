"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userRoutes_1 = require("./routes/userRoutes");
const shoppingRoutes_1 = require("./routes/shoppingRoutes");
const rateRoute_1 = require("./routes/rateRoute");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", userRoutes_1.userRouter);
app.use("/api", shoppingRoutes_1.shoppingRoute);
app.use("/api", rateRoute_1.rateRoute);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
