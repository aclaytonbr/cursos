export class Pessoa {
    protected nome: string;
    protected endereco: string;
    protected contato: string;

    public constructor(_nome: string, _endereco: string, _contato: string) {
        this.nome = _nome;
        this.endereco = _endereco;
        this.contato = _contato;
    }

    public mostrarDetalhes(): void {
        console.log("Nome: " + this.nome);
        console.log("Endereço: " + this.endereco);
        console.log("Contato: " + this.contato);
    }
}