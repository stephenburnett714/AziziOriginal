import dynamic from 'next/dynamic'


const SideBar = dynamic(() => import('./side_bar'))

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap bg-white border-4 border-blue-300">
      <div className="md:w-8/12 w-full">
        <div className="py-2 pl-2">
          <div className="dotted-border">
          <div className="adlib azizi-orange text-xl pb-2">Jambo! Hi!</div>
          <div className="inline azizi-green adlib text-xl pb-2 items-center">
            <div>My name is Azizi.</div>
          </div>
          <div className="adlib  azizi-green text-xl pb-1">
            Do you like to have fun? I sure do!
          </div>

          <div className="body-font pb-2">
            There are so many wonderful, fun things around us to do. I love
            reading books, hanging out with my friends and family and going on
            adventures. I can tell you about some of the cool places around me.
            My pals and I love to go on adventures in the Savannah Park, the big
            cities, the beach….and wherever else there is fun! It is very
            exciting and everybody is always curious about my adventures – no
            matter where I am. Every story and tale takes me off on an exciting
            adventure. Do you wanna come with me? Together, you and I can
            discover all kinds of amazing things. That's what friends do!
          </div>
          <div className="adlib text-xl azizi-green pb-2">
            We'll have so much fun rafiki.
          </div>
          <div className="adlib azizi-blue text-xl pb-2">
            Rafiki means friend in Swahili.
          </div>
          <div className="adlib text-xl azizi-green pb-1">
            Did you know that?
          </div>
          <div className="body-font pb-2">
            I can’t wait to show you how to make some really yummy snacks. I am
            learning too.....we can learn together. The fruits and veggies taste
            so yummy! Then you can show your friends how to make tasty treats.
            I’ll also show you how to make really cool crafts. Be sure to visit
            my fun corner. There is also a page just for your parents. Here they
            willl soon find some great everyday things for you and cool stuff
            you can wear that have wonderful Swahili sayings on them. Stay
            tuned!
          </div>
          <div className="adlib text-xl azizi-green pt-5">
            And don't forget, Rafiki, tell your parents about all the fun we are
            having together!
          </div>
          </div>
        </div>
      </div>
      <div className="md:w-4/12 w-full p-2">
        <div><SideBar /></div>
      </div>
    </div>
  );
}
