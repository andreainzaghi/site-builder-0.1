const contenitore = document.querySelector('#container');


const Json = [

    {
        'id': 'square',
        'height': 50,
        'width': 50,
        'borderRadius': 0,
        'bgColor': 'red',
    },

    {
        'id': 'circle',
        'height': 50,
        'width': 50,
        'borderRadius': 50,
        'bgColor': 'blue',
    },

];

let Objectsdrag = (id, height, width, borderRadius, bgColor) => {

    const obj = document.createElement('div');
    obj.style.height = height + 'px';
    obj.id = id;
    obj.style.position = "relative"
    obj.className = "target"
    obj.style.width = width + 'px';
    obj.style.borderRadius = borderRadius + '%';
    obj.style.backgroundColor = bgColor;

    contenitore.appendChild(obj);
}


Json.forEach((element) => {

    Objectsdrag(element.id, element.height, element.width, element.borderRadius, element.bgColor, element.marginTop);

});