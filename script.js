const sideMenu  = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})  

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variales');

    themeToggler.querySelector('span').classList.toggle('active');
})  

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentstatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shiping}</td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

    })