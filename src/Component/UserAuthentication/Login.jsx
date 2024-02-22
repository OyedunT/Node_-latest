import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const userDetails = {
      Email,
      Password,
    };

    console.log("userDetails : ", userDetails);
    try {
      const response = await axios.post(
        "http://localhost:4000/Api/User/login",
        userDetails
      );
      console.log(response.data);
      if (response.data.status === "success") {
        alert(response.data.message);
        console.log("Token : ", response.data.generateToken);
        localStorage.setItem("token", response.data.generateToken);

        navigate('/dashboard')
      }
    } catch (error) {
      console.log("Error Logging In", error);
      alert("Error Logging In");
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-primary text-center">Log In</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className=""
        style={{ width: "500px" }}
      >
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(ev) => setEmail(ev.target.value)}
          className="form-control my-2"
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(ev) => setPassword(ev.target.value)}
          className="form-control my-2"
        />
        <p>
          Don't have an account <Link to="/signup">Sign Up</Link>
        </p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
