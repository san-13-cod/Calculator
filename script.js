const operation = document.querySelector(".operation");
const buttonArea = document.querySelector(".buttonArea");
const result = document.querySelector(".result");

buttonArea.addEventListener("click", (e) => {
  let calc = e.target.textContent;
  if (calc == "=" && operation.textContent !== "") {
    result.textContent = eval(operation.textContent);
    if (isNaN(calc)) {
      operation.textContent = result.textContent;
      result.textContent = eval(operation.textContent);
    }
  } else if (calc == "AC") {
    operation.textContent = "";
    result.textContent = 0;
  } else if (calc == "Del") {
    if (!operation.textContent.length <= 0) {
      operation.textContent = operation.textContent.slice(0, -1);
      if (operation.textContent.length >= 1) {
        result.textContent = eval(operation.textContent);
      } else {
        result.textContent = 0;
      }
    } else {
      result.textContent = "0";
    }
  } else if (isNaN(calc) && operation.textContent == "") {
    alert("Write A Number First");
  } else if (isNaN(calc) && operation.textContent !== "") {
    if (isNaN(operation.textContent.slice(-1))) {
      operation.textContent = operation.textContent.slice(0, -1) + calc;
    } else {
      operation.textContent += calc;
    }
  } else {
    operation.textContent += calc;
  }
});
