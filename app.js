import express from "express";
import employeesRouter from "./routes/employees.js"
const app = express();
export default app;


app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello employees!");
});
app.use ("/employees", employeesRouter)

app.use((err,req,res,next) =>{
  console.error(err);
  res.sendStatus(500)
});
