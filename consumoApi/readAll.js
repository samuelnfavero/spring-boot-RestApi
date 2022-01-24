function readAll(){
    const url = "http://localhost:8080/springbootrestapisample/readall"

    const options = {
        method: 'get',
        headers: {
            'Content-Type':'application/json'
        }
    }

    fetch(url, options)
        .then(response => {response.json()
            .then(data => showData(data))    
        })
        .catch(error => console.log(error))
}

function showData(data){
    clearTable();

    const table = document.querySelector('.table > tbody')
    for (i = 0; i < data.length; i++){
    const ID = data[i].id;
    const NAME = data[i].name;
    const AGE = data[i].age;

    const tr = document.createElement('tr');
    const thId = document.createElement('th');
    const tdName = document.createElement('td');
    const tdAge = document.createElement('td');
    const button = `<button class ='btn btn-success' onclick='findAndEditUser(${ID})' data-dismiss="modal">Editar</button>`

    thId.textContent = ID;
    tdName.textContent = NAME;
    tdAge.textContent = AGE;

    tr.appendChild(thId)
    tr.appendChild(tdName)
    tr.appendChild(tdAge)
    tr.innerHTML += (button);
    table.appendChild(tr)

    }
}

function clearTable(){
    const table = document.querySelector('.table > tbody').rows.length;
    console.log(table)
    for(i = 0; i < table; i++){
        const tr = document.querySelector('.table > tbody > tr');
        tr.remove()
    }
}

