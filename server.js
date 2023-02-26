const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
  origin: "https://localhost:8081",
};


/* middleware */
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Routers */
/* Importing the router from the userRouter.js file and using it in the app. */
const router = require('./routes/userRouter.js')
app.use('/api/users', router)


/* Test API */
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

// PORT
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
