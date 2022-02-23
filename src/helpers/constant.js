
export const date = () =>{
    let date = new Date().toISOString().split('T')[0].split('-').reverse().join('/');
    let hours = new Date().getHours();
    let minuts = new Date().getMinutes();
    if(hours < 10) hours = '0' + hours;
    if(minuts < 10) minuts = '0' + minuts;
    return `${date}  ${hours}:${minuts}`;

}

export const editeUpperCase = (name) =>{
    return name.substring(0, 1).toUpperCase() + name.substring(1);
}

export const setElement = (cinemaList, element) =>{
    return cinemaList.map(item =>{
        return item.map(elem =>{
            if(elem.id === element.id) elem = element;
            return elem;
        })
    })
}
