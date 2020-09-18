let persons = [
    {
        name:"Sri",
        age:25,
        city:"Chennai",
        salary:20000,
    },
    {
        name:"Rathi",
        age:30,
        city:"Bangalore",
        salary:25000,
    },
    {
        name:"Rahul",
        age:27,
        city:"Hyderabad",
        salary:30000,
    },
    {
        name:"Suganya",
        age:29,
        city:"Chennai",
        salary:27000,
    },
    {
        name:"Divya",
        age:22,
        city:"Trichy",
        salary:40000
    },
]

function displayObj(element){
    let tdata = "";
    let Sno = 1;
    element.forEach(function(person,index){
        let cdata = `<tr>
        <td>${Sno}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.salary}</td>
        <td><button onclick = "deletePerson(${index})"> Delete </button></td>
        </tr>`;
        tdata += cdata;
        Sno++;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tdata;
}

displayObj(persons);

function searchByNameCity(){
    
    let search = document.getElementById("search").value;
    let data = persons.filter(function(person){
        if(person.name.toUpperCase().indexOf(search.toUpperCase())!=-1)
        {
            return person.name.toUpperCase().indexOf(search.toUpperCase())!=-1
        }
        else{
            return person.city.toUpperCase().indexOf(search.toUpperCase())!=-1
        }
    })
    displayObj(data);
}

function deletePerson(index){
    persons.splice(index,1);
    displayObj(persons);
}


