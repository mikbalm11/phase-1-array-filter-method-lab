function findMatching (array, str) {
    return array.filter(name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch (array, str) {
    return array.filter(name => name.slice(0, str.length) === str);
}

function matchName (array, str) {
    return array.filter( function (item) {
        if (item.name === str) {
            return item;
        }
    });
}
