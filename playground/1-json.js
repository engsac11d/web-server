import fs from 'fs'
// const book = {
//     title : 'Ego is the enemy',
//     author: 'saeed lonley'

// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const databuffer = fs.readFileSync('1-json.json')
// const datajson = databuffer.toString()
// const data = JSON.parse(datajson)
// console.log(data.title)

const databuffer = fs.readFileSync('1-json.json')
const datajson = databuffer.toString()
const user = JSON.parse(datajson)
user.name = 'saeed'
user.age = '45'

const userJSON = JSON.stringify(user)

fs.writeFileSync('1-json.json',userJSON)




