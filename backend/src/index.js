import express from "express";
import router from "./routes/productRoute";
import cors from "cors";
import descRoute from "./routes/descRoute";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors("*"));

app.use("/api", router);
app.use("/api", descRoute);

app.listen(PORT, console.log(`listening on port ${PORT}`));
