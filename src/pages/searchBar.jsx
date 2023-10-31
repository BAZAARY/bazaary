import React from "react";
import sellImage from "../components/img/sell.png"; // Ajusta la ruta de la imagen
import sellImage1 from "../components/img/mg.avif"; // Ajusta la ruta de la imagen

const SearchBar = () => {
    const products = [
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        // ... (resto de tus productos con información adicional)
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        // ... (resto de tus productos con información adicional)
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        // ... (resto de tus productos con información adicional)
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        // ... (resto de tus productos con información adicional)
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        // ... (resto de tus productos con información adicional)
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        // ... (resto de tus productos con información adicional)
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        { 
            id: 1, 
            name: "Producto 1", 
            image: sellImage1,
            description: "Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 25.99,
            // Agrega más propiedades o información aquí si es necesario para cada producto
        },
        // ... (resto de tus productos con información adicional)
    ];

    
   
    let columnClass = "w-full"; // Por defecto, una columna

    if (products.length >= 3) {
        columnClass = "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5"; // Se ajusta el número de columnas para diferentes tamaños de pantalla
    }

    return (
        <div className="flex flex-col md:flex-row">
            {/* Contenedor de filtros en el lado izquierdo */}
            <div className="md:w-1/6 bg-white p-4 mt-4 flex flex-col items-center">
                {/* Contenido del contenedor de filtros */}
                <h2 className="text-center">Filtros de Búsqueda</h2>
                <div className="my-4">
                    <h3>Categorías</h3>
                    <ul className="flex flex-col items-start">
                        <li className="my-2">
                            <input type="checkbox" id="ropa" name="ropa" value="ropa" />
                            <label htmlFor="ropa">Ropa</label>
                        </li>
                        <li className="my-2">
                            <input type="checkbox" id="tecnologia" name="tecnologia" value="tecnologia" />
                            <label htmlFor="tecnologia">Tecnología</label>
                        </li>
                        {/* Agregar más opciones de categorías */}
                    </ul>
                </div>
                <div className="my-4">
                    <h3>Rango de precios</h3>
                    <input type="range" min="0" max="100" />
                    {/* Otros tipos de filtros, como rangos de precios, podrían agregarse aquí */}
                </div>
                <div className="my-4">
                    <h3>Calificación</h3>
                    <select>
                        <option value="5">5 Estrellas</option>
                        <option value="4">4 Estrellas</option>
                        <option value="3">3 Estrellas</option>
                        <option value="2">2 Estrellas</option>
                        <option value="1">1 Estrella</option>
                    </select>
                </div>
            </div>
            {/* Contenedor de productos */}
            <div className="md:w-5/6 overflow-hidden">
                <div className="bg-white mt-4">
                    <div className="flex flex-wrap p-2" style={{ display: "flex", flexWrap: "wrap" }}>
                        {products.map(product => (
                            <div key={product.id} className={columnClass + " p-2"}>
                                <div className="bg-white p-4 border rounded-md">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-40 object-contain rounded-md mb-2"
                                    />
                                    <p className="text-center font-semibold">{product.name}</p>
                                    <p className="text-center text-gray-600">${product.price}</p>
                                    <p className="text-sm">{product.description}</p>
                                    {/* Más elementos HTML para mostrar información adicional */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;





