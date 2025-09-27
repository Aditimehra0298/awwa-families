// Authentication check
function checkAuthentication() {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
        // For testing purposes, create a default user session
        const defaultUserInfo = {
            userId: 'aditi',
            name: 'ADITI',
            userType: 'L2'
        };
        localStorage.setItem('userInfo', JSON.stringify(defaultUserInfo));
        console.log('Created default user session for testing');
        return true;
        
        // Uncomment the lines below to enable proper authentication
        // window.location.href = 'jyoti-login.html';
        // return false;
    }
    return true;
}

// Global logout function
function logout() {
    console.log('Logout function called');
    if (confirm('Are you sure you want to logout?')) {
        console.log('User confirmed logout');
        // Clear user session
        localStorage.removeItem('userInfo');
        
        // Show success message
        alert('Logout successful! Redirecting to login page...');
        
        // Redirect to login page
        window.location.href = 'jyoti-login.html';
    } else {
        console.log('User cancelled logout');
    }
}

// Update user profile in header
function updateUserProfile() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        const userNameElement = document.querySelector('.user-name');
        const userIdElement = document.querySelector('.user-id');
        
        if (userNameElement) {
            userNameElement.textContent = userInfo.name;
        }
        if (userIdElement) {
            userIdElement.textContent = userInfo.userId;
        }
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Starting initialization');
    
    // Check authentication first
    if (!checkAuthentication()) {
        return; // Stop execution if not authenticated
    }
    
    // Update user profile in header
    updateUserProfile();
    
    // Debug: Check if logout button exists immediately
    setTimeout(function() {
        const logoutBtn = document.getElementById('logoutBtn');
        console.log('Logout button check (delayed):', logoutBtn);
        if (logoutBtn) {
            console.log('Logout button is visible:', logoutBtn.offsetParent !== null);
            console.log('Logout button is clickable:', logoutBtn.style.pointerEvents);
        }
    }, 1000);
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('sidebar-open');
            
            // Adjust iframe scale after sidebar animation
            setTimeout(adjustIframeScale, 300);
        });
    }

    // Profile picture upload functionality
    const profileUpload = document.getElementById('profileUpload');
    const profilePictureContainer = document.querySelector('.profile-picture-container');
    
    if (profilePictureContainer && profileUpload) {
        profilePictureContainer.addEventListener('click', function() {
            profileUpload.click();
        });
        
        profileUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const profilePicture = profilePictureContainer.querySelector('.profile-picture');
                    if (profilePicture) {
                        profilePicture.src = e.target.result;
                    } else {
                        // Create new image element if it doesn't exist
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.className = 'profile-picture';
                        profilePictureContainer.insertBefore(img, profilePictureContainer.firstChild);
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Profile section toggle functionality
    const profileNavItem = document.getElementById('profileNavItem');
    const profileSection = document.getElementById('profileSection');
    
    if (profileNavItem && profileSection) {
        profileNavItem.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Profile nav item clicked');
            toggleProfileSection();
        });
    }

    // AWWA Home navigation
    const awwaHomeNavItem = document.getElementById('awwaHomeNavItem');
    if (awwaHomeNavItem) {
        awwaHomeNavItem.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleAwwaHomeSection();
        });
    }

    // Regional AWWA navigation
    const regionalNavItem = document.getElementById('regionalNavItem');
    if (regionalNavItem) {
        regionalNavItem.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleRegionalSection();
        });
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    console.log('Logout button found:', logoutBtn);
    if (logoutBtn) {
        console.log('Adding logout event listener');
        
        // Add multiple event listeners to ensure it works
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Logout button clicked (event listener)');
            
            // Show confirmation dialog
            if (confirm('Are you sure you want to logout?')) {
                console.log('User confirmed logout');
                // Clear user session
                localStorage.removeItem('userInfo');
                
                // Show success message
                alert('Logout successful! Redirecting to login page...');
                
                // Redirect to login page
                window.location.href = 'jyoti-login.html';
            } else {
                console.log('User cancelled logout');
            }
        });
        
        // Also add mousedown event as backup
        logoutBtn.addEventListener('mousedown', function(e) {
            console.log('Logout button mousedown event');
        });
        
        // Test if button is clickable
        logoutBtn.addEventListener('mouseenter', function() {
            console.log('Mouse entered logout button');
        });
        
    } else {
        console.error('Logout button not found!');
        // Fallback: try to find logout button by class or text
        const fallbackLogoutBtn = document.querySelector('.logout-btn') || document.querySelector('button[class*="logout"]');
        if (fallbackLogoutBtn) {
            console.log('Found fallback logout button:', fallbackLogoutBtn);
            fallbackLogoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Fallback logout button clicked');
                
                if (confirm('Are you sure you want to logout?')) {
                    localStorage.removeItem('userInfo');
                    alert('Logout successful! Redirecting to login page...');
                    window.location.href = 'jyoti-login.html';
                }
            });
        }
    }

    // Initialize iframe scaling
    adjustIframeScale();
    
    // Adjust on window resize
    window.addEventListener('resize', function() {
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(adjustIframeScale, 250);
    });
    
    // Adjust on orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(adjustIframeScale, 500);
    });
});

