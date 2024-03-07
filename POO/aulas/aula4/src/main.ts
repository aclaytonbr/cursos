class Pessoa {
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

enum eEstado_Civil {
    Solteiro = 1,
    Casado = 2,
    Uniao_Estavel = 3
}

class Empregado extends Pessoa {
    private cargo: string;
    private salario_bruto: number;
    private estado_civil: eEstado_Civil;

    public constructor(_nome: string, _endereco: string, _contato: string, _cargo: string, _salario_bruto: number, _estado_civil: eEstado_Civil) {
        super(_nome, _endereco, _contato);
        this.estado_civil = _estado_civil;
        this.cargo = _cargo;
        this.salario_bruto = _salario_bruto;
    }

    public mostrarDetalhes(): void {
        console.log("---------------------------------------");
        console.log("Nome: " + this.nome);
        console.log("Endereço: " + this.endereco);
        console.log("Contato: " + this.contato);
        console.log("Cargo: " + this.cargo);
        console.log("Salário Bruto: " + this.salario_bruto);
        console.log("Estado Civil: " + this.estado_civil)
        console.log("---------------------------------------");
    }
}

function mostrarPessoa() {
    let empregado: Empregado = new 
    Empregado('Fulano', 'Rua sem fim', '99999999','montador',3000, eEstado_Civil.Uniao_Estavel);

    empregado.mostrarDetalhes();
}

mostrarPessoa();