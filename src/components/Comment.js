import React, {Component} from 'react'
import Like from './Like';
import Header from './Header';
import Footer from './Footer';
import FooterBefore from './FooterBefore';


class Comment extends Component{
    
    


    render () {
      return (
        <div className="comment">
            <Header />
          <h3>Super Eagles need a ‘Jay Jay’ in Egypt —Adepoju</h3>
          <img src="/pics/okocha.jpeg" alt="OKocha" width="100%" height="450"/> 
          <p>Former Super Eagles midfielder Mutiu Adepoju has argued that the team 
              currently campaigning for the  Africa Cup of Nations in Egypt need creative players in the 
              mode of Austin ‘Jay Jay’ Okocha. The Super Eagles have struggled to score goals as they found 
              it hard to break down opposing defenders and scoring chances are hard to come by.
          </p>
          <p>
          “We (Nigeria) do not have creative midfielders like Jay Jay Okocha.
           In the present Eagles, John Mikel Obi needs to play with fast younger players who are mobile,” 
           Adepoju said in reference to Mikel stepping into the big shoes of Okocha. “The way they (Madagascar) played us without a fightback 
           annoyed most Nigerians. It was not a good game by the Eagles. Madagascar even created lots of chances. It’s not hard luck for Nigeria, 
           Madagascar were simply better,” Adepoju who was in Nigeria’s 1994, 2000 and 2002 Afcon squads added. He said the Eagles must have to fight
            harder in the knock stage if they wish to remain in the tournament. “Now the Eagles have to put on the Nigerian spirit and win their 
            remaining game(s) in the tournament,” he concluded.

Read more at: https://www.vanguardngr.com/2019/07/super-eagles-need-a-jay-jay-in-egypt-adepoju/
          </p>
         <p>Disclaimer </p>
        <p>Comments expressed here do not reflect the opinions of vanguard newspapers or any employee thereof.</p>
        <Like />
        <FooterBefore />
        <Footer />
          </div>

      );
    }
  };

  export default Comment;