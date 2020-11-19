const sentenseCase=(val) =>{
    if (val !== null && val.length < 1) {
        return ''
    }

    val = val[0].toUpperCase() + val.substring(1);
    return val;
}

export default sentenseCase;