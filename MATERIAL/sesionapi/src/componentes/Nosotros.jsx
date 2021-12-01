import React, { useEffect, useState } from "react";

const Nosotros = () =>{
//------------------------------------------
   // const datos = [ // crearmo el array o json para trabajar los datos 
     //   {id:1,nombre: 'Reactjs'},
       // {id:2,nombre: 'Vuejs'},
        //{id:3,nombre: 'Angularjs'},
//-----------------------------------------
    // creamos el estado para mostrar los datos
    const [equipo,setEquipo] = useState([])

    useEffect (() => { // cada ves que se active el sitio
        // esta en el estado activo 
        //para mpstrar en pantalla o hacer el efecto
        console.log("useEffect")
        obtenerDatos()
       // setEquipo(datos) // se conecta con el usestare vacio y le carga todo los datos del json
    }, [] ) // se deja este array vacio para no generar un ciclo infinitp 

    const obtenerDatos = async () =>{ // se asigna el async para inicar el proyecto
       const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
       // hacemos el llamado a la api 
       // cargamos los datos a una variable data
       const users =  await data.json () // tomamos el valor y lo llamamos 
       //console.log(users)
       // ya se puede ver el api en el consoloe 
        setEquipo(users)
        
    }

    return(
     <div>
         <h1>
             NOSOTROS
         </h1>
         <ul>
             {
                   equipo.map (item => (
                       <li key={item.id}>{item.name} - {item.email}  </li>
                   )) 


             }
         </ul>
     </div>   
    )

}

export default Nosotros