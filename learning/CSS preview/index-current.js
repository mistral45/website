const element = document.querySelector(".examples");

function modify(element,prefix,string){
    if(element !== ``){
        string += `${prefix}${element.value};
        `;
    }
    return string;
}

function update(){
    let modifications = ``;
    const color = document.getElementById("color")
    const bgcolor = document.getElementById("bg-color")
    const padding = document.getElementById("padding")
    const fontsize = document.getElementById("font-size")
    const rounded = document.getElementById("rounded")
    const border = document.getElementById("border")

    modifications = modify(color,`color:`,modifications)
    modifications = modify(bgcolor,`background-color:`,modifications)
    modifications = modify(fontsize,`font-size:`,modifications)
    modifications = modify(rounded,`border-radius:`,modifications)
    modifications = modify(padding,`padding:`,modifications)
    modifications = modify(border,`border:`,modifications)
    element.style.cssText = modifications;
}
