export const numbersTh = Array.from({length: 8}, (e, i) => i + 1);

export const date = () =>{
    let date = new Date()
            .toISOString()
            .split('T')[0]
            .split('-')
            .reverse()
            .join('/');
    let hours = new Date().getHours();
    let minuts = new Date().getMinutes();
    if(hours < 10) hours = '0' + hours;
    if(minuts < 10) minuts = '0' + minuts;
    return `${date}  ${hours}:${minuts}`;

}

export const testFullName = (fullName) =>{
    let testName = fullName.split(' ');
    if((testName.length === 2) && (testName[0].length > 2) && (testName[1].length >= 2)){
        return true;
    }
    return false;
}

export const setName = (fullName) =>{
    return fullName.split(' ').map(item =>{
        return item.substring(0, 1).toUpperCase() + item.substring(1);
    }).join(' ');
}