// Function to toggle profile section
function toggleProfileSection() {
    const profileSection = document.getElementById('profileSection');
    const profileNavItem = document.getElementById('profileNavItem');
    const mainContent = document.querySelector('.main-content');
    
    console.log('Toggle function called');
    console.log('Profile section element:', profileSection);
    console.log('Profile nav item element:', profileNavItem);
    
    if (!profileSection) {
        console.error('Profile section not found!');
        return;
    }
    
    if (!profileNavItem) {
        console.error('Profile nav item not found!');
        return;
    }
    
    const isHidden = profileSection.style.display === 'none' || 
                    profileSection.style.display === '' || 
                    getComputedStyle(profileSection).display === 'none';
    
    console.log('Is profile section hidden?', isHidden);
    
    if (isHidden) {
        // Show only profile section - hide all other content
        console.log('Showing profile section only');
        
        // Hide all other dashboard content
        const allSections = mainContent.querySelectorAll('.cards-row, .weather-widget, .download-section, .announcements, .important-message, .course-attendance, .mentor-details, .questions-queries, .upcoming-events, .job-alert');
        allSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show profile section in full view
        profileSection.style.display = 'block';
        profileSection.style.visibility = 'visible';
        profileSection.style.opacity = '1';
        profileSection.classList.add('full-view');
        profileNavItem.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    } else {
        // Hide profile section - show all other content
        console.log('Hiding profile section, showing dashboard');
        
        // Show all other dashboard content
        const allSections = mainContent.querySelectorAll('.cards-row, .weather-widget, .download-section, .announcements, .important-message, .course-attendance, .mentor-details, .questions-queries, .upcoming-events, .job-alert');
        allSections.forEach(section => {
            section.style.display = '';
        });
        
        // Hide profile section
        profileSection.style.display = 'none';
        profileSection.style.visibility = 'hidden';
        profileSection.style.opacity = '0';
        profileSection.classList.remove('full-view');
        profileNavItem.classList.remove('active');
    }
}

// AWWA Home section toggle functionality
function toggleAwwaHomeSection() {
    const awwaContainer = document.querySelector('.awwa-iframe-container');
    const awwaHomeNavItem = document.getElementById('awwaHomeNavItem');
    
    if (!awwaContainer || !awwaHomeNavItem) return;
    
    // Hide other sections
    const profileSection = document.getElementById('profileSection');
    const regionalSection = document.getElementById('regionalSection');
    const regionalNavItem = document.getElementById('regionalNavItem');
    
    if (profileSection) {
        profileSection.style.display = 'none';
        profileSection.style.visibility = 'hidden';
        profileSection.style.opacity = '0';
        profileSection.classList.remove('full-view');
    }
    
    if (regionalSection) {
        regionalSection.style.display = 'none';
        regionalSection.style.visibility = 'hidden';
        regionalSection.style.opacity = '0';
        regionalSection.classList.remove('full-view');
    }
    
    if (regionalNavItem) {
        regionalNavItem.classList.remove('active');
    }
    
    // Show AWWA Home section
    awwaContainer.style.display = 'block';
    awwaContainer.style.visibility = 'visible';
    awwaContainer.style.opacity = '1';
    awwaHomeNavItem.classList.add('active');
    
    // Adjust iframe scale after section change
    setTimeout(adjustIframeScale, 100);
}

// Regional AWWA navigation functionality
function toggleRegionalSection() {
    const regionalSection = document.getElementById('regionalSection');
    const regionalNavItem = document.getElementById('regionalNavItem');
    
    if (!regionalSection || !regionalNavItem) return;
    
    // Hide other sections
    const profileSection = document.getElementById('profileSection');
    const awwaContainer = document.querySelector('.awwa-iframe-container');
    const awwaHomeNavItem = document.getElementById('awwaHomeNavItem');
    
    if (profileSection) {
        profileSection.style.display = 'none';
        profileSection.style.visibility = 'hidden';
        profileSection.style.opacity = '0';
        profileSection.classList.remove('full-view');
    }
    
    if (awwaContainer) {
        awwaContainer.style.display = 'none';
    }
    
    if (awwaHomeNavItem) {
        awwaHomeNavItem.classList.remove('active');
    }
    
    // Toggle regional section
    const isVisible = regionalSection.style.display === 'block';
    
    if (isVisible) {
        // Hide regional section
        regionalSection.style.display = 'none';
        regionalSection.style.visibility = 'hidden';
        regionalSection.style.opacity = '0';
        regionalSection.classList.remove('full-view');
        
        // Show main AWWA iframe
        if (awwaContainer) {
            awwaContainer.style.display = 'block';
        }
        
        // Update active states
        regionalNavItem.classList.remove('active');
        document.querySelector('.nav-item:first-child').classList.add('active');
    } else {
        // Show regional section
        regionalSection.style.display = 'block';
        regionalSection.style.visibility = 'visible';
        regionalSection.style.opacity = '1';
        regionalSection.classList.add('full-view');
        
        // Update active states
        regionalNavItem.classList.add('active');
        document.querySelector('.nav-item:first-child').classList.remove('active');
        
        // Adjust iframe scale
        setTimeout(adjustRegionalIframeScale, 300);
    }
}

