let counter = 0

function createLine(text) {
    const line = document.createElement("li")
    line.innerHTML = `${text}`

    return line
}

function handleListarSqs() {
    fetch('http://localhost:3001/reciveMessageSQS')
        .then(data => {
            return data.json();
        })
        .then(data => {
            const list = document.getElementById("list-sqs")
            list.innerHTML = ""
            if (data.message) {
                let line = createLine(data.message)
                list.appendChild(line)
            } else {
                data.list.map((item) => {
                    let line = createLine(`${item.MessageId} - ${item.Body}`)
                    list.appendChild(line)
                })
            }

        });
}

function handleCreatePost() {
    console.log(counter)
    const update = {
        title: `Qualquer coisa: ${counter}`,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    }

    fetch('http://localhost:3001/sendMessageSQS', options).then(() => {
        counter += 1;
    })
}