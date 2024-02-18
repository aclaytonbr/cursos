abstract class Empregado {

    private String nome;
    private String cargo;

    public Empregado(String _nome, String _cargo) {
        this.nome = _nome;
        this.cargo = _cargo;
    }

    public void mostrarDetalhes() {
        System.out.println("Nome:\t" + this.nome);
        System.out.println("Cargo:\t" + this.cargo);
    }

    abstract public double calcularSalario();

}

class Horista extends Empregado {

    int carga_horaria_mensal;
    double valor_hora;

    public Horista(String _nome, String _cargo) {
        super(_nome, _cargo);
    }

    public void setCargaHoraria(int _carga_horaria) {
        this.carga_horaria_mensal = _carga_horaria;
    }
    
    public void setValorHora(double _valor_hora) {
        this.valor_hora = _valor_hora;
    }

    public double calcularSalario() {
        return this.carga_horaria_mensal * valor_hora;
    } 

}

public class ExemploAbstracao {

    public static void main(String[] args) {
        Horista emp1 = new Horista("Fulano", "Montador");
        emp1.carga_horaria_mensal = 10*4;
        emp1.valor_hora = 46.07;
        System.out.println(emp1.calcularSalario());
    }
}