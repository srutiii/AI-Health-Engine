import { Dropdown, DropdownItem } from "flowbite-react";

function Dropdown_menu({label}) {
  return (
    <Dropdown label={label} dismissOnClick={false}>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}

export default Dropdown_menu