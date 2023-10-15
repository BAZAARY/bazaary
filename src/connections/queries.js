import { gql } from "@apollo/client";

export const GET_USERS = gql`
	query {
		users {
			id_usuario
			email
		}
	}
`;

// export const CREATE_USER = gql`
// 	mutation createUser($name: String!) {
// 		createUser(name: $name) {
// 			id
// 			name
// 		}
// 	}
// `;
