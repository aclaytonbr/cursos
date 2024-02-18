
class Empregado {
    private String nome;
    private String cargo;
    public Empregado(String _nome, String _cargo) {
        this.nome = _nome;
        this.cargo = _cargo;
    }
    public void mostrarDetalhes() {
        System.out.println("Nomee:\t" + this.nome);
        System.out.println("Cargoo:\t" + this.cargo);
    }
}

class Horista extends Empregado {
    private int carga_horaria_mensal;
    private double valor_hora;

    public Horista(String _nome, String _cargo, int _carga_horaria_mensal, double _valor_hora) {
        super(_nome, _cargo);
        this.carga_horaria_mensal = _carga_horaria_mensal;
        this.valor_hora = _valor_hora;
    }
    public void mostrarDetalhes() {
        super.mostrarDetalhes();
        System.out.println("Carga Horária Mensal:\t" + this.carga_horaria_mensal);
        System.out.println("Valor Hora:\t" + this.valor_hora);
    }

}

public class ExemploHeranca {
    public static void main(String[] args) {
        Horista empHorista = new Horista("Fulano","Montador",40, 46.07);
        empHorista.mostrarDetalhes();
    }
}
