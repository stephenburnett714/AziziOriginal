import dynamic from 'next/dynamic'


const SideBar = dynamic(() => import('./side_bar'))


const about = () => {
    return (
        <div className="flex flex-row flex-wrap bg-white border-4 border-blue-300">
        <div className="md:w-8/12 w-full">
          <div className="py-2 pl-2">
            <div className="dotted-border">
                <div className="text-3xl adlib text-yellow-900 pb-2">About Us</div>
            <div className="body-font azizi-blue text-xl pb-2">
              Azizi Kids© Is A Company That Is Dedicated To Bringing Kids The
              Best.
            </div>


            <div className="body-font">
              Our products and services have a distinct Swahili cultural
              influence. Azizi Kids© vision is focused around bridging the
              American and African cultures together. Through the interaction of
              Azizi, a courageous, bright young boy, we hope to show children
              how exciting it is to embrace other cultures. There is always
              something to learn and an opportunity to make friends with kids
              who have very different backgrounds. Children from modern Africa
              are very open to learning about other cultures and especially find
              the American culture quite fascinating. We also wanted to open up
              the culture of modern Africa to children everywhere. In return,
              the children of America can learn all about the Swahili culture
              too. That is why we created Azizi Kids©. With a normal, curious
              little boy like Azizi leading the way everybody is sure to learn
              something. This website has an activities page that will provide
              educational, positive fun for your children. There are easy
              recipes to create, crafts to make, and print-outs to color. We’ve
              also included a simple little dictionary of five endearing terms
              written in Swahili. Just think of how great it will be to hear
              your child (and perhaps you too) express these terms to each
              other. Azizi Kids© also has put together a merchandise line of
              high quality products that will let your children always have
              their new friend, Azizi, close by.
            </div>
            <div className="adlib azizi-blue text-xl py-2">CONTACT US</div>
            <div className="body-font">
              Here at Azizi Kids© we always welcome any feedback or questions
              that you may have. Our commitment to providing you an excellent
              multi-cultural experience runs deep. Just like Azizi himself, we
              are always willing to grow and learn.
            </div>
            <div className="body-font pt-2 text-xl">Please contact us at </div>
            <div><a href="mailto:info@azizikids.com" className="body-font azizi-blue">info@azizikids.com</a></div>
            <div><a href="tel:6103311775" className="body-font azizi-blue">(610) 331-1775</a></div>
            <div className="body-font">Azizi Kids LLC©</div>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 w-full p-2">
          <div><SideBar /></div>
        </div>
      </div>
    );
}

export default about;