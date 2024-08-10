// styles
import "./ListItem.css"
import "../../App.css"
// components
import { BsCheck2 } from "react-icons/bs";
import { IconContext } from "react-icons";
// hooks

const ListItem = ({checkBoxStyles, largeContainerStyles, setLargeContainerStyles, onMouseUp, htmlFor, label, height=41}) => {
    
    function onMouseDown(e) {
        // describes the styles and classes when a user presses the mouse on the checkbox element
        const element = e.currentTarget?.childNodes[1]?.childNodes[0];
        if (element) {
            if (element?.checked) {
                element.classList.add("show_tick_mark")
            }
            else {
                element.classList.add("box-shadow")
                element.classList.add("show_tick_mark")
            }            
        }
        setLargeContainerStyles((prev) => {
            return (
                "border-color-focus"
            )
        })
    }
    function isCheckBoxChecked(e) {
        const element = e.currentTarget?.nextElementSibling?.childNodes[0];
        if (element) {
            if (element.checked) {
                element.classList.add("blue-background-checked")
                return "";
            }
        }
        return "";
    }
    return (
        <li className = {`list_item`}
        onMouseDown={onMouseDown}
        onMouseUp = {onMouseUp}
        style={{height: height}}
        >
        <label className = "page_name" 
            htmlFor = {htmlFor}
            onMouseDown={isCheckBoxChecked}
            >{label}</label>
            <div className = "check_page">
                <input type = "checkbox" name = {htmlFor} className = {`checkbox center`} 
                id = {htmlFor} 
                 />
                <IconContext.Provider value = {{className: "tick_icon center"}}>
                    <label htmlFor = {htmlFor}>
                        <BsCheck2  />
                    </label>
                </IconContext.Provider>
                <div className = {`check_page_container_large center ${largeContainerStyles}`}>
                    <div className = "check_page_container_small center">

                    </div>
                </div>
            </div>
        </li>
    )
}
export default ListItem;