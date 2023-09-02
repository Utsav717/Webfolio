// Page palatna aage ya piche
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () =>{
        const pageTurnID = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnID);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            },500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            },500);
        }
    }
})

//Contact me button routing
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtm  = document.querySelectorAll('.btn.contact-me');

contactMeBtm.onclick = () => {
    pages.forEach((page,index) => {
        setTimeout(() => {
            page.classList.add('tuen');

            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            }, 500)
            
        },(index +1)*200 + 100)
    })
}

//create reverse index funtion
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber --;
    if (pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//back to front page profile button
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick =  () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            
            setTimeout(()=>{
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            })

        }, (index + 1) * 200 + 100)
    })
    
}