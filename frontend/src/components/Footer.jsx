import React from "react"

export const Footer = () => {
    return (
        <div>
            <div className="container-fluid p-3 mb-2 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img class="imgFooter" src="/img/ELECTROGIRAU.jpg" alt="logo electrogirau" width={120}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img class="imgFooter" src="/img/redesSinFondo.png" alt="redes" width={120}/>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="suscribite">Si queres recibir nuestras novedades suscríbete aquí:</p>
                    <form action="">
                    <label>Email:</label><input type="email" name="email" placeholder="Email" />
                    </form>
                </div>
            </div>
        </div>
    )
}