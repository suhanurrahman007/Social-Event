import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import swal from "sweetalert";

const Registration = () => {
  const { createUsers } = useContext(AuthContext);
  const [RegistrationError, setRegistrationError] = useState("");
  const [showPassword, setShowPassword] = useState(false)


  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
    const passwordPatternUpper = /(?=.*?[A-Z])/;
    const passwordPatternSpecial = /(?=.*?[#?!@$%^&*-])/;
    if (password.length < 6) {
      setRegistrationError("Password Should Be At Least 6 Characters");
      return;
    }

    if (!passwordPatternUpper.test(password)) {
      setRegistrationError("Password Must Be One Upper Case");
      return;
    }
    if (!passwordPatternSpecial.test(password)) {
      setRegistrationError("Password Must Be One Special Character");
      return;
    }

    setRegistrationError("");
    createUsers(email, password)
      .then((result) => {
        console.log(result.user);
        swal(
          "Good job!",
          "Your account has been created successfully!",
          "success"
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center mt-8">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-3xl font-extrabold text-center text-orange-900 text-opacity-50">
          Please Registration
        </h2>
        <form onSubmit={handleRegistration} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="Name"
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
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
              >
                <input
                  onClick={() => setShowPassword(!showPassword)}
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  id="checkbox"
                />
                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    // stroke-width="1"
                  >
                    <path
                      //   fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      //   clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="checkbox"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </label>
            </div>
          </div>

          <div className="form-control mt-3">
            <button
              type="submit"
              className="btn  text-white bg-[#2c1e6d] hover:bg-[#140d32]"
            >
              Sign up
            </button>
          </div>
        </form>
        {RegistrationError && (
          <p className="text-red-900 text-center -mt-5 py-3">
            {RegistrationError}
          </p>
        )}
        <p className="mb-7 flex justify-center  text-sm font-light leading-normal text-inherit antialiased">
          Already have an account?
          <Link
            to={"/login"}
            href="#signup"
            className="ml-1 block  text-sm font-bold leading-normal text-pink-500 antialiased"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
