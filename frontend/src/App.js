// styles
import './App.css';
import "./normalize.css"
// components
import Button from './Components/Button/Button';
import ListItem from './Components/ListItem/ListItem';

function App() {
  function onMouseUp(e) {
    // onMouseUp: handles actions when a user's mouse is released from within the form element
    // 1. Selects the checkbox element using DOM traversal
    // 2. Ascertains whether the checkbox has been released and styles accordingly
    const checkbox = e.currentTarget?.childNodes[1]?.childNodes[0];
    if (checkbox) {
        if (checkbox?.checked) {
            checkbox.classList.remove("show_tick_mark")
        }
        else {
            checkbox.classList.remove("box-shadow")
            checkbox.classList.remove("show_tick_mark")
        }
    }
    // 3. Selects the container with the className=check_page_container_large
    // 4. Removes a class on mouseup
    const large_container = e.currentTarget?.childNodes[1]?.lastElementChild;
    if (large_container) {
        large_container.classList.remove("border-color-focus");
    }
  }
  return (
    <>
    <main className = "main_container">
      <div className = "bg"></div>
      <form className = "form">
        <ListItem 
        onMouseUp = {onMouseUp}
        htmlFor={"all_pages"}
        label = {"All Pages"}
        height={42}
        />
        <div className = "border_container">
          <div className = "border"></div>
        </div>
        <ListItem 
        onMouseUp = {onMouseUp}
        htmlFor={"page_1"}
        label={"Page 1"}
        />
        <ListItem 
        onMouseUp = {onMouseUp}
        htmlFor={"page_2"}
        label={"Page 2"}
        />
        <ListItem 
        onMouseUp = {onMouseUp}
        htmlFor={"page_3"}
        label={"Page 3"}
        />
        <ListItem 
        onMouseUp = {onMouseUp}
        htmlFor={"page_4"}
        label={"Page 4"}
        />
        <div className = "border_container">
          <div className = "border"></div>
        </div>
        <Button />
      </form>
    </main>
    </>
  )
}

export default App;
