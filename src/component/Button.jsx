import PropTypes from 'prop-types'

function Button(props){

    //Destructuring
    const {buttonContent} = props

    return (
        <button>{buttonContent}</button>
    )
}

//Sets the value when no argument is passed
Button.defaultProps = {
    buttonContent : "YourDefaultProps"
}

//Throws console error if the required dataType for the argument is not met
Button.propTypes = {
    buttonContent : PropTypes.string
}


export default Button