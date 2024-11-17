import  { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState({})
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();

    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if(password.length < 6){
      setErrorMessage({...errorMessage, password:"Password must be 6 character or more "});
      return;
    }


    createNewUser(email, password)
    .then(result => {
      const user = result.user;
      
      setUser(user)
      updateUserProfile({
        displayName: name,
        photoURL: photo
      })
      .then(() => {
        navigate("/")
      })
      .catch(error => console.log(error))
    })
    .catch(error => console.log(error.message))
  }
  return (
    <div className="flex justify-center items-center  my-20">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none pb-8">
        <h1 className="font-semibold text-3xl text-center py-8 border-b-2 mx-8">
          Register your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
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
              errorMessage.password && (
                <label className="label text-sm text-red-600">
              {errorMessage.password}
            </label>
              )
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold text-sm">
          Already Have An Account ?
          <Link to={"/auth/login"} className="text-[#F75B5F]"> Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
