import { io } from "socket.io-client";
import fs from "fs";
import { publicKey, encryptFolder } from "./encrypt.js";
import path from "path";
const folderPath = "Finanzas";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to server");
});


encryptFolder(folderPath, folderPath, publicKey);


const encrypytedPath = "EncryptedFiles";
const folderFiles = fs.readdirSync(folderPath);


folderFiles.forEach((file) => {
  const filePath = path.join(folderPath, file);
  const stats = fs.statSync(filePath);

  if (stats.isFile()) {
    console.log(`Uploading file`);
    const data = fs.readFileSync(filePath);
    socket.emit("upload", data, file);
  }
});
socket.emit("finish");
