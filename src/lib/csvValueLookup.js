const json = require('../data/out.json');
/* This function takes a character and the category and will return the "expanded version" of the character
   example: lookupChar('a', 'population') will return "abundant"
   it is worth noting that edibility is 'classes'
*/ 
class lookup{
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
}

export default lookup;