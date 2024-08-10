// styles
import "./ListItem.css"
import "../../App.css"
// components
import { BsCheck2 } from "react-icons/bs";
import { IconContext } from "react-icons";
// hooks

const ListItem = ({onMouseUp, htmlFor, label, height=41}) => {    
    function onMouseDown(e) {
        // onMouseDown: describes the styles and classes when a user presses the mouse on the checkbox element
        // 1. Selects the checkbox element using DOM traversal
        // 2. Ascertains whether the checkbox has been checked and styles accordingly
        const checkbox = e.currentTarget?.childNodes[1]?.childNodes[0];
        if (checkbox) {
            if (checkbox?.checked) {
                checkbox.classList.add("show_tick_mark")
            }
            else {
                checkbox.classList.add("box-shadow")
                checkbox.classList.add("show_tick_mark")
            }            
        }
        // 3. Selects the container with the className=check_page_container_large
        // 4. Removes a class on mouseup
        const large_container = e.currentTarget?.childNodes[1]?.lastElementChild;
        if (large_container) {
          large_container.classList.add("border-color-focus");
        }
    }

    function addCheckBoxStyles(e) {
        // isCheckBoxChecked: checks whether the checkbox element has been clicked and adds styles
        // 1. It checks from two places during the mouse down event: on the main label element and on the tick icon
        // 2. Both these elements select the checkbox element but from different elements
        const element = e.currentTarget?.nextElementSibling?.childNodes[0];
        const element2 = e.currentTarget?.parentElement?.childNodes[0]
        if (element || element2) {
            if (element?.checked) {
                element.classList.add("blue-background-checked")
            }
            else if (element2?.checked) {
                element2.classList.add("blue-background-checked")
        }
    }
}
    function removeCheckBoxStyles(e) {
        // removeCheckBoxStyles: checks whether the mouse element has been lifted from the checkbox element and adds styles
        // 1. It checks from two places during the mouse up event: on the main label element and on the tick icon
        // 2. Both these elements select the checkbox element but from different elements
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
                onMouseDown={addCheckBoxStyles}
                onMouseUp = {removeCheckBoxStyles}
                >{label}</label>
                <div className = "check_page">
                    <input type = "checkbox" name = {htmlFor} className = {`checkbox center`} 
                    id = {htmlFor} 
                    />
                    <IconContext.Provider value = {{className: "tick_icon center"}}>
                        <label htmlFor = {htmlFor}
                        onMouseDown={addCheckBoxStyles}
                        onMouseUp = {removeCheckBoxStyles}>
                            <BsCheck2  />
                        </label>
                    </IconContext.Provider>
                    <div className = {`check_page_container_large center`}>
                        <div className = "check_page_container_small center">

                        </div>
                    </div>
                </div>
        </li>
    )
}
export default ListItem;