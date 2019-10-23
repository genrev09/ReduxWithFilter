const initialState = {
    inputText: '',
    textList: [],
    isChecked: false
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "ADDCONTENT":
            return {...state, 
                textList: [...state.textList, payload],
                inputText: '',};
        case "CHANGETEXT":
            return {...state, inputText: payload}
        case "CHECKBOXCHECKED":
            return {...state, isChecked: !state.isChecked}
        default:
            return state;
    }
};