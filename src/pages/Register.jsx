import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { postLogin, postLoginGoogle, getPrueba } from "../conections/requests";
// import { Alert } from "../components/alerts/alerts";
import Swal from "sweetalert2";
import { useQuery, useMutation } from "@apollo/client";
import { REGISTER_USER } from "../connections/queries";

const Register = () => {
	const [registerUser] = useMutation(REGISTER_USER);
	const navigate = useNavigate(); // Hook de navegación
	// Datos que se enviarán al backend
	const [formData, setFormData] = useState({
		nombre_usuario: "",
		email: "",
		contrasena: "",
	});

	const [confirmedPassword, setConfirmedPassword] = useState(); // Estado para almacenar la confirmación de contraseña

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevenir comportamiento de envío predeterminado
		const lowercaseEmail = formData.email.toLowerCase(); // Convertir el campo de email a minúsculas
		console.log(lowercaseEmail);

		console.log(formData); // Imprimir los datos del formulario en la consola

		if (formData["contrasena"].length < 6) {
			// Validar longitud mínima de contraseña
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "La contraseña es muy corta",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		if (formData["contrasena"] != confirmedPassword) {
			// Validar que las contraseñas coincidan
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Las contraseñas no coinciden",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		if (formData["nombre_usuario"].length < 8) {
			// Validar longitud mínima de nombre de usuario
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "El nombre es muy corto",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData["email"]) == false) {
			// Validar formato de correo electrónico
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "El correo no es válido",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		const myresponse = async () => {
			try {
				const response = await registerUser({
					variables: {
						input: {
							email: formData.email.toLowerCase(),
							nombre_usuario: formData.nombre_usuario,
							contrasena: formData.contrasena,
						},
					},
				});

				console.log("Mutation response:", response);

				Swal.fire({
					title: "Registro exitoso",
					text: "Te has registrado en Bazaary",
					icon: "success",
					customClass: {
						container: "font-text",
					},
				});

				navigate("/login");
			} catch (error) {
				console.error("Error:", error);

				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Problemas internos, inténtalo más tarde",
					customClass: {
						container: "font-text",
					},
				});
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
	};

	// Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para loguearse. Además del botón de submit y el botón que lleva a registro
	return (
		<div id="register" className="font-text">
			{/* {showAlert && <Alert />} */}

			<div className="md:flex md:flex-row w-full ">
				{/* PARTE DERECHA */}
				<form onSubmit={handleSubmit} className="flex w-full justify-center items-center">
					<div className="flex p-4 flex flex-col justify-center h-full w-full md:bg-[#ffdcb7] max-w-md md:border-2 md:border-gray-100 rounded-3xl mt-8 md:mt-16">
						{/* CAMPO DE EMAIL, PASSWORD, BOTON DE REGISTER */}
						<div className="flex flex-col items-center justify-center">
							<p className="font-bold text-3xl py-6">Registrarse</p>
							<p className="pb-8 text-center">Bienvenido a Bazaary - Tu Mercado en Línea</p>

							{/* CAMPO DE EMAIL, PASSWORD, BOTON DE LOGIN */}
							<div className="flex flex-col items-center justify-center w-full pb-2">
								<input
									id="nombre_usuario"
									type="text"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="Nombre"
									onChange={(e) => setFormData({ ...formData, nombre_usuario: e.target.value })}
								/>
								<input
									id="email"
									type="email"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="E-mail"
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
								<input
									id="password"
									type="password"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="Contraseña"
									onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
								/>
								<input
									type="password"
									className="max-w-sm w-full h-full text-center border-2 rounded-xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
									placeholder="Repetir contraseña"
									onChange={(e) => setConfirmedPassword(e.target.value)}
								/>
								<button
									id="submit"
									type="submit"
									className="max-w-sm bg-orange-400 text-white w-full h-full text-center border-2 rounded-xl md:border-0 focus:outline-none py-2 mb-4"
									onSubmit={(e) => e.preventDefault()}
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
