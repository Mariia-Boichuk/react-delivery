import { URLadr } from "../../utils/consts";
import PageTitle from "../../components/PageTitle/PageTitle";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import { useFormik, FormikProps } from "formik";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import * as Yup from "yup";
import useRequest from "../../utils/useRequest";
import Cookies from "js-cookie";
import { setUserData } from "../../reduxFeatures/actions/index";
import { useDispatch } from "react-redux";
import { MeResponseData } from "../../App";

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
      url: `${URLadr}/api/auth/login`,
      data: values,
      headers: { "Content-type": "application/json" },
    });

    Cookies.set("jwt", resp.jwt_token);

    const respUser = await fetchData<MeResponseData>({
      method: "get",
      url: `${URLadr}/api/users/me`,
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
