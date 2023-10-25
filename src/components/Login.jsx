import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
      console.log(data.name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="">
        <h1>Login</h1>
        <span className="user">{user?.name}</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            //defaultValue="username"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //defaultValue="username"
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
