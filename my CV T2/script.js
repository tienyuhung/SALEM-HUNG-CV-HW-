// Portfolio data - Replace with your actual project images and titles
const portfolioData = [
    { 
        image: 'portfolio1.jpg', 
        title: 'WOODEN HOOP SIDE TABLES',
        images: ['portfolio1.jpg', 'portfolio1-2.jpg', 'portfolio1-3.jpg', 'portfolio1-4.jpg', 'portfolio1-5.jpg', 'portfolio1-6.jpg'],
        description: '「箍木旋轉邊桌」運用台灣早期農業社會箍桶工法作為主要工藝特色，採用紅木/胡桃木/山毛櫸三種紋理各異的木頭進行拼接，做出可一層一層旋轉收納的圓形邊桌。注重零廢棄的循環使用，不使用任何釘子，經久耐用也可循環再生。可輕鬆旋轉、置物不傾倒，為空間陳列與置物需求提供新的使用可能。'
    },
    { 
        image: 'portfolio2.jpg', 
        title: 'PHILIPS Go Young Shaver Kit',
        images: ['portfolio2.jpg', 'portfolio2-2.jpg', 'portfolio2-3.jpg', 'portfolio2-4.jpg', 'portfolio2-5.jpg'],
        description: '\\ 俐落帥！光芒從裡到外 /\n飛利浦電鬍刀酷潮工具箱禮盒為2025推出的全新概念包裝商品，強調專為Outdoor潮人打造，採用小型收納工具箱造型，潮流硬盒X霧面透視X撞色貼紙設計，強化工業風酷潮意象，使用者取出電鬍刀之後，還能將工具箱外盒作為風格收納延續包裝的第二生命。凸顯禮盒永續性與話題性，也刺激伴侶間贈禮或交換禮物需求。該款禮盒設計同時須滿足兩個型號之電鬍刀產品的包裝通用性與成本訴求。'
    },
    { 
        image: 'portfolio3.jpg', 
        title: 'SWIRLING Silk Scarf & Pin',
        images: ['portfolio3.jpg', 'portfolio3-2.jpg', 'portfolio3-3.jpg'],
        description: '基隆以海為中心的文化發展，我們讓她作為過去至今，臺灣對接世界的浪潮做發想，將浪潮轉譯成螺旋，拍打出屬於基隆的文化開端。「漩潮絲巾」的圖樣設計採油彩筆觸特殊螺旋排列，擷取基隆八景之一的「社寮曉日」，從破曉天空的煙燻粉色旋轉而下，接續全臺獨有的世界奇景：「基隆海檻」特殊海象，象徵基隆獨有的山海潮。背景則為黑白對比強烈的 KEELUNG Monogram（花押字）字樣，將視覺由四周漩入產生聚焦效果。別針配色呼應破曉天空的斑斕色彩，搭配KEELUNG 標準字，幻化而成有記憶亮點的文化徽章。'
    },
    { 
        image: 'portfolio4.webp', 
        title: 'STARBUCKS mid-autumn giftbox',
        images: ['portfolio4.webp', 'portfolio4-2.webp', 'portfolio4-3.webp', 'portfolio4-4.webp', 'portfolio4-5.webp', 'portfolio4-6.jpg'],
        description: '一窗即一景，一景即一畫。在舊時古厝園林小景中，院落窗花，小徑通幽，步履閑淡，攜花香，過月門，遙望著遠方的家人朋友，思戀的心語，在融融月色之中不停地低喃詠頌。用不同窗花的意涵象徵星巴克與人的連結。月光寶盒【月圓】象徵富貴圓滿 事事如意，採滑蓋式花窗梧桐木盒，窗花處為松木材質，內部規劃為上下兩層空間，上層為可拿取式托盤，下層為固定式T型隔間。'
    },
    { 
        image: 'portfolio5.jpg', 
        title: 'THE GALA ASIA Pop-Up',
        images: ['portfolio5.jpg', 'portfolio5-2.jpg', 'portfolio5-3.jpg', 'portfolio5-4.jpg', 'portfolio5-5.jpg', 'portfolio5-6.jpg'],
        description: '【未來市Pop-Up】\n探索礦石上的植物圖鑑，一整面的透明花草標本牆！ 2020 年世界經歷疫情的動蕩不安，以工業設計的角度切入時尚領域的台灣獨立設計品牌「 BLACK TAILORS 小黑尾巴」透過Pop-Up展覽，在 #礦石上的植物圖鑑 系列創作中，與大家分享了 12 款絕美花草礦石卡夾創作，其靈感來自平凡無奇的街角，從水泥牆裂縫長出的美麗花草，象徵著無比的生命力和努力不懈的精神，學習與自然和平共處，展現出「Reset 重置」的核心概念。 展覽細節上保留植物學家製作自然標本的元素，以大面全透明壓克力花草圖鑑標本垂吊於空間中，用透明穿透感的呈現手法，保有著其花草自然樣態。每件商品皆使用天然岩礦切片作為面料，礦石紋理都不相同，印製了岩石上的花草圖鑑，貼上專屬的花草標本標籤，散發植物與岩礦之間的自然之美。'
    },
    { 
        image: 'portfolio6.jpg', 
        title: 'BLACK TAILORS MARBLE ACC.',
        images: ['portfolio6.jpg', 'portfolio6-2.jpg', 'portfolio6-3.jpg', 'portfolio6-4.jpg', 'portfolio6-5.jpg', 'portfolio6-6.jpg'],
        description: '\\小黑尾巴大理石配件系列/ 回收自花東大理石邊緣碎料，研磨成粉末，加壓製成輕盈耐磨的複合布料，因石粉與天然膠材自然流動產生紋理，使袋包俱有獨一無二的紋路與個性，保留了石材粗獷質地、溫度與真實觸感，更是環境友善的時髦單品。'
    },
    { 
        image: 'portfolio7.jpg', 
        title: 'BLACKFOREST Vinyl TOY',
        images: ['portfolio7.jpg', 'portfolio7-2.jpg', 'portfolio7-3.jpg', 'portfolio7-4.jpg', 'portfolio7-5.jpg'],
        description: '小黑森林公仔創作\n兔耳君是住在小黑森林裡的第一隻小森怪夥伴，她是多肉植物品種月兔耳的化身，肥潤多汁的耳朵與雙手有招牌小紅凸點，雙手可以自由360°轉動，個性顯示為不想努力的她總是帶著一抹療癒憨笑，最喜歡跪坐在盆栽裡伸懶腰做日光浴，曬到臉頰、鼻頭跟屁屁都泛著曬傷紅暈。有四代配色，包含Original Ver. / Lucky Ver. / Sakura Matcha Ver. / Ghost Ver.'
    },
    { 
        image: 'portfolio8.jpg', 
        title: 'K STAR PACKAGING REDESIGN',
        images: ['portfolio8.jpg', 'portfolio8-2.jpg', 'portfolio8-3.jpg', 'portfolio8-4.jpg', 'portfolio8-5.jpg', 'portfolio8-6.jpg'],
        description: '心干寶貝手作海味醬禮盒主視覺以大面積幾何做切割，可以從左右兩側的小三角形與中間的大菱形隱約看到魚的符碼隱藏在其中， 用「魚」象徵八斗子的海味，其他色塊對應填入不同色調的海洋藍色，並設計海洋波浪紋飾應用於對角區塊。中間呈現禮盒名稱，並將「手作海味醬」以小卷橘色塊壓底作為撞色點綴，上下盒之間也有一條小卷橘色帶貫穿。\n\n六個瓶身標籤將所有資訊內容統一視覺化呈現，延續盒身上的海洋波浪紋飾，中間往兩側延伸六個不同底色色塊，對應的是不同口味內容物，可通用於所有醬料瓶。'
    },
    { 
        image: 'portfolio9.jpg', 
        title: 'Woo-Ahh ISLAND IP DESIGN',
        images: ['portfolio9.jpg', 'portfolio9-2.png', 'portfolio9-3.png', 'portfolio9-4.png', 'portfolio9-5.png', 'portfolio9-6.png'],
        description: 'Story of WooAhh Island\n\n這是一個來自「嗚啊探險島」的故事，島上有米猴阿諾一家人居住，還有很多動物好朋友也都住在島上，每天頑皮的阿諾都開心去上學，在叢林學校學到好多好玩的知識，阿諾最喜歡跟好朋友四處在島上探險，有時上山有時下海，每當探險發現新事物，貓頭鷹老師會頒發獎勵小勳章。阿諾在家的時候最喜歡跟家人黏在一起，擔任家庭小精靈玩幫忙家事，玩遊戲，也喜歡跟家人跳島旅行，每一次新鮮體驗都讓阿諾的視野與想像更加寬廣。'
    },
];

