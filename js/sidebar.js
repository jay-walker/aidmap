function openNav(id) {
    jQuery("#sidebarContainer div.content").css("display", "none");
    document.getElementById("c" + id).style.display = "block";
    document.getElementById("sideNav").style.width = "350px";
    document.getElementById("aidmap").style.marginLeft = "350px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("aidmap").style.marginLeft = "0";
    document.getElementById("c" + id).style.display = "none";
}
