import './App.css';
import { useState} from 'react';
import BookForm from './components/bookForm';
import BookCard from './components/bookCard';  

function App() {
  return (
    <>
    <div className="App-header">
      <BookForm/>
    </div>
    <BookCard/>
    </>
  );
}

export default App;
