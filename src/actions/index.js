export const addData = (data) => {
    return { type: "ADD", payload: data }
}

export const deleteData = (idx) => {
    return { type: "DELETE", payload: idx }
}

export const update = (item, index) => {
    return { type: "UPDATE", payload: { editRecord: item, editIndex: index } }
}

export const searchData = (item) => {
    return { type: "SEARCH", payload: item }
}

export const sortbyFname = () => {
    return { type:"SORT"}  
}
