import app from "./app";
import mongoose from "mongoose";
import { db_url, port } from "./app/config";

async function main() {
  try {
    await mongoose.connect(db_url as string);

    app.listen(port, () => {
      console.log(`DB connected ✅✅✅✅✅✅✅✅✅✅✅✅✅ ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
