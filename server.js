const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require("express");
const cors = require("cors");

const app = express();
// PORT
const PORT = process.env.PORT || 8080;

var corOptions = {
  origin: "https://localhost:8081",
};

const options = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'User Management API',
          version: '1.0.0'
      },
      servers: [
          {
              url: `http://localhost:${PORT}/`
          }
      ]
  },
  apis: ['./routes/userRouter.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


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



// Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
