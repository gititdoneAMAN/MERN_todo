const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
  firstname: zod.string(),
  lastname: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
});

const createTodoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  owner: zod.string(),
  isCompleted: zod.boolean(),
});

module.exports = {
  signupSchema,
  signinSchema,
  createTodoSchema,
};
