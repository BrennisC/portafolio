import '../styles/Home.css';
const Home = () => {
    return (
        <>
            <section className="home">
                <div className="home-content">
                    <h1>¡Hola! Soy Brennis Benjaminn Castro Cano</h1>
                    <span>
                        <a href="https://github.com/BrennisC" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="BrennisCastro" />
                        </a>
                        <a href="https://www.linkedin.com/in/brennis-benjam%C3%ADnn-castro-cano-073301250/ "
                            target='blank'
                            rel='noopener noreferrer'
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                        </a>
                    </span>
                    <p className="home-tagline">
                        Este diseño sigue un flujo fácil de navegar y te permite destacar tus habilidades de manera profesional. Puedes desarrollarlo usando HTML, CSS y, si prefieres, frameworks como React para el frontend.
                    </p>

                    <div className="home-buttons">
                        <a
                            href="/assets/CV.pdf"
                            download
                            className="home-btn"
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
