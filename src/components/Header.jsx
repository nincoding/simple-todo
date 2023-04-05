import HeaderWrapper from "../styles/HeaderWrapper";

const Header = () => {

  const date = new Date();
  const weekly = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <HeaderWrapper>
      <p>{date.getFullYear()}</p>
      <p>{weekly[date.getDay()]} . {month[date.getMonth()]} . {date.getDate()}</p>
    </HeaderWrapper>
  )
}

export default Header;