let currentPortfolioIndex = 0;
const itemsPerPage = 6; // Desktop: 6 items per page
const itemsPerPageMobile = 3; // Mobile: 3 items per page

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initPortfolio();
    initModal();
    initNavbarScroll();
    initHeroNameScroll();
    initAboutAvatar();
    initServicesArrowScroll();
    initScratchCard();
});

// About avatar image handler
function initAboutAvatar() {
    const avatarImg = document.getElementById('aboutAvatar');
    if (avatarImg) {
        avatarImg.onerror = function() {
            // Hide image if it fails to load, show placeholder
            this.style.display = 'none';
        };
    }
}

// Services arrow scroll animation
function initServicesArrowScroll() {
    const servicesSection = document.getElementById('services');
    const arrowWorkflow = document.querySelector('.arrow-workflow');
    
    if (!servicesSection || !arrowWorkflow) return;
    
    // Initial state - hidden (retracted)
    arrowWorkflow.classList.remove('slide-in');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Scrolled into view - slide in from left
                arrowWorkflow.classList.add('slide-in');
            } else {
                // Scrolled out of view - slide out to left (retract)
                arrowWorkflow.classList.remove('slide-in');
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px'
    });
    
    observer.observe(servicesSection);
    
    // Initialize arrow indicators for mobile
    initArrowIndicators();
}

