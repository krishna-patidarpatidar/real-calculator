


let inp = document.getElementById("inp")
let btns = document.getElementsByTagName("button")
  
for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let btnText = btn.innerText

        if (btnText === "C") {
            inp.innerText = inp.innerText.slice(0, -1)
        } else if (btnText === "AC") {
            inp.innerText = ""
        } else if (btnText === "=") {
            try {
                inp.innerText = eval(inp.innerText)
            } catch {
                inp.innerText = "Error"
            }
        } else {
            inp.innerText += btnText
        }
    })
}


