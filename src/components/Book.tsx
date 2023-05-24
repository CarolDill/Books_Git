// import { useState } from "react";
import BookInterface from "../interfaces/book"

import { useBookStore } from "../store";

import styles from "./book.module.css";


interface Props {
  book: BookInterface,
  index: number
}


function Book({book, index}: Props) {

  const { setSelectedIndex } = useBookStore();

  function selectBook(index: number) {
    setSelectedIndex(index);
  }

  return (
    <>
    <div className={styles.bookSpace}>
      <div className={styles.bookimg}>
        <img src={book.coverImg} />
      </div>
      <p>{book.name}</p>
      <button onClick={() => selectBook(index)}>Select</button>
    </div>
    </>
  );
}

export default Book;
