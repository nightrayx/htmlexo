const submit = (event) => {
    event.preventDefault()
    const user = {}
    const form = event.target
    for (input of form) {
        if (input.id == "password") {
            const hashed = hashage(input.value);
            user[input.id] = hashed
        }
        else if (input.id !== "") {
            user[input.id] = input.value
        }
    }
}