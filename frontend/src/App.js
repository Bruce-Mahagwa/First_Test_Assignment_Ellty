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
      setCheckBoxStyles((prev) => {
          return ""
      })
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
        />
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
        onMouseUp = {onMouseUp}
        />
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
        onMouseUp = {onMouseUp}
        />
        <ListItem 
        checkBoxStyles = {checkBoxStyles}
        setCheckBoxStyles ={setCheckBoxStyles}
        largeContainerStyles={largeContainerStyles}
        setLargeContainerStyles={setLargeContainerStyles}
        onMouseUp = {onMouseUp}
        />
        <Button />
      </form>
    </main>
    </>
  )
}

export default App;
