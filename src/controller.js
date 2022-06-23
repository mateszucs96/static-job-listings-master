import * as model from './model.js';
import Job from './view.js';



const controlJobs = async () => {
    await model.fetchURL('./data.json')
    model.state.jobs.forEach(el => Job.renderJob(el))
};

const init = () => {
    controlJobs()
};

init();

