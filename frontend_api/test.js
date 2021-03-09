const THRO_DEFAULTS = {
    "ENDPOINTS" : {
        "obj" : async function (){
            return new WebSocket("ws://157.245.236.181:8000/websockets/objects");
        }
    }
}

class ThroObj{
    constructor(){
        this.ws = null;
        this.thro_elements = document.querySelectorAll('[thro]');
        this.objs = {}
    }

    initialize(){
        this.ws = new WebSocket("ws://157.245.236.181:8000/websockets/objects");
        let thro_elements = this.thro_elements = document.querySelectorAll('[thro]');
        let objs = this.objs = {};
        this.ws.onopen = function(event){
            let temp_ws = event.target
            console.log("here!")
            thro_elements.forEach(function(el){
                objs[el.getAttribute('t')] = el.innerHTML;
            })
            temp_ws.send(JSON.stringify(objs));
            console.log(thro_elements);
            thro_elements.forEach(function(el){
                el.addEventListener('change', function(event){
                    let t= event.target.getAttribute('t');
                    let tson = {};
                    tson[t] = event.target.innerHTML;
                    temp_ws.send(JSON.stringify(tson));
                })
            }) 
            temp_ws.onmessage = function(message){
                console.log(message);
                let parsed = JSON.parse(message.data);
                for(let datum in parsed){
                    
                }
            }
        }
    }



}

let thro_object = new ThroObj()
thro_object.initialize()
