<h1 align="center" >Curriculum Minimalista</h1>

<p align="center">Curriculum minimalista inspirado en el proyecto <a href="https://github.com/BartoszJarocki/cv">BartoszJarocki</a> y <a href="https://github.com/midudev/minimalist-portfolio-json?tab=readme-ov-file">Midudev</a></p>

<p align="center">
 <img alt="banner_01" src="https://img.shields.io/github/last-commit/EddyBel/Curriculum?color=%23AED6F1&style=for-the-badge" />
 <img alt="banner_02" src="https://img.shields.io/github/license/EddyBel/Curriculum?color=%23EAECEE&style=for-the-badge" />
 <img alt="banner_03" src="https://img.shields.io/github/languages/top/EddyBel/Curriculum?color=%23F9E79F&style=for-the-badge" />
 <img alt="banner_04" src="https://img.shields.io/github/languages/count/EddyBel/Curriculum?color=%23ABEBC6&style=for-the-badge" />
 <img alt="banner_05" src="https://img.shields.io/github/languages/code-size/EddyBel/Curriculum?color=%23F1948A&style=for-the-badge" />
</p>

![Cover](./public/cover.png)

Este proyecto es una página web que funciona como un CV imprimible. Utiliza un archivo JSON para cargar la información de manera dinámica y está inspirado en los trabajos de [Bartosz Jarocki](https://github.com/BartoszJarocki) y [Miguel Ángel Durán](https://github.com/midudev), conocido como Midudev.

## Características

- **Imprimible**: Diseñado con un enfoque en la impresión para obtener un CV en papel con aspecto profesional.
- **Dinámico**: Toda la información se carga desde un archivo JSON, lo que facilita la actualización y mantenimiento del CV.
- **Inspiración**: Basado en las ideas y estilos de proyectos open-source de desarrolladores reconocidos.
- **Configurable** Configurable con un cambio de variables simples.

## Cómo usar

Para utilizar este proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias con `npm install`.
3. Edita el archivo `CV-Español.json` o `CV-Ingles.json` con tu información personal.
4. Ejecuta el proyecto con `npm run dev`.
5. Abre tu navegador y navega a `http://localhost:5050`.
6. Imprime tu CV utilizando la función de impresión de tu navegador.

## Personalización

Puedes personalizar el estilo y la información de tu CV editando los siguientes archivos:

- `web.config.js`: Contiene variables de configuración para la web.
- `CV-Español.json`: Contiene toda la información personal que se mostrará en el CV en el idioma español.
- `CV-Ingles.json`: Contiene toda la información personal que se mostrará en el CV en el idioma ingles.
- `CV.js`: Importa el archivo JSON segun el idioma seleccionado en `web.config.js`.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor, abre un issue o envía un pull request.

## Agradecimientos

Un agradecimiento especial a Bartosz Jarocki y Miguel Ángel Durán por su inspiración y contribuciones a la comunidad open-source.

---

<p align="center">
  <a href="https://github.com/EddyBel" target="_blank">
    <img alt="Github" src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/eduardo-rangel-eddybel/" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>