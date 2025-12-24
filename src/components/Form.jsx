import React from "react";
import "../style/Form.css";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";

const Form = () => {
  const navigate = useNavigate();
  const baseUrl = "https://snk-api.vercel.app/api/v1/orders";
  const [user, setUser] = useState("");
  const { total, itemsCarrito, clearCarro } = useContext(CartContext);

  useEffect(() => {
    const alreadyUser = window.localStorage.getItem("loggedUser");
    if (alreadyUser && alreadyUser.length > 10) {
      const usuario = JSON.parse(alreadyUser);
      setUser(usuario);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="loginContainer">
        <div className="center">
          <h1>Purchase details</h1>
          <Formik
            initialValues={{
              dni: "",
              provincia: "",
              ciudad: "",
              direccion: "",
              codigoPostal: "",
              telefono: "",
            }}
            validate={(values) => {
              let errors = {};
              if (!values.dni) {
                errors.dni = "Porfavor ingrese un dni";
              } else if (!/^([0-9])*$/.test(values.dni)) {
                errors.dni = "Porfavor ingrese un dni valido";
              }
              if (!values.provincia) {
                errors.provincia = "Porfavor ingrese una provincia";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.provincia)) {
                errors.provincia = "Porfavor ingrese una provincia valida";
              }
              if (!values.ciudad) {
                errors.ciudad = "Porfavor ingrese una ciudad";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.ciudad)) {
                errors.ciudad = "Porfavor ingrese una ciudad valida";
              }
              if (!values.telefono) {
                errors.telefono = "Porfavor ingrese su telefono";
              } else if (!/^([0-9])*$/.test(values.telefono)) {
                errors.telefono = "Porfavor ingrese un telefono valido";
              }
              if (!values.codigoPostal) {
                errors.codigoPostal = "Porfavor ingrese su codigo postal";
              } else if (!/^\d{4}/.test(values.codigoPostal)) {
                errors.codigoPostal =
                  "Porfavor ingrese un codigo postal valido";
              }
              if (!values.direccion) {
                errors.direccion =
                  "Porfavor ingrese una direccion para recibir el pedido   ";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              try {
                const form = {
                  buyer: {
                    nombre: user.name,
                    apellido: user.apellido,
                    dni: values.dni,
                    provincia: values.provincia,
                    ciudad: values.ciudad,
                    direccion: values.direccion,
                    codigoPostal: values.codigoPostal,
                    telefono: values.telefono,
                  },
                  items: itemsCarrito,
                  total: total,
                };

                const config = {
                  headers: {
                    Authorization: `Bearer ${user.token}`,
                  },
                };
                const request = await axios.post(baseUrl, form, config);

                clearCarro();

                Swal.fire({
                  icon: "success",
                  title: "Gracias por su pedido!",
                  text: `Orden de compra:  ${request.data.data.id}`,
                  confirmButtonColor: "#ffc107",
                });

                navigate("/");
              } catch (error) {
                console.log(error);
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
                    name="dni"
                    value={values.dni}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    required
                  />
                  <span></span>
                  <label>Dni</label>
                </div>
                {touched.dni && errors.dni && (
                  <div className="error">{errors.dni} </div>
                )}
                <div className="txt_field">
                  <input
                    name="provincia"
                    value={values.provincia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    required
                  />
                  <span></span>
                  <label>Provincia</label>
                </div>
                {touched.provincia && errors.provincia && (
                  <div className="error">{errors.provincia} </div>
                )}
                <div className="txt_field">
                  <input
                    name="ciudad"
                    value={values.ciudad}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    required
                  />
                  <span></span>
                  <label>Ciudad</label>
                </div>
                {touched.ciudad && errors.ciudad && (
                  <div className="error">{errors.ciudad} </div>
                )}
                <div className="txt_field">
                  <input
                    name="direccion"
                    value={values.direccion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    required
                  />
                  <span></span>
                  <label>Direccion</label>
                </div>
                {touched.direccion && errors.direccion && (
                  <div className="error">{errors.direccion} </div>
                )}
                <div className="txt_field">
                  <input
                    name="codigoPostal"
                    value={values.codigoPostal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    required
                  />
                  <span></span>
                  <label>Codigo postal</label>
                </div>
                {touched.codigoPostal && errors.codigoPostal && (
                  <div className="error">{errors.codigoPostal} </div>
                )}
                <div className="txt_field">
                  <input
                    name="telefono"
                    value={values.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    required
                  />
                  <span></span>
                  <label>Telefono</label>
                </div>
                {touched.telefono && errors.telefono && (
                  <div className="error last">{errors.telefono} </div>
                )}
                <input type="submit" value="Continuar" className="boton" />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Form;
