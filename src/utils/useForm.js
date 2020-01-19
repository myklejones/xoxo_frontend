import {useState} from 'react';

const useForm = () => {
    const [state, setState] = useState({})

    const handlechange = (evt) => {
        evt.persist();
        setState(state => ({...state, [evt.target.name]: evt.target.value}));
    }

    return(state, handlechange);

}

export default useForm;