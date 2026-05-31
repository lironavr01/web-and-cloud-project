fetch('contract.json')
.then(r=>r.json())
.then(data=>{
document.getElementById('city').textContent=data.city;
document.getElementById('tenant').textContent=data.tenant;
document.getElementById('email').textContent=data.email;
document.getElementById('dates').textContent=`${data.startDate} - ${data.endDate}`;
});

document.getElementById('signBtn').addEventListener('click',()=>{
document.getElementById('successMessage').textContent='החוזה נשלח לחתימה אלקטרונית בהצלחה';
});

document.querySelector('.btn-outline').addEventListener('click', () => {
    window.location.href = 'selection.html';
});
