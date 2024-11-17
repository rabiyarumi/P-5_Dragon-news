import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-4">Login with</h2>
      <div className="*:w-full space-y-2">
        <button className="btn btn-outline text-blue-500"><FaGoogle /><span>Login with Google</span></button>
        <button className="btn btn-outline"><FaGithub /><span>Login with Github</span></button>
      </div>
    </div>
  );
};

export default SocialLogin;
