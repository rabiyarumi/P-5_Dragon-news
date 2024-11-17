import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='container mx-auto font-poppins bg-[#F3F3F3] min-h-screen'>
            <header className='py-3 border-2'>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;