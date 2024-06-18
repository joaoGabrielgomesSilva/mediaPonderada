//  import { rereadFileSync } from 'fs'
const { readFileSync } = require('fs')

const entrada = readFileSync('./input.txt', 'utf-8')
const linhas = entrada.trim().split(' ')


let x = parseInt(linhas[0])
let y = parseInt(linhas[1])

if (y||x%6==0) {
  console.log('multiplos')
}else{
  console.log("nao multiplos ")
}