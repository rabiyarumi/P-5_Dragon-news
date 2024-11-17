import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    return (
        <div className='py-6 flex justify-between items-center'>
            <div>
            <p>{user && user.displayName}</p>

            </div>
            <div className="nav space-x-4">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center">

                {
                    user && user?.email ?
                    <div className='h-10 w-10 '>
                        <img src={user?.photoURL} className='h-full rounded-full' alt="" />
                    </div>
                    :
                    <img src={userIcon} alt="" />
                }
                

                {
                    user && user?.email ?
                    <Link  onClick={logOut} className='btn btn-neutral rounded-none'>Log Out</Link>

                     :
                     <Link to={"/auth/login"} className='btn btn-neutral rounded-none'>Login</Link>

                }

            </div>
        </div>
    );
};

export default Navbar;