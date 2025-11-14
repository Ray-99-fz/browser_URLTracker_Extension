let availableURLs = []
const inputEl = document.querySelector("#input-el")
const saveBtn = document.querySelector("#save-btn")
const urlEl = document.querySelector("#url-el")

console.log(inputEl, saveBtn)
console.log(availableURLs)

saveBtn.addEventListener("click", () => {
    console.log(inputEl.value)
    if (inputEl.value) {
        availableURLs.push(inputEl.value)


        show(availableURLs)

        inputEl.value = ""
        console.log(availableURLs)
    }
})

function show(URLs) {
    console.log("hello!")

    let urls = ''

    URLs.forEach(url => {
        console.log(url)
        urls += `
                    <li>
                        <a target="_blank" href="${url}">
                            ${url} 
                        </a>
                    </li>
                `
        console.log(urls)
        const noteArea = document.createElement("p")
        noteArea.setAttribute("contentEditable", "true")
        console.log(noteArea)
    });

    urlEl.innerHTML = urls

    let addingToLocalStorage = localStorage.setItem("URLs", JSON.stringify(urlEl.innerHTML))

}

function showStoredURLs() {
    let storedURLs = JSON.parse(localStorage.getItem("URLs") )
    console.log(storedURLs)

    urlEl.innerHTML = storedURLs

    // show(storedURLs)

    // storedURLs.forEach(storedURL => {
    //     show(storedURL)
    // });
}

showStoredURLs()



// let urls

    // for (let i = 0; i < availableURLs.length; i++) {
    //     let li = document.createElement("li")
    //     console.log(li)
    //     let a = document.createElement("a")
    //     console.log(a)
    // }

    // urlEl.innerHTML = urls