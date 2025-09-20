import { createClient } from "redis";


async function worker(){
    const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
}

worker()

export default worker