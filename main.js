// test file

var sliderOne = 'curved';
var sliderTwo = 'straight';
var sliderThree = 'nihil deemon';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var sliderOneQuestion = rl.question('Smash or pass sliderOne: ', (answer) => {
    console.log(`${answer}`)
    if (answer == 'smash') {
        console.log('you are a degenerate')
    }
    else {
        console.log('you are not a degenerate')
    }
})

console.log(sliderOneQuestion)


