const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit">
                <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="main hidden"></div>
            <textarea></textarea>
        </div>
    `;

    const btnEdit = note.querySelector(".edit");
    const btnDelete = note.querySelector(".delete");
    const mainEl = note.querySelector(".main");
    const textAreaEl = note.querySelector("textarea");


    btnEdit.addEventListener("click", () => {
      // ? what is classList
      mainEl.classList.toggle("hidden");
      textAreaEl.classList.toggle("hidden");
    });

    textAreaEl.addEventListener("input", (e) => {
      //? what is e on addEventListener
      const { value } = e.target;

      mainEl.innerHTML = marked.parse(value);
    });


    btnDelete.addEventListener('click', () => {
        note.remove()
    })


    document.body.appendChild(note);
}

