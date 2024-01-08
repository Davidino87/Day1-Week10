import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {<AllTheBooks />}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;

//import React, { useState } from 'react';
//import BookList from './BookList';
//import CommentArea from './CommentArea';

//const App = () => {
//const [selectedBookAsin, setSelectedBookAsin] = useState(null);

//return (
// <div className="app">
// <BookList
// onBookSelect={(asin) => setSelectedBookAsin(asin)}
//selectedBookAsin={selectedBookAsin}
///>
//<CommentArea selectedBookAsin={selectedBookAsin} />
// </div>
// );
//}

//export default App;
