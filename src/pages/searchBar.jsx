import React from "react";

const SearchBar = () => {
    const products = [
        { id: 1, name: "Producto 1", image: "url_de_la_imagen_1" },
        { id: 2, name: "Producto 2", image: "url_de_la_imagen_2" },
        { id: 3, name: "Producto 3", image: "url_de_la_imagen_3" },
        { id: 4, name: "Producto 4", image: "url_de_la_imagen_4" },
        { id: 5, name: "Producto 5", image: "url_de_la_imagen_5" },
        { id: 6, name: "Producto 6", image: "url_de_la_imagen_6" },
    ];

    const numColumns = products.length > 3 ? "w-1/4" : `w-${4 / products.length}/4`;

    return (
        <div className="flex-row md:flex">
            {/* Contenedor del lado izquierdo con margen a la izquierda */}
            <div className="w-1/6 bg-gray-200 h-screen mt-4 ml-4">
                {/* Contenido del lado izquierdo */}
                {/* Puedes colocar aquí cualquier contenido que desees */}
                <p>Contenido Izquierdo</p>
            </div>

            <div className="flex ml-4 mt-4 w-5/6 overflow-hidden">
                <div className="w-full bg-[#ffdcb7] mt-4">
                    <div className="flex flex-wrap justify-start p-2" style={{ display: "flex", flexWrap: "wrap" }}>
                        {products.map(product => (
                            <div key={product.id} className={numColumns + " p-2"}>
                                <div className="bg-white p-4 border rounded-md h-full">
                                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />
                                    <p className="text-center font-semibold">{product.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* ... (resto del código, como en la estructura original) */}
        </div>
    );
};

export default SearchBar;
