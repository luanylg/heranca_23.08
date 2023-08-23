import { veiculo } from "./veiculo";

class moto extends veiculo {
    cilindradas: number;
    
    constructor(marca: string, modelo: string, cilindradas: number) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }
    
    apresentar(): void {
        console.log(`Moto - Marca: ${this.marca}, Modelo: ${this.modelo}, Cilindradas: ${this.cilindradas}`);
    }
}
const Moto1 = new moto("Honda", "CBR 1000RR", 1000);
Moto1.apresentar();