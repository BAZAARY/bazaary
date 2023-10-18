import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate(); // Hook de navegación
	return (
		<div id="login" className="font-text">
			{/* {showAlert && <Alert />} */}

			<div className="md:flex md:flex-row w-full">
				{/* PARTE DERECHA */}
				<form className="flex w-full justify-center items-center">
					<div className="flex p-4 flex flex-col justify-center h-full w-full md:bg-orange-100 max-w-md border-2 border-gray-100 rounded-3xl mt-8 md:mt-16">
						{/* CAMPO DE EMAIL, PASSWORD, BOTON DE LOGIN */}
						<div className="flex flex-col items-center justify-center">
							<p className="font-bold text-3xl py-8">Iniciar sesión</p>
							<p className="pb-8 text-center">Bienvenido a Bazaary - Tu Mercado en Línea</p>

							{/* CAMPO DE EMAIL, PASSWORD, BOTON DE LOGIN */}
							<div className="flex flex-col items-center justify-center w-full">
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

								<button
									id="submit"
									type="submit"
									className="max-w-sm bg-orange-400 text-white w-full h-full text-center border-2 rounded-xl border focus:outline-none py-2 mb-4"
									// onSubmit={(e) => e.preventDefault()}
								>
									Ingresar
								</button>
							</div>

							{/* ELEMENTOS DE LOGIN CON GOOGLE, RECUPERAR CONTRASENA Y REGISTRARSE */}
							<div className="flex flex-col items-center">
								<p className="pt-6 pb-4 font-bold">O continúa con Google:</p>

								{/* LOGIN CON GOOGLE */}
								<div className="mb-8">
									<GoogleOAuthProvider clientId="880689041530-1g2pd7csm5mbrrqaha8rh60s6bvntlsv.apps.googleusercontent.com">
										<GoogleLogin
											onSuccess={(credentialResponse) => {
												// handleGoogleLogin(credentialResponse); // Pasar credentialResponse como argumento
											}}
											onError={() => {
												console.log("Login Failed");
											}}
											theme="filled_blue"
											shape="circle"
											useOneTap
										/>
									</GoogleOAuthProvider>
								</div>

								<button className="pb-4" onClick={() => navigate("/register")}>
									No tengo una cuenta en Bazaary
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
