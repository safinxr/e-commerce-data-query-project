import app from "./app";
import mongoose from "mongoose";
import { db_url, port } from "./app/config";

const a = "a";

async function main() {
  await mongoose.connect(db_url as string);

  app.listen(port, () => {
    console.log(`DB connected ✅✅✅✅✅✅✅✅✅✅✅✅✅ ${port}`);
  });
}

main();
