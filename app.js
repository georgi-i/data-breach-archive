// Global state
let currentLanguage = 'en';
let currentFilter = 'all';
let currentImageSet = [];
let currentImageIndex = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageToggle();
    initializeFilters();
    initializeSearch();
    initializeModal();
    renderLeaks();
    updateStats();
});

// Language Toggle
function initializeLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                
                // Update active button
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update translations
                updateTranslations();
                renderLeaks();
            }
        });
    });
}

// Update all translatable elements
function updateTranslations() {
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        if (el.tagName === 'INPUT') {
            el.placeholder = el.getAttribute(`data-lang-${currentLanguage}-placeholder`);
        } else {
            el.textContent = el.getAttribute(`data-lang-${currentLanguage}`);
        }
    });
}

// Filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            currentFilter = filter;
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Re-render leaks
            renderLeaks();
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', (e) => {
        renderLeaks(e.target.value.toLowerCase());
    });
}

// Calculate and update statistics
function updateStats() {
    const total = leaksData.length;
    const publicLeaks = leaksData.filter(leak => leak.type.includes('public')).length;
    const privateLeaks = leaksData.filter(leak => leak.type === 'private').length;
    
    animateCounter('total-leaks', total);
    animateCounter('public-leaks', publicLeaks);
    animateCounter('private-leaks', privateLeaks);
}

// Animate counter numbers
function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const steps = 60;
    const stepValue = targetValue / steps;
    let currentValue = 0;
    
    const timer = setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= targetValue) {
            element.textContent = targetValue;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, duration / steps);
}

// Render leak cards
function renderLeaks(searchTerm = '') {
    const container = document.getElementById('leaks-container');
    container.innerHTML = '';
    
    // Filter leaks
    let filteredLeaks = leaksData;
    
    // Apply type filter
    if (currentFilter !== 'all') {
        filteredLeaks = filteredLeaks.filter(leak => leak.type.includes(currentFilter));
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredLeaks = filteredLeaks.filter(leak => {
            const searchableText = `
                ${leak.organization}
                ${leak.description.en}
                ${leak.description.bg}
                ${leak.source}
            `.toLowerCase();
            return searchableText.includes(searchTerm);
        });
    }
    
    // Render filtered leaks
    filteredLeaks.forEach(leak => {
        const card = createLeakCard(leak);
        container.appendChild(card);
    });
    
    // Show message if no results
    if (filteredLeaks.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                ${currentLanguage === 'en' ? 'No breaches found matching your criteria' : 'Не са намерени пробиви, отговарящи на вашите критерии'}
            </div>
        `;
    }
}

// Create individual leak card
function createLeakCard(leak) {
    const card = document.createElement('div');
    card.className = 'leak-card';
    
    const typeClass = leak.type.includes('public') ? 'public' : 'private';
    const typeLabel = leak.type.includes('public') 
        ? (currentLanguage === 'en' ? 'Public' : 'Публичен')
        : (currentLanguage === 'en' ? 'Private' : 'Частен');
    
    const description = leak.description[currentLanguage];
    
    // Create images HTML
    let imagesHTML = '';
    if (leak.images && leak.images.length > 0) {
        imagesHTML = `
            <div class="leak-images">
                ${leak.images.map((img, index) => `
                    <img src="${img}" 
                         alt="${leak.organization}" 
                         class="leak-image-thumb"
                         data-leak-id="${leak.id}"
                         data-image-index="${index}">
                `).join('')}
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="leak-header">
            <div class="leak-org">${leak.organization}</div>
            <div class="leak-type ${typeClass}">${typeLabel}</div>
        </div>
        <div class="leak-description">${description}</div>
        ${imagesHTML}
        <a href="${leak.source}" target="_blank" rel="noopener noreferrer" class="leak-source">
            ${currentLanguage === 'en' ? 'View Source' : 'Виж източник'} →
        </a>
    `;
    
    // Add click listeners to images
    const images = card.querySelectorAll('.leak-image-thumb');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const leakId = parseInt(img.getAttribute('data-leak-id'));
            const imageIndex = parseInt(img.getAttribute('data-image-index'));
            openImageModal(leakId, imageIndex);
        });
    });
    
    return card;
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prev-img');
    const nextBtn = document.getElementById('next-img');
    
    closeBtn.addEventListener('click', closeImageModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        showPreviousImage();
    });
    
    nextBtn.addEventListener('click', () => {
        showNextImage();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeImageModal();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
}

function openImageModal(leakId, imageIndex) {
    const leak = leaksData.find(l => l.id === leakId);
    if (!leak || !leak.images || leak.images.length === 0) return;
    
    currentImageSet = leak.images;
    currentImageIndex = imageIndex;
    
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    modalImage.src = currentImageSet[currentImageIndex];
    modal.classList.add('active');
    
    updateModalNavigation();
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('active');
    currentImageSet = [];
    currentImageIndex = 0;
}

function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalImage();
    }
}

function showNextImage() {
    if (currentImageIndex < currentImageSet.length - 1) {
        currentImageIndex++;
        updateModalImage();
    }
}

function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = currentImageSet[currentImageIndex];
    updateModalNavigation();
}

function updateModalNavigation() {
    const prevBtn = document.getElementById('prev-img');
    const nextBtn = document.getElementById('next-img');
    
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === currentImageSet.length - 1;
}
