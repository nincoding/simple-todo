import MenuWrapper from "../styles/MenuWrapper";

const FilterMenu = ({ text ,active, onClick }) => {
  return (
    <MenuWrapper active={active} onClick={onClick}>
      {text}
    </MenuWrapper>
  )
}

export default FilterMenu;