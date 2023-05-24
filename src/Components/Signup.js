import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { BASE_URL } from "./Helpers";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      navigate("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-4/5">
        <h1 className="text-4xl font-bold dark:text-white">Sign Up</h1>
        <div className="mb-2">
          <Label htmlFor="name"></Label>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required={true}
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="email"></Label>
          <TextInput
            id="email"
            type="email"
            name="email"
            required={true}
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="password"></Label>
          <TextInput
            id="password"
            type="password"
            name="password"
            minLength={4}
            required={true}
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="cpassword"></Label>
          <TextInput
            id="cpassword"
            type="password"
            name="cpassword"
            minLength={4}
            required={true}
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </div>
        <Button className="mt-4 font-semibold" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
