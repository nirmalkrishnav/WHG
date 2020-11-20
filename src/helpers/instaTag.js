const instaTag = (val) => {
    const text = val.replace('#', '');
    window.open(`https://www.instagram.com/explore/tags/${text}/`, '_blank');
}

export default instaTag;