$(document).ready(function () {
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider({fullWidth: true});
    $('.myreviews').carousel({
        numVisible: 7,
        shift: 55,
        padding: 55,
    })
});

function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}