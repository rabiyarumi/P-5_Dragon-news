import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center bg-base-200 p-2'>
            <p className='bg-[#D72050] text-white px-4 h-fit py-2 font-bold'>Latest</p>
            <Marquee pauseOnHover={true} speed={90} className='space-x-10 '>
                <Link to={"/news"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugiat eius deleniti dolore nemo?</Link>
                <Link to={"/news"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugiat eius deleniti dolore nemo?</Link>
                <Link to={"/news"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugiat eius deleniti dolore nemo?</Link>
                <Link to={"/news"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugiat eius deleniti dolore nemo?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;