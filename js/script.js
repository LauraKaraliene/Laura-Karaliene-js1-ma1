
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question1

const cat = {
        complain: console.log("Meow!")
    }
   

//Question2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question3

heading.style.fontSize = "2em";

//Question4

heading.className = "subheading";
console.log(heading.className);


//Question5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


//Question6

const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";


//Question7

function newFunction(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
newFunction(cats);

//Question8

function createCats(cats) {
    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let catsAge = "Age unknown";

        if(cats[i].age) {
            catsAge = cats[i].age;
        }
        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${catsAge}</p>
                </div>`;
    }
    return html;
}

const newHtml = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;

