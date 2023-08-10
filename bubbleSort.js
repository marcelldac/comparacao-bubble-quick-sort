let bubble = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];

const ini = performance.now();
function bubbleSort () {
    for (let i = 0; i < bubble.length; i++) {
        if (bubble[i] > bubble[i +1]) {
            let v1 = bubble[i]
            let v2 = bubble[i +1] 
            bubble[i] = v2
            bubble[i +1] = v1
        }
    }
}

for (let j = 0; j < bubble.length ; j++) {
    bubbleSort();
}
const fim = performance.now();

console.log(bubble);
console.log(`Tempo de execução: ${fim-ini}`);
