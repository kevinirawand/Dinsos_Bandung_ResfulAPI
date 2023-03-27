import app from "./app.js";
import { connect } from "./configs/database.js";
import "dotenv/config";

app.listen(process.env.PORT, async () => {
   console.info(`App Running On Port ${process.env.PORT}`);

   await connect();
});