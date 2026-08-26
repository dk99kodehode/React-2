import { useState } from "react";

// components && data
import { mockData } from "./mockData";
import UserForm from "./UserForm";
import UserList from "./UserList";
import SubmittedUser from "./SubmittedUser";

export default function UserManager() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // setter opp submitted email og username på neste div
  const [submittedUsers, setSubmittedUsers] = useState([]);

  // prevents default browswer refresh on submit && uses submittedUsername/submittedEmail as values for paragraphs in paragraphs later
  function submitInfo(e) {
    e.preventDefault();

    // creates new user on submit with username and email
    const newUser = {
      username: username,
      email: email,
    };

    setSubmittedUsers([...submittedUsers, newUser]);

    // clears username and email input after submit
    setUsername("");
    setEmail("");
  }

  return (
    <div>
      <UserForm
        username={username}
        email={email}
        setUsername={setUsername}
        setEmail={setEmail}
        submitInfo={submitInfo}
      />

      <div>
        <h2>User Management:</h2>

        <UserList users={mockData} />

        <SubmittedUser users={submittedUsers} />
      </div>
    </div>
  );
}
