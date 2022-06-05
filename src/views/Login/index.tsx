import { useState, ChangeEvent, useMemo, useCallback, useContext } from "react";
import { UserContext } from '../../store/userContext'
import { InputNameType } from './interface'
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
const { user, setUser } = useContext(UserContext);
let navigate = useNavigate();
  const [values, setValues] = useState({
    fullName: {
      value: user?.fullName ?? '',
      touched: false
    },
    majorAge: {
      value: user?.majorAge ?? false,
      touched: false
    }
  })

  const canSubmit = useMemo(() => {
    return values.fullName.value && values.majorAge.value
  }, [values])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setUser({ fullName: values.fullName.value, majorAge: values.majorAge.value })
    navigate("../home")
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
      <div className="login-wrapper">
        <div>
          <p>Please, enter your full name below</p>
          <p>Only alphabetical characters are accepted</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit} method="post">
          <input className="login-input" type="text" placeholder="Full name" name="fullName" value={values.fullName.value} onChange={handleChange} onBlur={handleBlur} />
          {getHasError('fullName') && <p className="error">Please, fill this field!</p>}
          <label htmlFor="age-checkbox">
            <input type="checkbox" id="age-checkbox" checked={values.majorAge.value} name="majorAge" onChange={handleChange} onBlur={handleBlur}  />
            Are you older than 18 years old?
          </label>
          {getHasError('majorAge') && <p className="error">Please, check this field!</p>}
          <button type="submit" className="submit-btn-login" disabled={!canSubmit}>Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
