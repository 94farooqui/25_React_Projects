import { useState } from "react"

export default function RandomColor(){
    const [hexColor,setHexColor] = useState('#000000')
    const [rgbColor,setRgbcolor] = useState(null)
    const [colorType,setcolorType] = useState('hex')

    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E']
    let hexValue = '#'
    let rgbValue = []

    const generateRandomHexColor = () => {
        setcolorType('hex')
        for(let i=0;i<6;i++){
            hexValue+= hex[Math.floor(Math.random()*hex.length)]
        }
        setHexColor(hexValue)
    }
    const generateRandomRGBColor = () => {
        setcolorType('rgb')
        for(let i=0;i<3;i++){
            rgbValue.push(Math.floor(Math.random()*255))
        }
        setRgbcolor(`rgb(${rgbValue[0]},${rgbValue[1]},${rgbValue[2]})`)
    }
    return(<div className="bg-slate-100 p-8">
        
        <div className="flex w-full justify-between">
            <button onClick={generateRandomHexColor} className="bg-indigo-500  text-gray-700 font-bold p-4 rounded-lg">Generate Hex Color</button>
            <h2 className="text-4xl font-bold text-slate-700">Random Color</h2>
            <button onClick={generateRandomRGBColor} className="bg-cyan-500  text-gray-700 font-bold p-4 rounded-lg">Generate RGB Color</button>
        </div>
        <div className="mx-auto w-full h-[400px] flex justify-center items-center " style={{backgroundColor: colorType=='hex' ? hexColor : rgbColor}}>
            <div>
                <p>{colorType.toUpperCase()}</p>
                <p>{colorType=='hex' ? hexColor : rgbColor}</p>
            </div>
        </div>
    </div>)
}