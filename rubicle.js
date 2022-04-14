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
            elem.innerText = current[i][j].toUpperCase();
            elem.classList.remove("correct", "sameRowOrCol");
        }
    }

    for (var i=0;i<answer.length;i++) {
        for (var j=0;j<answer[i].length;j++) {
            if (current[i][j] === answer[i][j]) {
                const elem = document.getElementById('cell' + i + j);
                elem.classList.add('correct');
            }
        }
    }

    for (var i=0;i<answer.length;i++) {
        for (var j=0;j<answer[i].length;j++) {
            if (current[i][j] !== answer[i][j]) {
                for (var x=0; x<answer[i].length;x++) {
                    if (x !== j && answer[i][j] === current[i][x]) {
                        const elem = document.getElementById('cell' + i + x);
                        if (!elem.classList.contains("correct") && !elem.classList.contains("sameRowOrCol")) {
                            elem.classList.add("sameRowOrCol");
                            break;
                        }
                    }
                }
                for (var x=0; x<answer.length;x++) {
                    if (x !== i && answer[i][j] === current[x][j]) {
                        const elem = document.getElementById('cell' + x + j);
                        if (!elem.classList.contains("correct") && !elem.classList.contains("sameRowOrCol")) {
                            elem.classList.add("sameRowOrCol");
                            break;
                        }
                    }
                }
            }
        }
    }
}

function shiftRow(rowNum, isRight) {
    if (isRight) {
        const shiftedOff = current[rowNum][current[rowNum].length - 1];
        for (var i = current[rowNum].length - 1; i > 0; i--) {
            current[rowNum][i] = current[rowNum][i-1];
        }
        current[rowNum][0] = shiftedOff;
    } else {
        const shiftedOff = current[rowNum][0];
        for (var i = 0; i < current[rowNum].length - 1; i++) {
            current[rowNum][i] = current[rowNum][i+1];
        }
        current[rowNum][current[rowNum].length-1] = shiftedOff;        
    }
    refresh();
}

function shiftCol(colNum, isDown) {
    if (isDown) {
        const shiftedOff = current[current.length - 1][colNum];
        for (var i = current.length - 1; i > 0; i--) {
            current[i][colNum] = current[i-1][colNum];
        }
        current[0][colNum] = shiftedOff;
    } else {
        const shiftedOff = current[0][colNum];
        for (var i = 0; i < current.length - 1; i++) {
            current[i][colNum] = current[i+1][colNum];
        }
        current[current.length-1][colNum] = shiftedOff;        
    }
    refresh();
}