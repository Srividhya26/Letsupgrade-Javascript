let person = [
    {
        name : "jonas",
        age : 18,
        country : "german",
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

function display(){
    for(i=0;i<person.length;i++)
    console.log(person[i]);
}

display();
