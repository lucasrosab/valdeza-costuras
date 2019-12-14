//Materialize Configuração
M.AutoInit();

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5500);
}

autoplay();