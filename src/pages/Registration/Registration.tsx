import { URLadr } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useFormik, FormikProps } from "formik";
import useRequest from "../../utils/useRequest";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import * as Yup from "yup";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

interface MyFormValues {
  email: string;
  password: string;
  role: string;
}

export const Registration = () => {
  const navg = useNavigate();
  const { fetchData } = useRequest();
  const submitHandler = async (values) => {
    await fetchData({
      method: "post",
      url: `${URLadr}/api/auth/login`,
      data: values,
      headers: { "Content-type": "application/json" },
    });

    navg("/signin");
  };
  const initialValues = {
    email: "",
    password: "",
    role: "",
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
      role: Yup.string().required(),
    }),
    onSubmit: submitHandler,
  });

  return (
    <section>
      <PageTitle title="Register" />
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

        <Input
          value={formik.values.role}
          onChange={formik.handleChange}
          type="text"
          name="role"
          placeholder="Role"
          error={formik.errors.role}
        />
        <SubmitButton />
      </Form>
    </section>
  );
};
