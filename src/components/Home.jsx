import "../styles/home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-7 isImage">
          <figure className="pic image ">
            <img
              src="https://img.microsiervos.com/Peliculas-Ready-Player-One.jpg"
              className="is-rounded"
            />
          </figure>
        </div>
        <div className="column">
          <h1 className="title is-1">Bienvenido...</h1>
        </div>
      </div>
      <div className="content is-medium">
        <h1>Sobre el proyecto</h1>
        <p>
          Bienvenido a NRMovies un proyecto de practica hecho desde cero para el
          coding-Bootcamp de Plataforma 5, la idea principal es poner en
          practica lo visto en el modulo nivelatorio y el modulo de formación,
          en este proyecto usé vanilla Js, Node.js, express, sequelize,
          Passport, Postgres , React y Context.
        </p>
        <h2>Funcionalidades</h2>
        <ul>
          <li>Buscar y listar películas.</li>
          <li>Ver los detalles de una película o programa de televisión.</li>
          <li>Crear usuarios.</li>
          <li>Loguear y desloguear usuarios.</li>
          <li>Agregar una película o programa a una lista de favoritos.</li>
          <li>Ver una lista de favoritos.</li>
          <li>Remover una película o programa de una lista de favoritos.</li>
          <li>
            Diferenciar las rutas de front-end para películas y programas de
            televisión.
          </li>
          <li>Mantener sesión abierta ante un cierre del browser o refresh</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
