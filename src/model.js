export const state = {
    jobs: {},
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

