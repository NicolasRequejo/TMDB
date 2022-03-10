import axios from "axios";
import { useContext, useState } from "react";
import { LogContext } from "../context/LogContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {
  const [lemail, setLemail] = useState("");
  const [lpassword, setLpassword] = useState("");
  const { togleAuth } = useContext(LogContext);

  const navigate = useNavigate();

  const emailOnChange = (e) => {
    setLemail(e.target.value);
  };
  const passwordOnChange = (e) => {
    setLpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/login", { email: lemail, password: lpassword })
      .then((data) => togleAuth(data.data))
      .then(() => navigate("/movie"))
      .catch(() => alert("Mail o contraseña incorrectos!"));
  };

  const handleGoogle = () => {
    navigate("/google");
  };

  return (
    <div className="container mt-6 card">
      <div className="card-header">
        <p className="card-header-title"> Inicia Sesión!</p>
      </div>
      <form className="card-content box" onSubmit={handleSubmit}>
        <div className="field ">
          <label className="label">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={emailOnChange}
              value={lemail}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field ">
          <label className="label">Contraseña</label>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="*******"
              name="password"
              onChange={passwordOnChange}
              value={lpassword}
            />

            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
