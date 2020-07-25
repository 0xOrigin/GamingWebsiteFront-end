var firstGame = {}, secondGame = {};
$('.compare-data').fadeOut();
function dataViewer() {
    document.getElementById("firstLogo").setAttribute("src", firstGame.logo);
    document.getElementById("firstLogo").setAttribute("alt", firstGame.name + "_Logo");
    document.getElementById("secondLogo").setAttribute("src", secondGame.logo);
    document.getElementById("secondLogo").setAttribute("alt", secondGame.name + "_Logo");
    document.getElementById("firstName").innerHTML = firstGame.name;
    document.getElementById("secondName").innerHTML = secondGame.name;
    document.getElementById("firstGenre").innerHTML = firstGame.genre;
    document.getElementById("secondGenre").innerHTML = secondGame.genre;
    document.getElementById("firstReleaseDate").innerHTML = firstGame.releaseDate;
    document.getElementById("secondReleaseDate").innerHTML = secondGame.releaseDate;
    document.getElementById("firstDeveloper").innerHTML = firstGame.developer;
    document.getElementById("secondDeveloper").innerHTML = secondGame.developer;
    document.getElementById("firstPublisher").innerHTML = firstGame.publisher;
    document.getElementById("secondPublisher").innerHTML = secondGame.publisher;
    document.getElementById("firstPlatform").innerHTML = firstGame.platform;
    document.getElementById("secondPlatform").innerHTML = secondGame.platform;
    document.getElementById("firstProcessor").innerHTML = firstGame.processor;
    document.getElementById("secondProcessor").innerHTML = secondGame.processor;
    document.getElementById("firstMemory").innerHTML = firstGame.memory;
    document.getElementById("secondMemory").innerHTML = secondGame.memory;
    document.getElementById("firstGraphics").innerHTML = firstGame.graphics;
    document.getElementById("secondGraphics").innerHTML = secondGame.graphics;
    document.getElementById("firstStorage").innerHTML = firstGame.storage;
    document.getElementById("secondStorage").innerHTML = secondGame.storage;
}

function firstGameChanges() {
    var selectedValue_1stGame = document.getElementById("first-game").value;
    if (selectedValue_1stGame == "CSGO")
        firstGame = CSGO;
    else if (selectedValue_1stGame == "GTA_V")
        firstGame = GTA_V;
    else if (selectedValue_1stGame == "Outlast")
        firstGame = Outlast;
    else if (selectedValue_1stGame == "Outlast2")
        firstGame = Outlast2;
    else if (selectedValue_1stGame == "PUBG")
        firstGame = PUBG;
    else if (selectedValue_1stGame == "BlackSquad")
        firstGame = BlackSquad;
    else if (selectedValue_1stGame == "BFV")
        firstGame = BFV;
    else if (selectedValue_1stGame == "NFS")
        firstGame = NFS;
    else if (selectedValue_1stGame == "APEX")
        firstGame = APEX;
    else if (selectedValue_1stGame == "Detroit")
        firstGame = Detroit;
    else if (selectedValue_1stGame == "EonAltar")
        firstGame = EonAltar;
    else if (selectedValue_1stGame == "LOF")
        firstGame = LOF;
    else if (selectedValue_1stGame == "LOF2")
        firstGame = LOF2;
    else if (selectedValue_1stGame == "ACO")
        firstGame = ACO;
    else if (selectedValue_1stGame == "DMC")
        firstGame = DMC;
    else if (selectedValue_1stGame == "FFXV")
        firstGame = FFXV;
    else if (selectedValue_1stGame == "MGSVTPP")
        firstGame = MGSVTPP;
    else if (selectedValue_1stGame == "TWWH3")
        firstGame = TWWH3;
    else if (selectedValue_1stGame == "WD2")
        firstGame = WD2;
    else if (selectedValue_1stGame == "INSIDE")
        firstGame = INSIDE;
    else if (selectedValue_1stGame == "LittleNightmares")
        firstGame = LittleNightmares;
    else if (selectedValue_1stGame == "LIMBO")
        firstGame = LIMBO;
    else if (selectedValue_1stGame == "GeometryDash")
        firstGame = GeometryDash;
    else if (selectedValue_1stGame == "HITMAN")
        firstGame = HITMAN;
}

function secondGameChanges() {
    var selectedValue_2ndGame = document.getElementById("second-game").value;
    if (selectedValue_2ndGame == "CSGO")
        secondGame = CSGO;
    else if (selectedValue_2ndGame == "GTA_V")
        secondGame = GTA_V;
    else if (selectedValue_2ndGame == "Outlast")
        secondGame = Outlast;
    else if (selectedValue_2ndGame == "Outlast2")
        secondGame = Outlast2;
    else if (selectedValue_2ndGame == "PUBG")
        secondGame = PUBG;
    else if (selectedValue_2ndGame == "BlackSquad")
        secondGame = BlackSquad;
    else if (selectedValue_2ndGame == "BFV")
        secondGame = BFV; 
    else if (selectedValue_2ndGame == "NFS")
        secondGame = NFS;
    else if (selectedValue_2ndGame == "APEX")
        secondGame = APEX;
    else if (selectedValue_2ndGame == "Detroit")
        secondGame = Detroit; 
    else if (selectedValue_2ndGame == "EonAltar")
        secondGame = EonAltar;
    else if (selectedValue_2ndGame == "LOF")
        secondGame = LOF;
    else if (selectedValue_2ndGame == "LOF2")
        secondGame = LOF2; 
    else if (selectedValue_2ndGame == "ACO")
        secondGame = ACO;
    else if (selectedValue_2ndGame == "DMC")
        secondGame = DMC;
    else if (selectedValue_2ndGame == "FFXV")
        secondGame = FFXV;
    else if (selectedValue_2ndGame == "MGSVTPP")
        secondGame = MGSVTPP;
    else if (selectedValue_2ndGame == "TWWH3")
        secondGame = TWWH3;
    else if (selectedValue_2ndGame == "WD2")
        secondGame = WD2;
    else if (selectedValue_2ndGame == "INSIDE")
        secondGame = INSIDE;
    else if (selectedValue_2ndGame == "LittleNightmares")
        secondGame = LittleNightmares;
    else if (selectedValue_2ndGame == "LIMBO")
        secondGame = LIMBO;
    else if (selectedValue_2ndGame == "GeometryDash")
        secondGame = GeometryDash;
    else if (selectedValue_2ndGame == "HITMAN")
        secondGame = HITMAN;
}

function checkerViewer() {
    var selectedValue_1stGame = document.getElementById("first-game").value;
    var selectedValue_2ndGame = document.getElementById("second-game").value;

    if ((selectedValue_1stGame == "" && selectedValue_2ndGame == "") || (selectedValue_1stGame == selectedValue_2ndGame)){
        $('.left-arrow').css({color: '#ff0000'});
        $('.right-arrow').css({color: '#ff0000'});
    }
    else if (selectedValue_1stGame == ""){
        $('.right-arrow').css({color: '#fff'});
        $('.left-arrow').css({color: '#ff0000'});
    }
    else if (selectedValue_2ndGame == ""){
        $('.left-arrow').css({color: '#fff'});
        $('.right-arrow').css({color: '#ff0000'});
    }
    else{
        $('.left-arrow').css({color: '#fff'});
        $('.right-arrow').css({color: '#fff'});
        $('.compare-controls').fadeOut();
        dataViewer();
        $('.compare-data').delay(400).fadeIn();
    }   
}

$('.back-btn').click(function(){
    $('.compare-data').fadeOut();
    $('.compare-controls').delay(400).fadeIn();
});