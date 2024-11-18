import { z } from 'zod'; // Import Zod, a schema validation library

// Validator for user sign-up, ensuring all fields are provided and properly formatted
export const signUpValidator = z.object({
    firstName: z.string(), // Validate firstName as a string
    lastName: z.string(),  // Validate lastName as a string
    userName: z.string(),  // Validate userName as a string
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" }) // Minimum length of 8 characters
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }) // Ensure at least one uppercase letter
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }) // Ensure at least one lowercase letter
        .regex(/\d/, { message: "Password must contain at least one number" }) // Ensure at least one number
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character" }), // Ensure at least one special character
    email: z.string().email(), // Validate email as a valid email string
    phoneNumber: z.string(), // Validate phoneNumber as a string
    nationality: z.string(), // Validate nationality as a string
    gender: z.string() // Validate gender as a string
}).required({ message: 'All fields are required!!!' }); // All fields are required for sign-up

// Validator for user sign-in, ensuring loginID and password are provided
export const signInValidator = z.object({
    loginID: z.string(), // Validate loginID (can be email, userName, or phone)
    password: z.string() // Validate password as a string (validation checks handled separately during sign-up)
}).required({ message: 'All fields are required!!!' }); // Both loginID and password are required for sign-in


// Post Validation

const postSchema = z.object({
  content: z.string().min(1, "Content cannot be empty"),
  image: z.string().optional(),
  user: z.string().min(1,"User ID is required"),
  likes: z.array(z.string()).optional(),
  comments: z.array(
    z.object({
      text: z.string().min(1, "Comment cannot be empty"),
      user: z.string().min(1, "Comment user ID is required"),
    })
  ).optional(),
});

const validatePost = (postData) => {
  try {
    return postSchema.parse(postData);
  } catch (err) {
    return err.errors;
  }
};

export { validatePost };


// const validateUser = (userData) => {
//   try {
//     return userSchema.parse(userData); // Parse will throw an error if the validation fails
//   } catch (err) {
//     return err.errors; // Return the errors if validation fails
//   }
// };


