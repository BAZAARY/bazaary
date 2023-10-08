import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AddingItem from "./components/AddingItem";
import Category from "./components/AddingItemsComponents/Category";
import Descripcion from "./components/AddingItemsComponents/Description";
import Media from "./components/AddingItemsComponents/Media";
import Specs from "./components/AddingItemsComponents/Specs";
import Preview from "./components/AddingItemsComponents/Preview";
import ShoppingCart from "./pages/shoppingCart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
				<Route path="/home" element={<HomePage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/addingitem" element={<AddingItem />}>
					<Route path="/addingitem/category" element={<Category />} />
					<Route path="/addingitem/description" element={<Descripcion />} />
					<Route path="/addingitem/media" element={<Media />} />
					<Route path="/addingitem/specs" element={<Specs />} />
					<Route path="/addingitem/preview" element={<Preview />} />
				</Route>
				/
				<Route path="/cart" element={<ShoppingCart />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Route>
		</Routes>
	);
};

export default App;
