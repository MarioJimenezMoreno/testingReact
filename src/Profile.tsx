import React from "react";
import Header from "./Header";
import {Input, Spinner} from "@nextui-org/react";

const links = [
  { label: "Log Out", url: "/" },
  { label: "Feature 2", url: "/feature2" },
  { label: "Feature 3", url: "/feature3" },
  { label: "Feature 4", url: "/feature4" },
  { label: "Profile", url: "/profile" },
];

const Profile: React.FC = () => {
  return (
    <>
      <Header links={links} /> 
      <div className="profileContainer">
      <Input
      isDisabled
      type="email"
      label="Email"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />
      <Spinner label="Loading..." color="warning" />
      </div>
    </>
  );
};

export default Profile;
