const copyBtn = document.querySelector("button");
const textArea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textArea.select();

  let textValue = textArea.value;
  //   console.log(textValue)

  //TODO ===> we can copy the word that is in textarea :)
  navigator.clipboard.writeText(textValue);
  copyBtn.innerText = "کپی شد!";
  copyBtn.style.background = "#00AEFF";

  setTimeout(() => {
    copyBtn.innerText = "کپی کن";
    copyBtn.style.background = "#63CEFF";
  }, 1500);
});
