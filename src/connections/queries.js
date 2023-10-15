import { gql } from "@apollo/client";

export const GET_USERS = gql`
	query {
		users {
			id_usuario
			email
		}
	}
`;

export const REGISTER_USER = gql`
	mutation RegisterUser($input: UserInput!) {
		registerUser(input: $input) {
			message
		}
	}
`;
