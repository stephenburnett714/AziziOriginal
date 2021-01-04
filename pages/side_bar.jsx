import { BookData } from "../public/BookData.jsx";
import Image from "next/image";

let sideBarBooks = BookData.filter((books) => {
  if (books.id === 1 || books.id === 2) {
    return true;
  }
});
const side_bar = () => {
  return (
    <div className="flex flex-col justify-center">
        <div className="text-yellow-900 adlib text-xl text-center pb-2">Best Selling Books</div>
      {sideBarBooks.map((book, index) => (
        <div key={index} className="flex flex-col justify-center text-center pb-5">
            <div className="adlib text-xl azizi-green">{book.title}</div>
          <div>
            <Image src={book.image} height="200" width="200" />
          </div>
          <div className="body-font pb-1">Price USD ${book.price}</div>
          <div className="body-font border-2 border-black rounded-full azizi-bg-blue text-white w-20 self-center cursor-pointer">Buy Now</div>
        </div>
      ))}
      <div className="self-center azizi-bg-red text-white text-lg p-1 border-black border-2 w-24 rounded text-center">All Books</div>
    </div>
  );
};

export default side_bar;
