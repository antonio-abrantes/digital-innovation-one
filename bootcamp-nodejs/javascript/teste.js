for (let year = 2000; year <= 2020; year++) {
  console.log(year);
}

let num = parseInt(gets());

for (let index = 1; index <= num; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

let contImpar = 0;
let constPar = 0;
let contPosit = 0;
let contNegat = 0;

let list = [-5, 0, -3, -4, 12];

for (let index = 0; index < 5; index++) {
  // let numTemp = parseInt(gets());
  // let numTemp = parseInt(list[index]);
  if (numTemp % 2 == 0) {
    constPar++;
  } else {
    contImpar++;
  }

  if (numTemp < 0) {
    contNegat++;
  } else if (numTemp > 0) {
    contPosit++;
  }
}

console.log(constPar + ' valor(es) par(es)');
console.log(contImpar + ' valor(es) impar(es)');
console.log(contPosit + ' valor(es) positivo(s)');
console.log(contNegat + ' valor(es) negativo(s)');

let notas = [10000, 5000, 2000, 1000, 500, 200, 100];
let valor = parseInt(gets());

let cents = valor * 100;

for (let index = 0; index < 7; index++) {
  let result = cents / m[index];
  console.log(result);
}

let notas = [10000, 5000, 2000, 1000, 500, 200, 100];
let valor = parseInt(gets());

let cents = valor * 100;

for (let index = 0; index < 7; index++) {
  let result = cents / notas[index];
  console.log(
    parseInt(result) + ' nota(s) de R$ ' + notas[index] / 100 + ',00'
  );
  cents = cents % notas[index];
}

let x = parseFloat(gets());
let y = parseFloat(gets());
let consumoMedio;

consumoMedio = x / y;

console.log(consumoMedio.toFixed(3) + ' km/l');

let n = parseInt(gets());
let arr = [4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

for (let i = 0; i < n; i++) {
  arr.push(parseInt(gets()));
}

arr.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < n; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

for (let i = n - 1; i >= 0; i--) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i]);
  }
}

//let numCasos = parseInt(gets());
let numCasos = parseInt(2);
let listasArray = [];
let listasStr = ['carne laranja suco picles laranja picles', 'laranja pera laranja pera pera',];

function removerItensRepetidos(lista) {
  let result = lista.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
      init.push(current);
    }
    return init;
  }, []);
  let listasStr = "";
  result.map(item =>{
    listasStr += " "+item; 
  });
  console.log(listasStr.trim());
}

for (let i = 0; i < numCasos; i++) {
  let listaStr = gets();
  let listTemp = listaStr.split(' ');

  listasArray.push(removerItensRepetidos(listTemp));
}
