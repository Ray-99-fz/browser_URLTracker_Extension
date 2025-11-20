const inputURLs = [] 
const inputEl = document.querySelector("#input-el")
const saveBtn = document.querySelector("#save-btn")
const urlEl = document.querySelector("#url-el")
const clearBtn = document.querySelector("#clear-btn")

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    urlEl.innerHTML = ''
    availableURLs = []
})

saveBtn.addEventListener("click", () => {
    if (inputEl.value) {
        console.log("we've got a value")
        inputURLs.push(inputEl.value)
        console.log(inputURLs)

        let urls 
        let liEl = document.createElement("li") 
        let togglesDiv = document.createElement('div')

        for (let i = 0; i < inputURLs.length; i++) {
            // console.log(inputURLs[i])
            urls =`
                    <a target="_blank" href="${inputURLs[i]}">
                        ${inputURLs[i]}
                    </a>
                ` 
            console.log(urls)

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

            console.log(togglesDiv)
            
            
        }

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

        console.log(urls)
        liEl.innerHTML = urls
        liEl.appendChild(togglesDiv)
        urlEl.append(liEl)

        storeUrlData()

        console.log(inputURLs)
        inputEl.value = ''

    }else{
        console.log("please add an input value")
    }
})

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
    localStorage.setItem("URLs", JSON.stringify(urlEl.innerHTML))
}

function showStoredURLs() {
    let storedURLs = JSON.parse(localStorage.getItem("URLs") )
    console.log(storedURLs)
    
    urlEl.innerHTML = storedURLs
}

showStoredURLs()