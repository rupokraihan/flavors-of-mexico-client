import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../utils/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const { signIn,setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);

      })
      .catch(error => {
      console.log('error',error.message)
    })
  }

  const githubGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const githubUser = result.user;
        console.log(githubUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }


  const from = location.state?.from?.pathname || "/";
  

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        setUser(result.user);;
        form.reset();
        navigate(from, {replace:true})
      })
      .catch(error => {
      console.log(error)
    })
    
  }
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-8">
              Login <span className="text-blue-600 font-bold">Flavors of Mexico!</span>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <div
                    to="/register"
                    className="label-text-alt link link-hover mt-4"
                  >
                    <Link to="/register">Create New Account</Link>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <div className="mx-auto mb-6">
              <p className="text-lg text-center ">or</p>
              <button onClick={handleGoogleLogin} className="my-btn">
                Sign in with google
              </button>
              <p className="text-lg text-center mt-2">or</p>
              <button onClick={githubGithubLogin} className="my-btn ">
                Sign in with Git hub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
