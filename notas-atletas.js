let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];
 
 for (let i = 0; i < atletas.length; i++){
 
   let notas = atletas[i].notas;
   notas = notas.sort();
   notas = notas.slice(1,4);
 
   let somaNota = notas.reduce(function(total, nota){
     return total + nota;  
   },0);
 
   let notaValida = somaNota / notas.length;
 
   console.log("Ginasta: " + atletas[i].nome);
   console.log("Recebeu: " + atletas[i].notas);
   console.log("Resultado: " + notaValida); 
 }
