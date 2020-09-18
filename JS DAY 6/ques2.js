window.onload = function ()
{
    let pbuses = [];

    if(localStorage.getItem("buses") == null)
    {
        let details = JSON.stringify(pbuses);
        localStorage.setItem("buses",details);
    }
}

function display(element = undefined){
    let tdata = "";
    let Sno = 1;
    let buses;
    if(element == undefined){
        buses = JSON.parse(localStorage.getItem("buses")); 
    }
    else{
        buses = element;
    }
    buses.forEach(function(bus,index){
        let cdata = `<tr>
        <td>${Sno}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.passenger_capacity}</td>
        </tr>`;
        tdata += cdata;
        Sno++;
    });

    document.getElementsByClassName("bdata")[0].innerHTML = tdata;
}

display();


function addBus(event){
    event.preventDefault();
    let bus = {};
    let name = document.getElementById("pname").value;
    let source = document.getElementById("psource").value;
    let destination = document.getElementById("pdestination").value;
    let number = document.getElementById("pnumber").value;
    let pas_cap = document.getElementById("ppc").value;
    
    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=number;
    bus.passenger_capacity=Number(pas_cap);

    let buses = JSON.parse(localStorage.getItem("buses")); 
    buses.push(bus);
    localStorage.setItem("buses",JSON.stringify(buses)); 
    display();

    document.getElementById("pname").value = "";
    document.getElementById("psource").value = "";
    document.getElementById("pdestination").value = "";
    document.getElementById("pnumber").value = "";
    document.getElementById("ppc").value = "";
}

function searchBySource(){
    let search = document.getElementById("search").value;
    let buses = JSON.parse(localStorage.getItem("buses")); 
    let data = buses.filter(function(bus){
        return bus.source.toUppercase().indexOf(search.toUppercase());
    });

    display(data);
}


function searchByDestination(){
    let dest = document.getElementById("sch").value;
    let buses = JSON.parse(localStorage.getItem("buses")); 
    let datas = buses.filter(function(busy){
        return busy.destination.toUppercase().indexOf(dest.toUppercase());
    });

    display(datas);
}