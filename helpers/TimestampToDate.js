export default dateConverter = (timestamp) =>{
    const newDate = new Date(timestamp * 1000)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const date = newDate.getDate()
    return date+'/'+month+'/'+year
}

