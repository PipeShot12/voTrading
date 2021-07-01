import React from 'react'

export default function SuccessAndError({ msj, icon, color }) {
    return (
        <div className="backdrop justify-content-center align-items-center d-flex" id="success-sbm" >
            <div className="success-send d-flex align-items-center rounded justify-content-center" style={{ width: "60vw" }}>
                <i className={`${icon} ${color} `} style={{ fontSize: "15vh" }}></i>
                <h1 className="text-dark d-none d-sm-none d-lg-block d-md-block d-xl-block" style={{ fontSize: "5vh", textAlign: "center" }}>{msj}</h1>
            </div>
        </div>
    )
}
