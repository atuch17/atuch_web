document.addEventListener("DOMContentLoaded", function() {
const apps = [
  {
    imgSrc: "imagen/iconApps/11.jpg",
    appName: "c++",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/12.png",
    appName: "oracle",
    appDescription: "Para desarrollo de bbdd"
  },
  {
    imgSrc: "imagen/iconApps/13.jpg",
    appName: "eclipse",
    appDescription: "Entorno de programación"
  },
  {
    imgSrc: "imagen/iconApps/14.jpg",
    appName: "java",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/15.jpg",
    appName: "html5",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/16.jpg",
    appName: "css",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/17.jpg",
    appName: "visual studio",
    appDescription: "Entorno de programación"
  },
  {
    imgSrc: "imagen/iconApps/22.jpg",
    appName: "VS Code",
    appDescription: "Entorno de programación"
  },
  {
    imgSrc: "imagen/iconApps/18.jpg",
    appName: "SQLite",
    appDescription: "Para desarrollo de bbdd"
  },
  {
    imgSrc: "imagen/iconApps/19.jpg",
    appName: "SQL",
    appDescription: "Para desarrollo de bbdd"
  },
  {
    imgSrc: "imagen/iconApps/20.jpg",
    appName: "unity",
    appDescription: "Desarrollo de videojuegos"
  },  
  {
    imgSrc: "imagen/iconApps/21.jpg",
    appName: "Android Studio",
    appDescription: "Entorno de programación"
  },
  {
    imgSrc: "imagen/iconApps/23.jpg",
    appName: "c",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/24.jpg",
    appName: "python",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/25.jpg",
    appName: "swi-prolog",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/26.jpg",
    appName: "haskell",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/27.jpg",
    appName: "numpy",
    appDescription: "Librería de Python"
  },
  {
    imgSrc: "imagen/iconApps/28.png",
    appName: "Neo4j",
    appDescription: "Base de datos de grafos"
  },
  {
    imgSrc: "imagen/iconApps/29.png",
    appName: "MongoDB",
    appDescription: "Base de datos NoSQL"
  },
  {
    imgSrc: "imagen/iconApps/30.png",
    appName: "Hadoop",
    appDescription: "Framework de procesamiento"
  },
  {
    imgSrc: "imagen/iconApps/31.png",
    appName: "Web Scraping",
    appDescription: "Extracción de datos"
  },
  {
    imgSrc: "imagen/iconApps/32.png",
    appName: "PySpark",
    appDescription: "Procesamiento distribuido"
  },
  {
    imgSrc: "imagen/iconApps/33.png",
    appName: "Tableau",
    appDescription: "Visualización de datos"
  },
  {
    imgSrc: "imagen/iconApps/34.jpg",
    appName: "Power BI",
    appDescription: "Visualización de datos"
  },
  {
    imgSrc: "imagen/iconApps/35.jpg",
    appName: "QSIG",
    appDescription: "Visualización de datos"
  },
  {
    imgSrc: "imagen/iconApps/36.png",
    appName: "RStudio",
    appDescription: "Lenguaje de programación"
  },
  {
    imgSrc: "imagen/iconApps/37.png",
    appName: "Dialogflow",
    appDescription: "Desarrollo de chatbots"
  } 
];

const appContainer = document.getElementById("appContainer");

  apps.forEach(app => {
    const imgSrc = app.imgSrc;
    const appName = app.appName;
    const appDescription = app.appDescription;

    const appElement = document.createElement("div");
    appElement.className = "col img effect_img"; // Agregar la clase "effect_img"

    const imgElement = document.createElement("img");
    imgElement.loading = "lazy";
    imgElement.src = imgSrc;
    imgElement.alt = "";

    const overlayElement = document.createElement("div");
    overlayElement.className = "overlay"; // Agregar la clase "overlay"
    overlayElement.style.opacity = "0"; // Establecer la propiedad de opacidad inicialmente en 0

    const appNameElement = document.createElement("h3");
    appNameElement.className = "app_name mt-3";
    appNameElement.textContent = appName;

    const appDescriptionElement = document.createElement("h1");
    appDescriptionElement.className = "app_name";
    appDescriptionElement.textContent = appDescription;
	
    overlayElement.appendChild(appNameElement);
    overlayElement.appendChild(appDescriptionElement);

    appElement.appendChild(imgElement);
    appElement.appendChild(overlayElement);

	// Agregar evento de hover para mostrar y ocultar el overlay
    appElement.addEventListener("mouseenter", function() {
      overlayElement.style.opacity = "0.9";
	  overlayElement.style.scale = "1.1";
    });

    appElement.addEventListener("mouseleave", function() {
      overlayElement.style.opacity = "0";
	  overlayElement.style.scale = "1";
    });
	
    imgElement.addEventListener("click", function() {
      overlayElement.classList.toggle("show");
    });

    appContainer.querySelector(".row").appendChild(appElement);
  });
});






