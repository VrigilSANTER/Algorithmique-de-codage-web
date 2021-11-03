import { setPixel } from "./utils/canvas.js"

const width = 128
const heiht = 128

const canvas = document.querySelector('canvas')
canvas.width = width
canvas.height = heiht

setPixel(10, 10 , 'red')
