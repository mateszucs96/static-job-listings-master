export const state = {
    jobs: {},
    filters: [],
}

export const fetchURL = async url => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        state.jobs = data;
        console.log(state.jobs[0])
    } catch (err) {
        console.error(err)
    }
}

export const filterKeyWords = keyWord => {
    if (state.filters.includes(keyWord)) return;
    state.filters = [...state.filters, keyWord];

    console.log(state.filters);
}


