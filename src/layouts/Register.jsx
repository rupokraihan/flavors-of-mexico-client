import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  const { user, createUser, userInfo } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.userphoto.value;

    console.log(name,email,password,photo)

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        
        userInfo(loggedUser, name, photo)
        .then ((result)=>{})
        form.reset()
      })
      .catch((error) => {
        console.log(error);
      });
    
    
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-8">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  className="input input-bordered"
                  
                />

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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="userphoto"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link to="/login">
              <button className="btn btn-link">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
