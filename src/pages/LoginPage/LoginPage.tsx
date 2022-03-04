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

  const { fetchData } = useRequest();
  const submitHandler = async (values) => {
    console.log("sumbit handler");
    const resp = await fetchData({
      method: "post",
      url: `${URLadr}/api/auth/login`,
      data: values,
      headers: { "Content-type": "application/json" },
    });
    console.log("resp", resp);
    setJwt(resp.jwt_token);
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
