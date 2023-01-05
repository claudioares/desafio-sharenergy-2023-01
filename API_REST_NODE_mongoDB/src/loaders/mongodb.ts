import mongoose from "mongoose";

async function startDB() {
    await mongoose.connect('mongodb+srv://claudio-jas:a1b2c3e4@cluster0.xvvvsnm.mongodb.net/test')
}

export default startDB;