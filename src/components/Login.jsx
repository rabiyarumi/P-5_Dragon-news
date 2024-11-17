import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext)
  const [errorMsg, setErrorMsg] = useState({});
  const location = useLocation();
  const navigate = useNavigate();


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
    .then(result => {
      const user = result.user;
  
      setUser(user);
      navigate(location?.state ? location.state : "/")
    })
    .catch((error) => {
     setErrorMsg({...errorMsg, login: error.message})
    });

  }
  return (
    <div className="flex justify-center items-center  my-20">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none pb-8">
        <h1 className="font-semibold text-3xl text-center py-8 border-b-2 mx-8">Login your account</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
              errorMsg.login && 
              <label className="label text-sm text-red-600">
              {errorMsg.login}
            </label>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold text-sm">
        Dont’t Have An Account ?  
        <Link to={"/auth/register"} className="text-[#F75B5F]"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
