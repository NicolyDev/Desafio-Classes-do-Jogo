class heroi{
  constructor(nome, idade, tipo, tipoDeAtaque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.tipoDeAtaque = tipoDeAtaque
  }
  //usar if/else pra atribuir o valor de ataque conforme o tipo de heroi
 
  ataque(){
     console.log(`Herói de nome ${this.nome}, de ${this.idade} anos, ${this.tipo}, atacou usando ${this.tipoDeAtaque}`)
 }
}


let heroi1 = new heroi('Thartra', 18, 'mago')

if(heroi1.tipo = 'mago'){
   heroi1.tipoDeAtaque = 'magia' 
 }else if(heroi1.tipo = 'monge'){
   heroi1.tipoDeAtaque = 'artes marciais'
 }else if(heroi1.tipo = 'ninja'){
  heroi1.tipoDeAtaque(heroi1.tipo = 'shuriken')
 }else{
  heroi1.tipoDeAtaque = 'espada'
 }
 

heroi1.ataque()