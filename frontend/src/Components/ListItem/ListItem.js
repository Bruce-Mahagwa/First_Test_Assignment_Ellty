// styles
import "./ListItem.css"
// components
import { BsCheck2 } from "react-icons/bs";
import { IconContext } from "react-icons";

const ListItem = () => {
    return (
        <li className = "list_item">
            <p className = "page_name">All Pages</p>
            <div className = "check_page">
                <input type = "checkbox" name = "page" className = "checkbox" id = "page" />
                <div className = "check_page_container_large center">
                    <div className = "check_page_container_small center">

                    </div>
                </div>
                <IconContext.Provider value = {{className: "tick_icon center"}}>
                    <BsCheck2 />
                </IconContext.Provider>
            </div>
        </li>
    )
}
export default ListItem;