import { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const inputClasses =
  "text-black border-none px-4 py-2 w-64 text-xl border-solid border-6 border-black focus:outline-offset-none";
const buttonClasses =
  "py-2 px-4 bg-custom-red w-64 border-none cursor-pointer text-white rounded font-bold text-lg";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // const gridClasses = `grid w-4/6 ${
  //   showPassword ? "grid-cols-1fr 1fr" : "grid-cols-2fr 1fr"
  // }`;

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(FirebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(FirebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0 bg-[0,0,0,0.5] h-screen w-screen grid grid-rows-[15vh,85vh]">
        <Header />
        <div className="gap-8 h-screen flex flex-col items-center justify-center">
          <div className="p-8 bg-custom-transparent w-96 text-white gap-4">
            <div className="flex justify-center items-center p-8 text-2xl font-semibold">
              <h3>Login</h3>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">
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

              <button onClick={handleLogIn} className={buttonClasses}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
