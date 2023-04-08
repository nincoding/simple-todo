import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PATH_URL } from "../constants/stringValues";

// style
import { 
  OnGraphIcon,
  OnHomeIcon,
  OnCalenderIcon,
  OffGraphIcon,
  OffHomeIcon,
  OffCalenderIcon,
  FooterWrapper,
} from "../styles/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/TodoContext";

const Footer = ({ clickedIcon, setClickedIcon }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleIconClick = (iconName) => {
    if (clickedIcon === iconName) {
      return;
    } else {
      setClickedIcon(iconName);
      navigate(PATH_URL[iconName.toUpperCase()]);
    }
  };

  // localStorage에 저장된 clickedIcon 값을 초기화합니다.
  React.useEffect(() => {
    const storageClickedIcon = window.localStorage.getItem("clickedIcon");
    if (storageClickedIcon) {
      setClickedIcon(storageClickedIcon);
    }
  }, [setClickedIcon]);

  // location.pathname 값으로 clickedIcon 값을 localStorage에 저장합니다.
  React.useEffect(() => {
    const pathname = location.pathname.replace("/", "");
    window.localStorage.setItem("clickedIcon", pathname);
  }, [location]);

  return (
    <FooterWrapper >
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
