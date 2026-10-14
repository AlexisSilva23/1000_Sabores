function Blog() {
    return (
        <main className="container mt-5 mb-5">
            <div className="text-center mb-5">
                <h1>
                    El Rincon Dulce
                </h1>
                <p className="lead text-muted">Historias, curiosidades y mucho sabor.</p>
            </div>

            <article className="card shadow-sm mb-5">
                <div className="card-body p-4 p-md-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <span className="badge mb-2">BLOG #1</span>
                            <h2 className="mb-3">Nuestra historia</h2>
                            <p className="text-muted">
                                Bienvenidos al blog de <strong>Pastelería Mil Sabores</strong>. En este espacio queremos compartir detalles de nuestra historia, cómo se generó todo y qué nos motivó a trabajar en serio con los pasteles.
                            </p>
                            <hr />
                            <p className="fw-bold text-dark">
                                Descubre cómo un pequeño cuaderno de recetas familiares se transformó en la pastelería favorita de tu barrio.
                            </p>
                            <p>
                                Nuestra historia no abarca tanto tiempo, pero es inspiradora al ver cómo todo se transformó tan rápido en una pastelería de renombre. Como ya se sabe, somos 3 dueños, y todo comenzó con la motivación de hacer realidad lo que escribíamos en nuestros cuadernos, presentando nuestros productos solamente a conocidos.
                            </p>
                            <p>
                                Lo que era solo momentáneo, con el tiempo se convirtió en algo mágico. Nos propusimos cumplir el sueño de crear esta pastelería y con perseverancia se logró. Nos esforzamos demasiado sabiendo la competencia que hay en este mercado, y con el tiempo, el boca a boca hizo que nuestros productos sonaran mucho más.
                            </p>
                            <p>
                                Ahora con esta página buscamos llegar a más gente para poder contentarlos cada día. Estamos muy agradecidos con quienes nos apoyan; sepan que todo lo que hacemos es con cariño.
                            </p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img src="/img/pastel.felipe.tres.jpg" className="img-fluid shadow" alt="Historia de Mil Sabores" />
                        </div>
                    </div>
                </div>
            </article>
            <article className="card shadow-sm mb-5">
                <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-5">
                        <span className="badge mb-2">BLOG #2</span>
                        <h2>Curiosidades de nuestros clientes</h2>
                        <p className="text-muted">
                            Aquí te contaremos curiosidades dando un enfoque a las preguntas generales que nos hacen en el día a día. Queremos darles el gusto de responderlas, ya que nos sentimos eternamente agradecidos.
                        </p>
                    </div>
                    <div className="row mb-5 align-items-center">
                        <div className="col-md-8 order-2 order-md-1 mt-3 mt-md-0">
                            <h4>
                                Pregunta 1#: ¿Nuestros productos son en verdad caseros?
                            </h4>
                            <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
                                <strong>RESPUESTA:</strong> Obviamente que nuestros productos son caseros y deliciosos, causando una gran felicidad a todos nuestros clientes. Tratamos de que sean lo más artesanales posibles para que se sienta esa dulzura que tanto nos caracteriza.
                            </p>
                        </div>
                        <div className="col-md-4 order-1 order-md-2 text-center">
                            <img src="/img/pastel.felipe.jpg" className="img-fluid shadow-sm" style={{ maxHeight: '300px' }} alt="Pastel casero" />
                        </div>
                    </div>
                    <hr className="mb-5" />
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center mb-3 mb-md-0">
                            <img src="/img/pastel.felipe.dos.jpg" className="img-fluid shadow-sm" alt="Pastel Guinness" />
                        </div>
                        <div className="col-md-8">
                            <h4>
                                <i className="bi bi-trophy-fill me-2"></i>
                                Pregunta 2#: ¿Somos la mejor repostería del mundo por nuestro Récord Guinness?
                            </h4>
                            <p>
                                <strong>RESPUESTA:</strong> En este caso, depende mucho a la persona que le preguntes. ¡Ojalá lo fuéramos! Hay pastelerías que pueden cumplir con eso; nosotros, con demostrar nuestro esfuerzo y carisma en cada pastel, nos sentimos contentos de darles las mejores experiencias gastronómicas. Por eso nos esforzamos a diario.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </main>

    );
}

export default Blog;