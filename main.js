
        // Test data for SSC CHSL
        const tests = [
            {
                id: 1,
                title: "SSC CHSL Tier 1 - Test 1",
                subtitle: "Full Length Mock Test",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier1",
                features: ["All Sections", "Detailed Solutions", "All India Rank"],
                progress: 0,
                status: "trusted",
                rating: 4.7,
                reviews: 1123,
                pageUrl: "chsl-test1.html"
            },
            {
                id: 2,
                title: "SSC CHSL Tier 1 - Test 2",
                subtitle: "English Language Focus",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier1",
                features: ["English Language", "Sectional Test", "Vocabulary"],
                progress: 0,
                status: "popular",
                rating: 4.6,
                reviews: 845,
                pageUrl: "chsl-test2.html"
            },
            {
                id: 3,
                title: "SSC CHSL Tier 1 - Test 3",
                subtitle: "Quantitative Aptitude Focus",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier1",
                features: ["Quantitative Aptitude", "Sectional Test", "Fast Calculation"],
                progress: 30,
                status: "trusted",
                rating: 4.5,
                reviews: 723,
                pageUrl: "chsl-test3.html"
            },
            {
                id: 4,
                title: "SSC CHSL Tier 1 - Test 4",
                subtitle: "General Intelligence Focus",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier1",
                features: ["General Intelligence", "Sectional Test", "Logical Reasoning"],
                progress: 0,
                status: "trusted",
                rating: 4.4,
                reviews: 621,
                pageUrl: "chsl-test4.html"
            },
            {
                id: 5,
                title: "SSC CHSL Tier 2 - Test 1",
                subtitle: "Descriptive Paper - Essay",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier2",
                features: ["Essay Writing", "Letter/Application", "Detailed Evaluation"],
                progress: 0,
                status: "trusted",
                rating: 4.8,
                reviews: 432,
                pageUrl: "chsl-test5.html"
            },
            {
                id: 6,
                title: "SSC CHSL Tier 2 - Test 2",
                subtitle: "Descriptive Paper - Full",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier2",
                features: ["Essay Writing", "Letter/Application", "Full Evaluation"],
                progress: 0,
                status: "trusted",
                rating: 4.7,
                reviews: 389,
                pageUrl: "chsl-test6.html"
            },
            {
                id: 7,
                title: "SSC CHSL Tier 2 - Test 3",
                subtitle: "Typing Test Practice",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier2",
                features: ["Typing Test", "Speed Practice", "Accuracy Check"],
                progress: 0,
                status: "popular",
                rating: 4.6,
                reviews: 567,
                pageUrl: "chsl-test7.html"
            },
            {
                id: 8,
                title: "SSC CHSL Tier 2 - Test 4",
                subtitle: "Complete Tier 2 Mock",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier2",
                features: ["Full Tier 2", "Essay & Letter", "Expert Evaluation"],
                progress: 0,
                status: "trusted",
                rating: 4.9,
                reviews: 298,
                pageUrl: "chsl-test8.html"
            }
            

            
            
            
            
        ];
        
        
        
        
        
        
                    // DOM Elements
        const testGrid = document.getElementById('testGrid');
        const tierTabs = document.querySelectorAll('.tier-tab');
        let currentTier = 'tier1';

        // Initialize the page
        function initPage() {
            renderTests(currentTier);
            
            // Add event listeners to tier tabs
            tierTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tier = tab.getAttribute('data-tier');
                    setActiveTier(tier);
                });
            });
        }

        // Set active tier
        function setActiveTier(tier) {
            currentTier = tier;
            
            // Update active tab
            tierTabs.forEach(tab => {
                if (tab.getAttribute('data-tier') === tier) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // Render tests for selected tier
            renderTests(tier);
        }

        // Render tests based on selected tier
        function renderTests(tier) {
            testGrid.innerHTML = '';
            
            const filteredTests = tests.filter(test => {
                if (tier === 'both') return true;
                return test.tier === tier;
            });
            
            filteredTests.forEach(test => {
                const testCard = createTestCard(test);
                testGrid.appendChild(testCard);
            });
        }

        // Create test card element
        function createTestCard(test) {
            const card = document.createElement('div');
            card.className = 'test-card';
            
            // Status badge
            let statusBadge = '';
            if (test.status === 'trusted') {
                statusBadge = '<div class="trust-indicator"><i class="fas fa-shield-alt"></i> Trusted</div>';
            } else if (test.status === 'popular') {
                statusBadge = '<div class="trust-indicator" style="background: var(--accent);"><i class="fas fa-fire"></i> Popular</div>';
            }
            
            // Progress bar if test is in progress
            let progressBar = '';
            if (test.progress > 0) {
                progressBar = `
                    <div class="progress-bar">
                        <div class="progress" style="width: ${test.progress}%"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--gray); margin: 8px 0;">
                        <span>Progress: ${test.progress}%</span>
                        <span>Continue</span>
                    </div>
                `;
            }
            
            // Features HTML
            const featuresHTML = test.features.map(feature => 
                `<span class="feature-tag">${feature}</span>`
            ).join('');
            
            card.innerHTML = `
                ${statusBadge}
                <div class="test-header">
                    <div>
                        <div class="test-title">${test.title}</div>
                        <div class="test-subtitle">${test.subtitle}</div>
                    </div>
                </div>
                <div class="test-body">
                    <div class="test-stats">
                        <div class="test-stat">
                            <div class="stat-value">${test.questions}</div>
                            <div class="stat-label">Questions</div>
                        </div>
                        <div class="test-stat">
                            <div class="stat-value">${test.time}</div>
                            <div class="stat-label">Minutes</div>
                        </div>
                        <div class="test-stat">
                            <div class="stat-value">${test.marks}</div>
                            <div class="stat-label">Marks</div>
                        </div>
                    </div>
                    ${progressBar}
                    <div class="test-details">
                        Most accurate exam simulation with detailed performance analytics.
                    </div>
                    <div class="test-features">
                        ${featuresHTML}
                    </div>
                    <div class="rating" style="margin: 10px 0;">
                        <div class="stars">
                            ${getStarsHTML(test.rating)}
                        </div>
                        <div class="rating-value">${test.rating}</div>
                        <div class="rating-count">(${test.reviews} reviews)</div>
                    </div>
                    <div class="test-actions">
                        <a href="${test.pageUrl}" class="btn btn-test btn-start">
                            <i class="fas fa-play-circle"></i> Start Test
                        </a>
                        <button class="btn btn-test btn-preview" onclick="previewTest(${test.id})">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        // Get stars HTML for rating
        function getStarsHTML(rating) {
            let starsHTML = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }
            
            return starsHTML;
        }

        // Start test function - redirects to test page
        function startTest(testId) {
            const test = tests.find(t => t.id === testId);
            if (test && test.pageUrl) {
                window.location.href = test.pageUrl;
            } else {
                alert(`Test page not found for Test ${testId}`);
            }
        }

        // Preview test function
        function previewTest(testId) {
            alert(`Previewing Test ${testId}`);
            // In a real application, this would show a test preview
        }

        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', initPage);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // Test data for SSC CHSL
        const tests = [
            {
                id: 1,
                title: "RRB groupd",
                subtitle: "Full Length Mock Test",
                questions: 100,
                time: 90,
                marks: 100,
                tier: "tier1",
                features: ["All Sections", "Detailed Solutions", "All India Rank"],
                progress: 0,
                status: "trusted",
                rating: 4.7,
                reviews: 1123,
                pageUrl: "chsl-test1.html"
            },
            {
                id: 2,
                title: "SSC CHSL Tier 1 - Test 2",
                subtitle: "English Language Focus",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier1",
                features: ["English Language", "Sectional Test", "Vocabulary"],
                progress: 0,
                status: "popular",
                rating: 4.6,
                reviews: 845,
                pageUrl: "chsl-test2.html"
            },
            {
                id: 3,
                title: "RRB group d",
                subtitle: "Quantitative Aptitude Focus",
                questions: 100,
                time: 90,
                marks: 100,
                tier: "tier1",
                features: ["Quantitative Aptitude", "Sectional Test", "Fast Calculation"],
                progress: 30,
                status: "trusted",
                rating: 4.5,
                reviews: 723,
                pageUrl: "chsl-test3.html"
            },
            {
                id: 4,
                title: "RRB group d ",
                subtitle: "General Intelligence Focus",
                questions: 100,
                time: 90,
                marks: 100,
                tier: "tier1",
                features: ["General Intelligence", "Sectional Test", "Logical Reasoning"],
                progress: 0,
                status: "trusted",
                rating: 4.4,
                reviews: 621,
                pageUrl: "chsl-test4.html"
            },
            {
                id: 5,
                title: "RRB group d ",
                subtitle: "Descriptive Paper - Essay",
                questions: 100,
                time: 90,
                marks: 100,
                tier: "tier2",
                features: ["Essay Writing", "Letter/Application", "Detailed Evaluation"],
                progress: 0,
                status: "trusted",
                rating: 4.8,
                reviews: 432,
                pageUrl: "chsl-test5.html"
            },
            {
                id: 6,
                title: "RRB group d ",
                subtitle: "Descriptive Paper - Full",
                questions: 100,
                time: 90,
                marks: 100,
                tier: "tier2",
                features: ["Essay Writing", "Letter/Application", "Full Evaluation"],
                progress: 0,
                status: "trusted",
                rating: 4.7,
                reviews: 389,
                pageUrl: "chsl-test6.html"
            },
            {
                id: 7,
                title: "RRB group d ",
                subtitle: "Typing Test Practice",
                questions: 100,
                time: 90,
                marks: 100,
                tier: "tier2",
                features: ["Typing Test", "Speed Practice", "Accuracy Check"],
                progress: 0,
                status: "popular",
                rating: 4.6,
                reviews: 567,
                pageUrl: "chsl-test7.html"
            },
            {
                id: 8,
                title: "RRB group d ",
                subtitle: "Complete  Mock test ",
                questions: 100,
                time: 90,
                marks: 100,
                tier: "tier2",
                features: ["Full Tier 2", "Essay & Letter", "Expert Evaluation"],
                progress: 0,
                status: "trusted",
                rating: 4.9,
                reviews: 298,
                pageUrl: "chsl-test8.html"
            }
            

            
            
            
            
        ];
        
        
        
        
        
        
                    // DOM Elements
        const testGrid = document.getElementById('testGrid');
        const tierTabs = document.querySelectorAll('.tier-tab');
        let currentTier = 'tier1';

        // Initialize the page
        function initPage() {
            renderTests(currentTier);
            
            // Add event listeners to tier tabs
            tierTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tier = tab.getAttribute('data-tier');
                    setActiveTier(tier);
                });
            });
        }

        // Set active tier
        function setActiveTier(tier) {
            currentTier = tier;
            
            // Update active tab
            tierTabs.forEach(tab => {
                if (tab.getAttribute('data-tier') === tier) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // Render tests for selected tier
            renderTests(tier);
        }

        // Render tests based on selected tier
        function renderTests(tier) {
            testGrid.innerHTML = '';
            
            const filteredTests = tests.filter(test => {
                if (tier === 'both') return true;
                return test.tier === tier;
            });
            
            filteredTests.forEach(test => {
                const testCard = createTestCard(test);
                testGrid.appendChild(testCard);
            });
        }

        // Create test card element
        function createTestCard(test) {
            const card = document.createElement('div');
            card.className = 'test-card';
            
            // Status badge
            let statusBadge = '';
            if (test.status === 'trusted') {
                statusBadge = '<div class="trust-indicator"><i class="fas fa-shield-alt"></i> Trusted</div>';
            } else if (test.status === 'popular') {
                statusBadge = '<div class="trust-indicator" style="background: var(--accent);"><i class="fas fa-fire"></i> Popular</div>';
            }
            
            // Progress bar if test is in progress
            let progressBar = '';
            if (test.progress > 0) {
                progressBar = `
                    <div class="progress-bar">
                        <div class="progress" style="width: ${test.progress}%"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--gray); margin: 8px 0;">
                        <span>Progress: ${test.progress}%</span>
                        <span>Continue</span>
                    </div>
                `;
            }
            
            // Features HTML
            const featuresHTML = test.features.map(feature => 
                `<span class="feature-tag">${feature}</span>`
            ).join('');
            
            card.innerHTML = `
                ${statusBadge}
                <div class="test-header">
                    <div>
                        <div class="test-title">${test.title}</div>
                        <div class="test-subtitle">${test.subtitle}</div>
                    </div>
                </div>
                <div class="test-body">
                    <div class="test-stats">
                        <div class="test-stat">
                            <div class="stat-value">${test.questions}</div>
                            <div class="stat-label">Questions</div>
                        </div>
                        <div class="test-stat">
                            <div class="stat-value">${test.time}</div>
                            <div class="stat-label">Minutes</div>
                        </div>
                        <div class="test-stat">
                            <div class="stat-value">${test.marks}</div>
                            <div class="stat-label">Marks</div>
                        </div>
                    </div>
                    ${progressBar}
                    <div class="test-details">
                        Most accurate exam simulation with detailed performance analytics.
                    </div>
                    <div class="test-features">
                        ${featuresHTML}
                    </div>
                    <div class="rating" style="margin: 10px 0;">
                        <div class="stars">
                            ${getStarsHTML(test.rating)}
                        </div>
                        <div class="rating-value">${test.rating}</div>
                        <div class="rating-count">(${test.reviews} reviews)</div>
                    </div>
                    <div class="test-actions">
                        <a href="${test.pageUrl}" class="btn btn-test btn-start">
                            <i class="fas fa-play-circle"></i> Start Test
                        </a>
                        <button class="btn btn-test btn-preview" onclick="previewTest(${test.id})">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        // Get stars HTML for rating
        function getStarsHTML(rating) {
            let starsHTML = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }
            
            return starsHTML;
        }

        // Start test function - redirects to test page
        function startTest(testId) {
            const test = tests.find(t => t.id === testId);
            if (test && test.pageUrl) {
                window.location.href = test.pageUrl;
            } else {
                alert(`Test page not found for Test ${testId}`);
            }
        }

        // Preview test function
        function previewTest(testId) {
            alert(`Previewing Test ${testId}`);
            // In a real application, this would show a test preview
        }

        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', initPage);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        const tests = [
            {
                id: 1,
                title: "SSC CGL Tier 1 - Test 1",
                subtitle: "Full Length Mock Test",
                questions: 100,
                time: 60,
                marks: 200,
                tier: "tier1",
                features: ["All Sections", "Detailed Solutions", "All India Rank"],
                progress: 0,
                status: "trusted",
                rating: 4.8,
                reviews: 1245,
                pageUrl: "learning.html"
            },
            {
                id: 2,
                title: "SSC CGL Tier 1 - Test 2",
                subtitle: "Quantitative Aptitude Focus",
                questions: 25,
                time: 15,
                marks: 50,
                tier: "tier1",
                features: ["Quantitative Aptitude", "Sectional Test", "Instant Results"],
                progress: 0,
                status: "popular",
                rating: 4.7,
                reviews: 892,
                pageUrl: "test2.html"
            },
            {
                id: 3,
                title: "SSC CGL Tier 1 - Test 3",
                subtitle: "English Language Focus",
                questions: 25,
                time: 15,
                marks: 50,
                tier: "tier1",
                features: ["English Language", "Sectional Test", "Vocabulary"],
                progress: 45,
                status: "trusted",
                rating: 4.6,
                reviews: 756,
                pageUrl: "test3.html"
            },
            {
                id: 4,
                title: "SSC CGL Tier 1 - Test 4",
                subtitle: "Reasoning Ability Focus",
                questions: 25,
                time: 15,
                marks: 50,
                tier: "tier1",
                features: ["Reasoning Ability", "Sectional Test", "Logical Reasoning"],
                progress: 0,
                status: "trusted",
                rating: 4.5,
                reviews: 643,
                pageUrl: "test4.html"
            },
            {
                id: 5,
                title: "SSC CGL Tier 2 - Test 1",
                subtitle: "Quantitative Ability",
                questions: 100,
                time: 120,
                marks: 200,
                tier: "tier2",
                features: ["Quantitative Ability", "Advanced Level", "Detailed Solutions"],
                progress: 0,
                status: "trusted",
                rating: 4.9,
                reviews: 567,
                pageUrl: "test5.html"
            },
            {
                id: 6,
                title: "SSC CGL Tier 2 - Test 2",
                subtitle: "English Language & Comprehension",
                questions: 200,
                time: 120,
                marks: 200,
                tier: "tier2",
                features: ["English Language", "Comprehension", "Grammar Focus"],
                progress: 0,
                status: "trusted",
                rating: 4.7,
                reviews: 432,
                pageUrl: "test6.html"
            },
            {
                id: 7,
                title: "SSC CGL Tier 2 - Test 3",
                subtitle: "Statistics Focus",
                questions: 100,
                time: 120,
                marks: 200,
                tier: "tier2",
                features: ["Statistics", "JSO Level", "Advanced Questions"],
                progress: 0,
                status: "trusted",
                rating: 4.8,
                reviews: 298,
                pageUrl: "test7.html"
            },
            {
                id: 8,
                title: "SSC CGL Tier 2 - Test 4",
                subtitle: "Full Length Mock Test",
                questions: 200,
                time: 240,
                marks: 450,
                tier: "tier2",
                features: ["All Sections", "Full Syllabus", "All India Rank"],
                progress: 0,
                status: "popular",
                rating: 4.9,
                reviews: 387,
                pageUrl: "test8.html"
            }
        ];
        
        
        
        
        
        
        
        
        
          // DOM Elements
        const testGrid = document.getElementById('testGrid');
        const tierTabs = document.querySelectorAll('.tier-tab');
        let currentTier = 'tier1';

        // Initialize the page
        function initPage() {
            renderTests(currentTier);
            
            // Add event listeners to tier tabs
            tierTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tier = tab.getAttribute('data-tier');
                    setActiveTier(tier);
                });
            });
        }

        // Set active tier
        function setActiveTier(tier) {
            currentTier = tier;
            
            // Update active tab
            tierTabs.forEach(tab => {
                if (tab.getAttribute('data-tier') === tier) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // Render tests for selected tier
            renderTests(tier);
        }

        // Render tests based on selected tier
        function renderTests(tier) {
            testGrid.innerHTML = '';
            
            const filteredTests = tests.filter(test => {
                if (tier === 'both') return true;
                return test.tier === tier;
            });
            
            filteredTests.forEach(test => {
                const testCard = createTestCard(test);
                testGrid.appendChild(testCard);
            });
        }

        // Create test card element
        function createTestCard(test) {
            const card = document.createElement('div');
            card.className = 'test-card';
            
            // Status badge
            let statusBadge = '';
            if (test.status === 'trusted') {
                statusBadge = '<div class="trust-indicator"><i class="fas fa-shield-alt"></i> Trusted</div>';
            } else if (test.status === 'popular') {
                statusBadge = '<div class="trust-indicator" style="background: var(--accent);"><i class="fas fa-fire"></i> Popular</div>';
            }
            
            // Progress bar if test is in progress
            let progressBar = '';
            if (test.progress > 0) {
                progressBar = `
                    <div class="progress-bar">
                        <div class="progress" style="width: ${test.progress}%"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--gray); margin: 8px 0;">
                        <span>Progress: ${test.progress}%</span>
                        <span>Continue</span>
                    </div>
                `;
            }
            
            // Features HTML
            const featuresHTML = test.features.map(feature => 
                `<span class="feature-tag">${feature}</span>`
            ).join('');
            
            card.innerHTML = `
                ${statusBadge}
                <div class="test-header">
                    <div>
                        <div class="test-title">${test.title}</div>
                        <div class="test-subtitle">${test.subtitle}</div>
                    </div>
                </div>
                <div class="test-body">
                    <div class="test-stats">
                        <div class="test-stat">
                            <div class="stat-value">${test.questions}</div>
                            <div class="stat-label">Questions</div>
                        </div>
                        <div class="test-stat">
                            <div class="stat-value">${test.time}</div>
                            <div class="stat-label">Minutes</div>
                        </div>
                        <div class="test-stat">
                            <div class="stat-value">${test.marks}</div>
                            <div class="stat-label">Marks</div>
                        </div>
                    </div>
                    ${progressBar}
                    <div class="test-details">
                        Most accurate exam simulation with detailed performance analytics.
                    </div>
                    <div class="test-features">
                        ${featuresHTML}
                    </div>
                    <div class="rating" style="margin: 10px 0;">
                        <div class="stars">
                            ${getStarsHTML(test.rating)}
                        </div>
                        <div class="rating-value">${test.rating}</div>
                        <div class="rating-count">(${test.reviews} reviews)</div>
                    </div>
                    <div class="test-actions">
                        <a href="${test.pageUrl}" class="btn btn-test btn-start">
                            <i class="fas fa-play-circle"></i> Start Test
                        </a>
                        <button class="btn btn-test btn-preview" onclick="previewTest(${test.id})">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        // Get stars HTML for rating
        function getStarsHTML(rating) {
            let starsHTML = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }
            
            return starsHTML;
        }

        // Start test function - redirects to test page
        function startTest(testId) {
            const test = tests.find(t => t.id === testId);
            if (test && test.pageUrl) {
                window.location.href = test.pageUrl;
            } else {
                alert(`Test page not found for Test ${testId}`);
            }
        }

        // Preview test function
        function previewTest(testId) {
            alert(`Previewing Test ${testId}`);
            // In a real application, this would show a test preview
        }

        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', initPage);
        