import pix from "../icon-arrow.svg";


const Faq = () => {
  
  function toggle () {
    
  }
  return (
    <div className="faq">
     <div>
      <h3>Frequently Asked Questions</h3>
       <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
     </div>
     <div className ="list">
     <hr />
      <div className="ul" onClick={toggle}>
       <div className="head">
        <p>What is Bookmark?</p>
        <img src={pix} alt=""/>
       </div>
        <article  className="article">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
        </article>
      </div>
      <hr />
      <div className="ul" onClick={toggle}>
       <div className="head">
        <p>How can I request a new browser?</p>
        <img src={pix} alt=""/>
       </div>
      <article className="hid">
        <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
        </article>
      </div>
      <hr />
       <div className="ul" onClick={toggle}>
        <div className="head">
         <p>Is there a mobile app?</p>
         <img src={pix} alt=""/>
        </div>
        <article className="hid">
         <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.</p>
         </article>
      </div>
     <hr />
     <div className="ul" onClick={toggle}>
       <div className="head">
        <p>What about other Chromium browsers?</p>
        <img src={pix} alt=""/>
       </div>
       <article className="hid">
         <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>
        </article>
      </div>
     <hr />
     </div>
     <div>
      <a href="#">More Info</a>
     </div>
    </div>
    )
}


export default Faq;