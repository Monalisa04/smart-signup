import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormikForm from "../../common/formik-form";
import { FORM_FIELD_TYPES } from "../../constants/constants";
import * as validationHelper from "../../helpers/validation";

describe("submit a formik form", () => {
  it("with first name", async () => {
    const onFormSubmit = jest.fn();

    const formFields = [
      {
        type: FORM_FIELD_TYPES.TEXT,
        name: "name",
        id: "name",
        label: "Name:",
        required: true,
      },
      {
        type: FORM_FIELD_TYPES.TEXT,
        name: "role",
        id: "role",
        label: "Role:",
        required: false,
      },
      {
        type: FORM_FIELD_TYPES.EMAIL,
        name: "email",
        id: "email",
        label: "Email:",
        required: true,
      },
      {
        type: FORM_FIELD_TYPES.PASSWORD,
        name: "password",
        id: "password",
        label: "Password:",
        required: true,
      },
    ];

    const initialValues = {
      name: "",
      role: "",
      password: "",
      email: "",
    };

    const validate = (values) => {
      const errors = {};
      if (!validationHelper.validateRequiredField(values.name)) {
        errors.name = "Name is required";
      }
      if (!validationHelper.validateRequiredField(values.email)) {
        errors.email = "Email is required";
      } else if (!validationHelper.validateEmailField(values.email)) {
        errors.email = "Email address is invalid";
      }
      if (!validationHelper.validateRequiredField(values.password)) {
        errors.password = "Password is required";
      } else if (!validationHelper.validatePasswordField(values.password)) {
        errors.password =
          "Password is invalid. Password should be at least 9 characters long with at least 1 number, 1 uppercase and 1 lowercase character";
      }
      return errors;
    };

    render(
      <FormikForm
        initialValues={initialValues}
        fields={formFields}
        validationHandler={validate}
        submitHandler={onFormSubmit}
      />
    );

    userEvent.type(screen.getByLabelText(/Name:/i), "John");
    userEvent.type(screen.getByLabelText(/Role:/i), "");
    userEvent.type(screen.getByLabelText(/Password:/i), "1Qqwweded");
    userEvent.type(screen.getByLabelText(/Email:/i), "abc@test.com");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
        expect(onFormSubmit).toHaveBeenCalled();
    });
  });
});
