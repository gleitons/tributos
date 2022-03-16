function gerarPDF() {

    const protocolo = document.getElementById('protoEcidade').value;
    const proprietario = document.getElementById('nomeSolicitante').value;
    const endereco = document.getElementById('ruaC').value;

    const setor = document.getElementById('selSetor')

    let selectSetor = setor.options[setor.selectedIndex].text;
    const setorEx = selectSetor.extenso();

    const quadra = document.getElementById('quadra').value;
    const quadraEx = quadra.extenso()
    const lote = document.getElementById('lote').value;
    const loteEx = lote.extenso()


    const areaLote = document.getElementById('areaLote').value;
    const areaLoteEx = areaLote.extenso()
    const areaConstrucao = document.getElementById('areaConstrucao').value;
    const areaConstrucaoEx = areaConstrucao.extenso()


    

var doc = new jsPDF();


//doc.addImage("examples/images/Octonyan.jpg", "JPEG", 0, 0, 210, 295);

//doc.addImage("", "JPEG", 25, 20, 20, 20);

doc.setFontSize(15);
doc.setFont("helvetica", "bold");
doc.setTextColor("#2E4D8B");
doc.text("PREFEITURA DE LAGOA DOS PATOS MG", 60, 25);

doc.setFontSize(10);
doc.setFont("helvetica", "bold");
doc.setTextColor("#2E4D8B");
doc.text("CNPJ: 16.901.381/0001-10", 90, 33);

doc.setFontSize(10);
doc.setFont("helvetica", "bold");
doc.setTextColor("#2E4D8B");
doc.text("PRAÇA31 DE MARÇO, 111, CENTRO - LAGOA DOS PATOS -MG-(38) 3745-1239", 50, 40);

doc.setFontSize(15);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text("CERTIDÃO DE VALOR VENAL DE IMÓVEL URBANO", 105, 50, null, null, "center");

doc.setFontSize(10);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`PROTOCOLO ${protocolo}/2021`, 85, 57);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("Certifico a pedido verbal e protocolado da pessoa interessada, que", 30, 65);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("revendo a planta Cadastral do Perímetro Urbano deste Município e a ", 20, 72);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("Planta de valores de Terrenos Urbanos do ", 20, 79);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text("CTM (Código Tributário", 121, 79);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text("Municipal), ", 20, 86);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("verifica-se estar de acordo as seguintes informações:", 49, 86);



doc.setFillColor(221, 221, 221);
doc.rect(20, 93, 43, 62, "FD");

doc.rect(20, 93, 170, 8);
doc.rect(20, 101, 170, 9);
doc.rect(20, 110, 170, 9);
doc.rect(20, 119, 170, 9);
doc.rect(20, 128, 170, 9);
doc.rect(20, 137, 170, 9);
doc.rect(20, 146, 170, 9);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("SETOR", 22, 99);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("QUADRA", 22, 108);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("LOTE", 22, 117);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("ÁREA", 22, 126);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("ÁREA CON.", 22, 135);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("ENDEREÇO", 22, 144);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("PROPRIETÁRIO", 22, 153);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`${selectSetor} - (${setorEx})`, 65, 99);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`${quadra} - (${quadraEx})`, 65, 108);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`${lote} - (${areaLoteEx})`, 65, 117);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`${lote} - (${areaConstrucaoEx})`, 65, 126);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`${areaConstrucao} - (${loteEx})`, 65, 135);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`${endereco}`, 65, 144);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`${proprietario}`, 65, 153);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("O imóvel acima citado possui o seguinte valor venal", 20, 161);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text("(Avaliado a \"preço", 145, 161);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text(`código Tributário Pág. 87 a Pág. 90 para terrenos, temos os seguintes valores:`, 20, 168);

//Código Tributário Pág. 87 - e Pág. 90 para terrenos. 


// doc.setFontSize(13);
// doc.setTextColor("#000");
// doc.setFont("helvetica", "normal");
// doc.text("no seguinte:", 158, 168);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text("*Valor Venal: ", 20, 175);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text(`R$ ${valorVenal}  (Este é o valor do terreno com imóvel`, 55, 175);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text(`sendo R$ ${venalTerreno} do terreno e R$ ${venalImóvel} do imóvel, de acordo com o`, 20, 182);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "italic");
doc.text(`código tributário 544/2005, setor ${selectSetor}, quadra ${quadra}, valor de R$ ${valorSetor} por M².`, 20, 189);


doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("E, por ser a expressão da verdade, assim o certifico e dou fé, na forma da Lei, para", 20, 210);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("que possa produzir seus regulares efeitos.", 20, 215);

doc.setFontSize(13);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text("Lagoa dos Patos - MG, 15 de Março de 2022", 20, 225);

doc.line(100, 235, 190, 235);

doc.setFontSize(11);
doc.setTextColor("#000");
doc.setFont("helvetica", "bold");
doc.text("GLEITON APARECIDO SOARES DE SOUZA", 105, 240);



doc.setFontSize(11);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text(`Divisão de Receitas e Cadastramento Imobiliário`, 102, 245);

doc.setFontSize(11);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text(`Municipio de Lagoa dos Patos - MG`, 110, 250);

doc.setFontSize(10);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("PRAÇA 31 DE MARÇO 111 / CENTRO / (38) 3745-1239 / CEP: 39.360-000 / LAGOA DOS PATOS / MINAS", 105, 265, null, null, "center");

doc.setFontSize(10);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("GERAIS", 105, 270, null, null, "center");

doc.setFontSize(10);
doc.setTextColor("#000");
doc.setFont("helvetica", "normal");
doc.text("prefeitura@lagoadospatos.mg.gov.br", 105, 275, null, null, "center");

doc.save('a4.pdf')
}




