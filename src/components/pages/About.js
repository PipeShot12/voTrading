import React from 'react'
import SeoUse from "../SeoUse"
const folder = process.env.PUBLIC_URL;
export default function About() {
    return (
        <main>
            <SeoUse title="About" canonical="" content="About us" />
            <div className="container-fluid bg-dark">
                <h1 className="text-center py-5">Nosotros</h1>
            </div>
            <div className="col-md-9 col-12 mx-auto pt-4">
                <div className="row">
                    <div className="col-md-5 col-12 d-flex justify-content-center">
                        <img className="img-fluid" src={`${folder}/img/img6.jpg`} alt="" />
                    </div>
                    <div className="col-md-7 col-12">
                        <p className="text-left mt-sm-2">Somos un equipo de profesionales del audio, apasionados por el arte y todas sus manifestaciones. Entendemos que el sonido y la música son  esenciales, y por eso no nos las tomamos a la ligera. Nos gusta crear y ayudar a materializar eso que tanto imaginas y, como creemos que el viaje es mucho más importante que el destino, nos esforzamos para que quienes trabajen con nosotros tengan una experiencia agradable, divertida y enriquecedora.
                            V. O. Trading nació como un proyecto para grabar, comercializar y producir VoiceOver, de ahí el nombre de nuestro equipo: VoiceOver Trading. Nuestros servicios solían reducirse únicamente a esto, pero con el paso del tiempo, nuestros conocimientos se ampliaron y así mismo lo hizo nuestro portafolio.
                            Ofrecer soluciones integrales de audio es nuestra finalidad, por lo que nos mantenemos en constante capacitación y entrenamiento en distintos campos para brindar cada vez más servicios y soluciones profesionales de audio.</p>
                    </div>
                </div>
                <div className="row pt-5 info">
                    <div className="col-md-3 col-12">
                        <h1 id="nuestro" className="text-center">Nuestro Equipo</h1>
                    </div>
                    <div className="col-md-4 col-12 mx-md-3 text-center">
                        <img className="img-fluid rounded-circle mb-3" src={`${folder}/img/user.png`} alt="Max Garzon " width="150px" />
                        <h3 className="text-center">Max Garzón </h3>
                        <p className="text-center">Nuestro coordinador de estudios es un aficionado a los videojuegos y al cine. Es nuestro actor de voz de la casa y un excelente ingeniero de mezcla y mastering. Productor de audio y psicólogo de la Universidad Javeriana, actualmente en formación como programador de audio para videojuegos,como tambien experiencia en el area de sonido directo para cine y television.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center">
                        <img className="img-fluid rounded-circle mb-3" src={`${folder}/img/user.png`} alt="Pipe Hernandez" width="150px" />
                        <h3 className="text-center">Pipe Hernández </h3>
                        <p className="text-center"> Nuestro coordinador de sonido en vivo es un apasionado por la música y la guitarra. Entusiasta de la animación y un implacable diseñador sonoro para cine y televisión, egresado de la escuela Fernando Sor como productor de audio y actualmente en proceso de formación como programador de audio para videojuegos, como tambien dessarrollador .</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
