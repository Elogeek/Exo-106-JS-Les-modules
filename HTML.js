 export function  newDiv() {
    let div = document.createElement("div");
    div.style.backgroundImage = "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
    div.style.width = 300 + "px";
    div.style.height = "600px";

    return div;
}

 export function newImput(typeInput) {
    let input = document.createElement("input");
    input.type = typeInput;
    input.value = "555.67890000"
    input.style.borderRadius = 10 + 'px';
    input.style.borderColor = "linear-gradient(to top, #fddb92 0%, #d1fdff 100%);"
     input.id = "newInput" + typeInput;

     return input;
}

 export function newLabel(typeInput) {
    let label = document.createElement("label");
     label.id = "newInput" + typeInput;
     label.innerHTML = typeInput;

    return label;
}

