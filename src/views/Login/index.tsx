import { useState, ChangeEvent, useMemo, useCallback } from "react";
import { InputNameType } from './interface'
import "./style.css";

function Login() {
  const [values, setValues] = useState({
    fullName: {
      value: '',
      touched: false
    },
    majorAge: {
      value: false,
      touched: false
    }
  })

  const canSubmit = useMemo(() => {
    return values.fullName.value && values.majorAge.value
  }, [values])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event)
    console.log("values", values)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = name === "fullName" ? event.target.value.replace(/[^a-zA-Z]+/g, '') : event.target.checked
    setValues({ ...values, [name]: { value, touched: true }})
  }

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as InputNameType
    const value = values[name].value
    setValues({ ...values, [name]: { value, touched: true }})
  }

  const getHasError = useCallback((name: InputNameType) => {
    const input = values[name]
    return input.touched && !input.value
  }, [values])

  return (
    <div className="login">
      <div>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit} method="post">
        <input className="login-input" type="text" placeholder="Full name" name="fullName" value={values.fullName.value} onChange={handleChange} onBlur={handleBlur} />
        {getHasError('fullName') && 'errou'}
        <label htmlFor="age-checkbox">
          <input type="checkbox" id="age-checkbox" checked={values.majorAge.value} name="majorAge" onChange={handleChange} onBlur={handleBlur}  />
          Are you older than 18 years old?
        </label>
        {getHasError('majorAge') && 'errou'}
        <button type="submit" className="submit-btn-login" disabled={!canSubmit}>Enter</button>
      </form>
    </div>
  );
}

export default Login;
