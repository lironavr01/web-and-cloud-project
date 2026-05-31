const cards=document.querySelectorAll('.role-card');
cards.forEach(card=>{
 card.addEventListener('click',()=>{
  cards.forEach(c=>c.classList.remove('selected'));
  card.classList.add('selected');
  localStorage.setItem('selectedRole',card.dataset.role);
 });
});
document.getElementById('tenantBtn').onclick=()=>location.href='contractDetails.html';
document.getElementById('landlordBtn').onclick=()=>location.href='contractDetails.html';
