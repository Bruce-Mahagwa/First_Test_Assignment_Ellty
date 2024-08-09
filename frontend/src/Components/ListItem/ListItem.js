// styles
import "./ListItem.css"
// components
import { BsCheck2 } from "react-icons/bs";
import { IconContext } from "react-icons";
// hooks
import { useState } from "react";
const ListItem = () => {
    const [checkBoxStyles, setCheckBoxStyles] = useState([])
    function onMouseDown() {
        // describes the styles and classes when a user presses the mouse on the checkbox element
        setCheckBoxStyles((prev) => {
            return (
                "show_tick_mark"
            )
        })
    }
    function onMouseUp() {
        setCheckBoxStyles((prev) => {
            return ""
        })
    }
    return (
        <li className = "list_item">
            <label className = "page_name" htmlFor = "all_pages">All Pages</label>
            <div className = "check_page">
                <input type = "checkbox" name = "all_pages" className = {`checkbox ${checkBoxStyles}`} 
                id = "all_pages" 
                onMouseDown={onMouseDown}
                onMouseUp = {onMouseUp}
                />
                <IconContext.Provider value = {{className: "tick_icon center"}}>
                    <BsCheck2 />
                </IconContext.Provider>
                <div className = "check_page_container_large center">
                    <div className = "check_page_container_small center">

                    </div>
                </div>
            </div>
        </li>
    )
}
export default ListItem;