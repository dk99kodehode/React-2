export default function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <p key={user.email}>
          - {user.username} - {user.email}
        </p>
      ))}
    </div>
  );
}
