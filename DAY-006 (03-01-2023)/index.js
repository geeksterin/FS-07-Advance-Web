const subHeading = document.getElementById("subheading")
subHeading.innerText = `Currently we have ${countries_data.length} countries`

const graphTitle = document.getElementById("graphTitle")

const sortedData = countries_data.sort(function (a, b) {
    return b.population - a.population
})

let totalPopulation = 0
for(let i=0; i<countries_data.length; i++){
    totalPopulation += countries_data[i].population
}

const clear = document.getElementById("graph")
clear.style.border = "2px solid red"
function buttonOneClicked() {
    clear.innerHTML = " "
    graphTitle.innerText = "10 most populated countries in world"

    for(let i=0; i<10; i++){
        const oneDiv = document.createElement("div")
        oneDiv.style.display = "flex"
        oneDiv.style.height = "fit-content"
        oneDiv.style.alignItems = "center"
        oneDiv.style.justifyContent = "center"
        oneDiv.style.border = "2px solid green"

        const countryName = document.createElement("p")
        countryName.innerText = sortedData[i].name
        countryName.style.width = "20%"
        oneDiv.appendChild(countryName)


        const percentDiv = document.createElement("div")
        const percentageDiv = document.createElement("div")
        const percentage = (sortedData[i].population/totalPopulation)*100
        percentageDiv.style.width = `${percentage}%`
        percentageDiv.style.backgroundColor = "orange"
        percentageDiv.style.height = "fit-content"
        
        percentageDiv.innerText = `${percentage.toFixed(2)}%`

        percentDiv.appendChild(percentageDiv)
        percentDiv.style.width = "30%"
        oneDiv.appendChild(percentDiv)
        
        const populationDiv = document.createElement("div")
        populationDiv.innerText = sortedData[i].population
        oneDiv.appendChild(populationDiv)
        
        const graphDiv = document.getElementById("graph")
        graphDiv.appendChild(oneDiv)
    }
}

function buttonTwoClicked() {
    clear.innerHTML = " "

    graphTitle.innerText = "10 most spoken languages in world"

}