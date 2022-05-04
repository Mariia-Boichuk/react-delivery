import { DEVELOPMENT_URL } from "../../utils/consts";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import InputText from "../../components/common/InputText/InputText";
import Form from "../../components/common/Form/Form";
import { useFormik, FormikProps } from "formik";
import Button from "../../components/common/Button/Button";
import * as Yup from "yup";
import useRequest from "../../utils/useRequest";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { MeResponseData } from "../../App";
import { setUserData } from "../../reduxFeatures/auth/authActions";

interface MyFormValues {
  email: string;
  password: string;
}

type LoginResponseData = {
  jwt_token: string;
  message: string;
};

const initialValues = {
  email: "",
  password: "",
};

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData } = useRequest();

  const submitHandler = async (values: MyFormValues) => {
    const resp = await fetchData<LoginResponseData>({
      method: "post",
      url: `${DEVELOPMENT_URL}/api/auth/login`,
      data: values,
      headers: { "Content-type": "application/json" },
    });

    Cookies.set("jwt", resp.jwt_token);

    const respUser = await fetchData<MeResponseData>({
      method: "get",
      url: `${DEVELOPMENT_URL}/api/users/me`,
      headers: {
        Authorization: `Bearer ${resp.jwt_token}`,
        "Content-type": "application/json",
      },
    });

    dispatch(setUserData(respUser.user));
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
        <InputText
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          name="email"
          placeholder="Email"
          error={formik.errors.email}
          autofocus={true}
        />

        <InputText
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          name="password"
          placeholder="password"
          error={formik.errors.password}
        />

        <Button type="submit" text="log in" />
      </Form>
    </section>
  );
};
