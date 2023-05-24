import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { BASE_URL } from "./Helpers";

const Login = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col w-4/5">
        <h1 className="text-4xl font-bold dark:text-white">Log In</h1>
        <div className="mb-2">
          <Label htmlFor="email"></Label>
        </div>
        <TextInput
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          required
          placeholder="Email"
          onChange={onChange}
        />
        <div className="mb-2">
          <Label htmlFor="password"></Label>
        </div>
        <TextInput
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          required
          placeholder="Password"
          onChange={onChange}
        />
        <Button className="mt-4 font-semibold" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
