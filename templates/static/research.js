// For research tab switching
export function tab_switch() {
    const tabs= document.querySelectorAll('.tab-btn');
    const all_content= document.querySelectorAll('.research-content');

    tabs.forEach((tab, index)=>{
        tab.addEventListener('click', ()=>{
            tabs.forEach(tab=>{tab.classList.remove('active')});
            tab.classList.add('active');

            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
        })
    });
}