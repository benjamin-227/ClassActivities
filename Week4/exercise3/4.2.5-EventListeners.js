// add an event listener to the dog picture that listens for a "click" and gives an alert

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const listItems = document.querySelectorAll(".class-week");
for (const item of listItems) {
  item.addEventListener("mouseover", event => {
    event.target.style.color = "red";
    event.target.innerText += "+";
  });
}
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keyup", event => {
  console.log(`The key you pressed was: ${event.key}`);
});
