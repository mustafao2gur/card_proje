import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import warnerLogo from "../assets/warner-logo.png";
const Header = () => {
  return (
    <Container>
      <Image src={warnerLogo} width="200px mt-4"></Image>
    </Container>
  );
};

export default Header;
