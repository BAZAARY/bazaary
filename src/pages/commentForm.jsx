import React, { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    
    if (comment.trim() === "") {
      alert("Por favor, escribe un comentario antes de enviarlo.");
      return;
    }

    fetch("URL", {   //URL DE LA API DEL SERVIDOR DE COMENTARIOS
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Comentario enviado con éxito.");
          setComment(""); // Borra el comentario del cuadro de texto después de enviarlo
        } else {
          alert("Hubo un error al enviar el comentario.");
        }
      })
      .catch((error) => {
        console.error("Error al enviar el comentario:", error);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md mt-8">
      <h2 className="text-xl mb-4">Deja un comentario</h2>
      <textarea
        className="w-full h-24 p-2 rounded border border-gray-300 mb-4"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Escribe tu comentario aquí"
      ></textarea>
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        onClick={handleSubmitComment}
      >
        Enviar Comentario
      </button>
    </div>
  );
};

export default CommentForm;
