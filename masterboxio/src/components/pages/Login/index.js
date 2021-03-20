import React, { useState } from "react";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleChangle = (event) => {
    setEmail(event.target.value);
    console.log(event);
  };

  return (
    <>
      <div>Login page</div>
      <div style={{ maxWidth: "300px", margin: "auto", marginTop: "50px" }}>
        {" "}
        <Input label="Email" onChange={handleChangle} value={email} />
        <Button text="Login" />
      </div>
    </>
  );
};

export default Login;
