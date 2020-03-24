const initVal = {

}

function homeReudcer(state, action){
    switch (action.type) {
        case '':
            
            break;
    
        default:
            return state;
    }
}

export default (state=initVal, action)=>{
    return {
        home: homeReudcer(state, action)
    }
}