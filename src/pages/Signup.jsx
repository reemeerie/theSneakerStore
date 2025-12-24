import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Formik } from "formik";

const Signup = () => {
  const navigate = useNavigate();
  const baseUrl = "https://snk-api.vercel.app/api/v1/users";

  return (
    <div className="loginContainer">
      <div className="center">
        <h1 className="titulo">Sign up</h1>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
            repeatedPassword: "",
          }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              errors.email = "Porfavor ingresa un email";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email = "Porfavor ingresa un mail valido";
            }
            if (!values.password) {
              errors.password = "Porfavor ingrese una contraseña";
            }
            if (!values.name) {
              errors.name = "Porfavor ingrese su nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
              errors.name = "Porfavor ingrese un nombre valido";
            }
            if (!values.repeatedPassword) {
              errors.repeatedPassword = "Porfavor repita su contraseña";
            }
            if (!values.surname) {
              errors.surname = "Porfavor ingrese su apellido";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname)) {
              errors.surname = "Porfavor ingrese un apellido valido";
            }
            return errors;
          }}
          onSubmit={async (values, { resetForm }) => {
            const id = Math.floor(Math.random() * 100000000);
            try {
              const dataSignup = {
                id,
                nombre: values.name,
                apellido: values.surname,
                password: values.password,
                repeatedPassword: values.repeatedPassword,
                email: values.email,
              };
              await axios.post(baseUrl, dataSignup);
              navigate("/login");
              resetForm();
            } catch {
              Swal.fire({
                title: "Passwords must match",
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
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span></span>
                <label>Name</label>
              </div>
              {touched.name && errors.name && (
                <p className="error">{errors.name} </p>
              )}
              <div className="txt_field">
                <input
                  type="text"
                  value={values.surname}
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span></span>
                <label>Surname</label>
              </div>
              {touched.surname && errors.surname && (
                <div className="error">{errors.surname} </div>
              )}
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
                <div className="error">{errors.password} </div>
              )}
              <div className="txt_field">
                <input
                  type="password"
                  value={values.repeatedPassword}
                  name="repeatedPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span></span>
                <label>Repeat your password</label>
              </div>
              {touched.repeatedPassword && errors.repeatedPassword && (
                <p className="error last">{errors.repeatedPassword} </p>
              )}
              <input type="submit" value="Sign up" />
              <div className="signup_link">
                Already a member?{" "}
                <Link className="linkto" to="/login">
                  Log in
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
