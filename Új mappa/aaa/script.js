

async function GetChecks(){
    await fetch("http://localhost:8080/checks/",{
        method : "GET",
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response=>response.json())
    .then(data=>{ return data; })
}

async function GetCheck(id){
    await fetch("http://localhost:8080/checks/" + id,{
        method : "GET",
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response=>response.json())
    .then(data=>{ console.log(data); })
}

async function CreateCheck(id, name, version, description, lang, params, func_body){
    await fetch("http://localhost:8080/checks/",
        {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "uuid": id,
                "name": name,
                "version": version,
                "description": description,
                "lang": lang,
                "params": params,
                "func_body": func_body
            })
        }
    )
    
}

async function UpdateCheck(id, name, version, description, lang, params, func_body){
    await fetch("http://localhost:8080/checks/" + id,
        {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "version": version,
                "description": description,
                "lang": lang,
                "params": params,
                "func_body": func_body
            })
        }
    )
    
}
async function DeleteCheck(id){
    await fetch("http://localhost:8080/checks/" + id,{
        method : "DELETE",
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response=>response.json())
    .then(data=>{ console.log(data); })
}

async function UpdateTable(){
    let table = document.getElementById("Tatatatable")
    data = await GetChecks();
    console.log("aa");
    for(let i = 0; i < data.Length; i++){
        console.log("aaa")
        let row = document.createElement("tr")
        for(let i = 0; i < data[i].length; i++){
            let col = document.createElement("td");
            col.value = data[i].value
            row.appendChild(col)
            
        }
        table.appendChild(row);
    }
    
}

function FindOrDelete(){
    let option = document.getElementById("findDel").value
    let id = document.getElementById("findDelId").value
    if(option == "Select"){
        GetCheck(id);
    }
    else if (option == "Delete"){
        DeleteCheck(id)
    }

}

function CreateOrModify(){
    let option = document.getElementById("CreateOrModify").option

    if(option == "Create"){

    }
    else if (option == "Modify"){

    }
}