const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    //button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            // let currentBtn = document.querySelectorAll('.active-btn');
            const currentBtn = document.querySelector('.active-btn');
            if (currentBtn) currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn')
            // currentBtn[0].className = currentBtn[0].className.replace('.active-btn', '');
            // this.className += ' avtive-btn';
        })
    }

    // section active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')    
    })

}


pageTransitions();