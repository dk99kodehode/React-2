export default function UserList({ users }) {
  return (
    <div>
      {/*-----MAPS OVER MOCKDATA & Creates paragraphs------*/}
      {users.map((user) => (
        <p key={user.email}>
          - {user.username} - {user.email}
        </p>
      ))}
    </div>
  );
}
