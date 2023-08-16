import React from "react";
import Header from "./Header";
import EditIcon from "./IconComponents/EditIcon"
import {Input, Button, Card,CardBody} from "@nextui-org/react";

const Profile: React.FC = () => {
  return (
    <>
      <Header/> 
      <div className="profileContainer w-screen flex-col flex items-center">
      <h1 className="p-5 text-xl">Edit Profile</h1>
      <div className=" flex flex-col gap-4 items-center">
      <Card>
      <CardBody className="flex flex-row items-center gap-4">
      <Input
          isReadOnly
          type="email"
          color="secondary"
          label="Username"
          defaultValue="Mordisquitos"
          className="max-w-xs"
        />
         <Button color="success" startContent={<EditIcon/>}>
        Edit
        
      </Button>  
      </CardBody>
      </Card>
      <Card>
      <CardBody className="flex flex-row items-center gap-4">
      <Input
          isReadOnly
          label="Password"
          color="secondary"
          defaultValue="password"
          type="password"
          className="max-w-xs"
        />
         <Button color="success" startContent={<EditIcon/>}>
        Edit
        
      </Button>  
      </CardBody>
      </Card>
      <Card>
      <CardBody className="flex flex-row items-center gap-4">
      <Input
          isReadOnly
          type="email"
          color="secondary"
          label="Email"
          defaultValue="mariojm2612@gmail.com"
          className="max-w-xs"
        />
         <Button isIconOnly  color="success" startContent={<EditIcon/>}>
        
        
      </Button>  
      </CardBody>
      </Card>
      <Card>
      <CardBody className="flex flex-row items-center gap-4">
      <Input
          isReadOnly
          type="number"
          color="secondary"
          label="Phone"
          defaultValue="644343107"
          className="max-w-xs"
        />
         <Button  isIconOnly color="success" startContent={<EditIcon/>}>
        
        
      </Button>  
      </CardBody>
      </Card>
      </div>
    </div>
  </>
  );
};

export default Profile;
