import React, { useState } from 'react';
const Counter2 = () => {
    const [count, setCount] = useState(0);
    const addHandler = () => setCount(count + 1);
    const subHandler = () => setCount(count - 1);
    const overHandler = () => { console.log(count) };
    return (
        <div onMouseEntered={overHandler}>
            <p>{count}</p>
            <button onClick={addHandler}> + </button>
            <button onClick={subHandler}> - </button>
        </div>
    );
};
export default Counter2;
