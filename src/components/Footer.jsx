import { 
  OnGraphIcon,
  OnHomeIcon,
  OnCalenderIcon,
  OffGraphIcon,
  OffHomeIcon,
  OffCalenderIcon,
  FooterWrapper,
} from "../styles/Footer";

const Footer = ({ clickedIcon, setClickedIcon }) => {

  const handleIconClick = (iconName) => {
    if (clickedIcon === iconName) {
      return;
    } else {
      setClickedIcon(iconName);
    }
  };

  return (
    <FooterWrapper>
      <div className="left">        
        <div onClick={() => handleIconClick("graph")}>
          {clickedIcon === "graph" ? (
          <OnGraphIcon />
          ) : (
          <OffGraphIcon />
        )}
        </div>
      </div>
      <div className="center" >      
      <div onClick={() => handleIconClick("home")}>
        {clickedIcon === "home" ? (
          <OnHomeIcon />
        ) : (
          <OffHomeIcon />
        )} 
        </div>     
      </div>
      <div className="right" >   
      <div onClick={() => handleIconClick("calendar")}>  
        {clickedIcon === "calendar" ? (
          <OnCalenderIcon />
        ) : (
          <OffCalenderIcon />
        )}
      </div>
      </div>
    </FooterWrapper>
  )
};

export default Footer;