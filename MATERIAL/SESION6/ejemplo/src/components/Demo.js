import react,{useState} from 'react';
const Demo =() => {
    const [name, setName] = useState('developer');
    return <p>Hola,{name}</p>
};
export default Demo;