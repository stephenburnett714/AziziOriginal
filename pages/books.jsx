import { BookData } from "./BookData.jsx";
import Image from "next/image"

const books = () => {
    return (
        <div className="bg-white py-2 px-4 border-4 border-blue-300">
        <div className="text-3xl adlib text-yellow-900 pb-3 text-padding">Books</div>
        <div className="body-font pb-2 text-padding">
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
              <div className={book.price ? "px-3 azizi-bg-orange text-white rounded-full cursor-pointer mr-3 text-md body-font text-center" : "hidden"}>View Cart</div>
              <div className={book.price ? "px-3 azizi-bg-blue text-white rounded-full cursor-pointer  ml-3 text-md body-font text-center" : "hidden"}>Add To Cart</div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="body-font azizi-blue text-2xl pb-2 text-padding">MUSIC:</div>
              <div className="body-font azizi-green text-lg text-padding">Lullaby CD</div>
              <div className="body-font pb-1 text-padding">
                The perfect wind down for the evening (children and adults alike).
                These beautiful, lullaby’s from Africa are guaranteed to enchant
                you right into a wonderful night’s sleep.
              </div>
  
              <div className="body-font text-padding pb-5">
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