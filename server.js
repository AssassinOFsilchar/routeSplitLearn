import { app } from "./app.js";
import { connectDB } from "./data/database.js";

const port = process.env.PORT; 
connectDB();

app.listen(port, () => {
  console.log(`Server is Working at ${port}`);
});
