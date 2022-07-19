import * as model from './model.js';
import Job from './view.js';



const controlJobs = async () => {
    await model.fetchURL('./data.json');
    model.state.jobs.forEach(el => Job.renderJob(el));
    Job.addHandlerKeyWords(controlKeyWords);
};

const controlKeyWords = e => {
    Job.clear();
    model.filterKeyWords(Job.clickedKeyWord(e));
    model.state.filteredJobs.forEach(el => Job.renderJob(el));
    Job.addHandlerKeyWords(controlKeyWords);
    Job.renderFilter();
    Job.clearFilter();
    model.state.filters.forEach(el => Job.renderFilterKeyWords(el));
    Job.addHandlerRemove(controlRemove);
}

const controlRemove = e => {
    Job.removeKeyWord(e);
    model.removeKeyWord(Job.removeKeyWord(e));
}

const init = () => {
    controlJobs()
};

init();

