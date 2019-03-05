import uid from "uid";

//Create uid for each element because name can be repeated
export function prepareData(el){
    el.id = uid(15);
    el.value = false;
    el.children && el.children.forEach(child => {
        prepareData(child);
    });
}

//Update element value and also recompute its parent and children values
export function setElementValue(data, id, value) {
    const map = data.map(el => generateElementMap(el)).reduce((a, b) => ({...a, ...b}), {});
    const item = map[id];
    const el = item.el;

    setChildrenValue(el, value);

    let parentItem = map[item.parent];
    while(parentItem){ // Update all parent value from bottom to top
        updateElementValue(parentItem.el);
        parentItem = parentItem.parent && map[parentItem.parent];
    }

    return map
}

//Create element id and parent mapping for algorithm efficiency
function generateElementMap(el, data = null){
    if (!data) {
        data = {};
        data[el.id] = {
            el: el,
            parent: null
        }
    }
    el.children && el.children.forEach(child => {
        generateElementMap(child, data);
        data[child.id] = {
            el: child,
            parent: el.id
        }
    });
    return data;
}


//Set element value based on children value
function updateElementValue(el) {
    const isAllSelected = el.children.find(child => !child.value);
    let res = 1;
    if (isAllSelected) {
        res = 0;
    }
    el.value = res;
}

//Update children value from top to bottom based on new parent value
function setChildrenValue(el, value) {
    el.value = value;
    el.children && el.children.forEach(child => {
        setChildrenValue(child, value)
    })
}

