import React from "react";
import { Stack, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditUser = ({editUser, inputs, loading }) => {
  const formik = useFormik({
    initialValues: inputs,
    validationSchema: Yup.object({
      name: Yup.string()
        .max(10, "Name must be less or equal 10 Characters.")
        .required("Name is required."),
      username: Yup.string()
        .max(10, "User name must be less or equal 10 Characters.")
        .required("User Name is required."),
      email: Yup.string()
        .email("Incorrect Email")
        .required("Email is required."),
    }),
    onSubmit: (values) => {
      editUser(values);
      // console.log("Form Submitted", values);
      formik.resetForm({ values: "" });
    },
  });
  return (
    <Stack
      direction="row"
      component="form"
      onSubmit={formik.handleSubmit}
      spacing={2}
      sx={{ my: 2, justifyContent: "center" }}
    >
      <TextField
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && formik.errors.name ? true : false}
        helperText={formik.touched.name && formik.errors.name}
        label="Name"
        autoFocus
      />
      <TextField
        id="userName"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && formik.errors.username ? true : false}
        helperText={formik.touched.username && formik.errors.username}
        label="User Name"
      />
      <TextField
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && formik.errors.email ? true : false}
        helperText={formik.touched.email && formik.errors.email}
        label="Email"
      />
      {loading.status && loading.isLoading === "EDIT" ? (
        <Button disabled variant="contained" sx={{ mt: 3, mb: 2 }}>
          Updating...
        </Button>
      ) : (
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Update
        </Button>
      )}
    </Stack>
  );
};

export default EditUser;
