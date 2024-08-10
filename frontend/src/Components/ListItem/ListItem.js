// styles
import "./ListItem.css"
import "../../App.css"
// components
import { BsCheck2 } from "react-icons/bs";
import { IconContext } from "react-icons";
// hooks

const ListItem = ({largeContainerStyles, setLargeContainerStyles, onMouseUp, htmlFor, label, height=41}) => {
    
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
        const element2 = e.currentTarget?.parentElement?.childNodes[0]
        if (element || element2) {
            if (element?.checked) {
                console.log("on press")
                element.classList.add("blue-background-checked")
            }
            else if (element2?.checked) {
                element2.classList.add("blue-background-checked")
        }
    }
}
    function removeCheckBox(e) {
        const element = e.currentTarget?.nextElementSibling?.childNodes[0];
        const element2 = e.currentTarget?.parentElement?.childNodes[0]
        if (element || element2) {
            if (element?.checked) {
                element.classList.remove("blue-background-checked")
            }
            else if (element2?.checked) {
                element2.classList.remove("blue-background-checked")
            }
        }
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
            onMouseUp = {removeCheckBox}
            >{label}</label>
            <div className = "check_page">
                <input type = "checkbox" name = {htmlFor} className = {`checkbox center`} 
                id = {htmlFor} 
                 />
                <IconContext.Provider value = {{className: "tick_icon center"}}>
                    <label htmlFor = {htmlFor}
                    onMouseDown={isCheckBoxChecked}
                    onMouseUp = {removeCheckBox}>
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