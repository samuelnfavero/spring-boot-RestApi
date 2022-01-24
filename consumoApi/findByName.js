function findByName(){
    const userName = document.querySelector("#userName").value
    const url =`http://localhost:8080/springbootrestapisample/findbyname/${userName}`
    const options = {
        method:'GET',
        headers: {
            'Content-Type':'application/json'
        }
    }
    
    fetch(url, options)
        .then(response => response.json()
            .then(data => showInTable(data))
        )
        .catch(e => console.log(e))
}

function showInTable(data){
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
    // const button = document.createElement('button');
    // button.classList = 'btn btn-success';
    // button.classList += ' ' + ID;
    // button.id = 'editUser'
    // button.textContent = "Editar";
    const button = `<button class ='btn btn-success' onclick='findAndEditUser(${ID})' data-dismiss="modal">Editar</button>`

    thId.textContent = ID;
    tdName.textContent = NAME;
    tdAge.textContent = AGE;

    tr.appendChild(thId)
    tr.appendChild(tdName)
    tr.appendChild(tdAge)
    tr.innerHTML += (button);
    // tr.appendChild(button)
    table.appendChild(tr)

    }
}

function findAndEditUser(userId){
    console.log("asdfsdafsadfasf")
    
    const url = `http://localhost:8080/springbootrestapisample/findbyid/${userId}`;

    const options = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    }

    fetch(url, options)
        .then(response => response.json()
            .then(user => editUser(user))
        )
        .catch(e => console.log(e))
}

function editUser(user){
    document.querySelector('#id').value = user.id;
    document.querySelector("#name").value = user.name;
    document.querySelector("#age").value = user.age;
}

function clearTable(){
    const table = document.querySelector('.table > tbody').rows.length;
    console.log(table)
    for(i = 0; i < table; i++){
        const tr = document.querySelector('.table > tbody > tr');
        tr.remove()
    }
}