const number = document.querySelectorAll('.col');
const spinButton = document.querySelector('.btn1');
const stopButton = document.querySelector('.btn2');
const alertStatistics = document.querySelector('.alert');
let intervalId = null;
let resultArray = [];
let objectStatistic={};
function getRandomNumber() {
    return Math.floor(Math.random() * 36) + 1;
}

function startSpinning() {
    intervalId = setInterval(() => {
        for (let i = 0; i < number.length; i++) {
            number[i].innerHTML = getRandomNumber()

        }
    }, 100);

}

function stopSpinning() {
    clearInterval(intervalId);
    intervalId = null;
    resultArray = [];
    for (let i = 0; i < number.length; i++) {
        resultArray.push(parseInt(number[i].innerHTML));
    }
    return console.log(resultArray);
}

spinButton.addEventListener('click', startSpinning);

function showStatistics() {
    alertStatistics.classList.remove('d-none');
    const max = Math.max(...resultArray);
    const min = Math.min(...resultArray);
    const avg = average()
    objectStatistic={
        "Min value": min,
        "Max value": max,
        "Average value": avg,
        toString: function () {
            return JSON.stringify(this);
        }

    };
    alertStatistics.innerHTML = 'Maximum value ' + max + '<br>' + 'Minimum value '
        + min + '<br>' + 'Average value ' + avg + '<br>' + 'Your object ' + objectStatistic.toString();
    console.log(objectStatistic);
}

function average() {
    let sum = 0;
    for (let i = 0; i < resultArray.length; i++) {
        sum += resultArray[i]

    }
    return sum / resultArray.length;
}


stopButton.addEventListener('click', () => {
    stopSpinning();
    showStatistics();
});
