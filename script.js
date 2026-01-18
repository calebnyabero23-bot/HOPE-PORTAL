document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginView = document.getElementById('login-view');
    const portalView = document.getElementById('portal-view');
    const homePage = document.getElementById('home-page');
    const paymentPage = document.getElementById('payment-page');
    const sidebar = document.getElementById('sidebar');

    // PAGE NAVIGATION LOGIC
    window.navTo = (target) => {
        if (target === 'home') {
            homePage.classList.remove('hidden');
            paymentPage.classList.add('hidden');
            sidebar.classList.remove('active');
        } else if (target === 'payment') {
            homePage.classList.add('hidden');
            paymentPage.classList.remove('hidden');
        }
        window.scrollTo(0, 0);
    };

    // 1. Login Handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const reg = document.getElementById('reg-input').value;
        document.getElementById('p-reg').textContent = reg;
        document.getElementById('p-name').textContent = reg; // Using Reg No for Name placeholder
        
        loginView.classList.add('hidden');
        portalView.classList.remove('hidden');
    });

    // 2. Sidebar Toggle
    document.getElementById('menu-toggle').addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    // 3. Make Payment Button
    document.getElementById('pay-btn').addEventListener('click', () => {
        navTo('payment');
    });

    // 4. Logout Logic
    document.getElementById('logout-btn').addEventListener('click', () => {
        location.reload(); 
    });
});