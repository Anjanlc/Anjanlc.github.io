
console.log('%c🚀 Welcome to Anjan\'s Portfolio!', 'color: #00b6b6; font-size: 20px; font-weight: bold;');
console.log('%c💻 Developed with passion by Anjan Lamichhane', 'color: #00b6b6; font-size: 14px;');
console.log('%c📧 Contact: anjanlc5644@gmail.com', 'color: #fff; font-size: 12px;');

window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 950);
});

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

const bar = document.querySelector('.bar');
const nav = document.querySelector('nav ul');

bar.addEventListener('click', () => {
    bar.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        bar.classList.remove('active');
        nav.classList.remove('active');
    });
});

const topBtn = document.querySelector('.topBtn');
const btn = document.querySelector('.topBtn i');

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.read-more').addEventListener('click', function () {
    const moreText = document.querySelector('.more-text');
    const btn = this;

    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        btn.textContent = 'Read less';
    } else {
        moreText.classList.add('hidden');
        btn.textContent = 'Read more';
    }
});

const options = {
    strings: ['ASP .Net Developer', '.Net MAUI Developer', 'C# Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false
};

new Typed('.typing1', options);
new Typed('.typing2', options);

ScrollOut({
    targets: '.img, .aboutText, .box, div.left, div.right',
    once: true
});

ScrollOut({
    targets: '.header',
    offset: 50
});

const bgGlow = document.createElement('div');
bgGlow.className = 'bg-glow';
document.body.appendChild(bgGlow);

document.addEventListener('mousemove', (e) => {
    bgGlow.style.left = e.clientX + 'px';
    bgGlow.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
    bgGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    bgGlow.style.opacity = '1';
});

window.addEventListener('scroll', () => {
    const parallaxImage = document.querySelector('.parallax-image img');
    if (parallaxImage) {
        const scrolled = window.pageYOffset;
        parallaxImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

const magneticButtons = document.querySelectorAll('.magnetic');

magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0) scale(1)';
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.project-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectBoxes.forEach(box => {
            if (filterValue === 'all') {
                box.classList.remove('hide');
                setTimeout(() => {
                    box.style.display = 'block';
                }, 10);
            } else {
                if (box.getAttribute('data-category') === filterValue) {
                    box.classList.remove('hide');
                    setTimeout(() => {
                        box.style.display = 'block';
                    }, 10);
                } else {
                    box.classList.add('hide');
                    setTimeout(() => {
                        box.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

let skillsAnimated = false;

function animateSkillCounters() {
    const counters = document.querySelectorAll('.counter');
    const skillsSection = document.querySelector('#skills');
    
    if (!skillsSection) return;
    
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (sectionTop < triggerPoint && !skillsAnimated) {
        skillsAnimated = true;
        
        document.querySelectorAll('.progress').forEach(progress => {
            progress.classList.add('animated');
        });
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateSkillCounters);

function staggerAnimations() {
    const sections = document.querySelectorAll('.project-box, .box');
    
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (sectionTop < triggerPoint) {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        }
    });
}

window.addEventListener('scroll', staggerAnimations);

const contactForm = document.getElementById('contactForm');
const submitBtn = document.querySelector('.submit-btn');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');
const formMessage = document.querySelector('.form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    submitBtn.classList.add('loading');
    btnText.style.opacity = '0';
    btnLoader.classList.remove('hidden');
    submitBtn.disabled = true;
    
    emailjs.sendForm('service_7jl8a9m', 'template_iwrb1ra', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            submitBtn.classList.remove('loading');
            btnText.style.opacity = '1';
            btnLoader.classList.add('hidden');
            submitBtn.disabled = false;
            
            formMessage.classList.remove('hidden');
            formMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Message sent successfully! I'll get back to you soon.</p>
            `;
            
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
            
        }, function(error) {
            console.log('FAILED...', error);
            
            submitBtn.classList.remove('loading');
            btnText.style.opacity = '1';
            btnLoader.classList.add('hidden');
            submitBtn.disabled = false;
            
            formMessage.classList.remove('hidden');
            formMessage.innerHTML = `
                <i class="fas fa-exclamation-circle"></i>
                <p>Failed to send message. Please try again or email directly at anjanlc5644@gmail.com</p>
            `;
            formMessage.style.background = 'rgba(255, 0, 0, 0.1)';
            formMessage.style.borderColor = 'rgba(255, 0, 0, 0.5)';
            
            setTimeout(() => {
                formMessage.classList.add('hidden');
                formMessage.style.background = 'rgba(0, 182, 182, 0.1)';
                formMessage.style.borderColor = 'rgba(0, 182, 182, 0.5)';
            }, 7000);
        });
});

const downloadBtn = document.querySelector('.download-cv');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        topBtn.style.opacity = '1';
        topBtn.style.pointerEvents = 'all';
    } else {
        topBtn.style.opacity = '0';
        topBtn.style.pointerEvents = 'none';
    }
});

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}


console.log('%cAll features loaded successfully!', 'color: #00ff00; font-size: 14px; font-weight: bold;');

staggerAnimations();
updateScrollProgress();