const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },
  
  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },
  
  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },
  
  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },
  
  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },
  
  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*
imprimiendo en consola:
a)  Las pizzas que tengan un id impar.
b) Responder: ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
*/

function pizzasIdImpar(pizzas) {
  console.log("***  Pizzas especiales: Id impar  ***");
  const idImpar = pizzas.filter((pizza) => pizza.id % 2 === 1);
  
  idImpar.forEach((pizza) => {
    console.log(pizza.nombre);
  });
}

function pizzaOferta(pizzas) {
  const ofertas = pizzas.filter((pizzas) => pizzas.precio < 600);
  console.log("***  Las pizzas a menos de 600 son:  ***");
  if (ofertas.length <= 1) {
    ofertas.forEach((pizza) => {
      console.log(` - ${pizza.nombre}`);
    });
  } else {
    console.log("Por el momento no tenemos pizzas de ese monto");
  }
}

function listaDePizzas(pizzas) {
  console.log("***  Lista de Pizzas con sus respectivos precios:  ***");
  pizzas.forEach((pizza) => {
    console.log(`${pizza.nombre} : $${pizza.precio}`);
  });
}

function ingredientesPizzas(pizzas) {
  console.log("***  Ingredientes de cada pizza:  ***");
  
  pizzas.forEach((pizza) => {
    let ingrediente = pizza.ingredientes.join(" - ");
    console.log(`${pizza.nombre}: >> ${ingrediente} <<`);
  });
}

console.log();
pizzasIdImpar(pizzas);
console.log();
pizzaOferta(pizzas);
console.log();
listaDePizzas(pizzas);
console.log();
ingredientesPizzas(pizzas);
console.log();
console.log();
