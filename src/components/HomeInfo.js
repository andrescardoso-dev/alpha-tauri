import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Noticia, {useNews} from './Noticia';

import f1 from '../assets/img/f1.png';
import '../scss/components/HomeInfo.scss';

export default function HomeInfo() {

    const newsData = useNews();

    return (
        <div className="contenedor">
            <h2 className="titulo"><span>Últimas novedades</span><img src={f1} className="logo" alt="f1"/></h2>
            <Row md={3} className="news-row">
            {
                newsData.map(item => (  
                        <Noticia title={item.title} img={item.img} />
                ))
            }
            </Row>
            
            
        </div>
    );
}