import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
	<BrowserRouter>
		<GoogleOAuthProvider clientId="176512858558-8jjm4bclhonv3vbi2dlg22djslfm7iti.apps.googleusercontent.com">
			<App />
		</GoogleOAuthProvider>
	</BrowserRouter>
);
