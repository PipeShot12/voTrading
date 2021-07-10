import { React, useRef, useState } from 'react'

export default function SendForm({ handleSend }) {

    //input states 

    const [inputs, setInputs] = useState({ name: "", email: "", tel: "", msj: "" });

    //references
    const spanName = useRef();
    const spanEmail = useRef();
    const spanTel = useRef();

    //handle fields of form

    function handleChange(e) {

        if (e.target.id === "name") {
            setInputs((prevState) => ({ ...prevState, name: e.target.value }))
        }
        if (e.target.id === "email") {
            setInputs((prevState) => ({ ...prevState, email: e.target.value }))
        }
        if (e.target.id === "tel") {
            setInputs((prevState) => ({ ...prevState, tel: e.target.value }))
        }
        if (e.target.id === "msj") {
            setInputs((prevState) => ({ ...prevState, msj: e.target.value }))
        }
    }


    //submit form and call of backend

    async function handleSubmit(e) {
        e.preventDefault();

        const { name, email, tel, msj } = inputs;
        const data = { name, email, tel, msj };
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const reTel = /^[0-9]{7,}$/;
        if (name.length < 3) {
            spanName.current.innerText = "Ingresa un nombre valido!"
            return false
        }
        spanName.current.innerText = ""
        if (!re.test(email)) {
            spanEmail.current.innerText = "Ingresa un correo valido!"
            return false;
        }
        spanEmail.current.innerText = ""
        if (!reTel.test(tel)) {
            spanTel.current.innerText = "Ingresa un teléfono valido!"
            return false;
        }
        spanTel.current.innerText = ""
        handleSend(data)
        // setInputs({ name: "", email: "", tel: "", msj: "" });

    }

    return (
        <form className="bg-dark p-4 rounded col-12" onSubmit={e => handleSubmit(e)}>
            <h1>!Escribenos!</h1>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" placeholder="Nombre" id="name" className="form-control" onChange={(e) => handleChange(e)} value={inputs.name} />
                <span ref={spanName} style={{ color: "#E82900 ", fontSize: "18px", fontWeight: "bold" }}></span>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id="email" className="form-control" onChange={(e) => handleChange(e)} value={inputs.email} />
                <span ref={spanEmail} style={{ color: "#E82900 ", fontSize: "18px", fontWeight: "bold" }}></span>
            </div>
            <div className="form-group">
                <label htmlFor="tel">Teléfono</label>
                <input type="tel" placeholder="Teléfono" id="tel" className="form-control" onChange={(e) => handleChange(e)} value={inputs.tel} />
                <span ref={spanTel} style={{ color: "#E82900 ", fontSize: "18px", fontWeight: "bold" }}></span>
            </div>
            <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="form-control" id="msj" cols="30" rows="10" placeholder="Deja tu mensaje" onChange={(e) => handleChange(e)} value={inputs.msj}></textarea >
            </div>
            <button className="buttons1 btn btn-default">Enviar</button>
        </form>
    )
}
