let tarefas = [
    { id: 1, descricao: 'comprar pão', checked: false },
    { id: 2, descricao: 'passear com o cachorro', checked: false },
    { id: 3, descricao: 'fazer o almoço', checked: false },
]





const createTarefaListItem = (tarefa, checkbox) => {
    const lista = document.getElementById('lista');
    const item = document.createElement('li') //ToDo

    const removeTarefaButton = document.createElement('button');
    removeTarefaButton.textContent = 'X';
    removeTarefaButton.ariaLabel = 'Remover tarefa';

    removeTarefaButton.onclick = () => removeTarefa(tarefa.id);


    item.id = `tarefa-${tarefa.id}`;

    lista.appendChild(checkbox);
    item.appendChild(removeTarefaButton);
    lista.appendChild(item);

    return item;

}


const getCheckboxInput = ({id, descricao, checked}) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label')
    const wrapper = document.createElement('div')
    const checkboxId = `tarefa-${id}-checkbox`;


    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;

    label.textContent = descricao;
    label.htmlFor = checkboxId;

    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

const getNewTarefaId = () => {
    const lastId = tarefas[tarefas.length -1]?.id;
    return lastId ? lastId +1 : 1;
}

const getNewTarefaData = (event) => {
    const descricao = event.target.elements.descricao.value;
    const id = getNewTarefaId();

    return{descricao, id, checked:false}

}

const createTarefa = (event) => {
    event.preventDefault();
    const newTarefaData = getNewTarefaData(event);
    const { id, descricao } = newTarefaData;

    const checkbox = getCheckboxInput(newTarefaData)
    createTarefaListItem(newTarefaData, checkbox)

    tarefas = [
        ...tarefas,
        {id:newTarefaData.id, descricao: newTarefaData.descricao, checked:false}
    ]

  
}


const removeTarefa = (id) => {
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

    const elementoLista = document.getElementById('lista');
    const elementoParaRemover = document.getElementById(`tarefa-${id}`);
    if (elementoParaRemover) {
        elementoLista.removeChild(elementoParaRemover);
    }
}

//const removeTarefa = (id) => {

    //tarefas = tarefas.filter(({ id: tarefaId }) => parseInt(tarefaId) !== parseInt(id));



    //const elementoLista = document.getElementById('lista');
    //elementoLista.removeChild(document.getElementById(`tarefa-${id}`));



//}

//window.onload = function() {

    //const form  = document.getElementById('create-section-form');
    //form.addEventListener('submit', createTarefa)


    //const lista = document.getElementById('lista');
    //tarefas.forEach((tarefa) => {
        //const checkbox = getCheckboxInput(tarefa);
        //const item = document.createElement('li') //ToDo

        //item.id = `tarefa-${tarefa.id};`
        //item.appendChild(checkbox);
      

        //lista.appendChild(item);

    //})
//}

window.onload = function () {
    const form = document.getElementById('create-section-form');
    form.addEventListener('submit', createTarefa);

    const lista = document.getElementById('lista');
    tarefas.forEach((tarefa) => {
        const checkbox = getCheckboxInput(tarefa);
        const item = createTarefaListItem(tarefa, checkbox);  // Use a função createTarefaListItem
    });
}