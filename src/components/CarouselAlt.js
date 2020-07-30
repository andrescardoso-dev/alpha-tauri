import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import '../scss/components/CarouselAlt.scss';

import alpha1 from "../assets/img/alpha-carousel1.jpg";
import alpha2 from "../assets/img/alpha-carousel2.jpg";
import alpha3 from "../assets/img/alpha-carousel3.jpg";

export default function CarouselAlt() {
  const { Item, Caption } = Carousel;

  return (
    <Carousel>
      <Item>
        <img
          src={alpha1}
          alt="First slide"
        />
        <Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Caption>
      </Item>
      <Item>
        <img
          src={alpha2}
          alt="Third slide"
        />

        <Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Caption>
      </Item>
      <Item>
        <img
          src={alpha3}
          alt="Third slide"
        />

        <Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Caption>
      </Item>
    </Carousel>
  );
}
