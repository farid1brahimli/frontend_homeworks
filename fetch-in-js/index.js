
let getBtn = document.querySelector(".get");
let createBtn = document.querySelector(".post");
let updateBtn = document.querySelector(".put");
let deleteBtn = document.querySelector(".delete");

let transDiv = document.querySelector(".transactions");

//GET
getBtn.addEventListener("click", () => {

    transDiv.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            json.forEach((item) => {

                let postDiv = document.createElement("div");
                postDiv.classList.add("post");
                postDiv.dataset.id = item.id; // 📌 id saxladıq

                let head = document.createElement("h2");
                let par = document.createElement("p");

                head.innerText = `${item.title}`
                par.innerText = `${item.body}`
                transDiv.append(head, par);
                transDiv.append(postDiv);
                transDiv.classList.add("show");
            });
        })
        .catch(err => {
            console.log(err);
        });


});

//POST
createBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'Frontend Developer',
            body: 'Farid is Jr.Frontend Developer. But he also a student',
            userId: 1,
        }),
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let head = document.createElement("h2");
            let par = document.createElement("p");

            head.innerText = `${json.title}`
            par.innerText = `${json.body}`
            transDiv.prepend(head, par);
            transDiv.classList.add("show");

        })
        .catch(err => {
            console.log(err)
        })
})

//PUT
updateBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2", {
        method: "Put",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id: 2,
            userId: 1,
            title: 'Frontend Developer',
            body: 'Farid is Jr.Frontend Developer. But he also a student',
        }),
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
        .catch(err => {
            console.log(err)
        })
})

//DELETE
deleteBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    })
        .then((res) => {
            if (res.ok) {
                console.log("Deleted post id=1");

                // 📌 UI-dən də silək
                let postDiv = transDiv.querySelector("[data-id='1']");
                if (postDiv) {
                    postDiv.remove();
                }
            } else {
                console.error("Silinmədi!");
            }
        })
        .catch((err) => console.log(err));
});


