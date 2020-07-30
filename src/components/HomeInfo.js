import React from 'react';

import f1 from '../assets/img/f1.png';
import '../scss/components/HomeInfo.scss';

export default function HomeInfo() {
    return (
        <div className="contenedor">
            <h2 className="titulo"><span>Últimas novedades</span><img src={f1} className="logo" alt="f1"/></h2>
        </div>
    );
}