import React from 'react'
import SeoUse from "../SeoUse"

const folder = process.env.PUBLIC_URL;
export default function services() {
    return (
        <main>
            <SeoUse title="Services" canonical="" content="Our Services" />
            <div className="container-fluid bg-dark">
                <h1 className="text-center py-5">Servicios</h1>
            </div>
            <div className="col-lg-10 col-12 mx-auto py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6"><img className="img-fluid img2" src={`${folder}/img/img2.jpg`} alt="" /></div>
                    <div className="col-12 col-md-6">
                        <h3>Sonido en vivo</h3>
                        <p>¿Necesitas sonido para tu conferencia, tu fiesta o evento? Somos profesionales del sonido, sabemos lo que hacemos y disfrutamos haciéndolo. nuestro servicio está dirigido a conferencias y banquetes.</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <h3>Grabación en estudio y en vivo</h3>
                        <p>Te ofrecemos grabación profesional tanto en estudio como de tu sesión live. Nuestro estudio es pequeño pero muy funcional, óptimo para grabación de voz y formatos musicales pequeños. ¿Necesitas grabar tu podcast, audio libros o producir audio en general? Nosotros podemos ayudarte.</p>
                    </div>
                    <div className="col-12 col-md-6"><img className="img-fluid img2" src={`${folder}/img/img4.jpg`} alt="" /></div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6"><img className="img-fluid img2" src={`${folder}/img/img7.jpg`} alt="" /></div>
                    <div className="col-12 col-md-6">
                        <h3>Post-producción de Audio</h3>
                        <p>¿Sabías que el 50 % del impacto de tu video está contenido en el sonido? Nosotros podemos ayudarte a darle vida de a tu proyecto audiovisual. Hacemos diseño sonoro, efectos de sonido, doblaje y ADR, Foley y mezcla.</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <h3>Voice Over y Voz Comerciall</h3>
                        <p>Nuestro actor de la casa te ofrece una voz joven y dinámica para tus proyectos, con tiempos de entrega rápidos y la mejor calidad, siempre disponible y al mejor precio. ¿Necesitas otras voces? Contamos con un selecto banco de voces y podemos organizarte un casting personalizado para que tu cliente elija la voz que más le guste. Te ofrecemos E-learning, voz automatizada para contestadoras, audiolibros y voz institucional para tus videos.</p>
                    </div>
                    <div className="col-12 col-md-6"><img className="img-fluid img2" src={`${folder}/img/img8.jpg`} alt="" /></div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6"><img className="img-fluid img2" src={`${folder}/img/img9.png`} alt="" /></div>
                    <div className="col-12 col-md-6">
                        <h3> Mezcla y Mastering Digital</h3>
                        <p>¿Ya grabaste pero aún no tienes tu mezcla? ¿O ya tienes tu mezcla, pero le falta ese último toque para competir en el mercado? Nuestro equipo te ofrece su talento y pasión por la música para que consigas ese sonido que tanto buscas. Recuerda, ¡tú lo imaginas y nosotros lo hacemos sonar!</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <h3>Edición de audio </h3>
                        <p> No todo en la industria del audio es elegante y placentero, ¡lo sabemos! Por eso si necesitas que alguien haga ese trabajo, nosotros lo hacemos por ti. Editamos tu audio: restauramos, limpiamos, afinamos, cuantizamos y convertimos tus archivos a pedido. A nuestro equipo le gusta la perfección y nos esforzaremos para que tu material salga de nuestras manos tal y como lo necesitas.  </p>
                    </div>
                    <div className="col-12 col-md-6"><img className="img-fluid img2" src={`${folder}/img/img10.jpg`} alt="" /></div>
                </div>
            </div>
        </main>
    )
}
