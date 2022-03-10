import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Register = (clase) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState({
    display: false,
    message: "",
  });
  const navigate = useNavigate();

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitChange = (e) => {
    e.preventDefault();
    axios
      .post("/user/register", {
        name,
        lastName,
        password,
        email,
      })
      .then((data) =>
        data.status === 201
          ? setDisplay({
              display: true,
              message: "Usuario registrado con éxito. Serás redireccionado!",
            })
          : ""
      )
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        setDisplay({
          display: true,
          message: "Mail ya existente en la base de datos",
        });
        console.log(err);
      });
  };
  return (
    <form onSubmit={submitChange}>
      <Alert param={display} />
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Nombre</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Nombre..."
                  value={name}
                  onChange={nameChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Apellido</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  placeholder="Apellido.."
                  value={lastName}
                  onChange={lastNameChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email..."
                  value={email}
                  onChange={emailChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Contraseña</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Contraseña..."
                  value={password}
                  onChange={passwordChange}
                />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Registrar</button>
              </div>

              <Link to="/">
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </Link>
            </div>
          </section>
        </div>
        <Link to="/">
          <button className="modal-close is-large" aria-label="close"></button>
        </Link>
      </div>
    </form>
  );
};

export default Register;
