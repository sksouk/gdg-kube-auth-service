const { gql } = require("apollo-server");
const authSchema = require("./authSchema");

const linkSchema = gql`
  scalar DateTime
  enum OrderByInput {
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [
  linkSchema,
  authSchema,
];
