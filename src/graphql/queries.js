// Import types from GraphQL
const { GraphQLList, GraphQLID } = require('graphql');

// Import out own created type (from types.js)
const { UserType } = require('./types');

// Import model so we can get data from MongoDB
const { User } = require('../models');




const users = {
    type: new GraphQLList(UserType),
    description: "Query all users in the database",
    resolve(parent, args) {
        return User.find()
    }
};


const user = {
    type: UserType,
    description: "Query user by id",
    args: {
        id: { type: GraphQLID }
    },
    resolve(parents, args) {
        return User.findById(args.id)
    }
}


module.exports = {
    users,
    user
}
