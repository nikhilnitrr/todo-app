const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nikhilchandrakar3:zp6Gl7Fa6umR8zo9@cluster0.igaufep.mongodb.net/todo-app")

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    isCompleted : Boolean
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo