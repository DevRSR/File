import pix from "../images/icon-arrow.svg";


const Faq = () => {
  
 function toggle (e) {
  const parent = e.target.parentElement;
  
  const target = parent.lastElementChild;
   
  if(target.classList.contains('article')){
    target.classList.toggle('up')
   }
  }
  
  
  return (
    <div className="faq">
     <div>
      <h5>Frequently Asked Questions</h5>
       <p className = 'parag'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
     </div>
     <div className ="list">
     <hr />
      <div className="ul" onClick={ e => toggle(e) }>
       <div className="head">
        <div className='div'>
         <p>What is Bookmark?</p>
        </div>
        <div>
          <img src={pix} alt=""/>
        </div>
       </div>
       <div className='article'>
        <small>
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. </small>
      </div>
      </div>
      <hr />
      <div className="ul" onClick={ e => toggle(e) }>
       <div className="head">
        <div className='div'>
         <p>How can I request a new browser?</p>
        </div>
        <div>
         <img src={pix} alt=""/>
        </div>
       </div>
       <div className='article'>
        <small>
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. </small>
       </div>
      </div>
      <hr />
       <div className="ul" onClick={ e => toggle(e) }>
        <div className="head">
         <div className='div'>
          <p>Is there a mobile app?</p>
         </div>
         <div>
          <img src={pix} alt=""/>
         </div>
        </div>
        <div className='article'>
         <small>
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. </small>
       </div>
      </div>
     <hr />
     <div className="ul" onClick={ e => toggle(e) }>
       <div className="head">
        <div className='div'>
         <p>What about other Chromium browsers?</p>
        </div>
        <div>
         <img src={pix} alt=""/>
        </div>
       </div>
       <div className='article'>
        <small>
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. </small>
       </div>
      </div>
     <hr />
     </div>
     <div className='moreInfo'>
      <a href="#">More Info</a>
     </div>
    </div>
    )
}


export default Faq;