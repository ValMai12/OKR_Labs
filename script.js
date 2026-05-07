function startDialogs() {
    alert("Вітаю на сайті про архітектуру Іспанії!");

    let name = prompt("Як тебе звати?");
    let ok = confirm("Продовжити роботу?");

    if (ok) {
        alert("Привіт, " + name + "!");
    } else {
        alert("Добре, до побачення!");
    }
}


function userDialog() {
    let count = 0;

    while (true) {
        let answer = prompt("Напиши 'exit' щоб вийти або щось інше");

        count++;

        if (answer === "exit") {
            alert("Вихід після " + count + " спроб");
            break;
        }

        if (count >= 5) {
            alert("Забагато спроб!");
            break;
        }
    }
}


function developerInfo(surname, name, position = "Student") {
    alert(
        "Developer: " + surname + " " + name +
        "\nPosition: " + position
    );
}


function compareStrings() {
    let a = prompt("Введи перший рядок");
    let b = prompt("Введи другий рядок");

    if (a > b) {
        alert("Більший: " + a);
    } else if (b > a) {
        alert("Більший: " + b);
    } else {
        alert("Рядки рівні");
    }
}


function changeBackground() {
    document.body.style.backgroundColor = "lightyellow";

    setTimeout(() => {
        document.body.style.backgroundColor = "#f1f1ff";
    }, 30000);
}


function goToPage1() {
    location.href = "page1.html";
}


function domWork() {

    let title = document.getElementById("main-title");
    title.textContent = "The architecture of Spain";

    let paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(p => {
        p.innerHTML = "<b>Spain is extremely beautiful</b>";
    });

    console.log(title.outerHTML);
    console.log(title.textContent);
}


function modifyDOM() {

    let section = document.createElement("section");
    
    let title = document.createElement("h3");
    title.textContent = "New section unlocked";

    let text = document.createElement("p");
    text.textContent = "You just found a secret section) Congratulations!";

    section.append(title);
    
    section.append(text);

    document.body.prepend(section);

   let line = document.createElement("hr");
section.after(line);

setTimeout(() => {
    line.replaceWith("The secret is out now");
}, 2000);

    setTimeout(() => {
        section.remove();
    }, 5000);
}