let viewProfileBtn = document.getElementById('viewProfileBtn')
let profileModal = document.getElementById('profileModal')

viewProfileBtn.addEventListener('click', ()=>{
    profileModal.classList.toggle('hidden')
})