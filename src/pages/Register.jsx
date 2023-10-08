import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { postLogin, postLoginGoogle, getPrueba } from "../conections/requests";
// import { Alert } from "../components/alerts/alerts";
// import Swal from "sweetalert2";
// import HomeButton from "../utilities/HomeButton";

const Register = () => {
	const navigate = useNavigate(); // Hook de navegación
	// const [showAlert, setShowAlert] = useState(false); // Estado para mostrar/ocultar la alerta

	// const [formData, setFormData] = useState({
	// 	email: "",
	// 	contrasena: "",
	// }); // Estado para almacenar los datos del formulario de inicio de sesión

	// //MANEJAR EL LOGIN NORMAL (SIN GOOGLE)
	// const handleSubmit = (event) => {
	// 	event.preventDefault(); // Prevenir comportamiento de envío predeterminado
	// 	const lowercaseEmail = formData.email.toLowerCase(); // Convertir el campo de email a minúsculas

	// 	console.log(formData); // Imprimir los datos del formulario en la consola
	// 	const myresponse = async () => {
	// 		// Realizar solicitud de inicio de sesión utilizando los datos del formulario
	// 		const req_succesful = await postLogin({
	// 			...formData,
	// 			email: lowercaseEmail,
	// 		});

	// 		console.log(req_succesful);
	// 		if (req_succesful === "Inicio de sesión exitoso") {
	// 			// Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
	// 			Swal.fire({
	// 				title: "Welcome!",
	// 				text: "You have succesfully been logged!",
	// 				icon: "success",
	// 				customClass: {
	// 					container: "font-text",
	// 				},
	// 			});

	// 			navigate("/home");
	// 		} else {
	// 			// Si las credenciales son incorrectas, mostrar una alerta de error con el mensaje de error devuelto por la solicitud
	// 			Swal.fire({
	// 				icon: "error",
	// 				title: "Oops...",
	// 				text: req_succesful,
	// 				customClass: {
	// 					container: "font-text",
	// 				},
	// 			});
	// 		}
	// 	};
	// 	myresponse(); // Ejecutar la función asíncrona myresponse
	// };

	//MANEJAR EL LOGIN CON GOOGLE
	// const handleGoogleLogin = (credentialResponse) => {
	// 	console.log(credentialResponse); // Imprimir los datos del formulario en la consola
	// 	const myresponse = async () => {
	// 		// Realizar solicitud de inicio de sesión utilizando los datos del formulario
	// 		const req_succesful = await postLoginGoogle({
	// 			credentialResponse,
	// 		});

	// 		console.log(req_succesful);
	// 		if (req_succesful === "Inicio de sesión exitoso") {
	// 			// Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
	// 			Swal.fire({
	// 				title: "Welcome!",
	// 				text: "You have succesfully been logged!",
	// 				icon: "success",
	// 				customClass: {
	// 					container: "font-text",
	// 				},
	// 			});

	// 			navigate("/home");
	// 		}
	// 	};
	// 	myresponse(); // Ejecutar la función asíncrona myresponse
	// };

	// Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para loguearse. Además del botón de submit y el botón que lleva a registro
	return (
		<div id="register" className="font-text">
			{/* {showAlert && <Alert />} */}

			<div className="md:flex md:flex-row w-full ">
				{/* PARTE DERECHA */}
				<form className="flex w-full justify-center items-center">
					<div className="flex p-4 flex flex-col justify-center h-full w-full md:bg-[#ffdcb7] max-w-md border-2 border-gray-100 rounded-3xl mt-8 md:mt-16">
						{/* CAMPO DE EMAIL, PASSWORD, BOTON DE REGISTER */}
						<div className="flex flex-col items-center justify-center">
							<p className="font-bold text-3xl py-6">Registrarse</p>
							<p className="pb-8 text-center">Bienvenido a Bazaary - Tu Mercado en Línea</p>

							{/* CAMPO DE EMAIL, PASSWORD, BOTON DE LOGIN */}
							<div className="flex flex-col items-center justify-center w-full pb-2">
								<input
									id="nombre"
									type="text"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="Nombre"
									// onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
								<input
									id="email"
									type="text"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="E-mail"
									// onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
								<input
									id="password"
									type="password"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="Contraseña"
									// onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
								/>
								<input
									id="repeat_password"
									type="password"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="Repetir contraseña"
									// onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
								/>
								<button
									id="submit"
									type="submit"
									className="max-w-sm bg-orange-400 text-white w-full h-full text-center border-2 rounded-xl md:border-0 focus:outline-none py-2 mb-4"
									// onSubmit={(e) => e.preventDefault()}
								>
									Registrarse
								</button>
								<button className="pt-4" onClick={() => navigate("/login")}>
									Ya tengo una cuenta
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
