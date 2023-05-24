import { create } from "zustand";
// import BookInterface from "./interfaces/book";

interface BookState{
  // books: BookInterface[],
  selectedIndex: number,
  setSelectedIndex: (index:number) => void,

}

export const useBookStore = create<BookState>((set) => ({
  selectedIndex: 0,
  setSelectedIndex: (index) => set(() => ({selectedIndex: index}))
}))