const numberOfCountries = document.getElementById("numberOfCountries")
numberOfCountries.innerText = `Total Number of countries are ${countries_data.length}`

const countriesName = []
countries_data.map((ele) => {
    countriesName.push(ele.name.toLowerCase())
})

// const input = document.getElementById("countryNameInput")
// if(input.value===""){
//     document.styleSheets[0].insertRule("#startingWordButton:hover {transform:translateX(-200px)}")
// }

function startingSearchFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""
    const inputElement = document.getElementById("countryNameInput")
    inputElement.setAttribute("onkeyup", "startingSearchFunction()")

    const input = document.getElementById("countryNameInput").value

    const matchedCountries = []

    countriesName.map((ele) => {
        const hello = ele.startsWith(input.toLowerCase())
        // console.log(hello);
        if (input == "") {   
            countryCardContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `
        } else {

            if (hello) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
                <div class="card">
                    <p>${ele}</p>
                </div>
                `
                const numberOfSearchResults = document.getElementById("numberOfSearchResults")
                numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }
    })

    // for(let i=0; i<countriesName.length; i++){
    //     const hello = countriesName[i].startsWith(input.toLowerCase())
    //     // console.log(hello);
    //     if(hello){
    //         matchedCountries.push(countriesName[i])
    //         countryCardContainer.innerHTML += `
    //         <div style="border: 2px solid red; display:flex; width:15vw; padding: 1rem; justify-content: center; align-items: center; margin:1rem" >
    //             <p>${countriesName[i]}</p>
    //         </div>
    //         `
    //     }
    //     const numberOfSearchResults = document.getElementById("numberOfSearchResults")
    //     numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
    // }
}

function searchAnyWordFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""
    // console.log(countryCardContainer);
    const inputElement = document.getElementById("countryNameInput")
    inputElement.setAttribute("onkeyup", "searchAnyWordFunction()")

    const input = document.getElementById("countryNameInput").value
    const matchedCountries = []

    countriesName.map((ele) => {
        const hello = ele.includes(input.toLowerCase())
        // console.log(hello);
        if (input == "") {
            countryCardContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `
        } else {
            if (hello) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
            <div class="card">
                <p>${ele}</p>
            </div>
            `
                const numberOfSearchResults = document.getElementById("numberOfSearchResults")
                numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }

    })

    // for(let i=0; i<countriesName.length; i++){
    //     const hello = countriesName[i].includes(input.toLowerCase())
    //     // console.log(hello);
    //     if(hello){
    //         matchedCountries.push(countriesName[i])
    //         countryCardContainer.innerHTML += `
    //         <div style="border: 2px solid red; display:flex; width:15vw; padding: 1rem; justify-content: center; align-items: center; margin:1rem" >
    //             <p>${countriesName[i]}</p>
    //         </div>
    //         `
    //     }
    //     const numberOfSearchResults = document.getElementById("numberOfSearchResults")
    //     numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
    // }
}

