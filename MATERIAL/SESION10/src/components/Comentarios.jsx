
import { consumir } from "../api/apiComentarios"
import { useState } from "react";

export function Comentarios() {
    const [listarComentarios, setlistarComentarios] = useState([]);
    // use state enlaza el comentarios para tener un valor de inicio, en los parentesis debe tener el valor de incio
    //para mostrar los datos
    // se le asigna el usestate
    async function solicitarComentarios() {
        const datos = await consumir();
        setlistarComentarios(datos);// para traer los datos 
        
    }

    return (
        <>
            {
                listarComentarios.map(a => <p>{a.body}</p>)
            };
        </>
    )

}
