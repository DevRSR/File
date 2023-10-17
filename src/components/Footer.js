import pix from "../images/logo-bookmark.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
const Footer = () => {
  return (
   <footer>
    <div className="footflex">
     <div>
      <img className="fimg"src={pix} alt=""/>
      <nav>
       <a href="#">FEATURE</a>
       <a href="#">PRICING</a>
       <a href="#">CONTACT</a>
      </nav>
     </div>
     <div className="social">
      <img src={facebook} alt=""/>
      <img src={twitter} alt=""/>
     </div>
    </div>
   </footer>
    )
}


export default Footer;