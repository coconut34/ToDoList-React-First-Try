import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'I',
            completed: false
        },
        {
            id: 2,
            text: 'Love',
            completed: false
        },
        {
            id: 3,
            text: 'Front-End',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

 
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}


let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}




 
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
