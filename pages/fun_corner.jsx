import dynamic from 'next/dynamic'
import Link from 'next/link'
import Head from 'next/head'


const SideBar = dynamic(() => import('./side_bar'))

const fun_corner = () => {
    return (
        <div className="flex flex-row flex-wrap bg-white border-4 border-blue-300">
          <Head>
          <title>Fun Corner</title>
          </Head>
        <div className="md:w-8/12 w-full">
          <div className="py-2 pl-2">
            <div className="dotted-border">
            <div className="text-3xl adlib text-yellow-900 pb-2">Fun Corner</div>
            <div className="text-sm md:text-base body-font">
              I am so excited to teach you a little bit about the customs and
              traditions of Africa. This is going to be great fun, Rafiki. There
              is so much I want to show you. I decided to start with my
              favorites!
            </div>

            <div className="adlib azizi-blue text-lg md:text-xl pb-2 pt-4">
              DICTIONARY
            </div>
            <div className="text-sm md:text-base body-font">
              I thought it would be fun to teach you some of the things that I
              say every day.
            </div>

            <div className="text-sm md:text-base body-font">Maybe You Can Start Saying Them Too.</div>

            <li className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Hi .....</span>..... Jambo</li>
            <li className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Goodbye .....</span>..... Kwaheri</li>
            <li className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Friend .....</span>..... Rafiki</li>
            <li className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">I love you .....</span>..... Nakupenda</li>
            <li className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Goodnight .....</span>..... Lala Salama</li>

            <div className="adlib azizi-blue text-lg md:text-xl pb-2 pt-4">CRAFTS</div>
            <div className="body-font text-sm md:text-base">
              It is so fun to make and create things. I really enjoy it and have
              my entire room decorated with all the different crafts I have
              made. Maybe you can put some of the crafts from my culture in your
              room.
            </div>

            <div className="body-font text-base md:text-lg azizi-green pt-5">Click On The Links Below To Download Fun Pictures To Color:</div>

            <Link href="./images/Well.jpg"><a target="_blank" rel="noreferrer"><li className="body-font text-sm md:text-base azizi-red">Pundamilia at the Well</li></a></Link>
            <Link href="./images/Running.jpg"><a target="_blank" rel="noreferrer"><li className="body-font text-sm md:text-base azizi-blue">Tembo and Sungura Running</li></a></Link>
            <Link href="./images/Chase.jpg"><a target="_blank" rel="noreferrer"><li className="body-font text-sm md:text-base azizi-orange">The Chase</li></a></Link>
            <Link href="./images/Apologize.jpg"><a target="_blank" rel="noreferrer"><li className="body-font text-sm md:text-base azizi-green">Tembo and Sungura Apologize</li></a></Link>
            <Link href="./images/Fruits&Vegetables.jpg"><a target="_blank" rel="noreferrer"><li className="body-font text-sm md:text-base azizi-red">Mmmh Fruits and Vegetables</li></a></Link>

            <div className="adlib azizi-blue text-lg md:text-xl pb-2 pt-4">
              STUFF I DO….YOU CAN TOO!
            </div>
            <div className="body-font text-sm md:text-base">Always ask your Baba or Mama if you need some help!</div>

            <div className="body-font text-sm md:text-base azizi-red">Mombasa Fruit Snack(Serves 4)</div>
            <div className="body-font text-sm md:text-base azizi-green">You will need:</div>

            <li className="body-font text-sm md:text-base azizi-green">1 large Mango</li>
            <li className="body-font text-sm md:text-base azizi-green">½ a pineapple</li>
            <li className="body-font text-sm md:text-base azizi-green">1 cup liquid yogurt</li>

            <div className="body-font text-sm md:text-base">How to make it:</div>
            <div className="body-font text-sm md:text-base azizi-orange">
              Cut the mango and pineapple into cubes (ask Mama or Baba to do
              this for you).
            </div>
            <div className="body-font text-sm md:text-base azizi-orange">Put the fruit in a large bowl and mix.</div>
            <div className="body-font text-sm md:text-base azizi-orange">
              Take a few smaller bowls and put 1 serving of the mixed fruit in
              the bowls for each rafiki.
            </div>
            <div className="body-font text-sm md:text-base azizi-orange">
              Pour some yogurt equally over the mixed fruit in each bowl.
            </div>
            <div className="body-font">Share with your marafiki!</div>
            <div className="adlib azizi-blue text-lg md:text-xl pb-2 pt-4">
              ACTIVITIES
            </div>
            <div className="body-font pb-2 text-base md:text-lg azizi-green">Serengeti Rain Sticks</div>

            <div className="body-font text-sm md:text-base">
              Take a paper towel roll. Cover one end with poster board and tape.
            </div>
            <div className="body-font text-sm md:text-base">Fill the paper towel ¼ way with rice from the other end.</div>
            <div className="body-font text-sm md:text-base">Cover the other end with poster board and tape.</div>
            <div className="body-font text-sm md:text-base">Have fun listening to the different sounds of the rain.</div>
            <div className="body-font text-sm md:text-base">Have fun painting the outside of the paper towel roll.</div>
            <div className="body-font text-sm md:text-base pb-4">
              Try out zebra stripes, leopard spots or any other fun patterns.
            </div>
            <div className="body-font pb-2 text-base md:text-lg azizi-green">Savannah Masks</div>

            <div className="body-font text-sm md:text-base">Fold a paper plate in two.</div>
            <div className="body-font text-sm md:text-base">Cut out the eyes, nose and mouth</div>
            <div className="body-font text-sm md:text-base"> 
              Decorate the outside of the paper plate with a safari animal of
              your choice
            </div>
            <div className="body-font text-sm md:text-base">
              Punch two holes on the sides of the paper plate. Attach a string
            </div>
            <div className="body-font text-sm md:text-base">Your mask is ready for play!</div>

            <div className="adlib azizi-blue text-lg md:text-xl pb-2 pt-4">
              SAFARI ANIMALS:
            </div>
            <div className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Lion</span> - Simba <span className="azizi-orange">(see-m-bah)</span></div>
            <div className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Elephant</span> - Tembo <span className="azizi-orange">(teh-m-boh)</span></div>
            <div className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Zebra</span> - Punda Milia <span className="azizi-orange">(poon-dah-mee-lee-ah)</span></div>
            <div className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Giraffe</span> - Twiga <span className="azizi-orange">(twee-gah)</span></div>
            <div className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Rhino</span> - Kifaru <span className="azizi-orange">(kee-fah-rooh)</span></div>
            <div className="body-font text-sm md:text-base azizi-green"><span className="azizi-red">Leopard</span> - Chui <span className="azizi-orange">(choo-wee)</span></div>
          </div>

          </div>
        </div>
        <div className="md:w-4/12 w-full p-2">
          <div><SideBar /></div>
        </div>
      </div>
    );
}

export default fun_corner;