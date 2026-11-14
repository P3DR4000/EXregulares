

document.getElementById("btnA").addEventListener("click", validarA);
document.getElementById("btnB").addEventListener("click", validarB);
document.getElementById("btnC").addEventListener("click", validarC);
document.getElementById("btnD").addEventListener("click", validarD);
document.getElementById("btnE").addEventListener("click", validarE);
document.getElementById("btnF").addEventListener("click", validarF);
document.getElementById("btnG").addEventListener("click", validarG);
document.getElementById("btnH").addEventListener("click", validarH);
document.getElementById("btnI").addEventListener("click", validarI);
document.getElementById("btnJ").addEventListener("click", validarJ);
document.getElementById("btnK").addEventListener("click", validarK);
document.getElementById("btnL").addEventListener("click", validarL);


function validarA() {
    let texto = document.getElementById("txtA").value;
    let padrao = /^\d{2}\/\d{2}\/(\d{4}|\d{2})$/;

    if (padrao.test(texto)) {
        alert("Data válida");
    } else {
        alert("Data inválida");
    }
}

function validarB() {
    let texto = document.getElementById("txtB").value;
    let padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (padrao.test(texto)) {
        alert("CPF válido");
    } else {
        alert("CPF inválido");
    }
}

function validarC() {
    let texto = document.getElementById("txtC").value;
    let padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/;

    if (padrao.test(texto)) {
        alert("Matrícula válida");
    } else {
        alert("Matrícula inválida");
    }
}

function validarD() {
    let texto = document.getElementById("txtD").value;
    let padrao = /^MT-\d{2}\.\d{3}-IFTM$/i;

    if (padrao.test(texto)) {
        alert("Código válido");
    } else {
        alert("Código inválido");
    }
}

function validarE() {
    let texto = document.getElementById("txtE").value;
    let padrao = /^MT-\d{2}\.\d{3}-[iI][fF][tT][mM]$/;

    if (padrao.test(texto)) {
        alert("Código válido");
    } else {
        alert("Código inválido");
    }
}

function validarF() {
    let texto = document.getElementById("txtF").value;
    let padrao = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M$/i;

    if (padrao.test(texto)) {
        alert("Código válido");
    } else {
        alert("Código inválido");
    }
}

function validarG() {
    let texto = document.getElementById("txtG").value;
    let padrao = /^IFTM campus Uberlândia( Centro)?$/;

    if (padrao.test(texto)) {
        alert("Campus válido");
    } else {
        alert("Campus inválido");
    }
}

function validarH() {
    let texto = document.getElementById("txtH").value;
    let padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

    if (padrao.test(texto)) {
        alert("Telefone válido");
    } else {
        alert("Telefone inválido");
    }
}

function validarI() {
    let texto = document.getElementById("txtI").value;
    let padrao = /^\(\d{2,3}\)\s?\d{4,5}-\d{4}$/;

    if (padrao.test(texto)) {
        alert("Telefone válido");
    } else {
        alert("Telefone inválido");
    }
}

function validarJ() {
    let texto = document.getElementById("txtJ").value;
    let padrao = /^(1[,.][3-9]\d?|2[,.]([0-4]\d?|5[0]?))$/;

    if (padrao.test(texto)) {
        alert("Altura válida");
    } else {
        alert("Altura inválida");
    }
}

function validarK() {
    let texto = document.getElementById("txtK").value;
    let padrao = /^R\$(0|[1-9]\d{0,2}(\.\d{3}){0,3}),\d{1,2}$/;

    if (padrao.test(texto)) {
        alert("Faturamento válido");
    } else {
        alert("Faturamento inválido");
    }
}

function validarL() {
    let texto = document.getElementById("txtL").value;
    let padrao = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;

    if (padrao.test(texto)) {
        alert("Cronômetro válido");
    } else {
        alert("Cronômetro inválido");
    }
}
