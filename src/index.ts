import express, { Request,Response,Application } from 'express'
import './01-datatype'


const app:Application = express()

const PORT = process.env.PORT || 8000

app.get("/", (req:Request, res:Response):void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, ():void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});