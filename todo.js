// Değişkenler

const btnDOM = document.querySelector("#liveToastBtn");
const listDOM = document.querySelector("#list");
const taskDOM = document.querySelector("#task");
const ullength = document.getElementsByTagName("li");

for (let i = 0; i < ullength.length; i++) {
  let closeBtn = document.createElement("span");
  closeBtn.textContent = "\u00D7";
  closeBtn.classList.add("close");
  closeBtn.onclick = removeBtn;
  ullength[i].append(closeBtn);
  ullength[i].onclick = check;
}

// Butonlara Dinleyici Ekleme Kısmı

btnDOM.addEventListener("click", addAListener);

// Fonksiyonlar

function check() {
  this.classList.toggle("checked");
}
// Liste Elemanı Silme

function removeBtn() {
  this.parentElement.remove();
}

function addAListener() {
  if (taskDOM.value == "") {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement("li");
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";

    liDOM.onclick = check;

    let closeBtn = document.createElement("span");
    closeBtn.textContent = "\u00D7";
    closeBtn.classList.add("close");
    closeBtn.onclick = removeBtn;

    liDOM.append(closeBtn);
    listDOM.append(liDOM);
    inputElement.value = "";
  }
}
