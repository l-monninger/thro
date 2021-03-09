/**
 * @description ThroType for ThroObj.
 * @exports @final
 */
class ThroType{
    /**
     * @description initializes ThroType.
     * @param {string} name is the full name of the object
    */
    constructor(name, thro_cnnct){

        // store name
        /**@public {string} name*/ this.name = name;

        // store connection
        /**@public {ThroCnnct} thro_cnnct*/ this.thro_cnnct = thro_cnnct;

    }
}