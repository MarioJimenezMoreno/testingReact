import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import Mario from "./assets/Mario.jpg";

function Team() {
  return (
    <div className="gap-20 grid grid-cols-3">
      <Card className="w-80">
        <CardHeader className="flex flex-col justify-center gap-4">
          <Image isBlurred width={250} src={Mario} alt="NextUI Album Cover" />
          <h1>Mario</h1>
        </CardHeader>
        <CardBody className="text-center">
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusantium consectetur facere. Repudiandae, iste modi magnam
            consectetur, soluta asperiores perspiciatis vel voluptates numquam
            commodi reprehenderit non. Possimus beatae exercitationem corporis.
          </h2>
        </CardBody>
        <CardFooter className="text-center">
          
        </CardFooter>
      </Card>
      <Card className="w-80">
        <CardHeader className="flex flex-col justify-center gap-4">
          <Image isBlurred width={250} src={Mario} alt="NextUI Album Cover" />
          <h1>Mario</h1>
        </CardHeader>
        <CardBody className="text-center">
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusantium consectetur facere. Repudiandae, iste modi magnam
            consectetur, soluta asperiores perspiciatis vel voluptates numquam
            commodi reprehenderit non. Possimus beatae exercitationem corporis.
          </h2>
        </CardBody>
        <CardFooter className="text-center">
          
        </CardFooter>
      </Card>
      <Card className="w-80">
        <CardHeader className="flex flex-col justify-center gap-4">
          <Image isBlurred width={250} src={Mario} alt="NextUI Album Cover" />
          <h1>Mario</h1>
        </CardHeader>
        <CardBody className="text-center">
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusantium consectetur facere. Repudiandae, iste modi magnam
            consectetur, soluta asperiores perspiciatis vel voluptates numquam
            commodi reprehenderit non. Possimus beatae exercitationem corporis.
          </h2>
        </CardBody>
        <CardFooter className="text-center">
          
        </CardFooter>
      </Card>
    </div>
  );
}
export default Team;
