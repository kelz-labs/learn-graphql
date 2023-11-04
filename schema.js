export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    # Author bisa punya banyak review tapi bisa juga tidak punya review sama sekali
    reviews: [Review!]
}

# Special Query
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}
`;

/**
 * - Tanda "!" menandakan kalau sebuah type itu required, tidak boleh bernilai null.
 */

// int, float, string, boolean ID
