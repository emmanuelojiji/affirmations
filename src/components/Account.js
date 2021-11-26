import "./Account.scss";
import Toggle from "react-toggle";

const Account = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <h2 className="section-heading">Account</h2>
      <span>Guest</span>
      <br />
      <span>Night Mode</span>
      <label>
        <Toggle
          defaultChecked={false}
          icons={false}
          onChange={() => toggleTheme()}
        />
        <span>No icons</span>
      </label>
      <span>Show Religious Verses</span>
      <br />
      <span>Sign Up</span>
      <br />
      <span>Suggest Feature</span>
      <span>Contact</span>
      <br />
      <span>Built by Emmanuel Ojiji</span>
    </>
  );
};

export default Account;
