<<<<<<< HEAD
import {SlBookOpen} from 'react-icons/sl' 

export const Posts = () => {
    return <button onClick={ () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }}>
        <SlBookOpen />
        Traer datos
    </button>
=======
import {SlBookOpen} from 'react-icons/sl' 

export const Posts = () => {
    return <button onClick={ () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }}>
        <SlBookOpen />
        Traer datos
    </button>
>>>>>>> 01145ed62d9dd39019c948365c11496ed438d2c2
}