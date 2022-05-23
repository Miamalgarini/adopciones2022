addEventlistener('DOMcontentLoaded', () =>{
const btn_menu = document.querySelector('.btn_menu')
if (btn_menu){
 btn_menu.addEventlistener('click',() =>{
     const menu_items = document.querySelector('.menu_items')
     ul.classList.toggle('show')
 })
}
})