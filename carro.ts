import { veiculo } from "./veiculo";

class carro extends veiculo {
    Portas: number;
    
    constructor(marca: string, modelo: string, Portas: number) {
        super(marca, modelo);
        this.Portas = Portas;
    }
    
    apresentar(): void {
        console.log(`Carro - Marca: ${this.marca}, Modelo: ${this.modelo}, Portas: ${this.Portas}`);
    }
}
const Carro1 = new carro("Toyota", "Corolla", 4);
Carro1.apresentar();