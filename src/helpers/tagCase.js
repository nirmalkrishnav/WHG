import sentenseCase from './sentenseCase';

const tagCase = (val) => {
    if (val !== null && val.length < 1) {
        return ''
    }
    return val.split(' ').map(item => {
        return sentenseCase(item)
    }).join('');
}

export default tagCase;