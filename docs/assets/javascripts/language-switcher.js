// Language switcher for Trio Documentation
// Allows users to switch between English and Dutch versions

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const isNl = currentPath.includes('/nl/');
    
    // Create language switcher HTML
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'md-language-switcher';
    languageSwitcher.style.cssText = 'position: fixed; top: 100px; right: 20px; z-index: 1000; background: var(--md-primary-fg-color); padding: 10px 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);';
    
    // Determine the target language URL
    let targetUrl;
    let targetLang;
    let targetFlag;
    
    if (isNl) {
        // Currently on Dutch, switch to English
        targetUrl = currentPath.replace('/nl/', '/');
        targetLang = 'English';
        targetFlag = '🇬🇧';
    } else {
        // Currently on English, switch to Dutch
        // Insert /nl/ after /docs/
        targetUrl = currentPath.replace('/docs/', '/docs/nl/');
        if (!targetUrl.includes('/nl/')) {
            // Fallback for root
            targetUrl = '/nl/';
        }
        targetLang = 'Nederlands';
        targetFlag = '🇳🇱';
    }
    
    // Create the switch button/link
    languageSwitcher.innerHTML = `
        <a href="${targetUrl}" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 8px; font-weight: 500;">
            <span style="font-size: 1.2em;">${targetFlag}</span>
            <span>${targetLang}</span>
        </a>
    `;
    
    // Add to page
    document.body.appendChild(languageSwitcher);
    
    // Add some responsive behavior
    const mediaQuery = window.matchMedia('(max-width: 76.1875em)');
    function handleMediaQuery(e) {
        if (e.matches) {
            languageSwitcher.style.top = '60px';
            languageSwitcher.style.right = '10px';
            languageSwitcher.style.padding = '8px 12px';
        } else {
            languageSwitcher.style.top = '100px';
            languageSwitcher.style.right = '20px';
            languageSwitcher.style.padding = '10px 15px';
        }
    }
    
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);
});

