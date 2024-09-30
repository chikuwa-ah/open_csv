function getCSV() {
    let req = new XMLHttpRequest();
    req.open('get', './data/0.csv', true);
    req.send(null);

    req.onload = function () {
        arrayCSV(req.responseText);
    }
}

function arrayCSV(str) {
    let result = [];
    let tmp = str.split('\n');

    for (let i = 0; i < tmp.length; i++) {
        result[i] = tmp[i].split(',');
    }

    let sumP = [];
    let sumC = [];
    for (let i = 0; i < 5; i++) {
        sumC.push(0);
    }
    let c = 0;
    result.forEach(e => {
        let sum = 0;
        for (let i = 2; i < e.length; i++) {
            sum += Number(e[i]);
        }
        sumP.push(sum);
        sumC[e[0] - 1] += sum;
    });
    console.log(sumP, sumC);
}

getCSV();