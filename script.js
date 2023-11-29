const startButton = document.querySelector("button");
startButton.addEventListener("click", function() {
    let paragraph1 = document.querySelector("#paragraph h2:first-of-type + p");
    let paragraph2 = document.querySelector("#paragraph h2:nth-of-type(2) + p");
    let paragraph3 = document.querySelector("#paragraph h2:nth-of-type(3) + p");
    let table = document.querySelector("table");

    let cell2 = table.rows[0].cells[1];
    let cell5 = table.rows[1].cells[1];
    let cell8 = table.rows[2].cells[1];

    cell2.appendChild(paragraph1);
    cell5.appendChild(paragraph2);
    cell8.appendChild(paragraph3);

    let header1 = document.getElementById("first_p")
    let header4 = document.getElementById("second_p")
    let header7 = document.getElementById("third_p")

    let cell1 = table.rows[0].cells[0];
    let cell4 = table.rows[1].cells[0];
    let cell7 = table.rows[2].cells[0];

    cell1.appendChild(header1);
    cell4.appendChild(header4);
    cell7.appendChild(header7);
});
