interface BookInterface {
  id: number,
  name: string,
  author: string,
  coAuthor?: string,
  coverImg: string,
  sequels?: string[],
  rating: number
}

export default BookInterface;