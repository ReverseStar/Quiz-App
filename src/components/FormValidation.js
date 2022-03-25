import React from "react";

const FormValidation = (values) => {
    let errors = {};
    if (!values.first) {
        errors.first = "First Name is required";
    }
    if (!values.last) {
        errors.last = "Last Name is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.eamil = "Email is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters long";
    }

    return errors;
};

export default FormValidation;
