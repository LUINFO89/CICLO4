import React, { useEffect, useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() =>{//neesita un estado para renderizar lo que se necesita 
        // se ejecuta cuando se hace el render es decir cuando se llama el count 
            console.log(count);
            document.title=count;
    });
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
};
export default Counter;