// styles
import './App.css';
import "./normalize.css"
// components
import Button from './Components/Button/Button';
import ListItem from './Components/ListItem/ListItem';

function App() {
  return (
    <>
    <main className = "main_container">
      {/* <Button /> */}
      <form>
              <ListItem />
            </form>
    </main>
    </>
  )
}

export default App;
