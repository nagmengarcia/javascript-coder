// Aca declaro una pregunta inicial sobre si le interesa comprar algo al cliente.
let wannaBuy = confirm("Te interesa comprar algo?")


// Voy a declarar que la cantidad de items inicial y cantidad de dinero en el carrito es de 0 items y 0 pesos
let cartItems = 0;
let cartMoneyAmount = 0;


// Aca la intencion es ahcer un bucle para que el user pueda comprar cuantas veces quiera, y se termine cuando ya no quiera agergar mas cosas al carrito.

do {
    // ingreso un condicional para el bucle, que a la vez es el metodo de parada, ya que si el user dice que no quiere comprar algo no se ejecuta.
    if (wannaBuy === true){

        //esta es mi lista de productos, que se va a mostrar cada vez que la condicion del if contenedor se cumpla.
        let productList = prompt("Lista de ofertas: \n\n 1 - Camiseta Leo Messi Barcelona 2003 --- $32.000 \n 2 - Camiseta Ruben Paz Racing 1988 --- $19.000 \n 3 - Camiseta J. Saviola River 1999 --- $20.000 \n 4 - Shorts L. Romagnoli San Lorenzo 2009 --- $18.000 \n 5 - Camiseta R. Riquelme Boca 2002 --- $16.000 ");

        // aca me aseguro que todo sea lowercase
        productList = productList.toLocaleLowerCase();
        switch(productList){
            // aca voy a hacer un grupo de cases por si el user no ingresa numeros, y dado que voy a poner opciones que puedan ser texto decidi no parsear con Number(prompt());
            case "1":
            case "messi":
            case "barcelona":
                alert("Producto agregado al carrito: Camiseta Leo Messi Barcelona 2003");
                // esto es para todos pero solo comento aca. lo que quise hacer es basicamente que cuando se elija una opcion del switch se agregue un item al carrito y sume la plata que sale ese item.
                cartMoneyAmount += 32000;
                cartItems++;
                break;
            
            case "2":
            case "ruben paz":
            case "racing":
                alert("Producto agregado al carrito: Camiseta Ruben Paz Racing 1988");
                cartMoneyAmount += 19000;
                cartItems++;
                break;
            
            case "3":
            case "saviola":
            case "river":
                alert("Producto agregado al carrito: Camiseta J. Saviola River 1999");
                cartMoneyAmount += 20000;
                cartItems++;
                break;

            case "4":
            case "romagnoli":
            case "san lorenzo":
                alert("Producto agregado al carrito: Shorts L. Romagnoli San Lorenzo 2009 ");
                cartMoneyAmount += 18000;
                cartItems++;
                break;

            case "5":
            case "riquelme":
            case "boca":
                alert("Producto agregado al carrito: Camiseta R. Riquelme Boca 2002");
                cartMoneyAmount += 16000;
                cartItems++;
                break;
            
            // aca si no ingresa un dato correcto quiero que se rebuclee
            default:
               wannaBuy = confirm("No ingresaste un dato valido, queres intentarlo nuevamente?");
               continue;

     
        };
    };
    // ahora voy a hacer que funcione el bucle reasignando la variable wannaBuy a la cual le voy a mostrar la cantidad de items y el monto del carrito.
    wannaBuy = confirm("Tu carrito tiene " + cartItems + " items, y su monto total es de AR$" + cartMoneyAmount + ". Te interesa comprar algo mas?");

} while(wannaBuy === true){

    // una vez que el usuario decide que no quiere comprar algo mas al final del confirm del do y si el monto de compra es distinto a $0 quiero que me ejecute un nuevo switch para elegir entre entrega a domicilio y retiro en el local asignandole a cada case un valor de % de descuento que sera utilizado en la funcion
    if (wannaBuy === false && cartMoneyAmount!= 0){
        let PercentOff;
        let retirementMode
        
        retirementMode = prompt("Selecciona tu opcion de compra: \n\n 1 - Envio a Domicilio --- 10% off \n 2 - Retiro en el local --- 20% off");
       
        switch (retirementMode) {
            case "1":
             PercentOff = 10;
             break;

            case "2":
             PercentOff = 20;
             break;
        
        };
        // llamo a la funcion discount a la cual le asigno el sus respectivos argumentos
        discount(cartMoneyAmount, PercentOff );

    } else {
        alert("No compraste nada.");
    }
}

// aca creo una funcion con un parametro para el dinero y otro para el descuento. La funcion lo que va a hacer es calcular el monto final con descuento aplicado siempre y cuando el monto del carrito sea distinto a 0, cuando el carro sea 0 no habra descuento.
function discount(cart, percentage) {
    let discountAmount = (cart  * percentage) /100;
    let finalPrice = cart - discountAmount;
    
    alert("Gracias por tu compra. Con el " + percentage + "% de descuento solo tenes que pagar AR$" + finalPrice + ", habiendo ahorrado un total de AR$" + discountAmount);

}


//  Profe: primero perdon por la falta de tildes, es el teclado de la notebook y me da pelea. Lo otro es que lo deje aca al proyecto pues se me complico mucho la parte de hacer un bucle al tocar escape de seleccionar tu metodo de envio. Ya que cuando toco me aparecen variables undefined en el mensaje. Pude hacer un bucle al tocar escape o ingresar valores por default ne el switch de elegir productos, pero no me funciono lo mismo en este ultimo switch de porcentaje. La verdad intente con de todo pero me mareo un poco con logica todavia. Como que no encontre el modo.

