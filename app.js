const inputURLs = [] 
const inputEl = document.querySelector("#input-el")
const saveBtn = document.querySelector("#save-btn")
const urlEl = document.querySelector("#url-el")
const clearBtn = document.querySelector("#clear-btn")
const grabBtn = document.querySelector("#grab-btn")

grabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        inputURLs.push(tabs[0].url)
        
        render(inputURLs)
        storeUrlData()
    })
})

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    urlEl.innerHTML = ''
    availableURLs = []
})

saveBtn.addEventListener("click", () => {
    if (inputEl.value) {
        inputURLs.push(inputEl.value)

        render(inputURLs)
        storeUrlData()

        inputEl.value = ''
    }else{
        alert("please add an input value")
    }
})

function render(inputURLs) {
        let urls 
        let liEl = document.createElement("li") 
        let togglesDiv = document.createElement('div')

        for (let i = 0; i < inputURLs.length; i++) {
            urls =`
                    <a target="_blank" href="${inputURLs[i]}">
                        ${inputURLs[i]}
                    </a>
                ` 
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

        liEl.innerHTML = urls
        liEl.appendChild(togglesDiv)
        urlEl.append(liEl)
}

urlEl.addEventListener("click", (e) => {
    if (e.target.id === "noteImg") {
        let noteEl = document.createElement("p")
        noteEl.setAttribute("contenteditable", true)
        noteEl.setAttribute("id", "note-el")
        
        noteEl.style.visibility = "visible"
        noteEl.style.opacity = 1

        e.target.parentElement.parentElement.parentElement.appendChild(noteEl)

        storeUrlData()
    }else if(e.target.id === "deleteImg"){
        alert('Are you sure to delete!')
        e.target.parentElement.parentElement.parentElement.remove()

        storeUrlData()
    }else if (e.target.tagName === "P") {
        const notes = document.querySelectorAll("#note-el")

        notes.forEach(note => {
            note.onkeyup = function() {
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
    
    urlEl.innerHTML = storedURLs
}

showStoredURLs()