let state

function reducer(state = {count: 0}, action = {type: "INCREASE_COUNT"}) {
    switch(action.type) {
        case "INCREASE_COUNT": return {count: state.count + 1}
        default: return state
    }
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

function render() {
    const container = document.getElementById('container')
    container.innerText = state.count
}

dispatch({type: "@@INIT"})

const button = document.getElementById('button')
button.addEventListener("click", () => dispatch())