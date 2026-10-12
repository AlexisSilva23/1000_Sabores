import { Button, Card, Container } from "react-bootstrap";

function Blog() {
    return (
    <>
     <main className="container mt-5">
        <section className="blog1 mt-5">
            <h1 className="titulo1">BLOG #1</h1>
            <p>Bienvenidos al blog de <strong>Pasteleria Mil Sabores</strong> en este blog queremos dar a contar
                detalles de nuestra historia y el como se genero todo y causo que quisieramos empezar a trabajar enserio
                con los pasteles</p>
            
            <h1 className="titulo2">Nuestra historia</h1>
            <p>Descubre cómo un pequeño cuaderno de recetas familiares se transformó en la pastelería favorita de tu
                barrio.</p>
            <p>Nuestra historia abarca no tanto pero es inspiradora el como todo se transformo tan rapido en una
                pasteleria de tanto renombre y queriendo causar felicidades
                como ya se sabe somos 3 dueños de la pasteleria y todo comenzo con una motivacion de querer hacer
                realidad lo que escribiamos en nuestros cuadernos dando a presentar nuestros productos solamente a
                conocidos el cual
                era solo momentaneo pero con el tiempo todo se convirtio en algo magico y de que en verdad nos
                propusimos con nuestro sueño de crear esta pasteleria y con perseverancia se logro todo ya que nos
                esforzamos
                demasiado tratando de hacer este sueño realidad y mas sabiendo la competencia que hay en este mercado y
                ya con el tiempo el boca a boca hizo que nuestros productos sonaran mucho mas haciendo que nuestra
                receta y logros sean mas llamativos para la gente
                y llenandolos de felicidad en cada momento que logramos darle nuestros productos y ahora con esta pagina
                buscamos llegar a mas gente que pueda conocer nuestros productos y poder contentarlos en cada dia que
                les llega algo de nuestros productos y con eso dicho
                estamos agradecido de la gente que nos apoya y que sepan que todo lo que hacemos es con cariño
            </p>

            <div className="col-lg-5 align-items-center justify-content-center">
                <img src="../img/pastel.felipe.tres.jpg" className="img-fluid rounded-start" alt="..."></img>
            </div>
        </section>


        <section className="blog2 mt-5">
            <h1 className="primer_titulo">BLOG #2</h1>
            <p>Bienvenidos al blog de <strong>Pasteleria Mil Sabores</strong> aqui te contaremos curiosidades sobre
                nuestra pagina dando un enfoque a las preguntas generales que nos dan en nuestro dia a dia y queremos
                darle el gusto de poder responderlas
                ya que nos sentimos eternamente agradecidos con nuestros clientes</p>
            
            <p>Pregunta 1#: ¿Nuestros productos son en verdad caseros?</p>
            <p>RESPUESTA: Obviamente que nuestros productos son caseros y relativamente deliciosos causando una gran
                felicidad a todos nuestros clientes y tratar de que sean lo mas caseros posibles para que se sienta esa
                dulzura que tanto nos caracteriza
            </p>

            <div className="col-lg-3">
                <img src="/img/pastel.felipe.jpg" className="img-fluid rounded-start" alt="..."></img>
            </div>

            <p>Pregunta 2#: ¿Somos la mejor reposteria del mundo por nuestro Record Guinness?</p>
            <p>RESPUESTA: En este caso depende mucho a la persona que lo preguntes ojala lo fueramos pero hay
                pastelerias que pueden cumplir con eso nosotros con demostrar nuestro esfuerzo y nuestro carisma en cada
                pastel nos sentimos contentos en darle las mejores experiencias gastronomicas que podrian probar y por
                eso nos esforzamos a diario</p>

            <div className="col-lg-3">
                <img src="../img/pastel.felipe.dos.jpg" className="img-fluid rounded-start" alt="..."></img>
            </div>
            
        </section>
    </main>
    </>
  );
}
export default Blog;
