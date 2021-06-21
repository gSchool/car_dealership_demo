import React, {useState} from "react";
import './App.css';

function App() {
  const [currentValue, setNewValue] = useState(0);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [userName, setUsername] = useState('Mr. Hudson');
  const [favChocolate, setFavChocolate] = useState(['Hot', 'Cold', 'Solid']);

  const handleCount = (evt) => {
    evt.preventDefault();
    setNewValue(prevState => prevState +1)
  }

  const handleTitle = (evt) => {
    evt.preventDefault();
    setIsNameVisible(prevVisibility => prevVisibility = !prevVisibility);
  }

  const handleFavs = (evt) => {
    evt.preventDefault();
    setFavChocolate(prevState => prevState.concat(evt.target.newFav.value));
  }

  const displayFavs = () => {
    return favChocolate.map(fav => <li key={fav}>{ fav }</li>)
  }

  return (
    <div className="App">
      <h1>Welcome to the React Workshop</h1>
      <button name="counter" onClick={ handleCount }>
        Update Snacks
      </button>
      <div id="user">
        <h3 title="userTitle" onClick={ handleTitle }>Mr. Chocolatier</h3>
        { isNameVisible ? <h3 title="userName">{ userName }</h3> : null }
        <p>Current Snack:</p>
        <p data-testid="currentSnack">Chocolate Bar</p>
      </div>
      <p>Number of chocolate snacks today:</p>
      <p data-testid="counterValue">{ currentValue }</p>

      <ul>
        { displayFavs() }
      </ul>
    </div>
  );
}

export default App;
