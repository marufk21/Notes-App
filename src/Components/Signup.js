import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

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
    // const { name, email, password, cpassword } = credentials;
<<<<<<< HEAD
    const response = await fetch("http://http://localhost:3000/api/auth/createuser", {
=======
    const response = await fetch("http://quicknote-api.onrender.com/api/auth/createuser", {
>>>>>>> 4b342b5b7b1b23cb683731d54b2aba20d9b10852
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
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="name"
            onChange={onChange}
            placeholder=""
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            onChange={onChange}
            placeholder=""
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" name="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            minLength={4}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="cpassword"
              name="password"
              value="Confirm Password"
            />
          </div>
          <TextInput
            id="cpassword"
            type="password"
            name="cpassword"
            onChange={onChange}
            minLength={4}
            required={true}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default Signup;
