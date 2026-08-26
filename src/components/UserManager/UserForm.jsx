// styling
import "./UserManager.css";
import { useState } from "react";

export default function UserForm({
  username,
  email,
  setUsername,
  setEmail,
  submitInfo,
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="userform" onSubmit={submitInfo}>
      <div>
        <h3>username</h3>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>

      <div>
        <h3>email</h3>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button
          className={`new-user ${submitted ? "submitted" : ""}`}
          type="submit"
          onClick={() => setSubmitted(true)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
