fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Populate Services
        const servicesList = document.getElementById('services-list');
        data.services.forEach(service => {
            const li = document.createElement('li');
            li.textContent = service;
            servicesList.appendChild(li);
        });

        // Populate Portfolio
        const portfolioItems = document.getElementById('portfolio-items');
        data.portfolio.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            portfolioItems.appendChild(div);
        });

        // Populate Pricing
        const pricingPlans = document.getElementById('pricing-plans');
        data.pricing.forEach(plan => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${plan.plan}</h3><p>${plan.price}</p>`;
            pricingPlans.appendChild(div);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));