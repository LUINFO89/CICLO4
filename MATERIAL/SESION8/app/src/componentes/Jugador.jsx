

export function Jugador() {

    return ( // dentro del retur se colcoa el html 
        // en este espacio se puede pegar el bootstrap
        <form action="">
            <label htmlFor=""> Nombre del Jugador </label>
            <input type="text" className="form-control" />
            <label htmlFor=""> Número de camiseta </label>
            <input type="text" className="form-control"/>
            <label htmlFor=""> Posición </label>
            <input type="text" className="form-control"/>

            <div className="col-auto">
                <button type="button" className="btn btn-primary mb-3">Save</button>
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-primary mb-3">List</button>
            </div>
        </form>// las clases en react se deben llamar classname en todo
    );
}// para usar las fujciones o componentes debo exportarlas con export 