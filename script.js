// Parašykitė funkciją pluspluskuri priima 2 parametrus:
// skaičius
// kiek kartu prie šio skaičiaus reikia pridėti 1

// Pvz.: plusPlus(10, 3) grąžina 13. Svarbu: turi pridėti butent 1, o ne tesiog sudėti du skaičius
function plusPlus(num, addedNum) {
    for(let i = 0; i < addedNum; i++){
        num++;
    }
    return num;
}

console.log(plusPlus(10, 3));
