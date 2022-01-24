//SALVAR COM HTTPRequest


// function save(){
//     const[user, url] = getJSONandURL();

//     try{
//     createAndSendHttpRequest(user, url)}
//     catch(e){
//         console.log(e)
//     };
// }


//SALVAR COM FETCH

function save(){
    const[user, url] = getJSONandURL();
    const options = {
        method: `post`,
        headers: {
            'Content-Type':'application/json'
        },
        body: user
    }

    fetch(url, options)
        .then(response => response.json()
            .then(user =>{
                console.log(user)
                persistenceOfValuesOnInput(user.id, user.name, user.age)
            })          
)
        .catch(e => console.log(e))

}


function getJSONandURL(){
    const [id, name, age,url] = setNameAgeUrl();
    const user = JSON.stringify({"id": id,"name":name, "age": age});
    return [user,url];
}

// function createAndSendHttpRequest(user, url){
//     let request = new XMLHttpRequest();
//     request.open("POST", url, true);
//     request.setRequestHeader("Content-type", "application/json")
//     request.send(user);
// }


function setNameAgeUrl(){
    const id = document.querySelector('#id').value
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const url= "http://localhost:8080/springbootrestapisample/save";

    return [id, name, age, url];
}

function persistenceOfValuesOnInput(id, name, age){
    document.querySelector('#id').value = id;
    document.querySelector("#name").value = name;
    document.querySelector("#age").value = age;
}



