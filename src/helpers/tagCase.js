import sentenseCase from './sentenseCase';

const tagCase = (val) => {
    if (val !== null && val.length < 1) {
        return ''
    }

    val = val.split(' ').map(item => {
        return sentenseCase(item)
    }).join('');
    return val;
}

export default tagCase;