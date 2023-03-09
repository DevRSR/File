import chrome from "../logo-chrome.svg"
import fire from "../logo-firefox.svg"
import opera from "../logo-opera.svg"

const Download = () => {
  return (
    <div className="download">
     <div className="four"> 
      <h3>Download the extension</h3>
       <p>
        We’ve got more browsers in the 
        pipeline. Please do let us know if
        you’ve got a favourite you’d like
        us to prioritize.
       </p>
     </div>
     <div>
       <div className="card">
         <div>
          <img src={chrome} alt=""/>
         </div>
          <h4>Add to Chrome</h4>
          <p>Minimum version 62</p>
          <a href="#">Add & Install Extension</a>
        </div>
       <div className="card">
         <div>
          <img src={fire} alt=""/>
         </div>
         <h4>Add to Firefox</h4>
         <p>Minimum version 55</p>
         <a href="#">Add & Install Extension</a>
       </div>
       <div className="card">
         <div>
          <img src={opera} alt=""/>
         </div>
         <h4>Add to Opera</h4>
         <p>Minimum version 46</p>
         <a href="#">Add & Install Extension</a>
        </div>
       </div>
     </div>
    )
}


export default Download;