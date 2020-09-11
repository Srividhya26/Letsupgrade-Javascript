let person = [
    {
        name : "jonas",
        age : 18,
        country : "india",
        hobbies : ["travelling","reading","skipping"]
    },
    {
        name: "elsa",
        age: 20,
        country : "disney world",
        hobbies : ["playing","singing","travelling"]
    },
    {
        name : "revathi",
        age : 31,
        country : "india",
        hobbies : ["drawing","cooking","exploring"]
    },
    {
        name : "sri",
        age : 42,
        country : "japan",
        hobbies : ["music","reading","drawing"]
    }
];

function findAges(){
    console.log("DISPLAY OBJECTS HAVING AGE LESS THAN 30")
    for(i=0;i<person.length;i++)
    if(person[i].age<30)
        {
        console.log(person[i]);
    }
}

findAges();

function findCountry(){
    console.log("DISPLAY OBJECTS HAVING COUNTRY INDIA")
    for(i=0;i<person.length;i++)
    if(person[i].country=="india")
    {
        console.log(person[i]);
    }
}

findCountry();

