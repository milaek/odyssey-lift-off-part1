const {gql} = require('apollo-server');

const typeDefs = gql`
    "Fields of the Query type are Entry Points into the rest of our Schema"
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    " A track is a group of Moules that teaches about a specific topic"
    type Track {
        "Track ID"
        id : ID!
        "The title of the track"
        title : String!
        "The author of the track"
        author : Author!
        "The url of the image to use for a thumbnail"
        thumbnail : String
        "Estimated length of time needed to complete the track"
        length : Int
        "The number of modules contained within the track"
        modulesCount : Int
    }

    "Author of a complete track or a module"
    type Author {
        "The ID num of the author"
        id: ID!
        "The name of the author"
        name: String!
        "The url of the image to use for the author's photo"
        photo: String
    }
`;

module.exports = typeDefs;
