import img from "../illustration-hero.svg"

const Intro = () => {
  return (
   <>
    <div className="intro">
    <div>
      <div className="col">
       <h1>A Simple Bookmark Manager</h1>
       <p> 
         A clean and simple interface to 
         organize your favourite websites.
         Open a new browser tab and see
         your sites load instantly. Try it
         for free.
       </p>
       <div className='flex-btn'>
        <a href="#">Get it on Chrome</a>
        <a href="#">Get it on Firefox</a>
       </div>
      </div>
      <div className="img">
       <img src={img}/>
      </div>
    </div>
  </div>
 </>
  )
}


export default Intro;