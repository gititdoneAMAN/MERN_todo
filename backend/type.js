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

module.exports = {
  signupSchema,
  signinSchema,
};
