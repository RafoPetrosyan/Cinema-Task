import { date } from "../helpers/constant";

const defaultState = {
    cinemaList: [
        [
            {
                id: 1,
                userInfo: null,
                date: '',
            },
            {
                id: 2,
                userInfo: {
                    firstName: 'Karo',
                    lastName: 'Manukyan',
                    email: 'karo.manukyan.@gmail.com'
                },
                date: '01/02/22   17:33',
            },
            {
                id: 3,
                userInfo: null,
                date: '',
            },
            {
                id: 4,
                userInfo: null,
                date: '',
            },
            {
                id: 5,
                userInfo: null,
                date: '',
            },
            {
                id: 6,
                userInfo: null,
                date: '',
            },
            {
                id: 7,
                userInfo: {
                    firstName: 'Mane',
                    lastName: 'Asatryan',
                    email: 'maneasatryan@gmail.com',
                },
                date: '01/02/22   12:20',
            },
            {
                id: 8,
                userInfo: null,
                date: '',
            },
        ],
        [
            {
                id: 9,
                userInfo: null,
                date: '',
                row: 2,
                occupation: false,
            },
            {
                id: 10,
                userInfo: null,
                date: '',
            },
            {
                id: 11,
                userInfo: null,
                date: '',
            },
            {
                id: 12,
                userInfo: null,
                date: '',
            },
            {
                id: 13,
                userInfo: null,
                date: '',
            },
            {
                id: 14,
                userInfo: null,
                date: '',
            },
            {
                id: 15,
                userInfo: null,
                date: '',
            },
            {
                id: 16,
                userInfo: null,
                date: '',
            },
        ],
        [
            {
                id: 17,
                userInfo: null,
                date: '',
            },
            {
                id: 18,
                userInfo: null,
                date: '',
            },
            {
                id: 19,
                userInfo: null,
                date: '',
            },
            {
                id: 20,
                userInfo: null,
                date: '',
            },
            {
                id: 21,
                userInfo: null,
                date: '',
            },
            {
                id: 22,
                userInfo: null,
                date: '',
            },
            {
                id: 23,
                userInfo: null,
                date: '',
            },
            {
                id: 24,
                userInfo: {
                    firstName: 'Karen',
                    lastName: 'Sahakyan',
                    email: 'karensahakyan@gmail.com'
                },
                date: '02/02/22   13:40',
            },
        ],
        [
            {
                id: 25,
                userInfo: null,
                date: '',
            },
            {
                id: 26,
                userInfo: null,
                date: '',
            },
            {
                id: 27,
                userInfo: null,
                date: '',
            },
            {
                id: 28,
                userInfo: null,
                date: '',
            },
            {
                id: 29,
                userInfo: null,
                date: '',
            },
            {
                id: 30,
                userInfo: null,
                date: '',
            },
            {
                id: 31,
                userInfo: null,
                date: '',
            },
            {
                id: 32,
                userInfo: null,
                date: '',
            },
        ],
        [
            {
                id: 33,
                userInfo: null,
                date: '',
            },
            {
                id: 34,
                userInfo: null,
                date: '',
            },
            {
                id: 35,
                userInfo: null,
                date: '',
            },
            {
                id: 36,
                userInfo: null,
                date: '',
            },
            {
                id: 37,
                userInfo: null,
                date: '',
            },
            {
                id: 38,
                userInfo: null,
                date: '',
            },
            {
                id: 39,
                userInfo: null,
                date: '',
            },
            {
                id: 40,
                userInfo: null,
                date: '',
            },
        ],
        [
            {
                id: 41,
                userInfo: null,
                date: '',
            },
            {
                id: 42,
                userInfo: null,
                date: '',
            },
            {
                id: 43,
                userInfo: null,
                date: '',
            },
            {
                id: 44,
                userInfo: null,
                date: '',
            },
            {
                id: 45,
                userInfo: null,
                date: '',
            },
            {
                id: 46,
                userInfo: null,
                date: '',
            },
            {
                id: 47,
                userInfo: null,
                date: '',
            },
            {
                id: 48,
                userInfo: null,
                date: '',
            },
        ],
        [
            {
                id: 49,
                userInfo: null,
                date: '',
            },
            {
                id: 50,
                userInfo: null,
                date: '',
            },
            {
                id: 51,
                userInfo: {
                    firstName: 'Arman',
                    lastName: 'Asatryan',
                    email: 'arman.asatryan@gmail.com'
                },
                date: '03/02/22  18:50',
            },
            {
                id: 52,
                userInfo: null,
                date: '',
            },
            {
                id: 53,
                userInfo: null,
                date: '',
            },
            {
                id: 54,
                userInfo: null,
                date: '',
            },
            {
                id: 55,
                userInfo: null,
                date: '',
            },
            {
                id: 56,
                userInfo: null,
                date: '',
            },
        ],
        [
            {
                id: 57,
                userInfo: null,
                date: '',
            },
            {
                id: 58,
                userInfo: null,
                date: '',
            },
            {
                id: 59,
                userInfo: null,
                date: '',
            },
            {
                id: 60,
                userInfo: null,
                date: '',
            },
            {
                id: 61,
                userInfo: null,
                date: '',
            },
            {
                id: 62,
                userInfo: null,
                date: '',
            },
            {
                id: 63,
                userInfo: null,
                date: '',
            },
            {
                id: 64,
                userInfo: null,
                date: '',
            },
        ],
        
    ],
};

const ACTION_TYPE = {
    BOOKING: 'BOOKING',
    DELETE_BOOKING: 'DELETE_BOOKING',
    EDITE_NAME: 'EDITE_NAME',
    ADD_LOCAL_STORAGE: 'ADD_LOCAL_STORAGE',
};

const bookingStore = (arr, payload) =>{
    return arr.map(item =>{
        return item.map(element =>{
            if(element.id === payload.element.id){
                element.userInfo = payload.payloadObj;
                element.date = date();
                return element;
            }
            return element;
        })
    })
}

const deleteBookingStore = (arr, id) =>{
    return arr.map(item =>{
        return item.map(element =>{
            if(element.id === id){
                element.userInfo = null;
                return element;
            }
            return element;
        })
    })
}

const editeBookingStore = (arr, payload) =>{
    return arr.map(item =>{
        return item.map(element =>{
            if(element.id === payload.element.id){
                element.userInfo[payload.changeValue] = payload.inputValue;
                return element;
            }
            return element;
        })
    }) 
}

export const cinemaReducer = (state = defaultState, action) =>{
    switch(action.type){

        case ACTION_TYPE.BOOKING:
            return {...state, cinemaList: bookingStore(state.cinemaList, action.payload)}

        case ACTION_TYPE.DELETE_BOOKING:
            return {...state, cinemaList: deleteBookingStore(state.cinemaList, action.payload)};
        
        case ACTION_TYPE.EDITE_NAME:
            return {...state, cinemaList: editeBookingStore(state.cinemaList, action.payload)};

        case ACTION_TYPE.ADD_LOCAL_STORAGE:
            console.log(action.payload, 'action-payload');
            return {...state, cinemaList: [...action.payload]};

        default:
            return state;
    }
};

export const booking = (payload) => ({type: ACTION_TYPE.BOOKING, payload});
export const deleteBooking = (payload) => ({type: ACTION_TYPE.DELETE_BOOKING, payload});
export const edite = (payload) => ({type: ACTION_TYPE.EDITE_NAME, payload});
export const addLocalStorage = (payload) => ({type: ACTION_TYPE.ADD_LOCAL_STORAGE, payload});
