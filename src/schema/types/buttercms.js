const { GraphQLObjectType, GraphQLString } = require("gatsby/graphql");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const butterProjectsType = new GraphQLObjectType({
    name: "ButterProjects",
    fields: {
      project_name: {
        type: GraphQLString,
      },
      project_description: {
        type: GraphQLString,
      },
      detailed_desription: {
        type: GraphQLString,
      },
      thumbnail: {
        type: GraphQLString,
      },
    },
  });

  createTypes(`
    type Query {
      allButterProjects: [ButterProjects!]!
    }
  `);
};
