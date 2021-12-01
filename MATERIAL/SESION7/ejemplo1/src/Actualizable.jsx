import React, { useEffect, useState } from 'react';
const Actualizable = () => {
    const [text, setText] = useState('');
    useEffect(() => {
        const espera = setTimeout(() => setText('Ahora tengo texto'), 5000);
        return () => clearTimeout(espera);
    }, []);
    return <p>{text}</p>;
};
export default Actualizable;
