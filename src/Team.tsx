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
      <Card className="content-center">
        <CardHeader>
          <Image isBlurred width={250} src={Mario} alt="NextUI Album Cover" />
        </CardHeader>
        <CardBody>
          <h1>Mario</h1>
        </CardBody>
        <CardFooter>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusantium consectetur facere. Repudiandae, iste modi magnam
            consectetur, soluta asperiores perspiciatis vel voluptates numquam
            commodi reprehenderit non. Possimus beatae exercitationem corporis.
          </h2>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Image isBlurred width={250} src={Mario} alt="NextUI Album Cover" />
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Image isBlurred width={250} src={Mario} alt="NextUI Album Cover" />
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
export default Team;
