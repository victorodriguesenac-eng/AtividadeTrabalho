$(function () {
 
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
 
    $("#botao").click(inserirTarefa);
});
 
function inserirTarefa() {
 
    var tabela = $(".tarefas").find("tbody");
 
    var campoTitulo = $(".campoTitulo").val();
    var campoObs = $(".campoObs").val();
    var campoImp = $(".campoImp").val();
 
    console.log(campoImp);
 
    if (campoTitulo.trim() == "") {
        alert("Por favor, preencha o título da tarefa.");
        return;
    }
 
    if (campoObs.trim() == "") {
        alert("Por favor, preencha as observações da tarefa.");
        return;
    }
 
    if (campoImp == "") {
        alert("Por favor, selecione a importância da tarefa.");
        return;
    }
 
    var linha = funLinha(campoTitulo, campoObs, campoImp);
 
    linha.find(".botaoDeletar").click(deletaLinha);
 
    tabela.append(linha);
}
 
function funLinha(campoTitulo, campoObs, campoImp) { // função com parâmetro
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
    var colunaImp = $("<td>").text(campoImp);
    var colunaDelete = $("<td>");
 
    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href", "#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone)
    colunaDelete.append(bDeletar);
 
    linha.append(colunaTarefa); //anexa mais codigo
    linha.append(colunaObs);
    linha.append(colunaImp);
    linha.append(colunaDelete);
    return linha
}
 
function deletaLinha(event) {
    event.preventDefault(); //tira o padrão
    $(this).parent().parent().remove();
}
 