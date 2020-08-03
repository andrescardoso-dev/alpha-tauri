import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselAlt from '../components/CarouselAlt';
import HomeInfo from '../components/HomeInfo';
import Footer from "../components/Footer";

import "../scss/layouts/LayoutHome.scss";

export default function LayoutHome() {

  return (
    <Container fluid className="contenedor">
      <Row className="contenido">
        <Col>
          <CarouselAlt />
          <HomeInfo />
        </Col>
      </Row>
      <Row className="footer">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
