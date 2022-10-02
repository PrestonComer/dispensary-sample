$(document).ready(function() {
    initialSetup();
    clickEvents();
});


function initialSetup() {
    $(".buttonLinks").width($("#locations").width()+40);
    $(".buttonLinks").removeClass("hidden");
}

function clickEvents() {
    $("#products").on("click", function() {
        toggleDecks(["locationsDeck", "strainsDeck", "newsContainer"], ["none", "grid", "none"]);
    });

    $("#locations").on("click", function() {
        toggleDecks(["locationsDeck", "strainsDeck", "newsContainer"], ["grid", "none", "none"]);
    });

    $("#news").on("click", function() {
        toggleDecks(["locationsDeck", "strainsDeck", "newsContainer"], ["none", "none", "flex"]);
    });
}

function toggleDecks(deckList, newDisplay) {
    for (let index = 0; index < deckList.length; index++) {
        $("."+deckList[index]).css("display", newDisplay[index]);
    }
}