import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Sheared/Loading";
import useToken from "../../hooks/useToken";
import { MdCall } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const Sign = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || gUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  const signinGoogle = () => {
    signInWithGoogle();
  };
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gloading) {
    return <Loading />;
  }
  return (
    <div className=" ">
      <div className="grid lg:grid-cols-3 gap-5 mt-14 px-12 my-7 ">
        <div className="border-2 h-[300px] w-[400px] shadow  flex content-center items-center">
          <div className="block mx-auto">
            <span className="text-5xl rounded  ">
              <MdCall />
            </span>
            <h1 className="text-xl font-bold">Contact us Anytime</h1>
            <a href="www.google.com" target="_blank">
              Mobile: 012 345 678
            </a>
            <p>Fax: 123 456 789</p>
          </div>
        </div>
        <div className="border-2 h-[300px] w-[400px] shadow  flex content-center items-center">
          <div className="block mx-auto">
            <span className="text-5xl rounded  ">
              <AiOutlineMail />
            </span>
            <h1 className="text-xl font-bold">Write Some Words</h1>
            <a href="www.google.com" target="_blank" className="">
              Support24/7@example.com
            </a>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="border-2 h-[300px] w-[400px] shadow  flex content-center items-center">
          <div className="block mx-auto">
            <span className="text-5xl rounded  ">
              <GoLocation />
            </span>
            <h1 className="text-xl font-bold">Our Location</h1>
            <a href="www.google.com" target="_blank">
              (800) 123 456 789 / (800) 123 456 789
            </a>
            <p>info@example.com</p>
          </div>
        </div>
      </div>

      <div class="hero py-12 ">
        <div class="  w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div className="py-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label"> Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                <label className="label"> Email</label>
                <input
                  type="email"
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
                <input
                  type="checkbox"
                  onClick={() => setAgree(!agree)}
                  class="checkbox checkbox-xs"
                />
                <span
                  className={`${
                    agree ? " text-black" : "text-red-700"
                  } text-18 ml-3`}
                >
                  accept all tearms &amp; conditions
                </span>
                <br />
                <input
                  disabled={!agree}
                  type="submit"
                  className="btn btn-primary mt-3"
                />
                <br />
              </form>
              <button class="btn btn-warning my-3" onClick={signinGoogle}>
                SignWith Goggle
              </button>{" "}
              <br />
              <label>
                Have alreay an account{" "}
                <Link to={"/login"} className="text-green-700 font-bold">
                  Login
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
