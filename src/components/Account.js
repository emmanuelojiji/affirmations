import "./Account.scss";
import Toggle from "react-toggle";

const Account = ({
  theme,
  setTheme,
  showReligiousVerse,
  setShowReligiousVerse,
}) => {
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toggleReligiousVerse = () => {
    showReligiousVerse
      ? setShowReligiousVerse(false)
      : setShowReligiousVerse(true);
  };

  return (
    <>
      <h2 className="section-heading">Account</h2>

      <br />
      <div class="settings-row">
        <span>Night Mode</span>

        <Toggle
          defaultChecked={theme == "dark" && true}
          icons={false}
          onChange={() => toggleTheme()}
        />
      </div>
      <div class="settings-row">
        <span>Show Religious Verses</span>
        <Toggle
          defaultChecked={showReligiousVerse && true}
          icons={false}
          onChange={() => toggleReligiousVerse()}
        />
      </div>
      <br />
      <div class="settings-row">
        <span>Sign Up</span>
      </div>

      <br />
      <div class="settings-row">
        <span>Suggest a Feature</span>
      </div>
      <div class="settings-row">
        <span>Contact</span>
      </div>
      <br />
    </>
  );
};

export default Account;
