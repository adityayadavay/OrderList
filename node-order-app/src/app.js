import express from "express";
import cors from "cors";
import OrderRoute from "./Order/orderRoutes";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api", OrderRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;