goodslist = [
    {name: 'BanjoCat', price: 100, url: "url(./cats/cat_banjo.png)"},
    {name: 'BatCat', price: 150, url: 'url(./cats/cat_bat.png)'},
    {name: 'AssCat', price: 200, url: 'url(./cats/cat_birdhouse.png)'},
    {name: 'MilitaryCat', price: 250, url: 'url(./cats/cat_box.png)'},
    {name: 'PrissonerCat', price: 300, url: 'url(./cats/cat_cage.png)'},
    {name: 'ShopperCat', price: 160, url: 'url(./cats/cat_cart.png)'},
    {name: 'ClearCat', price: 170, url: 'url(./cats/cat_clean.png)'},
    {name: 'LovelyCat', price: 190, url: 'url(./cats/cat_cupid.png)'},
    {name: 'DrunkedCat', price: 210, url: 'url(./cats/cat_drunk.png)'},
    {name: 'CuteCat', price: 220, url: 'url(./cats/cat_eyes.png)'},
    {name: 'FatCat', price: 250, url: 'url(./cats/cat_fat.png)'},
    {name: 'AngryCat', price: 240, url: 'url(./cats/cat_fight.png)'},
    {name: 'HuntCat', price: 140, url: 'url(./cats/cat_fish.png)'},
    {name: 'HungryCat', price: 130, url: 'url(./cats/cat_fridge.png)'},
    {name: 'ScaryCat', price: 230, url: 'url(./cats/cat_ghost.png)'},
    {name: 'BirthsdayCat', price: 90, url: 'url(./cats/cat_gift.png)'},
    {name: 'SadCat', price: 80, url: 'url(./cats/cat_grumpy.png)'},
    {name: 'LadyCat', price: 70, url: 'url(./cats/cat_lady.png)'},
    {name: 'WorkerCat', price: 60, url: 'url(./cats/cat_laptop.png)'},
    {name: 'DictatorCat', price: 100, url: 'url(./cats/cat_moustache.png)'},
    {name: 'MummyCat', price: 50, url: 'url(./cats/cat_mummy.png)'},
    {name: 'SkullCat', price: 170, url: 'url(./cats/cat_skull.png)'},
    {name: 'HallowenCat', price: 260, url: 'url(./cats/cat_pumpkin.png)'},
    {name: 'SingerCat', price: 270, url: 'url(./cats/cat_sing.png)'},
    {name: 'SleeperCat', price: 280, url: 'url(./cats/cat_sleep.png)'},
    {name: 'PirateCat', price: 290, url: 'url(./cats/cat_pirate.png)'}
]




items = []
class goods {
    


    constructor () {
        this.randMass()
        this.render()
    }


    randMass () {
        fetch("https://repodrew.vercel.app/database.json")
        for (let i=0; i<9; i++) {
            let randGood = Math.round(Math.random() * (25 - 1) + 1)
            let nGood = new good(goodslist[randGood].name, goodslist[randGood].price, goodslist[randGood].url)
            items.push(nGood)
        }
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