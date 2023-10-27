import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InformationText from "../components/personalInformation/informationItem";

const PersonalInformation = () => {

	const navigate = useNavigate(); // Hook de navegación

	const iconPath = `${process.env.PUBLIC_URL}/edit.svg`;

	const user = {
		name: 'David',
		email: 'david@david.com',
		cedula: '11448578',
		username: 'david12',
		phoneNumber1: '123456',
		phoneNumber2: '789123',
		address1: 'carrera 4ra oe #25',
		address2: 'calle 62b #15-26'
	}

	const [editing, setEditing] = useState(false);
	const [userInfo, setUserInfo] = useState(user);

	const handleEditClick = () => {
		setEditing(true);
	};

	const handleSaveClick = () => {
		// Aquí puedes agregar la lógica para guardar los cambios en la información del usuario.
		// Puedes hacer una solicitud al servidor para actualizar la información.
		// Después de guardar, establece "editing" en falso.
		setEditing(false);
	};

	const handleCancelClick = () => {
		setUserInfo(user);
		setEditing(false);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserInfo({ ...userInfo, [name]: value });
	};

	return (
		<div className="flex flex-col items-center">
			<button onClick={() => navigate("/profile")} className={` flex self-start justify-center mt-8 ml-6 bg-[#FD9200] hover:bg-hover-color-button active:bg-click-color-button text-white font-bold py-2 px-4 rounded-xl text-xl border border-blue-text-button h-12 shadow-sm w-28 shadow-purple-text `}>
				Volver
			</button>
			<h2 className="mb-4 text-2xl font-bold">Mi Información</h2>

			{editing ? (
				<>
					<div>
						<input
							type="text"
							name="name"
							value={userInfo.name}
							onChange={handleInputChange}
							className="border-none"
						/>
						<input
							type="email"
							name="email"
							value={userInfo.email}
							onChange={handleInputChange}
							className="border-none"
						/>
						<input
							type="text"
							name="userName"
							value={userInfo.username}
							onChange={handleInputChange}
							className="border-none"
						/>
						<input
							type="text"
							name="cedula"
							value={userInfo.cedula}
							onChange={handleInputChange}
							className="border-none"
						/>
						<input
							type="tel"
							name="phoneNumber1"
							value={userInfo.phoneNumber1}
							onChange={handleInputChange}
							className="border-none"
						/>
						<input
							type="tel"
							name="phoneNumber2"
							value={userInfo.phoneNumber2}
							onChange={handleInputChange}
							className="border-none"
						/>
						<input
							type="text"
							name="address1"
							value={userInfo.address1}
							onChange={handleInputChange}
							className="border-none"
						/>
						<input
							type="text"
							name="address2"
							value={userInfo.address2}
							onChange={handleInputChange}
							className="border-none"
						/>
					</div>
					<button onClick={handleSaveClick}>Guardar</button>
					<button onClick={handleCancelClick}>Cancelar</button>
				</>

			) : (
				<div >
					<button
						className="text-white font-bold py-2 px-4 rounded ml-96"
						onClick={handleEditClick}
					>
						<img src={iconPath} alt="Icono" className="w-4 h-4 " />
					</button>
					<InformationText title={"Nombre : "} text={userInfo.name} />
					<InformationText title={"Email : "} text={userInfo.email} />
					<InformationText title={"Cedula : "} text={userInfo.cedula} />
					<InformationText title={"Telefono 1 : "} text={userInfo.phoneNumber1} />
					<InformationText title={"Telefono 2 : "} text={userInfo.phoneNumber2} />
					<InformationText title={"Dirección de envío 1 : "} text={userInfo.address1} />
					<InformationText title={"Dirección de envío 2 : "} text={userInfo.address2} />
				</div>
			)}
		</div>
	);
};

export default PersonalInformation;
