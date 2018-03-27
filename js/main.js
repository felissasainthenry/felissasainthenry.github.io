var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */
    cat.setAttribute("src", "./img/jumping-cat.jpg");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "./img/funny-cat.jpg");
});