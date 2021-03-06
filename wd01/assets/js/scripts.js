// to log title string to console
console.log("WD02 Javascript Assessment");

// call function submit() when button is clicked
function submit() {
  
  // get user input through html atribute data-item ="item" through window document querySelector, and assign to constant value
  const value = document.querySelector('[data-item="item"]').value;

  // get html ul through window document querySelector, and assign to constant ul
  const ul = document.querySelector("ul");

  // create a constant li (list) element
  const li = document.createElement("li");

  // user input text = value and will print list in html
  li.innerHTML = value;

  // append child li to parent ul
  ul.appendChild(li);

  // clear text in text box ready for next input
  document.querySelector('[data-item="item"]').value = "";
}
