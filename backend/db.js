const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
    minLength: 3,
    maxLength: 25,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minLength: 8,
  },
  firstname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TodosTable",
    },
  ],
});

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  description: {
    type: String,
  },
  owner: {
    type: String,
    ref: "User",
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
const TodosTable = mongoose.model("TodosTable", todoSchema);

module.exports = {
  User,
  TodosTable,
};
