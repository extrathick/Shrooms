const json = require('../data/kaggle.json');
const mushroom = require('../data/mushrooms.json');

class lookup{
    /* This function takes a character and the category and will return the "expanded version" of the character
    example: lookupChar('a', 'population') will return "abundant"
    it is worth noting that edibility is 'classes'
    */ 
    lookupChar(char, category){
        for (let item of json.jsonArray){
            if(item.key === category){
                for(let character of item.value){
                    if(character.key === char){
                        return character.value;
                    }
                }
            }
        }
    }
    /*
    Returns all possible values for a category.
    Example: 'classes' returns key/value pairs for edible e and poisonous p
    */
    getAllPossible(category){
        let res = [];
        for (let item of json.jsonArray){
            if(item.key === category){
                for(let character of item.value){
                    res.push(character);
                }
            }
        }
        return res;
    }

    // this takes a number and returns at which place in the array it should be at.
    getCategoryNumber(category){
        for(let i = 0; i < json.jsonArray.length; i++){
            if(json.jsonArray[i].key === category){
                return i;
            }
        }
    }

    // Returns all categories
    getCategories(){
        return mushroom.header
    }
}

export default lookup;