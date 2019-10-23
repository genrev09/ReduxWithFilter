const initialState = {
    inputText: '',
    textList: [],
    isChecked: false,
    filterType: 'all'
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "ADDCONTENT":
            return {...state, 
                textList: [...state.textList, payload],
                inputText: '',};
        case "CHANGETEXT":
            return {...state, inputText: payload}
        case "CHANGE_FILTER_TYPE":
            return {...state, filterType: payload}
        case "CHECKBOXCHECKED":
            return {...state, textList: state.textList.map(todo => {
                if (todo.id === payload.id) {
                    if(todo.status === 'active')
                        todo.status = 'completed'
                    else
                        todo.status = 'active'
                    return todo; 
                } else {
                    return todo;
                }})
        }
        case "REFRESH":
            return {...state, textList: payload}
        default:
            return state;
    }
};