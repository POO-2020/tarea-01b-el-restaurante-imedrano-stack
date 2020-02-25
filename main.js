import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import ElementoPedido from "./elemento-pedido.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import Restaurante from "./restaurante.js"
import Tiempo from "./tiempo.js"

class Main{
    constructor(){
        this.restaurante = new Restaurante("Pizza Planeta", 264, new Direccion("Constitucion", 999, 8, "Colonia Real", 28984, "Colima", "Colima"));
    }

    registrarPedidos(){        
        this.restaurante.registrarPedidos(pedido1);
        this.restaurante.registrarPedidos(pedido2);
        this.restaurante.registrarPedidos(pedido3);
        this.restaurante.listarPedidos();
    }

    registrarProductos(){
        
        this.restaurante.registrarProductos(producto1);
        this.restaurante.registrarProductos(producto2);
        this.restaurante.registrarProductos(producto3);
        this.restaurante.listrarProductos();
    }
}

var producto1 = new Producto("pizza Mexicana",new Precio(95));
var producto2 = new Producto("Pizza de Doble",new Precio(40));
var producto3 =new Producto("Pizza de Rellena",new Precio(80));

var elemento1 = new ElementoPedido(producto1,3);
var elemento2 = new ElementoPedido(producto2,2);
var elemento3 = new ElementoPedido(producto3,5);

var pedido1 = new Pedido(new Fecha(7,2,2020),new Tiempo(15,36),new Cliente("Pedro",new Direccion("Roberto Gattah",545,0,"El porvenir",29988,"Colima","Colima"),312344454545));
var pedido2 = new Pedido(new Fecha(25,8,2020),new Tiempo(18,45),new Cliente("Juan",new Direccion("Tercer Anillo",123,0,"Rey Coliman",29874,"Colima","Colima"),3145454545));
var pedido3 = new Pedido(new Fecha(14,5,2020),new Tiempo(16,11),new Cliente("David",new Direccion("Universidad",321,0,"Infonavit",428984,"Colima","Colima"),3124787878));

pedido1.agregarElemento(elemento1);
pedido2.agregarElemento(elemento2);
pedido3.agregarElemento(elemento3);
pedido1.getCostoTotal(elemento1);

var app = new Main();
app.registrarPedidos();
app.registrarProductos();