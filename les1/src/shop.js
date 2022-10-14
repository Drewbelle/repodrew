import but from "./but.js"

items = []
class goods {
    


    constructor () {
        let reqFNG = this.randMass()
        reqFNG.then(() =>{
            this.render()
        })

    }


    randMass () {
        const result = fetch("https://repodrew.vercel.app/database.json")
        return result
            .then(res => {
                return res.json()
            })
                .then(data => {
                    for (let i=0; i<9; i++) {
                        let randGood = Math.round(Math.random() * (25 - 1) + 1)
                        let nGood = new good(data.goodslist[randGood].name, data.goodslist[randGood].price, data.goodslist[randGood].url)
                        items.push(nGood)
                    }
                })

    }

    render() {
        items.forEach(callback => {
            callback.render()
        })
    }
}


class good {
    name = ''
    price = 0
    url = ""


    constructor (name, price, url) {
        this.name = name
        this.price = price
        this.url = url
        this.text = "buy"
    }

    render () {
        const placeToRender = document.querySelector(".mainshop")
        if (placeToRender) {
            const newGood = document.createElement('div')
            newGood.style.marginTop = "10px"
            newGood.style.border = "5px solid gold"
            newGood.style.width = "300px"
            newGood.style.height = "400px"
            newGood.classList.add("good")
            newGood.classList.add(this.name)
            newGood.classList.add("newgoood")
            const pictGood = document.createElement('div')
            pictGood.style.backgroundRepeat = "no-repeat"
            pictGood.style.backgroundSize = "contain"
            pictGood.style.width = "300px"
            pictGood.style.height = "300px"
            pictGood.classList.add("pictgood")
            pictGood.style.backgroundImage = this.url
            const infoGood = document.createElement('div')
            infoGood.style.width = "300px"
            infoGood.style.height = "50px"
            infoGood.style.fontSize = "22px"
            infoGood.classList.add("infogood")
            infoGood.innerHTML = "Товар " + this.name + ". Цена: " + this.price
            const buygood = document.createElement('button')
            buygood.classList.add("buybutton")
            buygood.style.width = "300px"
            buygood.style.height = "50px"
            buygood.style.border = "5px solid gold"
            buygood.style.backgroundColor = "green"
            buygood.style.text = "buy"
            buygood.addEventListener("click", this.addToCart)
            newGood.appendChild(pictGood)
            newGood.appendChild(infoGood)
            newGood.appendChild(buygood)
            placeToRender.appendChild(newGood)
        }
    }

    addToCart(event) {
        const GC = event.target
        const GCParent = GC.parentNode
        let newBlock = GCParent.cloneNode(true)
        const lastCNC = newBlock.lastChild
        newBlock.classList.remove("good")
        newBlock.removeChild(lastCNC)
        const kolvo = document.createElement("div")
        kolvo.classList.add("kolvo")
        kolvo.style.width = "300px"
        kolvo.style.height = "50px"
        kolvo.style.border = "5px solid gold"
        //
        let bolshe = document.createElement("button")
        bolshe.setAttribute("class", "bolshe")
        bolshe.innerHTML = "+"
        bolshe.onclick = dobavit
        kolvo.appendChild(bolshe)
        var OK = document.createElement("span")
        OK.setAttribute("class" ,"wtuki")
        kolvo.appendChild(OK)
        let menshe = document.createElement("button")
        menshe.setAttribute("class", "menshe")
        menshe.innerHTML = "-"
        menshe.onclick = ubavit
        kolvo.appendChild(menshe)
        newBlock.appendChild(kolvo)
        newBlock.lastChild.childNodes[1].innerHTML = 1
        globalThis.CN = newBlock.className
        newBlock = new cart(newBlock)
    }
}



cartItems = []
class cart {
    
    constructor (newBlock) {
        this.render(newBlock)
    }


    render (newBlock) {
        const findCart = document.querySelector(".cartPlace")
        const newJOPA = cartItems.find(item => item.className === CN)

        if (newJOPA == undefined)
        {
            findCart.appendChild(newBlock)
            cartItems.push(newBlock)
        }
        else
        {
            var a = Number(newJOPA.lastChild.childNodes[1].textContent)
            a = a +1
            newJOPA.lastChild.childNodes[1].textContent = a
            
        }
    }

}


function dobavit(event) {
    var prib = Number(event.target.nextSibling.textContent)
    prib = prib + 1
    event.target.nextSibling.textContent = prib
}

function ubavit(event) {
    var ubav = Number(event.target.previousSibling.textContent)
    ubav = ubav - 1
    event.target.previousSibling.textContent = ubav
    if (ubav === 0 ) {
        var delBlock = cartItems.indexOf(event.target.parentNode.parentNode)
        cartItems.pop(delBlock)
        const findCartForDel = document.querySelector(".cartPlace")
        findCartForDel.removeChild(event.target.parentNode.parentNode)
    }
}

function butmore() {
    const newGoodsList = new goods()
}