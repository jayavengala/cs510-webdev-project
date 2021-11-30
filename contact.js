let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let Name = document.querySelector("#name");
  let Email = document.querySelector("#ename");
  let Message = document.querySelector("#msg");
  if (Name.value == "") {
    console.warn("You must enter some name to submit this form");
    return;
  }
  console.log("==========Form Submission=========");
  console.log("Enter Your Name:", Name.value);
  console.log("Enter Your Email:", Email.value);
  console.log("Enter Your Message:",Message.value);
}