// Initialize arrow indicators for mobile scrolling
function initArrowIndicators() {
    const servicesContent = document.querySelector('.services-content');
    const indicators = document.querySelectorAll('.indicator-dot');
    const arrowItems = document.querySelectorAll('.arrow-item');
    
    if (!servicesContent || indicators.length === 0 || arrowItems.length === 0) return;
    
    // Only enable on mobile
    if (window.innerWidth > 768) return;
    
    function updateIndicators() {
        const scrollLeft = servicesContent.scrollLeft;
        const clientWidth = servicesContent.clientWidth;
        
        // Get the first arrow's position and width
        const firstArrow = arrowItems[0];
        const arrowWidth = firstArrow.offsetWidth;
        const overlap = 80; // overlap amount between arrows
        const effectiveWidth = arrowWidth - overlap; // effective width per arrow
        
        // Calculate which arrow is most visible in the viewport
        // Check each arrow's visibility
        let maxVisible = 0;
        let activeIndex = 0;
        
        arrowItems.forEach((arrow, index) => {
            const arrowRect = arrow.getBoundingClientRect();
            const contentRect = servicesContent.getBoundingClientRect();
            
            // Calculate how much of this arrow is visible
            const visibleLeft = Math.max(arrowRect.left, contentRect.left);
            const visibleRight = Math.min(arrowRect.right, contentRect.right);
            const visibleWidth = Math.max(0, visibleRight - visibleLeft);
            
            // If this arrow is more visible than the previous max, update
            if (visibleWidth > maxVisible) {
                maxVisible = visibleWidth;
                activeIndex = index;
            }
        });
        
        // Update active indicator
        indicators.forEach((indicator, index) => {
            if (index === activeIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Function to scroll to specific arrow
    function scrollToArrow(index) {
        if (index < 0 || index >= arrowItems.length) return;
        
        const targetArrow = arrowItems[index];
        const firstArrow = arrowItems[0];
        const arrowWidth = firstArrow.offsetWidth;
        const overlap = 80;
        const effectiveWidth = arrowWidth - overlap;
        
        // Calculate scroll position
        // First arrow starts at 0, each subsequent arrow is offset by effectiveWidth
        let scrollPosition = 0;
        if (index > 0) {
            scrollPosition = index * effectiveWidth;
        }
        
        // Smooth scroll to the target arrow
        servicesContent.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
    
    // Add click event listeners to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            scrollToArrow(index);
        });
    });
    
    // Update on scroll with throttling
    let scrollTimeout;
    servicesContent.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateIndicators, 50);
    }, { passive: true });
    
    // Update on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateIndicators, 100);
    });
    
    // Initial update
    updateIndicators();
}

