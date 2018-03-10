function openNav(id) {
    jQuery("#sidebarContainer div.content").css("display", "none");
    document.getElementById("c" + id).style.display = "block";
    document.getElementById("aidmap").style.transform = "translateX(350px)";
    document.getElementById("sideNav").style.transform = "translateX(0px)";
}

function closeNav() {
    document.getElementById("sideNav").style.transform = "translateX(-350px)";
    document.getElementById("aidmap").style.transform = "translateX(0px)";
}
