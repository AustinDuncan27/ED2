import express from "express";
import employees from "#db/employees";

const router = express.Router();

router.get("/", (req,res)=> {
  res.send(employees);
});

router.get("/random", (req, res)=> {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

router.get ("/:id", (req,res)=> {
  const { id } = req.params;

  const employee = employees.find((e)=> e.id ===Number(id));

  if (!employee) {
    return res.status(404).send("Employee not found")
  }
  res.send(employee)
});

router.post ("/", (req, res)=>{
  const { name } = req.body ?? {};

  if (!name) {
    return res.status(400).send("name is required")
  }

  const nextId= Math.max(...employees.map((e)=> e.id)) + 1;

  const newEmployee = { id: nextId, name};
  employees.push(newEmployee);

  res.status(201).send(newEmployee)
});

export default router;