$(document).ready(function() {
    setupLinks();
});


function setupLinks() {
    $("#deals").width($("#locations").width());
    $(".buttonLinks").removeClass("hidden");

    $("#products").on("click", function() {
        toggleDecks(["locationsDeck", "strainsDeck"], ["none", "grid"]);
    });

    $("#locations").on("click", function() {
        toggleDecks(["locationsDeck", "strainsDeck"], ["grid", "none"]);
    });

    $("#deals").on("click", function() {
        toggleDecks(["locationsDeck", "strainsDeck"], ["none", "none"]);
    });

    $("#news").on("click", function() {
        toggleDecks(["locationsDeck", "strainsDeck"], ["none", "none"]);
    });
}

function toggleDecks(deckList, newDisplay) {
    for (let index = 0; index < deckList.length; index++) {
        $("."+deckList[index]).css("display", newDisplay[index]);
    }
}