// Navbar scroll effect
function initNavbarScroll() {
    const nav = document.querySelector('.fixed-nav');
    const heroSection = document.getElementById('hero');
    
    window.addEventListener('scroll', function() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100;
        
        if (scrollPosition > heroBottom) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Hero name scroll animation - 翻页效果
function initHeroNameScroll() {
    const heroName = document.querySelector('.hero-name');
    const heroSection = document.getElementById('hero');
    let lastScrollY = window.scrollY;
    
    if (!heroName || !heroSection) return;
    
    // Initial state - visible (flipped in)
    heroName.classList.add('flip-in');
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollThreshold = heroBottom * 0.2; // Start animation when scrolled 20% of hero section
        
        // Apply animation based on scroll position
        if (currentScrollY > scrollThreshold) {
            // Scrolling down past threshold - flip out (由左往右翻页)
            heroName.classList.remove('flip-in');
            heroName.classList.add('flip-out');
        } else {
            // At top or scrolling up - flip in (由右往左翻页回来)
            heroName.classList.remove('flip-out');
            heroName.classList.add('flip-in');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Smooth Scroll Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.fixed-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Portfolio Functions
function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const leftArrow = document.getElementById('portfolioLeft');
    const rightArrow = document.getElementById('portfolioRight');
    
    // Render portfolio items
    renderPortfolio();
    
    // Arrow navigation
    leftArrow.addEventListener('click', function() {
        const itemsPerView = getItemsPerPage();
        if (currentPortfolioIndex > 0) {
            currentPortfolioIndex = Math.max(0, currentPortfolioIndex - itemsPerView);
            renderPortfolio();
        }
    });
    
    rightArrow.addEventListener('click', function() {
        const itemsPerView = getItemsPerPage();
        if (currentPortfolioIndex + itemsPerView < portfolioData.length) {
            currentPortfolioIndex += itemsPerView;
            renderPortfolio();
        }
    });
    
    // Update arrow visibility on resize
    window.addEventListener('resize', function() {
        renderPortfolio();
    });
    
    // Update arrow visibility
    updateArrowVisibility();
}

function getItemsPerPage() {
    return window.innerWidth <= 768 ? itemsPerPageMobile : itemsPerPage;
}

function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';
    
    const itemsPerView = getItemsPerPage();
    const endIndex = Math.min(currentPortfolioIndex + itemsPerView, portfolioData.length);
    const itemsToShow = portfolioData.slice(currentPortfolioIndex, endIndex);
    
    itemsToShow.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.dataset.index = currentPortfolioIndex + index;
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.onerror = function() {
            // Fallback if image doesn't exist
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%23ddd" width="800" height="450"/%3E%3Ctext fill="%23999" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E' + item.title + '%3C/text%3E%3C/svg%3E';
        };
        
        const overlay = document.createElement('div');
        overlay.className = 'portfolio-item-overlay';
        
        const title = document.createElement('div');
        title.className = 'portfolio-item-title';
        title.textContent = item.title;
        
        overlay.appendChild(title);
        portfolioItem.appendChild(img);
        portfolioItem.appendChild(overlay);
        
        portfolioItem.addEventListener('click', function() {
            openModal(currentPortfolioIndex + index);
        });
        
        portfolioGrid.appendChild(portfolioItem);
    });
    
    updateArrowVisibility();
}

