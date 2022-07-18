import { Container, Row, Col } from "react-bootstrap";
import Nav_Bar from "./components/navbar/Nav_Bar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Merch from "./components/pages/merch/Merch";
import Discography from "./components/pages/discography/Discography";
import ContactUs from "./components/pages/contactUs/ContactUs";
import Events from "./components/pages/events/Events";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Nav_Bar></Nav_Bar>
            <Routes>
              <Route exact path="/" component={<Home />} />
              <Route exact path="/merch" component={Merch} />
              <Route exact path="/discography" component={Discography} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/events" component={Events} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
