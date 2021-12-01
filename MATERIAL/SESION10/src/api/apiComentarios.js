import CONFIG from "/Configuracion/config.json";

export const consumir = async () => {

    const path = new URL(CONFIG.COMENTARIOAPI.URL); // al conusmir le coloco el asing para poder esperar el moemnyo
    const result = await fetch(path);
    console.log(result);
    return result.json(); //para poder pasarlo en un formato json
    // le asigno el .json para poder tenerso asi
    // el convierte los archivospara poder leerlos 
}
