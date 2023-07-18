let counter = 0

function handleTeste() {
    console.log("teste")
}

function createLine(post) {
    const line = document.createElement("li")
    line.innerHTML = `${post.id} - ${post.title}`

    return line
}

function handleListarSqs() {
    fetch('http://localhost:3001/tasks')
        .then(data => {
            return data.json();
        })
        .then(posts => {
            const list = document.getElementById("list-sqs")
            list.innerHTML = ""

            posts.map((item) => {
                let line = createLine(item)
                list.appendChild(line)
            })
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

    fetch('http://localhost:3001/tasks', options).then(()=> {
        counter +=1;
    })
}