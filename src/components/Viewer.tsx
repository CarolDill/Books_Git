import BookInterface from "../interfaces/book";

import styles from "./viewer.module.css";

interface Props {
  book: BookInterface
}

function Viewer({book}: Props) {
  if (book) {
    return (
      <>
      <div className={styles.viewerSpan}>
        <div className={styles.bookImg}>
          <img src={book.coverImg} />
        </div>
        <div className={styles.texts}>
          <p>Book Name: {book.name}</p>
          <p>Author: {book.author}</p>
          <p>Co Author: {book.coAuthor && book.coAuthor}</p>
          <p>Rating: {book.rating}</p>
          <ol>
            {book.sequels && book.sequels.map((sequel) => {
              console.log(sequel);
              return <li>{sequel}</li>
            })}
          </ol>
        </div>
      </div>
      
      </>
    )
  }
  return (
    <div className={styles.viewerSpan}>
      <p>There is no book selected</p>
    </div>
  )
}

export default Viewer;
