let input = document.querySelector(".input");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                input.innerHTML = string;
            } catch (error) {
                input.innerHTML = "Error";
            }
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.innerHTML = string;
        } else if (e.target.innerHTML === "+/-") {
            input.innerHTML = -(parseFloat(string));
        } else {
            string += e.target.innerHTML;
            input.innerHTML = string;
        }
    });
});
