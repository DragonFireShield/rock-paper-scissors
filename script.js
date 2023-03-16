function getComputerChoice() {
    const hands = ['Rock', 'Paper', 'Scissors'];
    const random = Number(Math.floor(Math.random() * 3));
    const choice = hands[random];
    console.log(choice);
}