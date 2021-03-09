/**
 * @description ThroObj for ThroCDB (client database).
 * @exports @final
 */
class ThroObj{
    /**
     * @description initializes thro object
     * @param {string} name is the full name of the object
    */
    constructor(name, thro_env, thro_cdb){

        // store name
        /**@public {string} name*/ this.name = name;

        // store thro_env
        /**@public {ThroEnv} thro_env */ this.thro_env = thro_env;

        // store thro_cdb
        /**@public {ThroCDB} thro_cdb */ this.thro_cdb = thro_cdb;

    }

    /**
     * @description Gets type of the object.
     * @returns {ThroType} type of the object
     */
    get type(){

        // typename is the portion of the name before the '::'
        let typename = this.name.split('::')[0]; 

        // get the type from the environment 
        // and return it
        return this.thro_env.types[typename]

    }

    /**
     * @description Sets type of object.
     * @param {string|ThroEnv} type is the typename or ThroType of the object.
     */
    set type(type){

        if(type instanceof String){ // string passed
            // get the name as an array
            let temp_name_arr = this.name.split('::');

            // 0th element of the temp_name_arr is the typename
            // overwrite the 0th element with the new typename
            temp_name_arr[0] = type;

            // join the temp_name_arr as a string
            // and overwrite the name ThroObj name
            this.name = temp_name_arr.join();

        } else if(type instanceof ThroEnv){ // ThroEnv passed

            // get the name as an array
            let temp_name_arr = this.name.split('::');

            // 0th element of the temp_name_arr is the typename
            // overwrite the 0th element with the new typename
            temp_name_arr[0] = type.name;

            // join the temp_name_arr as a string
            // and overwrite the name ThroObj name
            this.name = temp_name_arr.join();

        } else { // neither String nor ThroEnv passed
            
            throw TypeError('Type provided is not supported.')

        }


    }

    /**
     * @description Gets varname of object.
     * @returns {string} varname of object.
     */
    get varname(){

        // varname is the portion of the name after the '::'
        return this.name.split('::')[1]; 

    }

    /**
     * @description Sets varname of the object.
     * @param {string} varname is the new varname of the object.
     */
    set varname(typename){

        // get the name as an array
        let temp_name_arr = this.name.split('::');

        // 0th element of the temp_name_arr is the typename
        // overwrite the 0th element with the new typename
        temp_name_arr[0] = typename;

        // join the temp_name_arr as a string
        // and overwrite the name ThroObj name
        this.name = temp_name_arr.join();

    }
}