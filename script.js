var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var body = document.getElementById('div--root');
var feed = [];
document.getElementById("button--open--doom").addEventListener("click", function (e) {
    document.getElementById("doom").style.visibility = 'visible';
});
document.getElementById("doom--ok").addEventListener("click", function (e) {
    App.setInfos();
    document.getElementById("doom").style.visibility = 'hidden';
});
function print(n) {
    var elemento = document.createElement('p');
    elemento.innerHTML = n;
    body.appendChild(elemento);
}
var card = /** @class */ (function () {
    function card(theEvent, id) {
        //car:
        this.carca_ = theEvent.car;
        this.color_ = theEvent.color;
        this.tablero_ = theEvent.tablero;
        this.carStyle_ = theEvent.carStyle;
        //theEvent:
        this.name_ = theEvent.name;
        this.place_ = theEvent.place;
        this.theTiime_ = theEvent.theTiime;
        this.id = id;
        this.constructCard();
        this.constructtrash();
        this.constructClass();
    }
    card.prototype.constructCard = function () {
        this.cardMain = document.createElement('div');
        // let theEvent  = this.constructEvent() as HTMLDivElement
        // let car   = this.constructCar() as HTMLDivElement
        this.constructEvent();
        this.constructCar();
        this.cardMain.appendChild(this.theEvent);
        this.cardMain.appendChild(this.car);
    };
    card.prototype.constructEvent = function () {
        this.theEvent = document.createElement('div');
        this.solveEvent();
        this.theEvent.appendChild(this.eventApresentation);
        this.theEvent.appendChild(this.name);
        this.theEvent.appendChild(this.place);
        this.theEvent.appendChild(this.theTiime);
    };
    card.prototype.solveEvent = function () {
        this.eventApresentation = document.createElement('p');
        this.name = document.createElement('p');
        this.place = document.createElement('p');
        this.theTiime = document.createElement('p');
        this.eventApresentation.innerHTML = "Evento: ";
        this.name.innerHTML = this.name_;
        this.place.innerHTML = this.place_;
        this.theTiime.innerHTML = String(this.theTiime_);
    };
    card.prototype.constructCar = function () {
        this.car = document.createElement('div');
        this.solveCar();
        this.car.appendChild(this.carApresentation);
        this.car.appendChild(this.carca);
        this.car.appendChild(this.color);
        this.car.appendChild(this.tablero);
        this.car.appendChild(this.carStyle);
    };
    card.prototype.solveCar = function () {
        this.carApresentation = document.createElement('p');
        this.carca = document.createElement('p');
        this.color = document.createElement('p');
        this.tablero = document.createElement('p');
        this.carStyle = document.createElement('p');
        this.carca.innerHTML = this.carca_;
        this.carApresentation.innerHTML = "Carro: ";
        this.color.innerHTML = this.color_;
        this.tablero.innerHTML = this.tablero_;
        this.carStyle.innerHTML = "car de " + this.carStyle_;
    };
    card.prototype.constructtrash = function () {
        var _this = this;
        this.trash = document.createElement('button');
        this.cardMain.appendChild(this.trash);
        this.trash.innerText = "Apagar";
        this.trash.addEventListener("click", function () {
            feed = App.arrayRemove(feed, _this.getElement);
            App.reload();
        });
    };
    card.prototype.constructClass = function () {
        this.cardMain.className = "cardMain";
        this.carApresentation.className = "item";
        this.carca.className = "item";
        this.color.className = "item";
        this.tablero.className = "item";
        this.carStyle.className = "item";
        this.car.className = "car";
        this.eventApresentation.className = "item";
        this.name.className = "item";
        this.place.className = "item";
        this.theTiime.className = "item";
        this.theEvent.className = "theEvent";
        this.trash.className = "trash";
    };
    Object.defineProperty(card.prototype, "getElement", {
        get: function () {
            return this.cardMain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(card.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return card;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var CarEvent = /** @class */ (function (_super) {
    __extends(CarEvent, _super);
    function CarEvent(name, place, theTiime, car, color, tablero, carStyle) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.place = place;
        _this.theTiime = theTiime;
        _this.car = car;
        _this.color = color;
        _this.tablero = tablero;
        _this.carStyle = carStyle;
        return _this;
    }
    return CarEvent;
}(Car));
var App = {
    reload: function () {
        document.querySelectorAll('.cardMain').forEach(function (e) { e.remove(); });
        feed.forEach(function (e) {
            body.appendChild(e);
        });
    },
    arrayRemove: function (arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    },
    getInputs: function () {
        var inputs;
        var dados = [];
        var list = ["doomTipotheEvent",
            "doomplace",
            "doomOrario",
            "doomModelocar",
            "doomcolorcar",
            "doomtablerocar",
            "doomFuncaocar"];
        list.forEach(function (item) {
            inputs = document.getElementById(item);
            dados.push(String(inputs.value));
        });
        return dados;
    },
    setInfos: function () {
        var _a = this.getInputs(), name = _a[0], place = _a[1], theTiime = _a[2], modelocar = _a[3], colorcar = _a[4], tablerocar = _a[5], funcaocar = _a[6];
        var infos = new CarEvent(name, place, theTiime, modelocar, colorcar, tablerocar, funcaocar);
        var cardMain = new card(infos, feed.length);
        feed.push(cardMain.getElement);
        this.reload();
    }
};
var infos = new CarEvent("Exemplo", "Exemplo", 4, "Exemplo", "Exemplo", "Exemplo", "Exemplo");
var cardMain = new card(infos, feed.length);
feed.push(cardMain.getElement);
App.reload();
