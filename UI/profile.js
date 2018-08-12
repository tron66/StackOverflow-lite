function summary(evt, tabName) {
    var i, content, link;
    //gets all class content elements
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    //gets all class link elements
    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}