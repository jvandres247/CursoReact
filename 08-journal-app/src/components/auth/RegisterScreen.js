import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../redux/actions/ui";
import { startRegisterWithEmailPasswordName } from "../../redux/actions/auth";

export const RegisterScreen = () => {
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    username: "Andres",
    email: "andres@andres.com",
    password: "123456",
    confirm: "123456",
  });

  const { username, email, password, confirm } = formValues;

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, username))
    }
  };

  const isFormValid = () => {
    if (username.trim().length === 0) {
      dispatch(setError("El nombre es requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("El email no es valido"));
      return false;
    } else if (password !== confirm || password.length < 5) {
      dispatch(setError("Las contraseñas no coincinden o es demasiado corta "));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister} className='animate__animated animate__fadeIn animate__faster'>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Nombre"
          name="username"
          className="auth__input"
          autoComplete="off"
          value={username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Correo Electronico"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Repite tu Contraseña"
          name="confirm"
          className="auth__input"
          value={confirm}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Registrar
        </button>

        <Link to="/auth/login" className="link">
          ¿Ya tienes cuenta?
        </Link>
      </form>
    </>
  );
};
