import React from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import useToken from "../../hooks/useToken";
import Loading from "../../Sheared/Loading";
import { data } from "autoprefixer";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [token] = useToken(user);
  let from = location.state?.from?.pathname || "/";
  let errElement;
  let textInput = React.createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (user || Guser) {
    navigate(from, { replace: true });
  }
  if (loading || Gloading) {
    return <Loading />;
  }
  if (error || Gerror) {
    errElement = (
      <p className="text-red-500">
        <small>
          {error?.message} {Gerror.message}
        </small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const loginGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div class="hero py-12 ">
      <div class="  w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div className="w-full block mx-auto">
            <div className="py-4 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label"> Email</label>
                <input
                  ref={textInput}
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "passsword is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "add special digit",
                    },
                  })}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <label>
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
                <label className="label"> Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must be 6 digit",
                    },
                  })}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <label className="label">
                  {errors.pasword?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.pasword.message}
                    </span>
                  )}
                  {errors.pasword?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.pasword.message}
                    </span>
                  )}
                </label>
                <p className="text-red-700 font-bold">{errElement}</p>
                <input type="submit" className="btn btn-primary" /> <br />
                <button
                  className="btn btn-secondary my-4"
                  onClick={loginGoogle}
                >
                  Login Google
                </button>
              </form>
              <label>
                Not registered?{" "}
                <Link to={"/signup"} className="text-green-700 font-bold">
                  Signup
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
