$('#sidebar').affix({
    offset: {
        top: $('#sidebar').offset().top
    }
});

function affixWidth() {
    // ensure the affix element maintains it width
    var affix = $('#sidebar');
    var width = affix.width();
    affix.width(width);
}

$(document).ready(function () {

    affixWidth();

});
