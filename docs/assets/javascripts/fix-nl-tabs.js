// Fix navigation tabs for Dutch language pages
// This script ensures that all main navigation tabs point to Dutch URLs when viewing Dutch pages

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const isNl = currentPath.includes('/nl/');
    
    if (isNl) {
        // Find all navigation tab links
        const tabLinks = document.querySelectorAll('.md-tabs__link');
        
        tabLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Only fix if it doesn't already have /nl/ and is not an external link
            if (href && !href.includes('/nl/') && !href.startsWith('http')) {
                // Handle both production (/trio-docs/) and localhost (/) URLs
                if (href.startsWith('/trio-docs/')) {
                    // Production: /trio-docs/ → /trio-docs/nl/
                    const newHref = href.replace('/trio-docs/', '/trio-docs/nl/');
                    link.setAttribute('href', newHref);
                } else if (href.startsWith('/') && !href.startsWith('//')) {
                    // Localhost: / → /nl/
                    // Skip if it's the root path only
                    if (href !== '/') {
                        const newHref = '/nl' + href;
                        link.setAttribute('href', newHref);
                    } else {
                        link.setAttribute('href', '/nl/');
                    }
                }
            }
        });
    }
});

