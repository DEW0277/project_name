let input = document.querySelector("#input");
let btn = document.getElementById("btn");
let todoMenuList = document.querySelector("#todo_list");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Siz malumot kiritmadingiz. Iltimos bo'sh joylar qolmasin");
  } else {
    let li = document.createElement("li");

    let button1 = document.createElement("button");

    button1.classList.add("btn");

    button1.innerHTML = `
    
    <i class="fa-solid fa-trash"></i>

    `;

    li.innerHTML = `
       <span>${input.value}</span> 
  `;

    let button2 = document.createElement("button");

    button2.classList.add("btn2");

    button2.innerHTML = `
    <i class="fa-solid fa-pen-to-square"></i>
    `;

    let button3 = document.createElement("button");

    button3.classList.add("btn3");

    let div = document.createElement("div");

    div.classList.add("icons_toggle");

    div.append(button1);
    div.append(button2);
    div.append(button3);

    li.append(div);

    todoMenuList.append(li);

    button1.addEventListener("click", () => {
      div.parentElement.remove();
    });

    let modal = document.getElementById("modal_box");
    let modalInput = document.getElementById("modal_input");
    let modalCloseBtn = document.getElementById("modal_close");
    let modalSaveBtn = document.getElementById("modal_save");

    button2.addEventListener("click", () => {
      modal.style.display = "inline-block";

      modalInput.value = li.childNodes[1].textContent;
    });

    modalSaveBtn.addEventListener("click", () => {
      li.childNodes[1].textContent = modalInput.value;

      modal.style.display = "none";
    });

    modalCloseBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    input.value = null;

    button3.addEventListener("click", () => {
      if (li.style.textDecoration == "line-through") {
        li.style.textDecoration = "none";
        li.style.backgroundColor = "red";

        button3.innerHTML = `
        
     `;
        button3.style.padding = "12px";
      } else {
        li.style.textDecoration = "line-through";
        li.style.backgroundColor = "#b85858";
        button3.innerHTML = `
        <i  class="fa-solid fa-check"></i>
     `;
        button3.style.padding = "4px 6px";
      }
    });
  }
});
