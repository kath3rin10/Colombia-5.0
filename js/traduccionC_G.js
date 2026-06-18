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

    document.getElementById("glosarioTitulo").innerText =
        "Glossary";

    document.getElementById("thEnglish").innerText =
        "English";

    document.getElementById("thSpanish").innerText =
        "Spanish";

    document.getElementById("thDefinition").innerText =
        "Definition";

    document.getElementById("btnMensaje").innerText =
        "View Message";

    document.getElementById("galeriaTitulo").innerText =
        "Gallery";

    document.getElementById("videoTitulo").innerText =
        "Conference Video";

    document.getElementById("footerTexto").innerText =
        "© 2026 - Colombia 5.0";

    document.getElementById("btnTraducir").innerText =
        "Translate to Spanish";
document.getElementById("esp1").innerText = "Cloud Storage";
document.getElementById("def1").innerText = "Storage of files on remote servers accessible through the internet.";

document.getElementById("esp2").innerText = "Deep Learning";
document.getElementById("def2").innerText = "Advanced AI technique based on neural networks.";

document.getElementById("esp3").innerText = "Data Science";
document.getElementById("def3").innerText = "Field that analyzes data to obtain knowledge.";

document.getElementById("esp4").innerText = "Ethical Hacking";
document.getElementById("def4").innerText = "Authorized evaluation of systems to detect vulnerabilities.";

document.getElementById("esp5").innerText = "Digital Identity";
document.getElementById("def5").innerText = "Information representing a person in digital environments.";

document.getElementById("esp6").innerText = "Smart Devices";
document.getElementById("def6").innerText = "Connected devices capable of processing information.";

document.getElementById("esp7").innerText = "Mobile Computing";
document.getElementById("def7").innerText = "Use of computing technology on portable devices.";

document.getElementById("esp8").innerText = "Cloud Platform";
document.getElementById("def8").innerText = "Digital environment for developing and running applications.";

document.getElementById("esp9").innerText = "Digital Ecosystem";
document.getElementById("def9").innerText = "Set of connected technologies and users.";

document.getElementById("esp10").innerText = "Data Visualization";
document.getElementById("def10").innerText = "Graphical representation of information.";

document.getElementById("esp11").innerText = "Human-Computer Interaction";
document.getElementById("def11").innerText = "Study of communication between people and systems.";

document.getElementById("esp12").innerText = "Computer Vision";
document.getElementById("def12").innerText = "Technology that enables machines to interpret images.";

document.getElementById("esp13").innerText = "Natural Language Processing";
document.getElementById("def13").innerText = "Ability of a machine to understand human language.";

document.getElementById("esp14").innerText = "Smart Automation";
document.getElementById("def14").innerText = "Automation combined with artificial intelligence.";

document.getElementById("esp15").innerText = "Digital Economy";
document.getElementById("def15").innerText = "Economic activities based on digital technologies.";

document.getElementById("esp16").innerText = "Information Security";
document.getElementById("def16").innerText = "Protection of information against unauthorized access.";

document.getElementById("esp17").innerText = "Data Mining";
document.getElementById("def17").innerText = "Discovery of patterns in large datasets.";

document.getElementById("esp18").innerText = "Cloud Services";
document.getElementById("def18").innerText = "Technology resources provided through the internet.";

document.getElementById("esp19").innerText = "Smart Technology";
document.getElementById("def19").innerText = "Technology capable of adapting and making decisions.";

document.getElementById("esp20").innerText = "User-Centered Design";
document.getElementById("def20").innerText = "Methodology focused on user needs.";

document.getElementById("esp21").innerText = "Interactive Media";
document.getElementById("def21").innerText = "Digital content allowing user participation.";

document.getElementById("esp22").innerText = "Digital Communication";
document.getElementById("def22").innerText = "Exchange of information through electronic media.";

document.getElementById("esp23").innerText = "Innovation Hub";
document.getElementById("def23").innerText = "Space for developing technology projects.";

document.getElementById("esp24").innerText = "Technology Trends";
document.getElementById("def24").innerText = "Innovations shaping the future of technology.";

document.getElementById("esp25").innerText = "Digital Skills";
document.getElementById("def25").innerText = "Skills for using technological tools.";

document.getElementById("esp26").innerText = "Software Engineering";
document.getElementById("def26").innerText = "Application of engineering principles to software.";

document.getElementById("esp27").innerText = "Virtual Environment";
document.getElementById("def27").innerText = "Computer-generated digital space.";

document.getElementById("esp28").innerText = "Emerging Technologies";
document.getElementById("def28").innerText = "Technological innovations in development or recent adoption.";

document.getElementById("esp29").innerText = "Digital Infrastructure";
document.getElementById("def29").innerText = "Technological resources supporting digital services.";

document.getElementById("esp30").innerText = "Technology Innovation";
document.getElementById("def30").innerText = "Development of new technology-based solutions.";
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

    document.getElementById("glosarioTitulo").innerText =
        "Glosario";

    document.getElementById("thEnglish").innerText =
        "English";

    document.getElementById("thSpanish").innerText =
        "Español";

    document.getElementById("thDefinition").innerText =
        "Definición";

    document.getElementById("btnMensaje").innerText =
        "Ver mensaje";

    document.getElementById("galeriaTitulo").innerText =
        "Galería";

    document.getElementById("videoTitulo").innerText =
        "Video de la Conferencia";

    document.getElementById("footerTexto").innerText =
        "© 2026 - Colombia 5.0";

    document.getElementById("btnTraducir").innerText =
        "Traducir a Inglés";
}


}

function mostrarMensaje() {

if (ingles) {

    document.getElementById("mensaje").innerText =
        "Colombia 5.0 was an incredible event full of innovation, artificial intelligence and digital transformation.";

} else {

    document.getElementById("mensaje").innerText =
        "Colombia 5.0 fue un evento increíble lleno de innovación, inteligencia artificial y transformación digital.";
}


}
