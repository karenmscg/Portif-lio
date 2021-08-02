import {
  MenuContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarMenu,
} from "./SideBar";

const SideBar = () => {
  return (
    <MenuContainer>
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
