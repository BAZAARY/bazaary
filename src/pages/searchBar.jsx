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
        // ... (resto de tus productos con información adicional)
    ];

    
   
    let columnClass = "w-full"; // Por defecto, una columna

    if (products.length >= 3) {
        columnClass = "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5"; // Se ajusta el número de columnas para diferentes tamaños de pantalla
    }

    return (
        <div className="flex flex-col md:flex-row">
            {/* Contenedor vertical delgado en el lado izquierdo */}
            <div className="md:w-1/6 bg-white p-4 mt-4 flex justify-center flex-col"> {/* Ajuste de ancho y padding, contenido centrado */}
                {/* Contenido del contenedor vertical */}
                <h2 className="text-center">Sidebar</h2>
                <p className="text-center">Extra information</p>
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
            {/* ... (resto del código) */}
        </div>
    );
};

export default SearchBar;