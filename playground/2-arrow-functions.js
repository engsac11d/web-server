// const square = function(x){
//     return x*x

// }


// const square = (x) => {
//     return x*x
// }


// const square = (x) => x * x



// console.log(square(2))

const event = {
    Guestlist :['saeed','power','mohamed','ismacil'],
    name : 'Birthday party',
    printGuestList() {
        console.log('Guest list for', this.name)
        this.Guestlist.forEach((guest) => {
            console.log(guest , 'is attending', this.name)
        })

    }
 
}



event.printGuestList()