class universityClass {
    constructor(name, local, days, dates = []){
        this.name = name;
        this.local = local; 
        this.days = days;
        this.dates = dates;
    }
}

const metodos = new universityClass("Métodos Matemáticos", "106 - CCT", "Segunda / Quarta / 14-16", ["24/04", "22/05", "26/06"])
const ipe = new universityClass("Estatística e Probabilidade", "109A - CCT", "Segunda / Quarta / 8-10", ["29/04", "19/06"])
const ed1 = new universityClass("Estrutura de Dados I", "109B - CCT", "Segunda 10-12 / Terça 16-18", ["15/05", "19/06"])
const plp = new universityClass("Paradigmas de Linguagens de Programação", "206 - CCT", "Terça 10-12 / Quinta 10-12")
const arquitetura = new universityClass("Arquitetura de Computadores", "207 - CCT", "Terça / Quinta / 14-16")
const ingles = new universityClass("Inglês Instrumental", "E1 - 218", "Sexta 14-17", ["12/04"])
const topicos = new universityClass("Tópicos em Programação", "INF2 - P5", "Sexta 8-12")

const classes = [metodos, ipe, ed1, plp, arquitetura, ingles, topicos]

const mainContainer = document.querySelector("main");
const noteInterface = document.querySelector(".add-note-interface");

const createCard = (id, local, day, dates = [])=>{
    const idEl = document.createElement("h3");
    const localEl = document.createElement("h4");
    const dayEl = document.createElement("p");

    const datesEl = document.createElement("ol");
    const div = document.createElement("div");
    div.classList.add("classU")

    idEl.innerText = id;
    idEl.classList.add(".classU.h3");

    localEl.innerText = local
    localEl.classList.add(".classU.h4")

    dayEl.innerText = day;
    dayEl.classList.add(".classU.p")

    div.appendChild(idEl);
    div.appendChild(localEl);
    div.appendChild(dayEl);

    if(dates != []){
        const datesNumberEl = document.createElement("h4");
        datesNumberEl.innerText = "Datas Provas";
        datesNumberEl.classList.add("dates-title");

        dates.forEach((dt)=>{
            div.appendChild(datesNumberEl)
            li = document.createElement("li");
            li.innerText = dt;
            datesEl.appendChild(li);
            div.appendChild(datesEl);
        })
    }
    return div;
}

classes.forEach((cl) => { 
    if(cl.dates){
        card = createCard(cl.name, cl.local, cl.days, cl.dates);
        mainContainer.appendChild(card);
        return;
    }
    card = createCard(cl.name, cl.local, cl.days);
    mainContainer.appendChild(card);
})



