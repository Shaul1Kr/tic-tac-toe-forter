import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

const PORT = 8080;

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
