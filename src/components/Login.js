import React, { useState } from "react";
import styled from 'styled-components';

const Login = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const [password, setPassword] = useState('');
    const handlePasswordChange =(event) => {
        setPassword(event.target.value);
    };
    const [isChecked,setIschecked] = useState(false);
    const handleCheckboxChange= () =>{
        setIschecked(!isChecked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <BackgroundContainer>
            <Content>
                <h1>Let's get <Headstyle>connected!</Headstyle></h1>
                <p>Log in to connect with the world.</p>

                <form onSubmit={handleSubmit}>

                <EmailInput
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="estalien.sandy@gemini.com"
                />
                 <br/>

                <PasswordInput
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                />
           
                <CheckboxAndLinkContainer>
                    <Checkbox
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label>Remember me</label>
                    <ForgetPasswordLink href="#">Forget password ?</ForgetPasswordLink>
                </CheckboxAndLinkContainer>

                <Submit type="submit">Log in</Submit>
    </form>
    <br />
    {/* or continue with section */}
    <Container>
      <HorizontalLine />
      <TextContainer>
        <Text>Or continue with</Text>
      </TextContainer>
      <HorizontalLine />
    </Container>
    
    <GoogleOauth type="submit">
      <GoogleImage src="/google.png" alt="Google" />
      <GoogleText>Google Account</GoogleText>
    </GoogleOauth>
        <h4>Don't have an account <SignupLink>Sign up</SignupLink></h4>
            </Content>
        </BackgroundContainer>
    );
}

export default Login;
const BackgroundContainer = styled.div`
    min-height: 100vh;
    background-image: url('/bg-login.jpg');
    background-size: cover;
    background-position: center;
`;

// Styled component for your content
const Content = styled.div`
    padding-top: 100px;
    padding-left: 100px;
    color: #000;
    font-family: Montserrat, sans-serif;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

// Styled component for the "connected" text
const Headstyle = styled.span`
    color: #07F1F9;
    font-style: italic;
    font-weight: bold;
`;

// Styled component for the email input
const EmailInput = styled.input`
    width: 400px; /* Adjust the width as needed */
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #07F1F9;
    border-radius: 11px;
    font-size: 16px;
    background-color: #000;
    opacity: 0.3;
    color:#fff;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const PasswordInput = styled.input`
    width: 400px; /* Adjust the width as needed */
    padding: 10px;
    margin-top: 10px;
    border-radius: 11px;
    font-size: 16px;
    background-color: #000;
    opacity: 0.3;
    color:#fff;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CheckboxAndLinkContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: #000;
    opacity: 0.3;
`;

const ForgetPasswordLink = styled.a`
    color: #07F1F9;
    text-decoration: none;
    margin-left: 120px;
    font-size: 14px;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const SignupLink = styled.a`
    color: #07F1F9;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Submit = styled.button`
    width: 420px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #07F1F9;
    border-radius: 11px;
    font-size: 16px;
    background-color: #07F1F9;
    font-weight: bold;
    font-style: italic;
    font-size: 18px;
    color: #000;

    &:hover {
        cursor: pointer;
        background-color: #07B4B9;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    margin-top: 10px;
    margin-left: -20px;
`;

const HorizontalLine = styled.hr`
    border: none;
    border-top: 1px solid gray;
    width: 100px;
`;

const TextContainer = styled.div`
    padding: 5px;
`;

const Text = styled.p`
    margin: 0;
`;

const GoogleOauth = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 420px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #000;
    border-radius: 11px;
    font-size: 16px;
    background-color: #000;
    opacity: 0.3;
    font-weight: bold;
    font-style: italic;
    font-size: 18px;
    color: #fff;
    text-align: center;

    &:hover {
        cursor: pointer;
        background-color: #000;
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const GoogleImage = styled.img`
    width: 20px;
    height: auto;
    margin-right: 10px;
`;

const GoogleText = styled.span`
    color: #fff;
`;
