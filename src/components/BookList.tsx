// import { useState } from "react";

import Book from "../components/Book";
import BookInterface from "../interfaces/book";
import data from "../../data"

import styles from "./bookList.module.css";

function BookList() {
  const books: BookInterface[] = data;

  return (
    <div className={styles.books}>
      {books.map((book, index) => (
        <Book book={book} index={index}/>
      ))}
    </div>
  );
}

export default BookList;
