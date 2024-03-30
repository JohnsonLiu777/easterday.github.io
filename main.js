const button = document.querySelectorAll(".telur");
const container = document.querySelector(".container");
const body = document.querySelector("body");

const arr = [
    {
        judul: "GAGAL",
        desc: "SALAH LU GOBLOK"
    },
    {
        judul: "GAGAL",
        desc: "SALAH LU BADUT"
    },
    {
        judul: "GAGAL",
        desc: "SAYANG KAMU GAGAL DAPETIN DIA"
    },
    {
        judul: "GAGAL",
        desc: "SELAMAT KAMU BENER TAPI DI MIMPI"
    },
    {
        judul: "GAGAL",
        desc: "ini aja gak bisa lu dapat apalagi si dia wkwkw"
    },
    {
        judul: "BERHASIL KAMU BERHASIL",
        desc: "Ini adalah kodenya : 680FE7BBE8A8BC2F8CF60674A33A2C8B"
    },
];

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        body.classList.add("blur");

        const dialogElement = document.createElement("div");
        dialogElement.innerHTML = `
            <dialog class="dialog">
                <h2>${arr[i].judul}</h2>
                <p>${arr[i].desc}</p>
                <br>
                <button class="button close">Close</button>
            </dialog>
        `;

        // Open dialog
        container.appendChild(dialogElement);
        const dialogBox = container.querySelector(".dialog:last-of-type");
        dialogBox.showModal();

        const closeButton = dialogBox.querySelector(".close");
        closeButton.addEventListener("click", function () {
            dialogBox.close();
            dialogElement.remove();
            body.classList.remove("blur");
        });
    });
}
