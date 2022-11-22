const { gql } = require("apollo-server");

module.exports = gql`
    type User {
        id: ID
        customerCode: String
        fullname: String
        username: String
        password: String
        role: UserRole
        phone: String
        village: String
        district: String
        province: String
        gender: Gender
        createdAt: DateTime
        updatedAt: DateTime
        createdBy: User
        updatedBy: User
        note: String
    }
    
    input UserInput {
        fullname: String!
        username: String!
        password: String!
        phone: String
        village: String
        district: String
        province: String
        gender: Gender
        note: String
    }

    enum Gender {
        MALE
        FEMALE
        NOT_SPECIFIED
    }

    enum UserRole {
        ADMIN
        STAFF
        CUSTOMER
    }

    input LoginInput{
        username: String!
        password: String!
    }

    type ResponeUserAuthData{
        accessToken: String!
        data: User!
    }

    extend type Mutation {
        login(data: LoginInput!): ResponeUserAuthData!
        register(data: UserInput!): ResponeUserAuthData!
    }
`;