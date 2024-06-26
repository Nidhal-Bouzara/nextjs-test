import BookInfo from "../components/book-info/book-info";
import CreateBook from "../components/create-book/create-book";
import { fetchFromGoogleBooks } from "../data/fetchFromGoogleBooks";
import Navigate from "./navigation";
import styles from './page.module.css'

// dynamic page
export default async function Home() {
  const getRandomSubArray = (arr: any[], size: number) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  }
  // get random sub array from array
  const books = await fetchFromGoogleBooks()
  return (
    <main className={styles.main}>
      {/* <CreateBook /> */}
      {
        getRandomSubArray(books, 3).map((book, index) => (
          <BookInfo key={index} initialLoadBook={book} />
      ))
      }
      <div>
        <Navigate />
      </div>
    </main>
  );
}
