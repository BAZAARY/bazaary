import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default App;
