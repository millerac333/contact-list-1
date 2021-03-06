global.counter = 0


//--- uses Object.create to write new contact prototype with defined keys underneath//
let newContact = Object.create(null, {
    First_Name: {
        value: "",
        enumerable: true,
        writable: true
    },
    Last_Name: {
        value: "",
        enumerable: true,
        writable: true
    },
    Phone_Number: {
        value: "",
        enumerable: true,
        writable: true
    },
    Address: {
        value: "",
        enumerable: true,
        writable: true
    },
    ID_Number: {
        value: global.counter++,
        enumerable: true
    }
})

//--- creates array object for contacts//
let contactList = [];

const createContact = (fName, lName, pNumber, Addr, IDcounter) => {
    const person = Object.create(newContact)

    person.First_Name = fName
    person.Last_Name = lName
    person.Phone_Number = pNumber
    person.Address = Addr
    person.ID_Number = IDcounter
    contactList.push(person)
}

console.log(contactList);

module.exports=createContact

