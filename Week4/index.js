/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var sortCollection = clone(collection);
    var actions = [].slice.call(arguments).slice(1);
    actions.sort(function(a, b) {
        return a[0] === 'filterIn' ? -1 : 1;
    })
    actions.forEach(function (action){
        var name = action[0];
        switch (name){
            case('filterIn') :
                var property = action[1];
                var values = action[2];
                sortCollection = sortCollection.filter(function (item){
                    return property in item && values.includes(item[property]);
                })
                break;
            case('select') :
                var filds = action[1];
                sortCollection.forEach(function(item){
                    var keys = Object.keys(item);
                    keys.forEach(function (key){
                        if(filds.includes(key)===false){
                            delete item[key];
                        }
                    })
                })
                break;
        }
    })
    return sortCollection;

}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return ['select',fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn',property,values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
function clone(collection){
    var cloneCollection = [];
    collection.forEach(function(item) {
        cloneCollection.push(Object.assign({}, item));
    });
    return cloneCollection;
}