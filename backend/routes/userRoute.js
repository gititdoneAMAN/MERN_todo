const express = require("express");
const zod = require("zod");
const { signupSchema, signinSchema, createTodoSchema } = require("../type");
const bcrypt = require("bcrypt");
const { User, TodosTable } = require("../db");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");

const router = express.Router();

// ------------SIGNUP-route--------------//

router.post("/signup", async (req, res) => {
  const payload = req.body;
  const parsedPayload = signupSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid Input" });
  } else {
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const userData = await User.create({
      username: payload.username,
      password: hashedPassword,
      firstname: payload.firstname,
      lastname: payload.lastname,
    });

    const token = jwt.sign(payload.username, process.env.JWT_SECRET);
    res.json({
      msg: "User Added Successfully!",
      token: token,
    });
  }
});

// ------------SIGNIN-route--------------//

router.post("/signin", async (req, res) => {
  const payload = req.body;
  const parsedPayload = signinSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid credentials" });
  } else {
    const userData = await User.findOne({ username: payload.username });

    if (!userData) {
      return res.status(404).json({ msg: "User not found." });
    } else {
      const token = jwt.sign(payload.username, process.env.JWT_SECRET);
      res.status(200).json({
        msg: "Success",
        token: token,
      });
    }
  }
});

// -------------CREATE_TODOS----------------------//

router.post("/createTodo", authMiddleware, async (req, res) => {
  const payload = req.body;
  const parsedPayload = createTodoSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid Input" });
  } else {
    try {
      const data = await TodosTable.create({
        title: payload.title,
        description: payload.description,
        owner: req.userId,
      });
      const userData = await User.updateOne(
        { username: req.userId },
        {
          $push: {
            tasks: data._id,
          },
        }
      );
      res.status(200).json({ msg: "Todo created Successfully" });
    } catch (err) {
      res.json({ msg: "Error in the creation" });
    }
  }
});

// ---------------GET_TODOS-route ----------------- //

router.get("/getTodo", authMiddleware, async (req, res) => {
  const user = await User.findOne({ username: req.userId });
  console.log(user.tasks.length);
  const todos = [];

  for (let i = 0; i < user.tasks.length; i++) {
    const value = await TodosTable.findOne({ _id: user.tasks[i] });
    console.log(value);
    todos.push(value);
  }

  // There is a problem in map syntax as using an async task inside of it doesn't make the map to wait which leads to error or empty array of todos

  //   user.tasks.map(async (i) => {
  //     const value = await TodosTable.findOne({ _id: i });
  //     todos.push(value);
  //   });

  // Solution for this is to use promise.All

  //   const todos = [];
  // // Map over user tasks array and return an array of Promises
  // const promises = user.tasks.map(async (taskId) => {
  //     try {
  //         const value = await TodosTable.findOne({ _id: taskId });
  //         return value;
  //     } catch (error) {
  //         // Handle error, e.g., log it or throw an exception
  //         console.error(`Error fetching todo with ID ${taskId}:`, error);
  //         return null; // or throw error if you want to stop execution
  //     }
  // });

  // // Wait for all Promises to resolve using Promise.all
  // Promise.all(promises)
  //     .then((results) => {
  //         // Filter out any null values (if error occurred)
  //         todos.push(...results.filter(Boolean));
  //         console.log('todos:', todos); // or do something with the populated todos array
  //     })
  //     .catch((error) => {
  //         // Handle any errors that occurred during Promise.all
  //         console.error('Error fetching todos:', error);
  //     });

  res.json({ task: todos });
});

// ----------------Delete-Todos_Route-------------------------------//

router.delete("/deleteTodo", authMiddleware, async (req, res) => {
  try {
    const dataId = req.body.taskId;
    const dataArray = [];
    const userData = await User.findOne({ username: req.userId });

    userData.tasks.map((id) => {
      if (id != dataId) {
        dataArray.push(id);
      }
    });

    await User.updateOne(
      { username: req.userId },
      { $set: { tasks: dataArray } }
    );

    await TodosTable.deleteOne({ _id: dataId });

    res.json({ msg: "Task deleted successfully" });
  } catch (err) {
    res.json({ msg: "Some error in deletion" });
  }
});

// ----------------------Update-todo_route--------------------------//

router.post("/updateTodo", authMiddleware, async (req, res) => {
  try {
    const taskId = req.body.taskId;
    console.log(taskId);
    let value;

    req.body.updateValue ? (value = true) : (value = false);

    req.body.updateValue;
    const userData = await TodosTable.updateOne(
      { _id: taskId },
      { $set: { isCompleted: value } }
    );

    res.json({ msg: "Task updated successfully" });
  } catch (err) {
    res.json({ msg: "Error in updation" });
  }
});

module.exports = router;
