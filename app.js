let availableURLs = []
const inputEl = document.querySelector("#input-el")
const saveBtn = document.querySelector("#save-btn")
const urlEl = document.querySelector("#url-el")
const clearBtn = document.querySelector("#clear-btn")

console.log(inputEl, saveBtn)
console.log(availableURLs)

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    urlEl.innerHTML = ''
    availableURLs = []
})

saveBtn.addEventListener("click", () => {
    console.log(inputEl.value)
    if (inputEl.value) {
        availableURLs.push(inputEl.value)

        handleInput()

        inputEl.value = ""
        console.log(availableURLs)
    }
})


function handleInput() {
    console.log("Hello Ray!")

    let urls = ''
    let liEl = document.createElement('li')

    for (let i = 0; i < availableURLs.length; i++) {
        console.log(availableURLs[i])

        let aEl = document.createElement('a')
        aEl.setAttribute("target", "_blank")
        aEl.href = availableURLs[i]
        aEl.innerHTML = availableURLs[i]

        liEl.appendChild(aEl)

        let togglesDiv = document.createElement('div')
        togglesDiv.setAttribute("class", "toggles")

        let noteDiv = document.createElement("div")
        noteDiv.setAttribute("class", "note")
        togglesDiv.appendChild(noteDiv)
        let noteImg = new Image()
        noteImg.src = "images/edit.png"

        noteImg.setAttribute("id", "noteImg")

        noteDiv.appendChild(noteImg)
        let noteSpan = document.createElement("span")
        noteSpan.setAttribute("class", "note-pop")
        noteSpan.innerHTML = "Reminder note"
        noteDiv.appendChild(noteSpan)


        let deleteDiv = document.createElement("div")
        deleteDiv.setAttribute("class", "delete")
        togglesDiv.appendChild(deleteDiv)
        let deleteImg = new Image()
        deleteImg.src = "images/close.png"

        deleteImg.setAttribute("id", "deleteImg")

        deleteDiv.appendChild(deleteImg)
        let deleteSpan = document.createElement("span")
        deleteSpan.setAttribute("class", "delete-pop")
        deleteSpan.innerHTML = "Delete URL"
        deleteDiv.appendChild(deleteSpan)

        console.log(togglesDiv)
        liEl.appendChild(togglesDiv)
        urls = liEl

    }
        console.log(liEl)
        // urls = liEl
        console.log(urls)
        urlEl.appendChild(urls)
        storeUrlData()


    
    // URLs.forEach(url => {
        // let liEl = document.createElement('li')

        // let aEl = document.createElement('a')
        // aEl.setAttribute("target", "_blank")
        // aEl.href = url
        // aEl.innerHTML = url

        // liEl.appendChild(aEl)

        // let togglesDiv = document.createElement('div')
        // togglesDiv.setAttribute("class", "toggles")

        // let noteDiv = document.createElement("div")
        // noteDiv.setAttribute("class", "note")
        // togglesDiv.appendChild(noteDiv)
        // let noteImg = new Image()
        // noteImg.src = "images/edit.png"

        // noteImg.setAttribute("id", "noteImg")

        // noteDiv.appendChild(noteImg)
        // let noteSpan = document.createElement("span")
        // noteSpan.setAttribute("class", "note-pop")
        // noteSpan.innerHTML = "Reminder note"
        // noteDiv.appendChild(noteSpan)


        // let deleteDiv = document.createElement("div")
        // deleteDiv.setAttribute("class", "delete")
        // togglesDiv.appendChild(deleteDiv)
        // let deleteImg = new Image()
        // deleteImg.src = "images/close.png"

        // deleteImg.setAttribute("id", "deleteImg")

        // deleteDiv.appendChild(deleteImg)
        // let deleteSpan = document.createElement("span")
        // deleteSpan.setAttribute("class", "delete-pop")
        // deleteSpan.innerHTML = "Delete URL"
        // deleteDiv.appendChild(deleteSpan)

        // console.log(togglesDiv)
        // liEl.appendChild(togglesDiv)
        // console.log(liEl)

        // urlEl.appendChild(liEl)
        // console.log(urlEl)
        // storeUrlData()
    // });
    
}


urlEl.addEventListener("click", (e) => {
    console.log(e)
    if (e.target.id === "noteImg") {
        alert("Yea!! Were taking notes!")
        let noteEl = document.createElement("p")
        noteEl.setAttribute("contenteditable", true)
        noteEl.setAttribute("id", "note-el")
        console.log(noteEl)
        
        noteEl.style.visibility = "visible"
        noteEl.style.opacity = 1

        e.target.parentElement.parentElement.parentElement.appendChild(noteEl)

        storeUrlData()
    }else if(e.target.id === "deleteImg"){
        alert('Are you sure to delete!')
        e.target.parentElement.parentElement.parentElement.remove()

        storeUrlData()
    }else if (e.target.tagName === "P") {
        console.log("Yahooo!")
        const notes = document.querySelectorAll("#note-el")
        console.log(notes)

        notes.forEach(note => {
            note.onkeyup = function() {
                console.log("storing!")
                storeUrlData()
            }
        })
    }

})

function storeUrlData() {
    localStorage.setItem("URLs", JSON.stringify(urlEl))
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


// function show(URLs) {
//     console.log("hello!")

//     let urls = ''

//     URLs.forEach(url => {
//         console.log(url)
//         urls += `
//                     <li>
//                         <a target="_blank" href="${url}">
//                             ${url} 
//                         </a>
//                     </li>
//                 `
//         console.log(urls)       
//     });

//     urlEl.innerHTML = urls

//     let addingToLocalStorage = localStorage.setItem("URLs", JSON.stringify(urlEl.innerHTML))

// }




// let urls

    // for (let i = 0; i < availableURLs.length; i++) {
    //     let li = document.createElement("li")
    //     console.log(li)
    //     let a = document.createElement("a")
    //     console.log(a)
    // }

    // urlEl.innerHTML = urls