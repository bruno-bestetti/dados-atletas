class Atletas{
  constructor(nome,idade,peso,altura,notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas
  }

  obtemNomeAtleta(){
    return this.nome
  }

  obtemIdadeAtleta(){
    return this.idade
  }

  obtemPesoAtleta(){
    return this.peso
  } 

  obtemAlturaAtleta(){
    return this.altura
  }

  obtemNotasAtleta(){
    return this.notas
  }

  calculaCategoria(){
  if(this.idade >= 9, this.idade <= 11){
    return "Infantil"
  }else if(this.idade >= 12, this.idade <= 13){
    return "Juvenil"
  }else if(this.idade >= 14, this.idade <= 15){
    return "Intermediário"
  }else if(this.idade >= 16, this.idade <= 30){
    return "Adulto"
  }else(this.idade > 31)
    return "Demais idades"  
  }

  obtemCategoria(){ 
    return atleta.calculaCategoria()
  } 

  calculaIMC(){
    return this.peso / (this.altura * this.altura).toFixed(2)
  } 

  obtemIMC(){
    return atleta.calculaIMC().toFixed(2)
  }

  calculaMediaValida(){ 
    this.notas = this.notas.sort(function(a, b){ // ordena as notas
      return a - b;
    })
    this.notas = this.notas.slice(1, 4); // elimina maior e menor
    var acumulador = 0; // acumulador para salvar soma das notas
    this.notas.forEach(function(nota){ //metodo forEach para somar notas
      acumulador = nota + acumulador;
    });
    let mediaValida = acumulador / this.notas.length;
    return mediaValida;
  }
 
  obtemMediaValida(){
    return atleta.calculaMediaValida().toFixed(2)
  } 
}

const atleta = new Atletas("Cesar Abascal",
30, 80, 1.70,
[10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()} anos`);
console.log(`Peso: ${atleta.obtemPesoAtleta()} kg`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}m`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
