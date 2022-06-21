const challenges = (challenges = [], action ) => {
    switch (action.type) {
        case 'FETCH_ALL': 
            return action.payload;
        case 'CREATE': 
            return [...challenges, action.payload];
        default: 
            return challenges;
    }
}

export default challenges;