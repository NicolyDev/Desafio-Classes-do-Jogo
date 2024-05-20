class heroi{
  constructor(nome, idade, tipo, tipoDeAtaque){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.tipoDeAtaque = this.definirTipoDeAtaque();
  }
  //usar if/else pra atribuir o valor de ataque conforme o tipo de heroi
  definirTipoDeAtaque(){
    if(this.tipo === 'mago'){
     return 'magia';
    }else if(this.tipo === 'monge'){
     return 'artes marciais';
    }else if(this.tipo === 'ninja'){
     return 'shuriken';
    }else{
     return 'espada';
    }
  }
  
  ataque(){
     console.log(`Herói de nome ${this.nome}, de ${this.idade} anos, ${this.tipo}, atacou usando ${this.tipoDeAtaque}`);
 }
}

let heroi1 = new heroi('Thartra', 18, 'mago');
heroi1.ataque();
//teste linux kkkkkkkkkks
