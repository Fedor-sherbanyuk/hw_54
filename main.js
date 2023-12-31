let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}
function DeepFreeze(obj){
    let propNames = Object.getOwnPropertyNames(obj);
// Замораживаем свойства для заморозки самого объекта
    propNames.forEach(function(name) {
        let prop = obj[name];

        // Заморозка свойства prop, если оно объект
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });
    // Заморозить сам объект obj (ничего не произойдёт, если он уже заморожен)
    return Object.freeze(obj);
}
DeepFreeze(user);
user.data.a = '2';
console.log(user.data.a)