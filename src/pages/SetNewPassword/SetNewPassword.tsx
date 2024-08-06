import { useFormik } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "store/hooks"
import { FormRightSideTemplate, Button, Input } from "components/index"
import {
  SetNewPasswordPageWrapper,
  SetNewPasswordFormWrapper,
  SetNewPasswordForm,
  SetNewPasswordHeader,
  ButtonContainer,
} from "./styles"
export default function SetNewPassword() {
  const schema = Yup.object().shape({
    password: Yup.string()
      .required()
      .min(8)
      .matches(/[a-zA-Z]/, "*password must contain at least one letter")
      .matches(/\d/, "*password must contain at least one number")
      .matches(/[A-Z]/, "*password must contain at least one uppercase letter"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match",
    ),
  })
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: values => {
      if (!!values.password) {
        // dispatch(usersSetNewPasswordSliceActions.authUser(values))
      }
    },
  })
  return (
    <SetNewPasswordPageWrapper>
      <SetNewPasswordFormWrapper>
        <SetNewPasswordForm onSubmit={formik.handleSubmit}>
          <SetNewPasswordHeader>Change Password</SetNewPasswordHeader>
          <Input
            id="password"
            name="password"
            label="new password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            label="confirm new password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.errors.confirmPassword}
          />
          <ButtonContainer>
            <Button name="CHANGE PASSWORD" type="submit" />
          </ButtonContainer>
        </SetNewPasswordForm>
        <FormRightSideTemplate />
      </SetNewPasswordFormWrapper>
    </SetNewPasswordPageWrapper>
  )
}
