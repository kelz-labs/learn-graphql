import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { authors, games, reviews } from "./db.js";
import { typeDefs } from "./schema.js";

// resolvers
const resolvers = {
  Query: {
    games() {
      return games;
    },
    authors() {
      return authors;
    },
    reviews() {
      return reviews;
    },
    review(_, args) {
      return reviews.find((review) => review.id === args.id);
    },
    game(_, args) {
      return games.find((game) => game.id === args.id);
    },
    author(_, args) {
      return authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return authors.find((author) => author.id === parent.author_id);
    },
  },
};

// import schema yang kita buat ke sini
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server running at port 4000!");
