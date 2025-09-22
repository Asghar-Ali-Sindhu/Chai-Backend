import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// import { DB_NAME } from "./constants.js";
// import dotenv from "dotenv";
// const app = express();
// dotenv.config("../src/.env");
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("Error", (error) => {
//       console.log("Our application is not able to talk", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// })();

// 23 minutes
