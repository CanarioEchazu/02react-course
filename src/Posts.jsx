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
}