import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionProfile from "../components/profile/item";
import ProfilePictureUploader from "../components/profile/userPhoto";

const Profile = () => {
	const navigate = useNavigate(); // Hook de navegación
	return (
		<div className="flex flex-col justify-items-center items-center ">
			<div className="w-[45rem] h-24 bg-slate-300 rounded-lg mt-12 mb-8 flex items-center">
				<ProfilePictureUploader />
				<h1>jeje</h1>
			</div>
			<SectionProfile text="Información personal" onClick={() => console.log("jeje")} />

			<SectionProfile text="Seguridad" onClick={() => console.log("jeje")} />

			<SectionProfile text="Mis compras" onClick={() => console.log("jeje")} />

			<SectionProfile text="Mis ventas" onClick={() => console.log("jeje")} />

			<SectionProfile text="Tarjetas" onClick={() => console.log("jeje")} />
			
		</div>
	);
};

export default Profile;
