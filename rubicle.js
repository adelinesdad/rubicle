const answer = [
    ['d', 'r', 'i', 'p', 's'], 
    ['r', 'e', 's', 'e', 't'], 
    ['u', 'n', 's', 'e', 'e'], 
    ['m', 'a', 'u', 'v', 'e'], 
    ['s', 'l', 'e', 'e', 'p']
];
const current = [
    ['r', 'r', 'i', 'p', 'p'],
    ['e', 'e', 's', 'e', 's'],
    ['m', 'u', 'n', 's', 't'],
    ['s', 'a', 'u', 'v', 'e'],
    ['d', 'l', 'e', 'e', 'e']
];

function refresh() {
    for (var i=0;i<current.length;i++) {
        for (var j=0;j<current[i].length;j++) {
            const elem = document.getElementById('cell' + i + j);
            elem.innerText = current[i][j];
        }
    }
}