function deleteById(){
    const url = "http://localhost:8080/springbootrestapisample/delete";
    const id = document.querySelector("#id").value;
    
    
    const userId = new URLSearchParams();
    userId.append('userId', id)

    const options = {
        method: 'delete',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:userId
    }
    
    fetch(url, options)
        .then(response => console.log(response))
        .catch(e => console.log(e))

        

}
