class Biblioteca {
  livros: Livro[];

  constructor(livros: Livro[]) {
    this.livros = livros;
  }
}

class Livro {
  private _titulo: string;
  private _autor: string;

  // Atributos e métodos do livro
  constructor(titulo: string, autor: string) {
    this._titulo = titulo;
    this._autor = autor;
  }
}
