import Viewer from "./components/Viewer";
import BookList from "./components/BookList";
// import { useState } from "react";

import BookInterface from "./interfaces/book";
import data from "../data";

import { useBookStore } from "../src/store";

function App() {

  const { selectedIndex } = useBookStore();
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  const books: BookInterface[] = data;

  return (
    <>
      <Viewer  book={books[selectedIndex]}/>
      <BookList />
    </>
  );
}

export default App;
