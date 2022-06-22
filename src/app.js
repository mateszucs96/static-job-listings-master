const fetchURL = async url => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
    } catch (err) {
        console.error(err)
    }

}

fetchURL('./data.json')