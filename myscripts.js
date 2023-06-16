function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    //console.log('choices are' + choices)
    let randomIndex = Math.floor(Math.random()*3);
    //console.log('my random index is ' + randomIndex)
    return choices [randomIndex];
}
let choice = getComputerChoice();
// console.log('The random choice is: ${choice}');
console.log(choice)

