// about section read more button click alert message 

document.getElementById("readMore").addEventListener("click", function() {
    alert("Have A Nice Day!");
  });


// form validation example 

function validateForm() {
    let x = document.forms["contactForm"]["fullName"].value;
    if (x == "") {
      alert("Your Full Name is Missing");
      return false;
    }
  }

  // using nodes to add aparagraph in about section

const para = document.createElement("p");
const node = document.createTextNode("Junior front end developer who can make your elegant design into a real websites");
para.appendChild(node);
const element = document.getElementById("jsNodeAppend");
element.appendChild(para);