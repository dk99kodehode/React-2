export default function SubmittedUser({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <p key={index}>
          - {user.username} - {user.email}
        </p>
      ))}
    </div>
  );
}
