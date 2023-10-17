import Pic from '../images/logo-bookmark.svg';
const Header = () => {
  return (
    <div className="header">
      <img src={Pic} alt="logo"/>
      <div>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
      </div>
    </div>
    )
}


export default Header