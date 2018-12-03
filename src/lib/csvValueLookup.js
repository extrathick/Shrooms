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

    //takes a category and returns the number of times a subcategory appears in the mushroom dataset as an array
    getCount(category) {
        let count = [];
        let types = this.getAllPossible(category);
        let slot = this.getCategoryNumber(category);

        types.forEach(() => {
            count.push(0);
        });

        mushroom.data.forEach((mushroom) => {
            types.forEach((type, index) => {
                if (mushroom[slot] === type.key) {
                    count[index]++;
                }
            });
        });

        return count;
    }

    //takes a category and returns the subcategory and its count in the mushroom dataset as an array. 
    //array[0] = headers array[1] = count
    getData(category){
        let data = [];
        let subcategories = [];
        let count = this.getCount(category);
        let types = this.getAllPossible(category);
       
        types.forEach((type) => {
            subcategories.push(type.value);
        });

        data.push(subcategories);
        data.push(count);

        return data;
    }

    //returns number of times each element in category2 appears for each element in category
    //array[0] = headers rest = count
    getCountComparingTwoCategories(category, category2){
        let count = [];
        let counts = []; 
        let subcategories = [];
        let types = this.getAllPossible(category);
        let types2 = this.getAllPossible(category2);
        let slot = this.getCategoryNumber(category);
        let slot2 = this.getCategoryNumber(category2);;

        types.forEach(() => {
            count.push(0);
        });
        
        types.forEach((type) => {
            subcategories.push(type.value);
        });

        counts.push(subcategories);

        types2.forEach((subcategory) => {
            mushroom.data.forEach((mushroom) => {
                if (mushroom[slot2] === subcategory.key) {
                    types.forEach((type, index) => {
                        if (mushroom[slot] === type.key) {
                            count[index]++;
                        }
                    });
                }
            });
            counts.push(count);
            count = [];
            types.forEach(() => {
                count.push(0);
            });    
        });

        return counts;    
    }

    // Returns all categories
    getCategories(){
        // you might wonder wtf is up with this.
        // turns out this just returns a reference to mushroom.header, so if anything modifies it, all copies are modified.
        // this fixes this.
        return mushroom.header;
    }

    // Returns generic title
    getTitle(category){

        let title = '';

        if (category === 'class'){
            category = 'edibility';
        }

        title = category.replace(/-/g, ' ').toLowerCase().split(' ');

        for (var i = 0; i < title.length; i++) {
            title[i] = title[i].charAt(0).toUpperCase() + title[i].substring(1);     
        }

        return title.join(' '); 
    }

    getClusteredTitle(category, category2){
        let title = this.getTitle(category) + ' vs ' + this.getTitle(category2);

        return title;
    }


    // when given a category and the "long version" of the field (i.e. getShortValue('class', 'edible'), it will return e)
    getShortValue(category, value){
        for(let jsonCategory of json.jsonArray){
            if(jsonCategory.key === category){
                for(let item of jsonCategory.value){
                    if(item.value === value){
                        return item.key;
                    }
                }
            }
        }
    }

    // this takes an array of key value pairs of category and value and returns the chance out of 1 that you'll get poisoned
    // the key is the category and the value is short name of the field
    // the array does not need to be sorted
    // returns -1 if no data
    getPoisonChance(array){
        // we build up a sorted array to save ourselves trouble
        let arrayPlusIndex = [];
        for(let item of array){
            let retObj = {
                key: item.key,
                value: item.value,
                index: this.getCategoryNumber(item.key)
            }
            arrayPlusIndex.push(retObj);
        }
        let edibleCount = 0;
        let poisonCount = 0;
        console.log(arrayPlusIndex)
        for(let row of mushroom.data){
            // this tracks if we pass all tests
            let passed = true;
            for(let item of arrayPlusIndex){
                if(row[item.index] !== item.value){
                    passed = false;
                }
            }
            if(passed){
                if(row[0] === 'p'){
                    poisonCount++;
                }
                else{
                    edibleCount++;
                }
            }
        }
        // the case in which we have no data
        if(edibleCount === 0 & poisonCount === 0){
            return -1;
        }
        // the normal case
        else{
            return (edibleCount/(edibleCount + poisonCount));
        }
    }
}

export default lookup;