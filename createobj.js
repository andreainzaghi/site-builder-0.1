const contenitore = document.querySelector('#container');
const contenitoreimg = document.querySelector('#containerimg');
let ArrayImmagini = []

let inputdiRicerca = document.querySelector('#input')

function Ricerca() {
    let match = inputdiRicerca.value;
    console.log(match)
    // getUser(match)
    getUser(match).then((res) => {
        const apiImage = (res.data.hits);
        apiImage.forEach((x) => {
            ArrayImmagini.push({ id: String(x.id), img: x.largeImageURL })
            // console.log(ArrayImmagini)
        })
        ImageCreator()
    });
}

async function getUser(search) {
    let response;
    try {
        response = await axios.get('https://pixabay.com/api/?key=26732894-7ab7a716c214b455a08379fe1&q=' + search + '&image_type=photo&per_page=30');
    } catch (error) {
        console.error(error);
    }
    console.log(response)
    return response;
}



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
    {
        'id': 'ovale',
        'height': 30,
        'width': 50,
        'borderRadius': 50,
        'bgColor': 'orange',
    },
    {
        'id': 'linea',
        'height': 50,
        'width': 50,
        'borderRadius': 0,
        'bgColor': 'green',
    }

];


let Objectsdrag = (id, height, width, borderRadius, bgColor) => {
    const divContainerElement = document.createElement('div');
    divContainerElement.style.position = "relative"
    divContainerElement.id = "divContainerElement"
    const obj = document.createElement('div');
    obj.style.height = height + 'px';
    obj.id = id;
    obj.style.position = "absolute"
    obj.style.width = width + 'px';
    obj.style.borderRadius = borderRadius + '%';
    obj.style.backgroundColor = bgColor;
    obj.addEventListener("dblclick", myScript);
    divContainerElement.appendChild(obj)
    contenitore.appendChild(divContainerElement);
}

Json.forEach((element) => {

    Objectsdrag(element.id, element.height, element.width, element.borderRadius, element.bgColor, element.marginTop);

});
function myScript() {
    console.log('doppio click elemento')

}
let ImageCreator = () => {
    console.log(ArrayImmagini)
    ArrayImmagini.forEach((element) => {
        console.log(element)
        const divContainerElement1 = document.createElement('div');
        divContainerElement1.style.position = "relative"
        divContainerElement1.id = "divContainerElement"

        const immagine = document.createElement('img');
        immagine.src = element.img
        immagine.style.position = "absolute"
        immagine.style.width = "50px"
        immagine.id = element.id
        immagine.addEventListener("dblclick", myScript);
        divContainerElement1.appendChild(immagine)
        contenitoreimg.appendChild(divContainerElement1);

    })
}
// console.log(ArrayImmagini)

