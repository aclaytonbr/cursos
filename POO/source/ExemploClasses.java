
class Animal {
    //atributos
    private String nomeCientifico;

    //Construtor
    public Animal(String nomeCientifico) {
        this.nomeCientifico = nomeCientifico;
    }

    //Métodos get e set
    public void setNomeCientifico(String nomeCientifico) {
        this.nomeCientifico = nomeCientifico;
    }

    public String getNomeCientifico() {
        return this.nomeCientifico;
    }

    //Outros métodos
    public void imprimirDetalhes() {
        System.out.println("Nome científico: " + this.nomeCientifico);
    }
}


public class ExemploClasses {
    public static void main(String[] args) {
        
        // Criando objetos da classe MinhaClasse
        Animal objeto1 = new Animal("Canis Familiares");

        // Chamando métodos nos objetos
        System.out.println(objeto1.getNomeCientifico());
    }
}
