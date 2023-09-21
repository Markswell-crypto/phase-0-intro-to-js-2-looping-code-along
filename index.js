// Write code here
function writeCards(names, action) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${action} gift!`;
    messages.push(message);
  }
  return messages;
}

const thankYouMessages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(thankYouMessages);

function countDown(begin) {
  for (let i = begin; i >= 0; i--) {
    console.log(i);
  }
}
countDown(10);

function count(num1){
  while (num1 >= 0){
  console.log(num1--)
  }
}