const express = require("express");
const cors = require("cors")
const { createSchema, completeSchema } = require("./types");
const Todo = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post(
  "/todo",
  (req, res, next) => {
    const response = createSchema.safeParse(req.body);
    if (response.success) {
      next();
    } else {
      return res.status(403).json({
        msg: "Input validation failed",
      });
    }
  },
  async (req, res) => {
    try {
      await Todo.create({
        title: req.body.title,
        description: req.body.description,
        isCompleted: false,
      });
      return res.status(200).json({
        msg: "Todo created successfully",
      });
    } catch(err){
      return res.status(500).json({
        msg: "Internal server error",
      });
    }
  }
);

app.get("/todos", async (req, res) => {
    try{
        const todos = await Todo.find({})
        return res.status(200).json({
            todos
        })
    }
    catch(err){
        return res.status(500).json({
            msg : "Internal server error"
        })
    }
});

app.post(
  "/completed",
  (req, res, next) => {
    const response = completeSchema.safeParse(req.body);
    if (response.success) {
      next();
    } else {
      return res.status(403).json({
        msg: "Input validation failed",
      });
    }
  },
  async (req, res) => {
    try {
      await Todo.updateOne(
        { _id: req.body.id },
        {
          isCompleted: true,
        }
      );
      return res.status(200).json({
        msg: "Todo completed successfully",
      });
    } catch(err){
      return res.status(500).json({
        msg: "Internal server error",
      });
    }
  }
);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
