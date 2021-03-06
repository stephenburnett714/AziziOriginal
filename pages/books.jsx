import { BookData } from "../public/BookData.jsx";
import Image from "next/image"
import Head from 'next/head'

const books = () => {
    return (
        <div className="bg-white py-2 px-4 border-4 border-blue-300">
          <Head>
          <title>Books</title>
          </Head>
        <div className="text-3xl adlib text-yellow-900 pb-3 text-padding">Books</div>
        <div className="body-font text-sm md:text-base pb-2 text-padding">
                It’s easy to want to spend more time with Azizi. After all he’s
                fun, adventurous, and your special friend who can also speak
                Swahili. Every day with Azizi is guaranteed to be a fun day of
                adventure for you! Here are some ways that you can spend more time
                with Azizi:
              </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {BookData.map((book, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-5">
              <div className="body-font pb-1 text-2xl azizi-green">{book.title}</div>
              <Image src={book.image} height="200" width="200" alt="" />
              <div className={book.price ? "azizi-orange body-font text-lg pt-2 text-ceter" : "azizi-orange body-font text-2xl pt-2 text-ceter"}>{book.price ? `$${book.price}` : "Unavailable"}</div>
              <div className="flex flex-row p-2 space-between">
              <div className={book.price ? "flex" : "hidden"}>
              <form className=" flex justify-center flex-col" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value={book.addToCart}/>
                <table>
                <tr><td><input type="hidden" name="on0" value="Autograph to: (optional)"/>Autograph to: (optional)</td></tr><tr><td><input className="border-4 rounded" type="text" name="os0" maxLength="200"/></td></tr>
                </table>
                <input className="mx-4" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                {/* <img  alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" max-width="500px" height="1"/> */}
              </form>
              </div>

              </div>
            </div>
          ))}
        </div>
            
        <div className="body-font azizi-blue text-xl md:text-2xl pb-2 text-padding">MUSIC:</div>
              <div className="body-font azizi-green text-base md:text-lg text-padding">Lullaby CD</div>
              <div className="body-font text-sm md:text-base pb-1 text-padding">
                The perfect wind down for the evening (children and adults alike).
                These beautiful, lullaby’s from Africa are guaranteed to enchant
                you right into a wonderful night’s sleep.
              </div>
  
              <div className="body-font text-sm md:text-base text-padding pb-5">
                It’s exciting to know that a good friend like Azizi can be with
                your children whether they are at school or home. Everything that
                comes from Azizi Kids© comes with a guarantee to be something of
                high quality and positive value for your children. We are
                completely committed to offering culturally enriching products.
              </div>
              </div>
    );
}

export default books;