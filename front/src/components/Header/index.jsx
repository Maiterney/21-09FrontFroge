import { Loupe, Logo } from "../../svg/svg";

export default function Header() {
  return (
    <div className="container">
        <div className="row">
            <div className="navBar">
                <div className="leftNav">
                    <div className="logo">
                        <Logo fill="#fff" width="100" height="34"/>
                    </div>
                    <ul className="navLinks">
                        <li><a href="#top">Home</a></li>
                        <li><a href="#destination">Destination</a></li>
                        <li><a href="#tour">Tour packages</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About us</a></li>
                    </ul>
                </div>
                <div className="search">
                    <Loupe fill="#fff" width="15px" height="15px"/>
                </div>
            </div>
        </div>
    </div>
  )
}
