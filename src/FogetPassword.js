import useLocalStorage from './useLocalStorage';

function FogetPassword() {
  const { email, setEmail } = useLocalStorage();

  return (
    <>
      <h2>Reset Your Password</h2>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <br />
      <button>Continue</button>
      <br />
    </>
  );
}

export default FogetPassword;
