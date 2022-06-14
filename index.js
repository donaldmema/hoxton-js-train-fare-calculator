let age = Number(prompt("What is your AGE?"));

let departure = prompt(`Are you traveling from:
- Istanbul
- Konya
- Antalya`);

while (
  departure !== "Istanbul" &&
  departure !== "Konya" &&
  departure !== "Antalya"
) {
  departure = prompt(`Select starting point from the list below:
- Istanbul
- Konya
- Antalya`);
}

let destination = prompt(`Where are you traveling to:
- Izmir
- Ankara`);

while (destination !== "Izmir" && destination !== "Ankara") {
  departure = prompt(`Select destination from the list below:
- Izmir
- Ankara`);
}

const pricePerKm = 0.21;

const distanceIstanbulIzmir = 480;
const distanceIstanbulAnkara = 530;
const distanceKonyaIzmir = 561;
const distanceKonyaAnkara = 298;
const distanceAntalyaIzmir = 459;
const distanceAntalyaAnkara = 516;

function calcPrice(age, distance) {
  let price = distance * pricePerKm;
  if (age < 18) {
    price = price * 0.8;
  } else if (age > 65) {
    price = price * 0.6;
  }
  return console.log(
    `You will need to pay £${price.toFixed(
      2
    )} for this trip(${departure} to ${destination} ).`
  );
}

if (departure === "Istanbul" && destination === "Izmir") {
  let distance = distanceIstanbulIzmir;
  calcPrice(age, distance);
} else if (departure === "Istanbul" && destination === "Ankara") {
  let distance = distanceIstanbulAnkara;
  calcPrice(age, distance);
} else if (departure === "Konya" && destination === "Izmir") {
  let distance = distanceKonyaIzmir;
  calcPrice(age, distance);
} else if (departure === "Konya" && destination === "Ankara") {
  let distance = distanceKonyaAnkara;
  calcPrice(age, distance);
} else if (departure === "Antalya" && destination === "Izmir") {
  let distance = distanceAntalyaIzmir;
  calcPrice(age, distance);
} else if (departure === "Antalya" && destination === "Ankara") {
  let distance = distanceAntalyaAnkara;
  calcPrice(age, distance);
}
