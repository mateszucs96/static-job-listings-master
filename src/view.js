class Job {
    data;
    languagesCard;
    keyWords = [];
    jobs = document.querySelector('.jobs-container');
    filterContainer = document.querySelector('.filter-container');
    filterBox = document.querySelector('.filter-box');
    removeIcon;

    renderKeyWords(data, el) {
        this.keyWords = [data.role, data.level, ...data.languages];
        return `
        <div class="languages__card">
            <h3 class="title">${el}</h3>
        </div>  
        `

    };

    renderFilterKeyWords(e) {
        const text = e.target.textContent.trim();
        const html = `
        <div class="filter-card">
            <h3 class="filter-card__title">${text}</h3>
            <div class="icon-box">
                <img class="remove-icon" src="./images/icon-remove.svg" alt="remove-icon">
            </div>
        </div>
        `
        this.filterBox.insertAdjacentHTML('beforeend', html);
        this.removeIcon = document.querySelectorAll('.remove-icon');
    }

    renderFilter() {
        this.filterContainer.style.display = 'flex';
    }

    addHandlerKeyWords(handler) {
        this.languagesCard.forEach(el => el.addEventListener('click', (e) => {

            handler(e);
        }));
    };

    addHandlerRemove(handler) {
        this.removeIcon.forEach(el => el.addEventListener('click', (e) => {
            handler(e)
        }))
    }

    removeKeyWord(e) {
        // console.log(e)
        e.target.parentElement.parentElement.remove();
    }

    renderJob(data) {

        this.renderKeyWords(data)
        const html = `
            <div class="job-card">
                <div class="company-logo">
                    <img src="${data.logo}" alt="">
                </div>
                <div class="job-header">
                    <div class="job-header__heading">
                    <h1 class="company-name">${data.company}</h1>
                    ${data.new ? '<div class="new"><h2>NEW!</h2></div>' : ''}
                    ${data.featured ? '<div class="featured"><h2>FEATURED</h2></div>    ' : ''}
                </div>

                    <p class="position">
                    ${data.position}
                    </p>
                    <div class="job-info">
                    <h3>${data.postedAt}</h3>
                    <div class="circle"></div>
                    <h3>${data.contract}</h3>
                    <div class="circle"></div>
                    <h3>${data.location}</h3>
                    </div>
                </div>
                <div class="line"></div>
                <div class="languages">
                ${this.keyWords.map(el => this.renderKeyWords(data, el)).join('')}
                </div>
            </div>
    `
        this.jobs.insertAdjacentHTML('beforeend', html);
        this.languagesCard = document.querySelectorAll('.languages__card');

    };
};

export default new Job();