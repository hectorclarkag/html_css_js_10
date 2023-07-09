// guardei numa variavel o input type date com a id date
let userInput = document.getElementById("date");
// aqui e uma tecnica para desabilitar datas futuras
userInput.max = new Date().toISOString().split("T")[0];
// uma variavel para mostrar as respostas
let result = document.getElementById("result");

// onde a magica acontece!
function calculateAge() {
    // uma variavel para guardar os valores da input guardadas acima em outra variavel userInput
    let birthDate = new Date(userInput.value);

    // variaveis para guardar o dia, mes e ano selecionados na input
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // uma variavel para guardarmos a data atual 
    let today = new Date();

    // novamente guardando os valores do dia, mes e ano atuais
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // variaveis para guardar os valores do resultado
    let d3, m3, y3;

    // calculo do ano
    y3 = y2 - y1;

    // calculo do mes
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m2 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`

}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}