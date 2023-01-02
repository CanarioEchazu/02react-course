<<<<<<< HEAD
import PropTypes from 'prop-types'

export function Button({text, name}){
    return <button onClick={function (){
        console.log('Hola presionaste un Click');
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};

Button.defaultProps = {
    name: 'Some User'
=======
import PropTypes from 'prop-types'

export function Button({text, name}){
    return <button onClick={function (){
        console.log('Hola presionaste un Click');
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};

Button.defaultProps = {
    name: 'Some User'
>>>>>>> 01145ed62d9dd39019c948365c11496ed438d2c2
}