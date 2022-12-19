let subMenu = document.getElementById("subMenu");

toggleMenu = () => {
    subMenu.classList.toggle("open-menu");
};

let content = document.querySelector('.course-left video');
let contentTitle = document.querySelector('.course-detail .title');
let course = document.querySelector('.course-right .videos');

let data = [
    {
        'id': 'course-1',
        'title': 'Pendahuluan',
        'name': 'Course 1.mp4',
    },
    {
        'id': 'course-2',
        'title': 'Pengenalan Pemasaran Digital',
        'name': 'Course 2.mp4',
    },
    {
        'id': 'course-3',
        'title': 'Awareness',
        'name': 'Course 1.mp4',
    },
    {
        'id': 'course-4',
        'title': 'Consideration',
        'name': 'Course 2.mp4',
    },
    {
        'id': 'course-5',
        'title': 'Conversion',
        'name': 'Course 1.mp4',
    },
];

data.forEach((content, index) => {
    let courseElement = `
        <div class="video" data-id="${content.id}">
            <img src="../assets-branch-course/image/play-icon-white.svg" alt="">
            <p>0${index + 1}</p>
            <p class="title">${content.title}</p>
        </div>
    `;
    course.innerHTML += courseElement;
})

let contents = document.querySelectorAll('.video');
contents[0].classList.add('active');
contents[0].querySelector('img').src = '../assets-branch-course/image/stop-icon-white.svg';

contents.forEach(selected_content => {
    selected_content.onclick = () => {

        for (all_contents of contents) {
            all_contents.classList.remove('active');
            all_contents.querySelector('img').src = '../assets-branch-course/image/play-icon-blue.svg';

        }

        selected_content.classList.add('active');
        selected_content.querySelector('img').src = '../assets-branch-course/image/stop-icon-white.svg';

        let match_content = data.find(content => content.id == selected_content.dataset.id);
        content.src = '../assets-branch-course/video/' + match_content.name;
        contentTitle.innerHTML = match_content.title;
    }
});