const path = '>/'
const inputEl = document.getElementById('input')
const terminalEl = document.getElementById('terminal')
const historyEl = document.getElementById('history')
const history = []

const pushToHistory = (text) => {
    const p = document.createElement('p')
    p.textContent = text
    historyEl.appendChild(p)
    history.push(text)
}

const removeChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const keyDownCallbacks = {
    Enter: () => {
        const value = inputEl.value
        pushToHistory(`${path}  ${value}`)
        const command = commands[value]
        if (command !== undefined) {
            command()
        }
        inputEl.value = null
    },
    ArrowUp: () => {
    },
    ArrowDown: () => {
    }
}

const commands = {
    whoami: () => {
        pushToHistory('Klement Omeri')
    },
    clear: () => {
        removeChildNodes(historyEl)
    },
}


terminalEl.onclick = () => {
    inputEl.focus()
}


inputEl.onkeydown = (e) => {
    const callback = keyDownCallbacks[e.code]
    if (callback !== undefined) {
        callback()
    }
}