function updateArrowVisibility() {
    const leftArrow = document.getElementById('portfolioLeft');
    const rightArrow = document.getElementById('portfolioRight');
    const itemsPerView = getItemsPerPage();
    
    leftArrow.style.opacity = currentPortfolioIndex > 0 ? '1' : '0.5';
    leftArrow.style.pointerEvents = currentPortfolioIndex > 0 ? 'auto' : 'none';
    
    rightArrow.style.opacity = currentPortfolioIndex + itemsPerView < portfolioData.length ? '1' : '0.5';
    rightArrow.style.pointerEvents = currentPortfolioIndex + itemsPerView < portfolioData.length ? 'auto' : 'none';
}

// Modal Functions
function initModal() {
    const modal = document.getElementById('portfolioModal');
    const closeBtn = document.getElementById('modalClose');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

let currentModalImages = [];
let currentModalIndex = 0;

function openModal(index) {
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalThumbnails = document.getElementById('modalThumbnails');
    
    if (portfolioData[index]) {
        const project = portfolioData[index];
        
        // Set title
        modalTitle.textContent = project.title;
        
        // Set description if available
        if (project.description) {
            modalDescription.textContent = project.description;
            modalDescription.style.display = 'block';
        } else {
            modalDescription.style.display = 'none';
        }
        
        // Handle images
        if (project.images && project.images.length > 0) {
            // Multiple images - show thumbnails
            currentModalImages = project.images;
            currentModalIndex = 0;
            
            // Set main image
            modalImage.src = currentModalImages[0];
            modalImage.alt = project.title;
            
            // Create thumbnails
            modalThumbnails.innerHTML = '';
            currentModalImages.forEach((imgSrc, imgIndex) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = 'modal-thumbnail';
                if (imgIndex === 0) thumbnail.classList.add('active');
                
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = imgSrc;
                thumbnailImg.alt = `${project.title} - Image ${imgIndex + 1}`;
                thumbnailImg.onerror = function() {
                    // Hide thumbnail if image doesn't exist
                    thumbnail.style.display = 'none';
                };
                
                thumbnail.appendChild(thumbnailImg);
                thumbnail.addEventListener('click', function() {
                    switchModalImage(imgIndex);
                });
                
                modalThumbnails.appendChild(thumbnail);
            });
            modalThumbnails.style.display = 'flex';
        } else {
            // Single image - hide thumbnails
            modalImage.src = project.image;
            modalImage.alt = project.title;
            modalThumbnails.innerHTML = '';
            modalThumbnails.style.display = 'none';
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function switchModalImage(imgIndex) {
    if (imgIndex >= 0 && imgIndex < currentModalImages.length) {
        const modalImage = document.getElementById('modalImage');
        const thumbnails = document.querySelectorAll('.modal-thumbnail');
        
        // Update main image
        modalImage.src = currentModalImages[imgIndex];
        currentModalIndex = imgIndex;
        
        // Update active thumbnail
        thumbnails.forEach((thumb, index) => {
            if (index === imgIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }
}

function closeModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Scratch Card Functionality
function initScratchCard() {
    const canvas = document.getElementById('scratchCanvas');
    const scratchCard = document.querySelector('.scratch-card');
    const qrcodeImage = document.getElementById('qrcodeImage');
    
    if (!canvas || !scratchCard) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let scratchedPixels = 0;
    const totalPixels = canvas.width * canvas.height;
    const revealThreshold = 0.5; // 50% scratched to reveal (more strict)
    let scratchHistory = []; // Track scratch movements for back-and-forth detection
    let lastScratchPos = null;
    let directionChanges = 0; // Count direction changes (back and forth)
    const minDirectionChanges = 3; // Require at least 3 direction changes
    let checkInterval = null; // For periodic checking
    
    // Set canvas size
    function resizeCanvas() {
        const rect = scratchCard.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        drawScratchLayer();
    }
    
    // Draw black scratch layer
    function drawScratchLayer() {
        // Fill with solid black
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Get mouse/touch position
    function getEventPos(e) {
        const rect = canvas.getBoundingClientRect();
        if (e.touches && e.touches.length > 0) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        }
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    
    // Check scratched ratio (called periodically for performance)
    function checkScratchedRatio() {
        if (scratchCard.classList.contains('scratched')) return;
        
        // Sample pixels for performance (check every 10th pixel)
        const sampleRate = 10;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let transparentPixels = 0;
        let totalSampled = 0;
        
        for (let i = 3; i < imageData.data.length; i += 4 * sampleRate) {
            totalSampled++;
            if (imageData.data[i] === 0) { // Alpha channel is 0 (transparent)
                transparentPixels++;
            }
        }
        
        const scratchedRatio = transparentPixels / totalSampled;
        
        // Require both sufficient coverage AND back-and-forth movement
        if (scratchedRatio >= revealThreshold && 
            directionChanges >= minDirectionChanges) {
            scratchCard.classList.add('scratched');
            // Fade out canvas and hint
            canvas.style.transition = 'opacity 0.8s ease';
            canvas.style.opacity = '0';
            const hint = document.querySelector('.scratch-hint');
            if (hint) {
                hint.style.transition = 'opacity 0.8s ease';
                hint.style.opacity = '0';
            }
            if (checkInterval) {
                clearInterval(checkInterval);
            }
        }
    }
    
    // Scratch function
    function scratch(x, y) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
        
        // Track scratch movement for back-and-forth detection
        if (lastScratchPos) {
            const dx = x - lastScratchPos.x;
            const dy = y - lastScratchPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only track if moved significantly
            if (distance > 5) {
                const currentDirection = Math.atan2(dy, dx);
                
                if (scratchHistory.length > 0) {
                    const lastDirection = scratchHistory[scratchHistory.length - 1];
                    let angleDiff = currentDirection - lastDirection;
                    
                    // Normalize angle difference to [-PI, PI]
                    while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
                    while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
                    
                    // If direction change is significant (more than 90 degrees), count as direction change
                    if (Math.abs(angleDiff) > Math.PI / 2) {
                        directionChanges++;
                    }
                }
                
                scratchHistory.push(currentDirection);
                // Keep only last 20 directions
                if (scratchHistory.length > 20) {
                    scratchHistory.shift();
                }
            }
        }
        
        lastScratchPos = { x, y };
    }
    
    // Mouse events
    canvas.addEventListener('mousedown', function(e) {
        isDrawing = true;
        const pos = getEventPos(e);
        lastScratchPos = { x: pos.x, y: pos.y };
        scratch(pos.x, pos.y);
        // Start periodic checking
        if (!checkInterval) {
            checkInterval = setInterval(checkScratchedRatio, 200);
        }
    });
    
    canvas.addEventListener('mousemove', function(e) {
        if (isDrawing) {
            const pos = getEventPos(e);
            scratch(pos.x, pos.y);
        }
    });
    
    canvas.addEventListener('mouseup', function() {
        isDrawing = false;
    });
    
    canvas.addEventListener('mouseleave', function() {
        isDrawing = false;
    });
    
    // Touch events
    canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        isDrawing = true;
        const pos = getEventPos(e);
        lastScratchPos = { x: pos.x, y: pos.y };
        scratch(pos.x, pos.y);
        // Start periodic checking
        if (!checkInterval) {
            checkInterval = setInterval(checkScratchedRatio, 200);
        }
    });
    
    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
        if (isDrawing) {
            const pos = getEventPos(e);
            scratch(pos.x, pos.y);
        }
    });
    
    canvas.addEventListener('touchend', function(e) {
        e.preventDefault();
        isDrawing = false;
    });
    
    // Handle QR code image error
    if (qrcodeImage) {
        qrcodeImage.onerror = function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'qrcode-placeholder';
            placeholder.innerHTML = 'QR Code<br>Image';
            placeholder.style.cssText = 'width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; background: #f0f0f0; border: 2px dashed #ccc; border-radius: 8px; color: #999; text-align: center; font-size: 14px;';
            this.parentNode.insertBefore(placeholder, this);
        };
    }
    
    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

