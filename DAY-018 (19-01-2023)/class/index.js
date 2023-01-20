const inputValue = document.getElementById("inputValue")
const searchButton = document.getElementById("searchButton")
const def = document.getElementById("def")
const audioTag = document.getElementById("audio")


async function func() {
    const inputValue2 = inputValue.value
    console.log(inputValue2);

    const response  = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inputValue2}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data = await response.json()
    console.log(data);

    def.innerText = data[0].shortdef[0]


}