// Dynamic responsive iframe scaling
function adjustIframeScale() {
    const iframe = document.getElementById('awwaIframe');
    if (!iframe) return;
    
    const container = iframe.closest('.awwa-iframe-container');
    if (!container) return;
    
    const mainContent = document.querySelector('.main-content');
    const isSidebarOpen = mainContent && mainContent.classList.contains('sidebar-open');
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate optimal scale based on container size and sidebar state
    let scale = 1;
    
    // Adjust scale based on available width when sidebar is open
    if (isSidebarOpen) {
        const availableWidth = windowWidth - 250; // Subtract sidebar width
        const widthRatio = availableWidth / windowWidth;
        
        if (availableWidth <= 400) {
            scale = 0.45;
        } else if (availableWidth <= 600) {
            scale = 0.55;
        } else if (availableWidth <= 768) {
            scale = 0.65;
        } else if (availableWidth <= 1024) {
            scale = 0.75;
        } else if (availableWidth <= 1200) {
            scale = 0.85;
        } else {
            scale = 0.9;
        }
    } else {
        // Original scaling when sidebar is closed
        if (windowWidth <= 400) {
            scale = 0.55;
        } else if (windowWidth <= 600) {
            scale = 0.65;
        } else if (windowWidth <= 768) {
            scale = 0.7;
        } else if (windowWidth <= 1024) {
            scale = 0.85;
        } else if (windowWidth <= 1200) {
            scale = 0.95;
        } else {
            scale = 1;
        }
    }
    
    // Apply scaling
    iframe.style.transform = `scale(${scale})`;
    iframe.style.transformOrigin = 'top left';
    iframe.style.width = `${100 / scale}%`;
    iframe.style.height = `${100 / scale}%`;
    iframe.style.minWidth = `${100 / scale}%`;
    iframe.style.minHeight = `${100 / scale}%`;
}

// Regional iframe scaling function
function adjustRegionalIframeScale() {
    const iframe = document.getElementById('regionalIframe');
    if (!iframe) return;
    
    const container = iframe.closest('.regional-iframe-container');
    if (!container) return;
    
    const mainContent = document.querySelector('.main-content');
    const isSidebarOpen = mainContent && mainContent.classList.contains('sidebar-open');
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate optimal scale based on container size and sidebar state
    let scale = 1;
    
    // Adjust scale based on available width when sidebar is open
    if (isSidebarOpen) {
        const availableWidth = windowWidth - 250; // Subtract sidebar width
        
        if (availableWidth <= 400) {
            scale = 0.45;
        } else if (availableWidth <= 600) {
            scale = 0.55;
        } else if (availableWidth <= 768) {
            scale = 0.65;
        } else if (availableWidth <= 1024) {
            scale = 0.75;
        } else if (availableWidth <= 1200) {
            scale = 0.85;
        } else {
            scale = 0.9;
        }
    } else {
        // Original scaling when sidebar is closed
        if (windowWidth <= 400) {
            scale = 0.55;
        } else if (windowWidth <= 600) {
            scale = 0.65;
        } else if (windowWidth <= 768) {
            scale = 0.7;
        } else if (windowWidth <= 1024) {
            scale = 0.85;
        } else if (windowWidth <= 1200) {
            scale = 0.95;
        } else {
            scale = 1;
        }
    }
    
    // Apply scaling
    iframe.style.transform = `scale(${scale})`;
    iframe.style.transformOrigin = 'top left';
    iframe.style.width = `${100 / scale}%`;
    iframe.style.height = `${100 / scale}%`;
    iframe.style.minWidth = `${100 / scale}%`;
    iframe.style.minHeight = `${100 / scale}%`;
}

// AWWA iframe functionality
function refreshIframe() {
    const iframe = document.getElementById('awwaIframe');
    if (iframe) {
        iframe.src = iframe.src;
    }
}

function openFullSite() {
    window.open('https://awwa.org.in/', '_blank');
}
