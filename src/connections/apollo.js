import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://127.0.0.1:4000/graphql", // Reemplaza con la URL de tu API Gateway
	cache: new InMemoryCache(),
});

export default client;
