/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.APP_PORT as string, 10);

const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});
