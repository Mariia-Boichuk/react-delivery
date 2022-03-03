import axios from "axios";
import React, { useContext, useState } from "react";
import { URLadr } from "../../utils/consts";
import { AuthContext } from "../../context/AuthContext";
import ErrorContext from "../../context/ErrorContextProvider";
import { LoaderContext } from "../../context/LoaderContextProvider";
import PageTitle from "../../components/PageTitle/PageTitle";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import { useSelector } from "react-redux";
import { Formik, Field, useFormik, FormikConfig, FormikProps } from "formik";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import * as Yup from "yup";
import useRequest from "../../utils/useRequest";

interface MyFormValues {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { setJwt } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const { setIsLoading } = useContext(LoaderContext);

  // const submitHandler = async (values) => {
  //   try {
  //     const resp = await axios.post(`${URLadr}/api/auth/login`, values);
  //     setJwt(resp.data.jwt_token);

  //     localStorage.setItem("jwt", resp.data.jwt_token);
  //     setIsLoading(false);
  //   } catch (error) {
  //     if (error.response?.data?.message) {
  //       setError(error.response.data.message);
  //     } else {
  //       setError("something gone wrong");
  //     }
  //     setIsLoading(false);
  //   }
  // };

  const { fetchData, responseData } = useRequest();
  const submitHandler = async (values) => {
    // e.preventDefault();
    console.log("VALUES", values, fetchData);
    await fetchData({
      method: "post",
      url: `${URLadr}/api/auth/login`,
      data: values,
      headers: { "Content-type": "application/json" },
    });
    console.log("jjaja", responseData.jwt_token);
    setJwt(responseData.jwt_token);

    localStorage.setItem("jwt", responseData.jwt_token);
  };

  const formik: FormikProps<MyFormValues> = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("invalid email")
        .max(19, "email must be not more than 19 characters")
        .required("enter email"),
      password: Yup.string()
        .min(2, "password must be more than 2 characters")
        .required("enter password"),
    }),
    onSubmit: submitHandler,
  });

  return (
    <section>
      <PageTitle title="Log in" />
      <Form submitHandler={formik.handleSubmit}>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          name="email"
          placeholder="Email"
          error={formik.errors.email}
        />

        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          name="password"
          placeholder="password"
          error={formik.errors.password}
        />

        <SubmitButton />
      </Form>
    </section>
  );
};
