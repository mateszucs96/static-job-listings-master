export const state = {
    jobs: {},
    filteredJobs: '',
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
    state.filteredJobs = [];
    state.jobs.forEach(el => {
        if (state.filters.every(element => [...el.languages, el.role, el.level].includes(element))) {
            state.filteredJobs = [...state.filteredJobs, el];
        }
    })
}

export const removeKeyWord = keyword => {
    const index = state.filters.indexOf(keyword);
    state.filters.splice(index, 1);
}


