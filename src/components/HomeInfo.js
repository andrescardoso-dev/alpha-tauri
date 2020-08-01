import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Noticia from './Noticia';

import f1 from '../assets/img/f1.png';
import '../scss/components/HomeInfo.scss';

export default function HomeInfo() {
    return (
        <div className="contenedor">
            <h2 className="titulo"><span>Últimas novedades</span><img src={f1} className="logo" alt="f1"/></h2>
            <Container fluid >
                <Row style={{'text-align': 'center'}}>
                    <Col style={{'background': 'blue'}}>
                        <Noticia title='noticia1' text='texto noticia 1' />
                    </Col>
                    <Col style={{'background':'red'}}>
                        <Noticia title='noticia1' text='texto noticia 1' />
                    </Col>
                    <Col style={{'background':'green'}}>
                        <Noticia title='noticia1' text='texto noticia 1' />
                    </Col>
                </Row>
                <Row style={{'text-align': 'center'}}>
                    <Col style={{'background': 'yellow'}}>
                        <Noticia title='noticia1' text='texto noticia 1' />
                    </Col>
                    <Col style={{'background':'grey'}}>
                        <Noticia title='noticia1' text='texto noticia 1' />
                    </Col>
                    <Col style={{'background':'brown'}}>
                        <Noticia title='noticia1' text='texto noticia 1' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}