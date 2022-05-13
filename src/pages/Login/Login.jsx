import React, { useState } from "react";
import { FormWrapper } from "../../components";
import { FormField, IButton } from "../../ui-kit";
import { schema } from "./resolver";
import { useDispatch, useSelector } from "react-redux";

import useFormFocus from "../../hooks/useFormFocus";

import styles from "./../SignUp/SignUp.module.scss";
import { login } from "../../feature/reducers/Auth/auth.actions";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: false,
  password: false,
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);
  const { register, handleBlur, handleFocus, errors, isFocused, handleSubmit } =
    useFormFocus(initialState, schema);

  const onSubmit = async (data) => {
    dispatch(login(data)).then(() => {
      navigate("/");
    });
  };

  return (
    <FormWrapper>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="email"
          register={register}
          type="text"
          error={errors.email && errors.email?.message}
          placeholder="E-mail"
          isFocused={isFocused.email}
        />
        <FormField
          name="password"
          register={register}
          type="password"
          error={errors.password && errors.password?.message}
          placeholder="Введите пароль"
          isFocused={isFocused.password}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isError && (
          <div className={styles.warn}>
            <span>{isError}</span>
          </div>
        )}
        <IButton>Войти</IButton>
      </form>
    </FormWrapper>
  );
};

export default Login;
