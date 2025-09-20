import { createClient } from "redis";

async function producer() {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
}

producer();

export default producer