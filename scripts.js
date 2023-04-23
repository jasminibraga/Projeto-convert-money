const button = document.getElementById("convert-button") //pegar pelo id o button
const select = document.getElementById("currency-select") //pegar pelo id o select

const dolar = 5.2
const euro = 5.5
const bitcoin = 104482.2

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value // input do valor em real
    const realValueText = document.getElementById("real-value-text") // campo do valor em reais c/ imagem
    const currencyValueText = document.getElementById("currency-value-text") // campo do valor em eua c/ imagem

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(inputReais)
      
    if(select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(inputReais / dolar)
    }
    
    if(select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(inputReais / euro)
    }
    
    if(select.value === "₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            }).format(inputReais / bitcoin)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === "US$ Dólar americano"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/eua.png"
    }


    if(select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(select.value === "₿ Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertValues()
}

button.addEventListener("click", convertValues) //quando o botton é clicado
select.addEventListener("change", changeCurrency) //quando o select troca de valor