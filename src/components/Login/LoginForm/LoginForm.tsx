import { useLoginFormik } from "../lib/useLoginFormik";
import { useAuthContext } from "@context/AuthContext/AuthContext";

import { Icon } from "@components/shared/Icon/Icon";
import { Input } from "@components/shared/Input/Input";

export const LoginForm = () => {
  const { login } = useAuthContext();

  const formik = useLoginFormik({
    onSubmit: () => login(),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center mt-5"
    >
      <h4 className="mb-3 text-xl font-bold text-slate-600">
        Welcome Borgoth!
      </h4>
      <Input
        type="password"
        name="password"
        placeholder="Password: 1111"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        hasError={formik.touched.password && !!formik.errors.password}
      />
      <button className="flex items-center gap-2 mt-2" type="submit">
        <span>Unlock</span>
        <Icon icon="arrow-right" className="w-[15px]" />
      </button>
    </form>
  );
};
