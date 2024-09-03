$(document).ready(function() {
  const faturamentoMensal = [
      {"dia": 1, "valor": 100},
      {"dia": 2, "valor": 200},
      {"dia": 3, "valor": 0}, 
      {"dia": 4, "valor": 250},
      {"dia": 5, "valor": 300},
      {"dia": 6, "valor": 0}, 
      {"dia": 7, "valor": 400},
      {"dia": 8, "valor": 150},
      
  ];

  $("#calcular").click(function() {
      let valoresValidos = faturamentoMensal.filter(dia => dia.valor > 0).map(dia => dia.valor);
      
      let menorFaturamento = Math.min(...valoresValidos);
      let maiorFaturamento = Math.max(...valoresValidos);
      
      let somaFaturamento = valoresValidos.reduce((acc, valor) => acc + valor, 0);
      let mediaMensal = somaFaturamento / valoresValidos.length;
      
      let diasAcimaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;
      
      $("#menor-faturamento").text(`Menor faturamento do mês: R$ ${menorFaturamento.toFixed(2)}`);
      $("#maior-faturamento").text(`Maior faturamento do mês: R$ ${maiorFaturamento.toFixed(2)}`);
      $("#dias-acima-media").text(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
  });
});