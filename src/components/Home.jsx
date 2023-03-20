import React from 'react'
import vg from'../assets/2.webp'
import { AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,} from "react-icons/ai"
const Home = () => {
  return (
   <>
   
   <div className='home' id='home'>
      <main>
        <h1>TechSolution</h1>
        <p>Soultion Your All Tech Problem</p>
      </main>
    </div>
   
   <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit id natus reiciendis. Quas dolor provident dolores omnis at adipisci voluptate dolore quasi voluptas!
         Rem minima provident fugiat distinctio dolorum?</p>
    </div>
   </div>
<div className="home3" id='about'>
  <div>
    <h1>who we are ?</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam! Ipsam, quas quod possimus debitis molestias ipsa ut dolore eos at corporis labore velit 
      molestiae, ratione quae laborum assumenda aliquam.</p>
  </div>
</div>
<div className="home4" id='brands'>
  <div>
    <h1>Brands</h1>
    <article>
      <div style={{
        animationDelay:"0.3s"
      }}>
        <AiFillAmazonCircle/>
        <p>Amazon</p>
      </div>
      <div style={{
        animationDelay:"0.5s"
      }}>
        <AiFillYoutube/>
        <p>Youtube</p>
      </div>
      <div style={{
        animationDelay:"0.7s"
      }}>
        <AiFillGoogleCircle/>
        <p>Google</p>
      </div>
      <div style={{
        animationDelay:"1s"
      }}>
        <AiFillInstagram/>
        <p>Instagram</p>
      </div>
    </article>
  </div>
</div>
   </>
  )
}

export default Home
