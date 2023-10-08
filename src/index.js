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
		<GoogleOAuthProvider clientId="880689041530-1g2pd7csm5mbrrqaha8rh60s6bvntlsv.apps.googleusercontent.com">
			<App />
		</GoogleOAuthProvider>
	</BrowserRouter>
);
