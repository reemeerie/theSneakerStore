import React, { useState, useEffect, useContext } from "react";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Formik } from "formik";

const baseUrl = "https://snk-api.vercel.app/api/v1/login";

const Login = () => {
  const [user, setUser] = useState("");
  const { itemsCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const alreadyUser = window.localStorage.getItem("loggedUser");
    if (alreadyUser && alreadyUser.length > 10) {
      const usuario = JSON.parse(alreadyUser);
      navigate(`/user/${usuario.id}`);
    } else {
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      window.localStorage.setItem("cart", JSON.stringify(itemsCarrito));
    }
    if (user) {
      window.location.href = "/";
    }
  }, [user, navigate, itemsCarrito]);

  return (
    <>
      <div className="loginContainer">
        <div className="center">
          <h1 className="titulo">Log in</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              let errors = {};
              if (!values.email) {
                errors.email = "Porfavor ingrese su email";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  values.email
                )
              ) {
                errors.email = "Porfavor ingrese un mail valido";
              }
              if (!values.password) {
                errors.password = "Porfavor ingrese su contraseña";
              }
              return errors;
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                const dataLogin = {
                  emailIngresado: values.email,
                  passwordIngresada: values.password,
                };
                const { data } = await axios.post(baseUrl, dataLogin);
                setUser(data);
                resetForm();
              } catch (error) {
                Swal.fire({
                  title: "Invalid user or password",
                  confirmButtonColor: "#ffc107",
                });
              }
            }}
          >
            {({
              handleSubmit,
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
            }) => (
              <form action="" onSubmit={handleSubmit}>
                <div className="txt_field">
                  <input
                    type="text"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <span></span>
                  <label>Email</label>
                </div>
                {touched.email && errors.email && (
                  <div className="error">{errors.email} </div>
                )}
                <div className="txt_field">
                  <input
                    type="password"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <span></span>
                  <label>Password</label>
                </div>
                {touched.password && errors.password && (
                  <div className="error last">{errors.password} </div>
                )}
                <div className="pass">Forgot password?</div>
                <input type="submit" value="Login" />
                <div className="signup_link">
                  Not a member?{" "}
                  <Link to="/signup" className="linkto">
                    Signup
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
