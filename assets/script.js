
// for (let x = 0; x < topics.length; x++) {
//     console.log(topics[x])
// }
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
// Create a function in JavaScript
function listTopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x])
    }
}






 // function helloWorld() {
//     // code block
//     console.log('Hello, world, I am a function!')
// }
console.log('Here are the topics we learned through Prework: ');

listTopics();

console.log('Which topic should we study first? ');

function selecTopic() {
    if (randomTopic === "HTML"){
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Lets study CSS!");
   
    } else if (randomTopic === 'Git'){
        console.log('Let\'s study Git!');
   
    } else if (randomTopic === 'JavaScript') {
        console.log('Let\'s study JavaScript!')
    } else {
        console.log('Please try again!'); 
    }
};
selecTopic();