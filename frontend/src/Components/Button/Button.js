// styles
import "./Button.css"

const Button = () => {
    return (
        <button className = "submit_btn" onClick={(e) => e.preventDefault()}>
            Done
        </button>
    )
}
export default Button;