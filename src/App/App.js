import './App.css';
import { useState } from 'react';
import SubmitForm from './components/SubmitForm';
import FirstCard from './components/FirstCard';

function App() {

  const [ book, setBook ] = useState({title: "name", author: "person", synopsis: "stuff"});

  const handleChange = (title, author, synopsis) => {
    console.log(title)
    setBook({title, author, synopsis})
    // (setBook(oldBook => [ ...oldBook, {title, author, synopsis}]))
  }

  return (
    <div className="App">
      <header className="App-header">
         <SubmitForm handleChange={handleChange}/>
      </header>
     <FirstCard book={book}/>
    </div>
  );
}

export default App;
