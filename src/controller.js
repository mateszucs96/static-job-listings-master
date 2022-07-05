import * as model from './model.js';
import Job from './view.js';



const controlJobs = async () => {
    await model.fetchURL('./data.json')
    model.state.jobs.forEach(el => Job.renderJob(el, controlKeyWords))
    Job.addHandlerKeyWords(controlKeyWords);
};

const controlKeyWords = e => {
    Job.renderFilter();
    Job.renderFilterKeyWords(e);
    Job.addHandlerRemove(controlRemove);
}

const controlRemove = e => {
    Job.removeKeyWord(e);
}

const init = () => {
    controlJobs()
};

init();

