export default function UserForm({
  username,
  email,
  setUsername,
  setEmail,
  submitInfo,
}) {
  return (
    <form onSubmit={submitInfo}>
      <h3>username</h3>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <h3>email</h3>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
