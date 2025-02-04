// pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE_FOOTER_ITEMS } from "../../constants/footer";
import { Logos } from "../../components/logos";
import {
  FINANCIAL_PORTFOLIO_APP_TAGLINE,
  FORGOT_PASSWORD,
} from "../../constants/text";
import Footer from "../../components/footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (username && password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/dashboard");
    } else {
      setError("Please fill in both fields");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left section of landing page */}
      <section className="hidden w-full lg:w-1/2 lg:flex lg:flex-col flex-center justify-between bg-sky-600 space-y-10">
        <div className="h-full flex-col items-center justify-center space-y-30">
          <Logos type="headerLogo" bg="light" />
          <p className="place-items-center text-5xl font-bold text-blue-300 m-10">
            {FINANCIAL_PORTFOLIO_APP_TAGLINE}
          </p>
          <div className="flex-center justify-start m-10">
            <Logos type="loginScreenImg" />
          </div>
        </div>
      </section>
      {/* Right section of landing page */}
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:flex lg:justify-center lg:items-center bg-primary-blue">
        <div className="flex-col h-[90%] flex-center">
          <div className="space-y-12 flex flex-col items-center justify-center w-[500px]">
            <Logos type="iconLogo" />
            {error && <h2 className="h-2 text-red-500">{error}</h2>}
            <div className="w-1/2 lg:w-full">
              <label className="input-label required">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                tabIndex={1}
                required
              />
            </div>
            <div className="w-1/2 lg:w-full">
              <label className="input-label required">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                tabIndex={2}
                required
              />
            </div>
            <div className="w-1/2 lg:w-full">
              <button
                className="primary-btn w-full"
                onClick={handleClick}
                type="submit"
                onSubmit={handleClick}
              >
                Login
              </button>
              <p className="text-neutral-400 text-sm ml-3">{FORGOT_PASSWORD}</p>
            </div>
          </div>
        </div>
        <Footer items={LANDING_PAGE_FOOTER_ITEMS} />
      </section>
    </div>
  );
};

export default Login;
