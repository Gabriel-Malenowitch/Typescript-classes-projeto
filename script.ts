let body = document.getElementById('div--root') as HTMLDivElement;
let feed: HTMLDivElement[] = []

document.getElementById("button--open--doom").addEventListener("click", (e)=>{
    document.getElementById("doom").style.visibility = 'visible'
});
document.getElementById("doom--ok").addEventListener("click", (e)=>{
    App.setInfos()
    document.getElementById("doom").style.visibility = 'hidden'
});

function print(n: any): void{
    let elemento = document.createElement('p') as HTMLParagraphElement;
    elemento.innerHTML = n
    body.appendChild(elemento)
}

class card{
    //More: 
    id:             number;
    cardMain:         HTMLDivElement;
    //car:
    carca_:       string;
    color_    :       string;
    tablero_  :       string;
    carStyle_ :       string;
    
    carApresentation:   HTMLParagraphElement;
    carca:        HTMLParagraphElement;
    color:            HTMLParagraphElement;
    tablero:          HTMLParagraphElement;
    carStyle:         HTMLParagraphElement;
    car:          HTMLDivElement;
    //theEvent:
    name_   :       string;
    place_  :       string;
    theTiime_:       number;
    eventApresentation:   HTMLParagraphElement;
    name:           HTMLParagraphElement;
    place:          HTMLParagraphElement;
    theTiime:        HTMLParagraphElement;
    theEvent:         HTMLDivElement;
    //trash:
    trash:        HTMLButtonElement;



    constructor(theEvent: CarEvent, id: number){
            //car:
            this.carca_ =  theEvent.car
            this.color_     =  theEvent.color
            this.tablero_   =  theEvent.tablero
            this.carStyle_  =  theEvent.carStyle

            //theEvent:
            this.name_    =  theEvent.name
            this.place_   =  theEvent.place 
            this.theTiime_ =  theEvent.theTiime
            this.id       =  id
            this.constructCard()
            this.constructtrash()
            this.constructClass()
    }

    constructCard(): void{
        this.cardMain  = document.createElement('div') as HTMLDivElement;
        // let theEvent  = this.constructEvent() as HTMLDivElement
        // let car   = this.constructCar() as HTMLDivElement

        this.constructEvent()
        this.constructCar()

        this.cardMain.appendChild(this.theEvent)
        this.cardMain.appendChild(this.car)
        
    }

    constructEvent(): void{
        this.theEvent  = document.createElement('div') as HTMLDivElement;

        this.solveEvent()

        this.theEvent.appendChild(this.eventApresentation)
        this.theEvent.appendChild(this.name)
        this.theEvent.appendChild(this.place)
        this.theEvent.appendChild(this.theTiime)

    }
    solveEvent(): void{
        this.eventApresentation = document.createElement('p') as HTMLParagraphElement;
        this.name    = document.createElement('p') as HTMLParagraphElement;
        this.place   = document.createElement('p') as HTMLParagraphElement;
        this.theTiime = document.createElement('p') as HTMLParagraphElement;

        this.eventApresentation.innerHTML = "Evento: "
        this.name.innerHTML = this.name_
        this.place.innerHTML = this.place_
        this.theTiime.innerHTML = String(this.theTiime_)

    }

    constructCar(): void{
        this.car   = document.createElement('div') as HTMLDivElement;
        
        this.solveCar()

        this.car.appendChild(this.carApresentation)
        this.car.appendChild(this.carca)
        this.car.appendChild(this.color)
        this.car.appendChild(this.tablero)
        this.car.appendChild(this.carStyle)

    }
    solveCar(): void{
        this.carApresentation = document.createElement('p') as HTMLParagraphElement;
        this.carca = document.createElement('p') as HTMLParagraphElement;
        this.color     = document.createElement('p') as HTMLParagraphElement;
        this.tablero   = document.createElement('p') as HTMLParagraphElement;
        this.carStyle  = document.createElement('p') as HTMLParagraphElement;
        
        this.carca.innerHTML   = this.carca_
        this.carApresentation.innerHTML = "Carro: "
        this.color.innerHTML = this.color_
        this.tablero.innerHTML = this.tablero_
        this.carStyle.innerHTML = "car de " + this.carStyle_
    }
    constructtrash(): void{
        this.trash = document.createElement('button') as HTMLButtonElement;
        this.cardMain.appendChild(this.trash)
        this.trash.innerText = "Apagar"
        this.trash.addEventListener("click",()=>{
            feed = App.arrayRemove(feed, this.getElement)
            App.reload()
        });
    }
    constructClass(): void{
        this.cardMain.className = "cardMain"

        this.carApresentation.className = "item"
        this.carca.className = "item"
        this.color.className = "item"
        this.tablero.className = "item"
        this.carStyle.className = "item"
        this.car.className = "car"
        
        this.eventApresentation.className = "item"
        this.name.className = "item"
        this.place.className = "item"
        this.theTiime.className = "item"
        this.theEvent.className = "theEvent"

        this.trash.className = "trash"
    }
    
    get getElement(){
        return this.cardMain
    }
    get getId(){
        return this.id
    }
}

class Car{
    car: string
    color: string
    tablero: string
    carStyle: string
}

class CarEvent extends Car {
    name: string
    place: string
    theTiime: number

    constructor(
        name: string,
        place: string, 
        theTiime: number,
        car: string,
        color: string,
        tablero: string,
        carStyle: string,){
        super()
        this.name = name
        this.place = place
        this.theTiime = theTiime
        this.car = car
        this.color = color
        this.tablero = tablero
        this.carStyle = carStyle
    }
}

const App = {
    reload(): void{
        document.querySelectorAll('.cardMain').forEach((e)=>{e.remove()})
        feed.forEach((e)=>{
            body.appendChild(e)
        })
    },
    arrayRemove(arr, value): any[] { 
        return arr.filter((ele)=>{ 
            return ele != value; 
        });
    },
    getInputs(): String[]{
        let inputs: HTMLInputElement;
        let dados: String[] = []
        let list = ["doomTipotheEvent",
                    "doomplace",
                    "doomOrario",
                    "doomModelocar",
                    "doomcolorcar",
                    "doomtablerocar",
                    "doomFuncaocar"]

                    list.forEach((item)=>{
                        inputs = document.getElementById(item) as HTMLInputElement
                        dados.push(String(inputs.value))
                    })
        return dados 
    },
    setInfos(): void{
        let [name,
        place,
        theTiime,
        modelocar,
        colorcar,
        tablerocar,
        funcaocar] = this.getInputs()
        let infos = new CarEvent(name, place, theTiime,
                                 modelocar, colorcar,
                                 tablerocar, funcaocar)

        let cardMain = new card(infos, feed.length)
        feed.push(cardMain.getElement)
        this.reload()
        
    }
}
let infos = new CarEvent("Exemplo", "Exemplo", 4, "Exemplo", "Exemplo", "Exemplo", "Exemplo")
let cardMain = new card(infos, feed.length)
feed.push(cardMain.getElement)
App.reload()
