/**Elementos */
const contenedorProyectos = document.querySelector("#contenedor-proyectos");

/**Datos */
const proyectos = [
  {
    nombre: "Restaurante de Pizza",
    descripcion: "",
    url: "https://pizza-fawn-rho.vercel.app/",
    imagen: "./media/imgProyectos/Pizza.png",
  },
  {
    nombre: "Manejar tareas",
    descripcion: "",
    url: "https://my-react-task-example-alejandro-giraldo-sernas-projects.vercel.app/",
    imagen: "./media/imgProyectos/Task.png",
  },
  {
    nombre: "Juego de la Culebrita",
    descripcion: "",
    url: "https://game-culebrita-alejandro-giraldo-sernas-projects.vercel.app/",
    imagen: "./media/imgProyectos/Culebrita.png",
  },
  {
    nombre: "Juego hogwarts",
    descripcion: "",
    url: "https://hogwarts-taller-alejandro-giraldo-sernas-projects.vercel.app/",
    imagen: "./media/imgProyectos/Hogwarts.png",
  },
];

function mostraProyectos() {
  contenedorProyectos.innerHTML = "";

  proyectos.forEach((proyecto) => {
    contenedorProyectos.innerHTML += `

        <div class="col">
                <div class="card h-100">
                    <a href=${proyecto.url}>
                        <img src="${proyecto.imagen}" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.nombre}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            
        </div>
    `;
  });
}

mostraProyectos();
