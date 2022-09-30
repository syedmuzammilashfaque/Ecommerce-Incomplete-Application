import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// link the router file post.js users.js //
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";



// Initialize app //
const app = express();

//dotenv import file //
dotenv.config({ path: "./config.env" });

//For Sending Request //
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//link router post file and user
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT;

// connection mongoose file //
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => {
    console.log(err + "no connection");
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
