import {
  MenuContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarMenu,
} from "./SideBar";

const SideBar = ({menuToggle, toggle}) => {
  return (
    <MenuContainer menuToggle={menuToggle} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/about">About Me</SideBarLink>
        <SideBarLink to="/works">My Works</SideBarLink>
      </SideBarMenu>
    </MenuContainer>
  );
};

export default SideBar;
