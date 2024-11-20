import React from 'react';
//import './app.css';

function Vistadonaciones() {
    const donaciones = [
        {
            id: 1,
            imagen: 'https://via.placeholder.com/641x578.97',
            titulo: 'Haz la diferencia hoy',
            descripcion: 'Al apoyar a CODISCUN, estás contribuyendo directamente a la inclusión, el bienestar y el desarrollo de personas con discapacidades. Tu donación ayuda a crear oportunidades, eliminar barreras y construir una sociedad más justa y solidaria. Cada aporte, por pequeño que sea, hace una gran diferencia. ¡Sé parte del cambio!',
        },
        {
            id: 2,
            imagen: 'https://via.placeholder.com/300x200',
            titulo: 'Testimonios de primera persona',
            descripcion: 'Donar a CODISCUN fue una de las mejores decisiones que he tomado. No solo pude contribuir a una causa increíble, sino que también recibí apoyo cuando más lo necesitaba. Gracias a ellos, accedí a pruebas de ITS y atención psicológica de calidad. Estoy profundamente agradecido por su profesionalismo y dedicación. ¡Es un verdadero cambio de vida!',
        },
        {
            id: 3,
            imagen: 'https://via.placeholder.com/300x200',
            titulo: 'Impacto de la donacion',
            descripcion: 'Acceso a Servicios Esenciales: Facilita pruebas de ITS, atención psicológica y otros servicios vitales para quienes más lo necesitan. Conciencia y Prevención: Fortalece programas educativos y de prevención que benefician a comunidades vulnerables. Construcción de una Sociedad Solidaria: Cada donación contribuye a eliminar barreras y a fomentar la igualdad de derechos y oportunidades. Tu apoyo ayuda a transformar vidas y a generar un cambio duradero en la comunidad. 💙',
        },
        {
            id: 4,
            imagen: 'https://via.placeholder.com/300x200',
            titulo: '¿Porque necesitamos tu apoyo?',
            descripcion: '"Necesitamos tu apoyo porque juntos podemos marcar una diferencia real en la vida de quienes más lo necesitan. Tu contribución nos permite ofrecer servicios esenciales como atención psicológica y pruebas de ITS. Con tu ayuda, podemos llegar más lejos, impactar más vidas y construir una sociedad más justa, solidaria y empática. ¡Tu apoyo es el motor del cambio!"',
        },
        {
            id: 5,
            imagen: 'https://via.placeholder.com/300x200',
            titulo: 'Historia de cambio',
            descripcion: 'Darien, un joven de 22 años, enfrentaba ansiedad y dudas sobre su salud. Al llegar a CODISCUN, recibió atención psicológica que lo ayudó a manejar sus emociones, junto con pruebas de ITS que le dieron tranquilidad. Gracias a este apoyo, Darien recuperó su confianza y ahora inspira a otros jóvenes a priorizar su bienestar. "CODISCUN no solo me ayudó, me dio las herramientas para cambiar mi vida", comparte emocionado.',
        },
       
    ];

    return (
        <div className="donaciones-container">
        <h1 className="donaciones-title">Donaciones</h1>
        {donaciones.map((donacion) => (
                <div className="donacion-item" key={donacion.id}>
                    <img
                        src={donacion.imagen}
                        alt={donacion.titulo}
                        className="donacion-image"
                    />
                    <div className="donacion-content">
                        <h2 className="donacion-title">{donacion.titulo}</h2>
                        <p className="donacion-description">{donacion.descripcion}</p>
                    </div>
                </div>
            ))}
    </div>
    );
}

export default Vistadonaciones;

