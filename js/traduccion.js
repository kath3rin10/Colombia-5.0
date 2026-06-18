
let ingles = false;

function traducirPagina() {

    ingles = !ingles;

    if (ingles) {

        document.getElementById("titulo").innerText =
            "Colombia 5.0";

        document.getElementById("subtitulo").innerText =
            "Innovation, technology and digital transformation at Corferias";

        document.getElementById("navEvento").innerText =
            "Event";

        document.getElementById("navActividades").innerText =
            "Activities";

        document.getElementById("navCronologia").innerText =
            "Glossary";

        document.getElementById("navGaleria").innerText =
            "Gallery";

        document.getElementById("eventoTitulo").innerText =
            "What was Colombia 5.0?";

        document.getElementById("eventoTexto").innerHTML =
            `Colombia 5.0 was an event focused on innovation,
            artificial intelligence, programming and entrepreneurship.

            <br><br>

            It was a very interesting experience because I learned more
            about technology, innovation and how these tools are changing
            the way we live and work.

            <br><br>

            During the event I observed different projects,
            startups and technological advances related to artificial
            intelligence, programming, robotics and digital transformation.

            <br><br>

            What caught my attention the most was seeing how companies
            and young people are creating ideas to solve real-world
            problems through technology.

            <br><br>

            In addition, I learned that technology is not only useful
            for entertainment, but also for studying, working and helping
            improve society.

            <br><br>

            This experience motivated me to continue learning about
            systems and software development.`;

        document.getElementById("actTitulo").innerText =
            "Featured Activities";

        document.getElementById("confTitulo").innerText =
            "Conference";

        document.getElementById("confTexto").innerText =
            "Game UI Systems: From beautiful screens to interfaces that work.";

        document.getElementById("gamerTitulo").innerText =
            "Gaming Zone";

        document.getElementById("gamerTexto").innerText =
            "Competitions, video games and virtual reality experiences.";

        document.getElementById("empTitulo").innerText =
            "Entrepreneurship";

        document.getElementById("empTexto").innerText =
            "Presentation of startups and innovative projects.";

        document.getElementById("keywordsTitulo").innerText =
            "Event Keywords";

        document.getElementById("footerTexto").innerText =
            "© 2026 - Colombia 5.0 | SENA";

        document.getElementById("btnTraducir").innerText =
            "Translate to Spanish";

    } else {

        document.getElementById("titulo").innerText =
            "Colombia 5.0";

        document.getElementById("subtitulo").innerText =
            "Innovación, tecnología y transformación digital en Corferias";

        document.getElementById("navEvento").innerText =
            "Evento";

        document.getElementById("navActividades").innerText =
            "Actividades";

        document.getElementById("navCronologia").innerText =
            "Glosario";

        document.getElementById("navGaleria").innerText =
            "Galería";

        document.getElementById("eventoTitulo").innerText =
            "¿Qué fue Colombia 5.0?";

        document.getElementById("eventoTexto").innerHTML =
            `Colombia 5.0 fue un evento enfocado en innovación,
            inteligencia artificial, programación y emprendimiento.

            <br><br>

            Fue una experiencia muy interesante porque pude conocer más
            sobre la tecnología, la innovación y cómo estas herramientas
            están cambiando la forma en que vivimos y trabajamos.

            <br><br>

            Durante el recorrido observé diferentes proyectos,
            emprendimientos y avances relacionados con inteligencia artificial,
            programación, robótica y transformación digital.

            <br><br>

            Lo que más me llamó la atención fue ver cómo muchas empresas
            y jóvenes están creando ideas para solucionar problemas reales
            a través de la tecnología.

            <br><br>

            Además, aprendí que la tecnología no solo sirve para entretenimiento,
            sino también para estudiar, trabajar y ayudar a mejorar diferentes
            áreas de la sociedad.

            <br><br>

            Esta experiencia me motivó más a seguir aprendiendo sobre sistemas
            y desarrollo tecnológico.`;

        document.getElementById("actTitulo").innerText =
            "Actividades Destacadas";

        document.getElementById("confTitulo").innerText =
            "Conferencia";

        document.getElementById("confTexto").innerText =
            "Game UI Systems: de pantallas bonitas a interfaces que funcionan.";

        document.getElementById("gamerTitulo").innerText =
            "Zona Gamer";

        document.getElementById("gamerTexto").innerText =
            "Competiciones, videojuegos y experiencias de realidad virtual.";

        document.getElementById("empTitulo").innerText =
            "Emprendimiento";

        document.getElementById("empTexto").innerText =
            "Presentación de startups y proyectos innovadores.";

        document.getElementById("keywordsTitulo").innerText =
            "Palabras Clave del Evento";

        document.getElementById("footerTexto").innerText =
            "© 2026 - Colombia 5.0 | SENA";

        document.getElementById("btnTraducir").innerText =
            "Traducir a Inglés";
    }
}

