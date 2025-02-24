



function salvarTarefa()
{
    let tarefas = [];
    let tarefa = document.getElementById('tarefa').value;
    let lista = document.getElementById('lista');
    lista.innerHTML = "";

    tarefas.push(tarefa)

    tarefas.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item;
        document.getElementById('lista').appendChild(li);
        console.log(item)

    });
    
}


