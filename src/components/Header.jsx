import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center gap-5 py-5 ">
           <div className="logo ">
            <img src={logo} alt="logo" />
           </div>
           <p className="text-slate-400 font-semibold ">Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;