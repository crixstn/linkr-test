import styled from "styled-components";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/userContext";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken, setPhoto, setName } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log("1")
  useEffect(() => {
    if(token)
    navigate('/timeline');
  }, [])
  console.log("2")
  function SignUp(e) {
    e.preventDefault();
    console.log("3")
    if (!email || !password) {
      console.log("4")
      alert("Por favor, verifique se todos os campos estão preenchidos!");
      console.log("5")
      return;
    }
    console.log("6")
    setIsLoading(true);
    console.log("7")

    const body = {
      email: email,
      password: password,
    };
    console.log(JSON.stringify(body));
    console.log(`${process.env.REACT_APP_API_URL}/signin`);

    axios
      .post(`${process.env.REACT_APP_API_URL}/signin`, body)
      .then((res) => {
        console.log("8")
        localStorage.setItem("authToken", res.data.token);
        setPhoto(res.data.photo);
        setName(res.data.name);
        setToken(localStorage.getItem("authToken"));
        navigate("/timeline");
      })
      .catch((err) => {
        alert(`${err.message}`);
        console.log("9")
        if (err.response && err.response.status === 401) {
          console.log("10")
          alert("Email e/ou senha inválidos! Tente novante!");
          setEmail("");
          setPassword("");
        } else {
          console.log("11")
          console.log(err)
          alert(`${err.message}`);
        }
      })
      .finally(() => setIsLoading(false));
  }
  return (
    <>
      <SignUpScrn className="flex">
        <LogoContainer>
          <h1>linkr</h1>
          <h3>save, share and discover</h3>
          <h3>the best links on the web</h3>
        </LogoContainer>
        <FormContainer>
          <Form className="flex" onSubmit={SignUp}>
            <input
              data-test="email"
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              data-test="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button data-test="login-btn" type="submit" disabled={isLoading}>
              {isLoading ? (
                <ThreeDots type="ThreeDots" color="#FFF" height={13} />
              ) : (
                "Sign In"
              )}
            </button>
          </Form>
          <Link to="/sign-up">
            <LoginCadastro className="flex">
              <p data-test="login-link">First time? Create an account!</p>
            </LoginCadastro>
          </Link>
        </FormContainer>
      </SignUpScrn>
    </>
  );
}

export default Login;

const SignUpScrn = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #151515;
  color: #fff;
  cursor: default;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-family: "Passion One", cursive;
    font-size: 75px;
    font-weight: 700;
  }
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 23px;
    line-height: 34px;
    font-weight: 700;
  }
  @media (min-width: 768px) {
    width: 60%;
    height: 100vh;
    justify-content: center;
    align-items: flex-start;
    h1,
    h3 {
      margin-left: 15%;
    }
    h1 {
      font-size: 106px;
    }
    h3 {
      font-size: 43px;
      line-height: 64px;
    }
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 10%;
  input {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    width: 91%;
    height: 70px;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    padding: 15px;
    font-size: 22px;
  }
  button {
    width: 92%;
    height: 70px;
    border: none;
    background-color: #1877f2;
    border-radius: 6px;
    font-size: 25px;
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #1877f2;
    }
  }
  button:disabled {
    opacity: 0;
  }
  @media (min-width: 768px) {
    margin: 35% 15% 0;
    width: 70%;
    button {
      width: 91%;
    }
  }
`;

const LoginCadastro = styled.div`
  justify-content: center;
  margin: 30px 0;
  display: flex;
  p {
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    text-decoration: underline;
    font-family: "Lato", sans-serif;
    font-size: 17px;
    line-height: 20px;
  }
`;