import mongoose from "mongoose";
import confiq from "./confiq";
import app from "./app";



async function server() {
    try {
        await mongoose.connect(confiq.DATABASE!)
        app.listen(confiq.PORT, () => {
            console.log(`Nexlib app listening on port ${confiq.PORT}`)
        })

    } catch (error) {
        console.log(error);
    }
}
server()

