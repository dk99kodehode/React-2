import { useState } from "react";

// styling
import "./UserManager.css";

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

    // if username or email is empty return to previous, so it never would be able to let you submit without filling
    if (username === "" || email === "") {
      return;
    }

    // creates new user on submit with username and email
    const newUser = {
      username: username,
      email: email,
    };

    // adds new user to list of submitted users
    setSubmittedUsers([...submittedUsers, newUser]);

    // clears username and email input after submit
    setUsername("");
    setEmail("");
  }

  return (
    <section className="container">
      <h2>User Management</h2>
      <div>
        <UserForm
          className="userform"
          username={username}
          email={email}
          setUsername={setUsername}
          setEmail={setEmail}
          submitInfo={submitInfo}
        />
      </div>

      {/*-----STORED USERS IN MOCKDATA------*/}
      <div className="users">
        <div className="user-list">
          <div>
            <h2>Saved Users</h2>

            <UserList users={mockData} />
          </div>

          {/*-----NEW USERS------*/}
          <div className="new-user" id="new-user">
            <h2>New users</h2>
            <SubmittedUser users={submittedUsers} />
          </div>
        </div>
      </div>
    </section>
  );
}
