const initialstate = JSON.parse(localStorage.getItem('infodata')) || []


const formReducer = (state = initialstate, action) => {

    switch (action.type) {
        case "ADD": {
            localStorage.setItem("infodata", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        }


        case "DELETE": {
            localStorage.setItem("infodata", JSON.stringify(state?.filter((item, index) => index !== action.payload)))
            return state?.filter((item, index) => index !== action.payload)
        }


        case "UPDATE": {
            const update = state?.map((item, index) => {
                if (index === action.payload.editIndex) {
                    return action.payload.editRecord
                }
                return item
            })
            localStorage.setItem("infodata", JSON.stringify(update));
            return update;
        }

        case "SEARCH": {

            const update1 = state?.filter((item) => {
                return item?.fname?.toLocaleLowerCase().includes(action.payload?.toLocaleLowerCase())
            })
            return update1;

        }

        case "SORT": {

            const sorting = state?.sort((a, b) => {
                return (a.fname > b.fname ? 1 : -1)
            })
            return [...sorting];

        }

        default: {
            return state || []
        }

    }
}
export { formReducer }