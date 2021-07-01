import React from 'react'

export default function Index() {
    return (

    <main>
        <div className="bg1 d-flex align-items-center">
            <h1 id="title1">Tú lo imaginas, nosotros lo hacemos sonar. </h1>
        </div>
        <div className="col-lg-6 col-12 mx-auto">
            <h2 className="text-center py-5">Nuestro Equipo</h2>
            <p className="pb-4">
                Somos un equipo de profesionales del audio, apasionados por el arte y todas sus manifestaciones.
                Entendemos que el sonido y la música son esenciales, y por eso no nos las tomamos a la ligera. Nos gusta
                crear y ayudar a materializar eso que tanto imaginas y, como creemos que el viaje es mucho más
                importante que el destino, nos esforzamos para que quienes trabajen con nosotros tengan una experiencia
                agradable, divertida y enriquecedora.
            </p>
            <div className="row">
                <a className="buttons mx-auto" href="/about">VER MÁS</a>
            </div>
        </div>
        <div className="col-lg-10 col-12 mx-auto py-5">
            <div className="row">
                <div className="col-12 col-md-4"><img className="img-fluid img2"src="./img/img2.jpg" alt=""/></div>
                <div className="col-12 col-md-4">
                    <h3>Sonido en vivo</h3>
                    <p>¿Necesitas sonido para tu conferencia, tu fiesta o evento? Somos profesionales del sonido, sabemos lo que hacemos y disfrutamos haciéndolo. nuestro servicio está dirigido a conferencias y banquetes.</p>
                </div>
                <div className="col-12 col-md-4"><img className="img-fluid img2"src="./img/img3.jpg" alt=""/></div>
         
                <div className="col-12 col-md-4">
                    <h3>Grabación en estudio y en vivo</h3>
                    <p>Te ofrecemos grabación profesional tanto en estudio como de tu sesión live. Nuestro estudio es pequeño pero muy funcional, óptimo para grabación de voz y formatos musicales pequeños. ¿Necesitas grabar tu podcast, audio libros o producir audio en general? Nosotros podemos ayudarte.
                    </p>
                </div>
            
                <div className="col-12 col-md-4"><img className="img-fluid img2" src="./img/img4.jpg" alt=""/></div>
                <div className="col-12 col-md-4">
                    <h3>Post-Producción de Audio</h3>
                    <p>
                    ¿Sabías que el 50 % del impacto de tu video está contenido en el sonido? Nosotros podemos ayudarte a darle vida de a tu proyecto audiovisual. Hacemos diseño sonoro, efectos de sonido, doblaje y ADR, Foley y mezcla.
                    </p>
                </div>
                <a className="buttons mx-auto mt-4" href="/services.html">VER MÁS</a>
            </div>
        </div>
        <div className="bg2">
            <h2 id="title2" className="text-center">Disfruta del Sonido en todas sus formas</h2>
        </div>

    </main>

    )
}
