const path = '>/'
const inputEl = document.getElementById('input')
const terminalEl = document.getElementById('terminal')
const historyEl = document.getElementById('history')
const history = []
let historyIndex = null;

const pushToHistory = (text) => {
    const p = document.createElement('p')
    p.textContent = `${path}  ${text}`
    historyEl.appendChild(p)
    if (text !== '') {
        history.push(text)
        historyIndex = history.length - 1
    }
    console.log(history, historyIndex)
}

const removeChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const keyDownCallbacks = {
    Enter: () => {
        const value = inputEl.value
        pushToHistory(value)
        const command = commands[value]
        if (command !== undefined) {
            command()
        }
        inputEl.value = null
    },
    ArrowUp: () => {
        console.log('up', historyIndex)
        if (historyIndex === null) {
            return
        }
        inputEl.value = history[historyIndex]
        if (historyIndex > 0) {
            historyIndex--
        }

        // After pressing up, the cursor moves to the beginning of the input,
        // we will move the cursor to the end of the input instead.
        const end = inputEl.value.length;
        inputEl.setSelectionRange(end, end);
        inputEl.focus();
    },
    ArrowDown: () => {
        console.log('down', historyIndex)
        if (historyIndex === null) {
            return
        }
        if (historyIndex < history.length - 1) {
            historyIndex++
            inputEl.value = history[historyIndex]
        }
        else {
            inputEl.value = ''
        }
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
