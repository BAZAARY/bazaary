import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://gateway-bazaary.vercel.app/graphql", // Reemplaza con la URL de tu API Gateway
	cache: new InMemoryCache(),
});

export default client;
