import { React, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import ModalAddress from '../ModalAddress'
import SendForm from '../SendForm';
import SuccessAndError from '../SuccessAndError';
import SeoUse from "../SeoUse"


import serviceSend from "../serviceSend"

export default function Contact() {

    //redirect to home
    const navigate = useHistory();

    //States

    const [msj, setMsj] = useState({ msj: "", status: 0 });
    const [showMsj, setShowMsj] = useState(false);
    const [loading, setLoading] = useState(false);



    //show message success sent or error from form contact

    useEffect(() => {
        if (showMsj) {
            setTimeout(() => {
                setShowMsj(false)
                navigate.push("/")
                window.scrollTo(0, 0)
            }, 2100)
        }

    }, [showMsj, navigate])

    //services for sending form

    async function handleSend(data) {
        setLoading(true)
        const req = await serviceSend(data);
        if (req.ok) {
            const message = await req.text();
            setMsj({ msj: message, status: 200 });
            setShowMsj(true)
            setLoading(false)
        } else {
            const message = await req.text();
            setMsj({ msj: message, status: 503 })
            setShowMsj(true)
            setLoading(false)

        }

    }


    return (
        <main>
            <SeoUse title="Contact" canonical="" content="Contact Form" />
            {loading ? <SuccessAndError msj={msj.msj} color={"text-primary"} icon={"fas fa-spinner fa-pulse"} /> :
                msj.status === 200 && showMsj ? <SuccessAndError msj={msj.msj} color={"text-success"} icon={"fas fa-check-circle"} /> :
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
                    <SendForm handleSend={handleSend} />
                </div>
            </div>
        </main>
    )
}
