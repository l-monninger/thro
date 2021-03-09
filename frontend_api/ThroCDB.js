/**
 * @description Client database filled with ThroObjs.
 * @exports @final
 */
class ThroCDB{
    /**
     * @description initializes ThroCDB. ThroCDB is a client-side database,
     *      used to store a local image of the relevant data.
     * @param {string} name is an optional name for the CDB.
     * @exports @final
    */
    constructor(name=''){

        // store name
        /**@public {string} name*/ this.name = name

        // initialize map that will be CDB
        /**@public !Map<ThroType>:!ThroMap<ThroObject> db*/ this.db = {

        }

    }

    /**
     * @description gets a ThroObject
     * @param {string|ThroObj} thro_obj is the name of the ThroObj or ThroObj
     *  to be added.
     * @exports @final
     */
    get(thro_obj){

        // get ThroType of thro_obj



    }

    /**
     * @description adds a ThroObject
     * @param {string|ThroObj} thro_obj is the name of the ThroObj or ThroObj
     *  to be added.
     * @exports @final
     */
    add(thro_obj){

        // get ThroType of object

    }
}