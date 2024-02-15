function calcularSalarioMensual(salarioAnual){
    const MESES_EN_EL_ANIO = 12;
    return salarioAnual/MESES_EN_EL_ANIO;
  }
  
  const $calcularSalarioMensual = document.querySelector('#calcular-salario-mensual')
  
  $calcularSalarioMensual.onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    document.querySelector('#salario-mensual').value = salarioMensual
  
    console.log(salarioMensual)
  
    return false;
  }