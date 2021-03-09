/*
AUTHOR(S): Liam Monninger
STYLE GUIDE: https://google.github.io/styleguide/jsguide.html
DESCRITPION: Contains all logic needed to enable Thro virtual DOM.
*/

/*
ThroEl <--> ThroObj 
                <--> ThroType 
                    <--> ThroEnv
                    <--> ThroCnnct 
                <--> ThroCDB (CDB does is environment and connection agnostic)
ThroEl
    1. Each ThroEl needs to point to a local ThroObj.
    2. Each ThroEl 
*/

/**
 * @description Serves two purposes:
 *      1. Creates virtual DOM for all thro tags.
 *      2. Manages connections with server(s).
 * @exports @final
 */
class ThroPage{
    /**
     * 
    */
    constructor(){
    }
}

/**
 * @description 
 */
class ThroConnection{
    /**
     * @param dn {string} 
     */
    constructor(dn, send, receive){

    }
}