function openNav(id) {
    jQuery("#sidebarContainer div.content").css("display", "none");
    document.getElementById("c" + id).style.display = "block";
    document.getElementById("sideNav").style.marginLeft = "-10px";
    document.getElementById("aidmap").style.marginLeft = "0px";
    document.body.style.transform = "translateX(350px)";
}

function closeNav() {
    document.body.style.transform = "translateX(0)";
}
