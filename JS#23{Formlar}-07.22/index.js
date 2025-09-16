let btn = document.querySelector("form");
let check = document.querySelector(".check");

btn.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Kart qeydiyyatdan keçdi");

    const data = new FormData(event.target);
    console.log(data.get("name"));
    console.log(data.get("pasport"));
    console.log(data.get("gender"));
    console.log(data.get("age"));
    console.log(data.get("email"));
    console.log(data.get("mobile"));
    console.log(data.get("description"));
    console.log(check.checked);

});