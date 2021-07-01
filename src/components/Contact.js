import { React, useState, useEffect } from 'react'
import ModalAddress from './ModalAddress'
import SuccessAndError from './SuccessAndError';

export default function Contact() {

    const [inputs, setInputs] = useState({ name: "", email: "", tel: "", msj: "" });
    const [msj, setMsj] = useState({ msj: "", status: 0 });
    const [showMsj, setShowMsj] = useState(false);


    //show message success sent or error from form contact

    useEffect(() => {
        if (showMsj) {
            setTimeout(() => {
                setShowMsj(false)
                window.scrollTo(0, 0)
            }, 2200)
        }

    }, [showMsj])


    //handle fields of form

    function handleChange(e) {
        if (e.target.id === "name") {
            if (e.target.value) {
                setInputs((prevState) => ({ ...prevState, name: e.target.value }))
            }
        }
        if (e.target.id === "email") {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (e.target.value && re.test(e.target.value)) {
                setInputs((prevState) => ({ ...prevState, email: e.target.value }))
            }
        }
        if (e.target.id === "tel") {
            if (e.target.value && e.target.value.length > 6) {
                setInputs((prevState) => ({ ...prevState, tel: e.target.value }))
            }
        }
        if (e.target.id === "msj") {
            if (e.target.value) {
                setInputs((prevState) => ({ ...prevState, msj: e.target.value }))
            }
        }
    }


    //submit form and call of backend

    async function handleClick(e) {
        e.preventDefault();
        if (inputs.name && inputs.email && inputs.tel) {
            const { name, email, tel, msj } = inputs;
            const data = { name, email, tel, msj };
            try {
                const req = await fetch(process.env.REACT_APP_URL, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'

                    },
                    body: JSON.stringify(data)
                });
                if (req.ok) {
                    const message = await req.text();
                    setMsj({ msj: message, status: 200 });
                    setShowMsj(true)
                } else {
                    const message = await req.text();
                    setMsj({ msj: message, status: 503 })
                    setShowMsj(true)
                }
            } catch {
                const message = "Hubo un Error"
                setMsj({ msj: message, status: 503 })
                setShowMsj(true)
                setInputs({ name: "", email: "", tel: "", msj: "" });


            }

        }

    }

    console.log(msj)
    return (
        <main>
            {msj.status === 200 && showMsj ? <SuccessAndError msj={msj.msj} color={"text-success"} icon={"fas fa-check-circle"} /> :
                showMsj ? <SuccessAndError msj={msj.msj} color={"text-danger"} icon={"fas fa-exclamation-triangle"} /> :
                    ""}

            <div className="container-fluid">
                <div className="row">
                    <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9046541170264!2d-74.0760200848942!3d4.61108424371119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f999e88ef00e5%3A0xd80a085b0fde91db!2zQ2wuIDIzICMjMTMtODAsIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1605067343582!5m2!1ses!2sco" className="map" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>

            </div>

            <div className="col-md-6 col-12 mx-md-auto py-md-4">
                <ModalAddress styles={"buttons2 btn btn-block my-5 bg-warning font-weight-bold p-2"} />
                <div className="row">
                    <form className="bg-dark p-4 rounded col-12">
                        <h1>!Escribenos!</h1>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" placeholder="Nombre" id="name" className="form-control" required onChange={(e) => handleChange(e)} value={inputs.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Email" id="email" className="form-control" required onChange={(e) => handleChange(e)} value={inputs.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tel">Teléfono</label>
                            <input type="tel" placeholder="Teléfono" id="tel" className="form-control" required onChange={(e) => handleChange(e)} value={inputs.tel} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea className="form-control" id="msj" cols="30" rows="10" required placeholder="Deja tu mensaje" onChange={(e) => handleChange(e)} value={inputs.msj}></textarea >
                        </div>
                        <button className="buttons1 btn btn-default" onClick={(e) => handleClick(e)}>Enviar</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
