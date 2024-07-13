import React  from "react"
import ReactDOM from "react-dom"

const parent=React.createElement("h1",{id:'parent'},"hello to all...")
const conatiner=document.getElementById("box")

const reactRoot=ReactDOM.createRoot(conatiner)
reactRoot.render(parent)

