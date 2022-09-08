const { GraphQLString } = require('graphql');
const { User } = require('../models');


const register = {
    type: GraphQLString,
    description: "Register a new user",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        // Check if user email is registered into database
        const checkUser = await User.findOne({ email: args.email });
        if (checkUser) {
            throw new Error("User with this email address already exists")
        }
        // Set username, email, and password as arguments
        const { username, email, password } = args;
        // Set new user values to user
        const user = new User({ username, email, password });
        // Save the user into the database
        await user.save();

        return user.username
    }
}

module.exports = { register };