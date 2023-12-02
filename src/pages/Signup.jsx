import { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

const inputClasses =
  "text-black border-none p-6 text-xl border-solid border-6 border-black focus:outline-offset-none";
const buttonClasses =
  "py-2 px-4 bg-custom-red border-none cursor-pointer text-white rounded font-bold text-lg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const gridClasses = `grid w-4/6 ${
    showPassword ? "grid-cols-1fr 1fr" : "grid-cols-2fr 1fr"
  }`;

  const handleSignIn = async () => {
    console.log(formValues);
  };

  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0 bg-[0,0,0,0.5] h-screen w-screen grid grid-rows-[15vh,85vh]">
        <Header login />
        <div className="gap-2  flex flex-col items-center justify-center">
          <div className="flex flex-col text-center text-4xl">
            <h1 className="px-1">Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere, cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className={gridClasses}>
            <input
              className={inputClasses}
              type="email"
              name="email"
              placeholder="Email address"
              value={formValues.email}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  [event.target.name]: event.target.value,
                })
              }
            />
            {showPassword && (
              <input
                className={inputClasses}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            )}
            {!showPassword && (
              <button
                className={buttonClasses}
                onClick={() => setShowPassword(true)}
              >
                Get Started
              </button>
            )}
          </div>
          <button className={buttonClasses} onClick={handleSignIn}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
