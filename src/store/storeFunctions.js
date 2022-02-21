export const bookingStore = (arr, payload) =>{
    return arr.map(item =>{
        return item.map(element =>{
            if(element.id === payload.id){
                element.fullName = payload.fullName;
                element.date = payload.date;
                element.occupation = true;
                return element;
            }
            return element;
        })
    })
}

export const deleteBookingStore = (arr, id) =>{
    return arr.map(item =>{
        return item.map(element =>{
            if(element.id === id){
                element.fullName = '';
                element.date = '';
                element.occupation = false;
                return element;
            }
            return element;
        })
    })
}

export const editeBookingStore = (arr, payload) =>{
    return arr.map(item =>{
        return item.map(element =>{
            if(element.id === payload.id){
                element.fullName = payload.fullName;
                return element;
            }
            return element;
        })
    })
}