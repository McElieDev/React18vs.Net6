import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Layout(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Super Villian</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
}

export default Layout;
