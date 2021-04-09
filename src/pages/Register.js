import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../utils/baseUrl";

const Register = () => {
  const history = useHistory();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${baseUrl}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.status === 200) {
        localStorage.setItem("jwt", result.jwt);
        localStorage.setItem("user", JSON.stringify(result.user));
        setData({ identifier: "", password: "" });
        console.log(result);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h3>Create An Account</h3>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
