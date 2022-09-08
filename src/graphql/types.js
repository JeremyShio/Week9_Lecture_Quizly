// Import built-in graphql types
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');


// Import our user model
// const { User } = require('../models');


const UserType = new GraphQLObjectType(
    {
        name: 'User',
        description: 'User type',
        // Same ( ) as returning the object DUE TO ARROW FUNCTION
        fields: () => ({
            // Allows us to return entire object and it's elements
            id: { type: GraphQLID },
            username: { type: GraphQLString },
            email: { type: GraphQLString }
        })
    }
);


module.exports = {
    UserType
};