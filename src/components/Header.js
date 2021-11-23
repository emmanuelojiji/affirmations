import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const newDate = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[newDate.getDay()];

  let month = months[newDate.getMonth()];

  let time = newDate.getHours();

  const greeting = time < 12 ? "Good Morning" : "Good Evening";

  return (
    <header>
      <div>
        <span className="day">
          {day} {newDate.getDate()} {month}
        </span>
        <h3 className="greeting">{greeting}</h3>
      </div>

      <Link to="/signup">
        <div className="profile"></div>
      </Link>
    </header>
  );
};

export default Header;
