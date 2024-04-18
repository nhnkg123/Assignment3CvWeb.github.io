const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailEl = document.querySelector('#email');
const btnCheck = document.querySelector('.check');
const personalList = document.querySelector('.personal-list');
const form = document.querySelector('.form-personal');
const inform = document.querySelector('.inform');

const experienceEl = document.querySelector('.experience');
const experienceListEl = document.querySelector('.experience-list');
const btnViewmoreExperience = document.querySelector('.btn-viewMore-experience');
const btnViewlessExperience = document.querySelector('.btn-viewLess-experience');

const educationEl = document.querySelector('.education');
const educationListEl = document.querySelector('.education-list');
const btnViewmoreEducation = document.querySelector('.btn-viewMore-education');
const btnViewlessEducation = document.querySelector('.btn-viewLess-education');

const activityEl = document.querySelector('.activity');
const activityListEl = document.querySelector('.activity-list');
const btnViewmoreActivity = document.querySelector('.btn-viewMore-activity');
const btnViewlessActivity = document.querySelector('.btn-viewLess-activity');

const hobbyEl = document.querySelector('.hobby');
const hobbyListEl = document.querySelector('.list-hobby');
const btnViewmoreHobby = document.querySelector('.btn-viewMore-hobby');
const btnViewlessHobby = document.querySelector('.btn-viewLess-hobby');

const languageEl = document.querySelector('.language');
const languageListEl = document.querySelector('.language-list');
const btnViewmoreLanguage = document.querySelector('.btn-viewMore-language');
const btnViewlessLanguage = document.querySelector('.btn-viewLess-language');

const skillEl = document.querySelector('.skill');
const skillListEl = document.querySelector('.skill-list');
const btnViewmoreSkill = document.querySelector('.btn-viewMore-skill');
const btnViewlessSkill = document.querySelector('.btn-viewLess-skill');

btnCheck.addEventListener('click', function () {
    if (emailEl.value.match(regex)) {
        personalList.classList.remove('hidden');
        form.classList.add('hidden');
    } else {
        inform.textContent = 'Email không hợp lệ';
        inform.classList.add('text-red');
    }
});

// experience event
experienceEl.addEventListener('mouseover', function () {
    btnViewmoreExperience.classList.remove('hidden');
    if (!experienceListEl.classList.contains('hidden')) {
        btnViewmoreExperience.classList.add('hidden');
    }
});

experienceEl.addEventListener('mouseout', function () {
    btnViewmoreExperience.classList.add('hidden');
});

btnViewmoreExperience.addEventListener('click', function () {
    experienceListEl.classList.remove('hidden');
    btnViewmoreExperience.classList.add('hidden');
    btnViewlessExperience.classList.remove('hidden');
});

btnViewlessExperience.addEventListener('click', function () {
    experienceListEl.classList.add('hidden');
    btnViewlessExperience.classList.add('hidden');
});

// education event
educationEl.addEventListener('mouseover', function () {
    btnViewmoreEducation.classList.remove('hidden');
    if (!educationListEl.classList.contains('hidden')) {
        btnViewmoreEducation.classList.add('hidden');
    }
});

educationEl.addEventListener('mouseout', function () {
    btnViewmoreEducation.classList.add('hidden');
});

btnViewmoreEducation.addEventListener('click', function () {
    educationListEl.classList.remove('hidden');
    btnViewmoreEducation.classList.add('hidden');
    btnViewlessEducation.classList.remove('hidden');
});

btnViewlessEducation.addEventListener('click', function () {
    educationListEl.classList.add('hidden');
    btnViewlessEducation.classList.add('hidden');
});

// activity event
activityEl.addEventListener('mouseover', function () {
    btnViewmoreActivity.classList.remove('hidden');
    if (!activityListEl.classList.contains('hidden')) {
        btnViewmoreActivity.classList.add('hidden');
    }
});

activityEl.addEventListener('mouseout', function () {
    btnViewmoreActivity.classList.add('hidden');
});

btnViewmoreActivity.addEventListener('click', function () {
    activityListEl.classList.remove('hidden');
    btnViewmoreActivity.classList.add('hidden');
    btnViewlessActivity.classList.remove('hidden');
});

btnViewlessActivity.addEventListener('click', function () {
    activityListEl.classList.add('hidden');
    btnViewlessActivity.classList.add('hidden');
});

// hobby event
hobbyEl.addEventListener('mouseover', function () {
    btnViewmoreHobby.classList.remove('hidden');
    if (!hobbyListEl.classList.contains('hidden')) {
        btnViewmoreHobby.classList.add('hidden');
    }
});

hobbyEl.addEventListener('mouseout', function () {
    btnViewmoreHobby.classList.add('hidden');
});

btnViewmoreHobby.addEventListener('click', function () {
    hobbyListEl.classList.remove('hidden');
    btnViewmoreHobby.classList.add('hidden');
    btnViewlessHobby.classList.remove('hidden');
});

btnViewlessHobby.addEventListener('click', function () {
    hobbyListEl.classList.add('hidden');
    btnViewlessHobby.classList.add('hidden');
});

// language event
languageEl.addEventListener('mouseover', function () {
    btnViewmoreLanguage.classList.remove('hidden');
    if (!languageListEl.classList.contains('hidden')) {
        btnViewmoreLanguage.classList.add('hidden');
    }
});

languageEl.addEventListener('mouseout', function () {
    btnViewmoreLanguage.classList.add('hidden');
});

btnViewmoreLanguage.addEventListener('click', function () {
    languageListEl.classList.remove('hidden');
    btnViewmoreLanguage.classList.add('hidden');
    btnViewlessLanguage.classList.remove('hidden');
});

btnViewlessLanguage.addEventListener('click', function () {
    languageListEl.classList.add('hidden');
    btnViewlessLanguage.classList.add('hidden');
});

// skill event
skillEl.addEventListener('mouseover', function () {
    btnViewmoreSkill.classList.remove('hidden');
    if (!skillListEl.classList.contains('hidden')) {
        btnViewmoreSkill.classList.add('hidden');
    }
});

skillEl.addEventListener('mouseout', function () {
    btnViewmoreSkill.classList.add('hidden');
});

btnViewmoreSkill.addEventListener('click', function () {
    skillListEl.classList.remove('hidden');
    btnViewmoreSkill.classList.add('hidden');
    btnViewlessSkill.classList.remove('hidden');
});

btnViewlessSkill.addEventListener('click', function () {
    skillListEl.classList.add('hidden');
    btnViewlessSkill.classList.add('hidden');
});

