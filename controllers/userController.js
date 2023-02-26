const db = require('../models')

/* Creating a new model called User. */
const User = db.users

/* It takes the request body, creates a new user with the details, and sends a response. */
const addUser = async(req, res) => {
    try {
        let details = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            postcode: req.body.postcode,
            contact_phone: req.body.contact_phone,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            is_admin: req.body.is_admin ? req.body.is_admin : false
        }

        const user = await User.create(details)
        res.status(200).send({result: user, status: 'Success', message: 'Added user Successfully.'})
    } catch (err) {
        console.log(`Error in Adding User: ${err}`)
        res.status(400).send({status: 'Failed', message: `Error in Adding User: ${err}`})
    }
}


/* An async function that uses a try/catch block to attempt to retrieve all users from the database and send a response to the client. */
const getAllUsers = async(req, res) => {
    try {
        let users = await User.findAll({})
        res.status(200).send({results: users, status: 'Success', message: 'Retrieved all users successfully.'})
    } catch (err) {
        console.log(`Error in Retrieving All Users: ${err}`)
        res.status(400).send({status: 'Failed', message: `Error in Retrieving All Users: ${err}`})
    }
}


/* An async function that takes in a request and response object, and it tries to find a user by id, and if it finds one,
it sends a response with the user, and if it doesn't,
it sends a response with an error message. */
const getUser = async(req, res) => {
    try {
        let id = req.params.id;
        let user = await User.findOne({ where: { id: id } })
        res.status(200).send({result: user, status: 'Success', message: 'Retrieved user successfully.'})
    } catch (err) {
        console.log(`Error in Retrieving a User: ${err}`)
        res.status(400).send({status: 'Failed', message: `Error in Retrieving a User: ${err}`})
    }
}


/* It updates a user in the database */
const updateUser = async(req, res) => {
    try {
        let id = req.params.id;
        await User.update(req.body, { where: { id: id } })
        const updatedUser = await User.findOne({ where: { id: id } })
        res.status(200).send({result: updatedUser, status: 'Success', message: 'Updated user successfully'})
    } catch (err) {
        console.log(`Error in Updating a User: ${err}`)
        res.status(400).send({status: 'Failed', message: `Error in Updating a User: ${err}`})
    }
}


/* It deletes a user from the database and returns the remaining users. */
const deleteUser = async(req, res) => {
    try {
        let id = req.params.id;
        await User.destroy({ where: { id: id } })

        // The result will be the remaining users.
        let users = await User.findAll({})
        res.status(200).send({results: users, status: 'Success', message: 'User deleted successfully.'})
    } catch (err) {
        console.log(`Error in Deleting a User: ${err}`)
        res.status(400).send({status: 'Failed', message: `Error in Deleting a User: ${err}`})
    }
}


/* It deletes the users with the ids that are passed in the request body, and then returns the remaining users. */
const deleteUsers = async(req, res) => {
    try {
        let id = req.body;

        await User.destroy({ where: { id: id} })

        // The result will be the remaining users.
        let users = await User.findAll({})
        res.status(200).send({results: users, status: 'Success', message: 'Users deleted successfully.'})
    } catch (err) {
        console.log(`Error in Deleting Multiple Users: ${err}`)
        res.status(400).send({status: 'Failed', message: `Error in Deleting Multiple Users: ${err}`})
    }
}


/* It gets all the users from the database where the "is_admin" column is true. */
const getAdminUsers = async(req, res) => {
    try {
        const adminUsers = await User.findAll({ where: { is_admin: true } })
        res.status(200).send({results: adminUsers, status: 'Success', message: 'Retrieved Admin Users successfully'})
    } catch (err) {
        console.log(`Error in Retrieving Admin Users: ${err}`)
        res.status(400).send({status: 'Failed', message: `Error in Retrieving Admin Users: ${err}`})
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    deleteUsers,
    getAdminUsers
}