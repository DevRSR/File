import { useState } from "react";
import tab1 from "../illustration-features-tab-1.svg"
import tab2 from "../illustration-features-tab-2.svg"
import tab3 from "../illustration-features-tab-3.svg"

const Scroll = () => {
  const [ bookmark, setBook ] = useState(true);
  const [Intel , setIntel] = useState(false);
  const [ search, setSearch] = useState(false);
  
  const handleTab1 = () => {
    setSearch(false);
    setIntel(false);
    setBook(true);
  }
  const handleTab2 = () => {
    setSearch(true);
    setIntel(false);
    setBook(false);
  }
  const handleTab3 = () => {
    setSearch(false);
    setIntel(true);
    setBook(false);
  }
  
  
  return (
   <div className="flex">
   <div className="feature">
     <h2>Features</h2>
     <p>Our aim is to make it quick and easy for you to access your favourite websites.Your bookmarks sync between your devices so you can access them on the go.
     </p>
   </div>
    <div className="row">
     <div className="border" onClick={handleTab1}>
       <p>Simple Bookmarking</p>
        { bookmark && <div></div> }
       </div>
      <div className="border" onClick={handleTab2}>
       <p>Speedy Searching</p>
        { search && <div></div> }
       </div>
      <div className="border" onClick={handleTab3}>
       <p>Easy Sharing</p>
        { Intel && <div></div> }
       </div>
     </div>
     <div className = "show">
     { bookmark && <div> 
     <div className="image">
      <img src={tab1} />
      </div>
       <div className="coln">
        <h2>Bookmark in one click</h2>
        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
         <a href="#">More Info</a>
       </div>
      </div> }
      { search && <div>
      <div className="image">
       <img src={tab2} alt=""/>
      </div>
       <div className="coln">
        <h2>Intelligent search</h2>
        <p>Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.</p>
        <a href="#">More Info</a>
       </div>
      </div> }
      { Intel && <div>
      <div className="image">
       <img src={tab3}/>
      </div>
       <div className="coln">
        <h2>Share your bookmarks</h2>
        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
        <a href="#">More Info</a>
       </div>
      </div> }
     </div>
    </div>
    )
}


export default Scroll;