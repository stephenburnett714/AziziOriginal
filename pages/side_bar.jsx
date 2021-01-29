import { BookData } from "../public/BookData.jsx";
import Link from "next/link";
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
          <form className=" flex justify-center flex-col" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value={book.addToCart}/>
                <table>
                <tr><td><input type="hidden" name="on0" value="Autograph to: (optional)"/>Autograph to: (optional)</td></tr><tr><td><input className="border-4 rounded" type="text" name="os0" maxlength="200"/></td></tr>
                </table>
                <input className="button-max-width self-center" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              </form>
        </div>
      ))}
      <Link href={"/books"}><div className="self-center azizi-bg-red text-white text-lg p-1 border-black border-2 w-24 rounded text-center cursor-pointer">All Books</div></Link>
    </div>
  );
};

export default side_bar;
