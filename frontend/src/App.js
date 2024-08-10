// styles
import './App.css';
import "./normalize.css"
// components
import Button from './Components/Button/Button';
import ListItem from './Components/ListItem/ListItem';
// hooks
import { useState } from 'react';
function App() {
  const [checkBoxStyles, setCheckBoxStyles] = useState([])
  const [largeContainerStyles, setLargeContainerStyles] = useState([])

  function onMouseUp(e) {
    const element = e.currentTarget?.childNodes[1]?.childNodes[0];
        if (element) {
            if (element?.checked) {
                element.classList.remove("show_tick_mark")
            }
            else {
                element.classList.remove("box-shadow")
                element.classList.remove("show_tick_mark")
            }
        }
      setLargeContainerStyles((prev) => {
          return (
              ""
          )
      })
  }

  return (
    <>
    <main className = "main_container"
    onMouseMove = {onMouseUp}
    // we set an onMouseMove handler incase the user drags the mouse accross several list element
    >
      <form className = "form">
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
        onMouseUp = {onMouseUp}
        htmlFor={"all_pages"}
        label = {"All Pages"}
        height={42}
        />
        <div className = "border_container">
          <div className = "border"></div>
        </div>
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
        onMouseUp = {onMouseUp}
        htmlFor={"page_1"}
        label={"Page 1"}
        />
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
        onMouseUp = {onMouseUp}
        htmlFor={"page_2"}
        label={"Page 2"}
        />
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
        onMouseUp = {onMouseUp}
        htmlFor={"page_3"}
        label={"Page 3"}
        />
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
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
