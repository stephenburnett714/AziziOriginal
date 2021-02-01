import dynamic from 'next/dynamic'


const SideBar = dynamic(() => import('./side_bar'))

const author = () => {
    return (
        <div className="flex flex-row flex-wrap bg-white border-4 border-blue-300">
        <div className="md:w-8/12 w-full">
          <div className="py-2 pl-2">
            <div className="dotted-border">
            <div className="text-3xl adlib text-yellow-900 pb-2">About The Author</div>
            <div className="azizi-blue body-font text-lg md:text-xl pb-3">E.J. Wakonyo</div>
      <div className="body-font pb-2 text-sm md:text-base">
        Esther grew up in modern Africa (Kenya) and currently lives in the
        United States (Pennsylvania) with her family. It is not uncommon for her
        to get questions from people about the differences in culture and
        custom. Esther saw that as a great opportunity to show others why she is
        so passionate about both cultures. It lead to the inspiration for
        developing the character, Azizi. Esther knows that this loveable little
        boy will have the ability to open up the doors that bring unique
        cultures together through amazing stories. In the end, we usually
        discover that those differences are the best parts of our relationships
        with all people.
      </div>
      <div className="body-font pb-2 text-sm md:text-base">
        As you start reading all the stories of Azizi you will discover the
        amazing gift that Esther has for story telling that combines social
        education and emotional development. Her approach is fresh and her
        perspective is enlightening.
      </div>
      <div className="body-font pb-2 text-sm md:text-base">
        The first book by Esther, Lala Salama – Azizi And The Dancing Monsters,
        is a delightful story that teaches a valuable lesson in courage. It is
        the introduction of Azizi to the world and it leaves you wanting more.
        You will find that both you and your children will be enwrapped in the
        story that has Azizi determined to be brave forever. The words and music
        create an amazing tale that is sure to be remembered.
      </div>
      <div className="body-font text-sm md:text-base">
        Towards the end of this year be sure to look for other incredible
        stories. There are three more adventures with Azizi that are going to be
        shared with you, your child, and perhaps the world. Each one guarantees
        to be an amazing, enchanting tale that helps positively develop every
        aspect of your child’s personal growth.
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

export default author;