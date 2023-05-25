import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Header = () => {

    const navOptions = <>
        <li><Link to='/' className="Cinzel">Home</Link></li>
        <li><Link to='menu' className="Cinzel">Menu</Link></li>
        <li><Link to='order/salad' className="Cinzel">Order Food</Link></li>      
        <li><Link to='' className="Cinzel">Item</Link></li>
    </>

    return (
        <div className="navbar max-w-screen-2xl mx-auto fixed z-10 bg-opacity-10 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navOptions}
                    </ul>
                </div>
                <img className="w-20 h-16 ml-10" src={logo} alt="" />
                <a className="btn btn-ghost Cinzel text-2xl font-semibold">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Get started</a> */}
            </div>
        </div>
    );
};

export default Header;