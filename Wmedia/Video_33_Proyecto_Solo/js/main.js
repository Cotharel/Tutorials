const articuloSedans = document.getElementById("sedans");
const articuloSuvs = document.getElementById("suvs");
const articuloLuxury = document.getElementById("luxury");

articuloSedans.addEventListener("click", expandirSedans);
articuloSuvs.addEventListener("click", expandirSuvs);
articuloLuxury.addEventListener("click", expandirLuxury);

articuloSedans.style.width = "60%";
articuloSuvs.style.width = "20%";
articuloLuxury.style.width = "20%";

function expandirSedans(){
    articuloSedans.style.width = "60%";
    articuloSuvs.style.width = "20%";
    articuloLuxury.style.width = "20%";
}

function expandirSuvs(){
    articuloSedans.style.width = "20%";
    articuloSuvs.style.width = "60%";
    articuloLuxury.style.width = "20%";
}

function expandirLuxury(){
    articuloSedans.style.width = "20%";
    articuloSuvs.style.width = "20%";
    articuloLuxury.style.width = "60%";
}