import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URI;

if (!url) {
    throw new Error("A variável de ambiente MONGODB_URI não foi definida.");
}

const conexao = await mongoose.connect(url);

export default conexao;
