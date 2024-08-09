// styles
import "./ListItem.css"
// components
import { BsCheck2 } from "react-icons/bs";
import { IconContext } from "react-icons";
// hooks
import { useState } from "react";
const ListItem = ({checkBoxStyles, setCheckBoxStyles, largeContainerStyles, setLargeContainerStyles, onMouseUp}) => {

    const [isItemChecked, setIsItemChecked] = useState(false);
    function onInputChecked(e) {    
        // captures the checkbox element and checks if it is checked
        try {
            if (e.currentTarget) {
                const element = e.currentTarget?.childNodes[1]?.childNodes[0];
                const isChecked = element?.checked;
                if (isChecked) {
                    setIsItemChecked(true)
                    return true;
                }
            }
        }
        catch(e) {
            setIsItemChecked(false)
            return false;
        }
        setIsItemChecked(false)
        return false;
    }

    function onMouseDown(e) {
        // describes the styles and classes when a user presses the mouse on the checkbox element
        setCheckBoxStyles((prev) => {
            if (isItemChecked) {
                // avoids the box shadow styling when checkbox is being unchecked
                return "show_tick_mark"
            }
            return (
                "show_tick_mark box-shadow"
            )
        })
        setLargeContainerStyles((prev) => {
            return (
                "border-color-focus"
            )
        })
    }
    

    return (
        <li className = {`list_item`}
        onMouseDown={onMouseDown}
        onMouseUp = {onMouseUp}
        onChange = {onInputChecked}
        onClick={onInputChecked}
        >
        <label className = "page_name" 
            htmlFor = "all_pages"
            >All Pages</label>
            <div className = "check_page">
                <input type = "checkbox" name = "all_pages" className = {`checkbox ${checkBoxStyles}`} 
                id = "all_pages" 
                 />
                <IconContext.Provider value = {{className: "tick_icon center"}}>
                    <BsCheck2 />
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