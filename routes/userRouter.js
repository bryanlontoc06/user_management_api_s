const userController = require('../controllers/userController.js');

const router = require('express').Router()

/**
 * @swagger
 * /api/users/add-user:
 *  post:
 *      summary: It takes the request body, creates a new user with the details, and sends a response.
 *      description: It takes the request body, creates a new user with the details, and sends a response.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          201:
 *              description: Create a new user
 */
router.post('/add-user', userController.addUser)


/**
 * @swagger
 * /api/users/admin-users:
 *  get:
 *      summary: This api retrieve all admin users.
 *      description: This api retrieve all admin users.
 *      responses:
 *          200:
 *              description: Get all admin users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/User'
 */
router.get('/admin-users', userController.getAdminUsers)

/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  first_name:
 *                      type: string
 *                  last_name:
 *                      type: string
 *                  address:
 *                      type: string
 *                  postcode:
 *                      type: integer
 *                  contact_phone:
 *                      type: string
 *                  email:
 *                      type: string
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *                  is_admin:
 *                      type: boolean
 *
 */


/**
 * @swagger
 * /api/users/all-users:
 *  get:
 *      summary: This api retrieve all users.
 *      description: This api retrieve all users.
 *      responses:
 *          200:
 *              description: Get all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/User'
 */
router.get('/all-users', userController.getAllUsers)


/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Retrieve a user from the database and send a response to the client.
 *      description: Retrieve a user from the database and send a response to the client.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric ID required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Get a User
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/User'
 */
router.get('/:id', userController.getUser)


/**
 * @swagger
 * /api/users/update-user/{id}:
 *  put:
 *      summary: Updates a user in the database and send response to the client.
 *      description: Updates a user in the database and send response to the client.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric ID required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          200:
 *              description: Updated successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/User'
 */
router.put('/update-user/:id', userController.updateUser)


/**
 * @swagger
 * /api/users/delete-user/{id}:
 *  delete:
 *      summary: It deletes a user from the database and returns the remaining users.
 *      description: It deletes a user from the database and returns the remaining users.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric ID required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Data is deleted
 *
 */
router.delete('/delete-user/:id', userController.deleteUser)

/**
 * @swagger
 * /api/users/delete-users:
 *  delete:
 *     summary: It deletes the users with the ids that are passed in the request body, and then returns the remaining users.
 *     description: It deletes the users with the ids that are passed in the request body, and then returns the remaining users.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *              type: integer
 *             description: An array of user IDs to be deleted
 *     responses:
 *         '200':
 *              description: Users deleted successfully
 *         '400':
 *              description: Invalid input data provided
 *         '404':
 *              description: Users not found
 *
 */
router.delete('/delete-users', userController.deleteUsers)



module.exports = router