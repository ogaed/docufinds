// // DOM Elements
// const mainNav = document.getElementById("main-nav")
// const mainContent = document.getElementById("main-content")
// const authSection = document.getElementById("auth-section")
// const userProfile = document.getElementById("user-profile")
// const usernameDisplay = document.getElementById("username-display")
// const loginBtn = document.getElementById("login-btn")
// const registerBtn = document.getElementById("register-btn")
// const logoutBtn = document.getElementById("logout-btn")
// const modalContainer = document.getElementById("modal-container")
// const loginModal = document.getElementById("login-modal")
// const registerModal = document.getElementById("register-modal")
// const documentDetailsModal = document.getElementById("document-details-modal")
// const loginForm = document.getElementById("login-form")
// const registerForm = document.getElementById("register-form")
// const switchToRegister = document.getElementById("switch-to-register")
// const switchToLogin = document.getElementById("switch-to-login")
// const registerUserType = document.getElementById("register-user-type")
// const agentLocationGroup = document.getElementById("agent-location-group")
// const agentOutletGroup = document.getElementById("agent-outlet-group")
// const searchDocsBtn = document.getElementById("search-docs-btn")
// const reportFoundBtn = document.getElementById("report-found-btn")
// const reportForm = document.getElementById("report-form")
// const reportLoginRequired = document.getElementById("report-login-required")
// const searchInput = document.getElementById("search-input")
// const searchButton = document.getElementById("search-button")
// const resultsCount = document.getElementById("results-count")
// const resultsList = document.getElementById("results-list")
// const pagination = document.getElementById("pagination")
// const locationFilter = document.getElementById("location-filter")
// const foundLocation = document.getElementById("found-location")
// const foundOutlet = document.getElementById("found-outlet")
// const agentLocation = document.getElementById("agent-location")
// const agentOutlet = document.getElementById("agent-outlet")
// const locationsContainer = document.getElementById("locations-container")

// // DOM Elements for Home Search
// const homeSearchInput = document.getElementById("home-search-input")
// const homeSearchButton = document.getElementById("home-search-button")
// const homeSearchResultsSection = document.getElementById("home-search-results-section")
// const homeResultsList = document.getElementById("home-results-list")
// const homeResultsCount = document.getElementById("home-results-count")
// const homePagination = document.getElementById("home-pagination")
// const clearHomeSearch = document.getElementById("clear-home-search")
// const loginRequiredModal = document.getElementById("login-required-modal")
// const loginRequiredLoginBtn = document.getElementById("login-required-login-btn")
// const loginRequiredRegisterBtn = document.getElementById("login-required-register-btn")

// // Store the current document being viewed
// let currentViewingDocument = null

// // Toast notification system
// const createToast = (message, type = "info") => {
//   const toast = document.createElement("div")
//   toast.className = `toast toast-${type}`
//   toast.innerHTML = `
//         <div class="toast-content">
//             <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
//             <span>${message}</span>
//         </div>
//         <button class="toast-close"><i class="fas fa-times"></i></button>
//     `

//   document.body.appendChild(toast)

//   // Add event listener to close button
//   toast.querySelector(".toast-close").addEventListener("click", () => {
//     toast.classList.add("toast-hiding")
//     setTimeout(() => {
//       document.body.removeChild(toast)
//     }, 300)
//   })

//   // Auto-remove after 5 seconds
//   setTimeout(() => {
//     if (document.body.contains(toast)) {
//       toast.classList.add("toast-hiding")
//       setTimeout(() => {
//         if (document.body.contains(toast)) {
//           document.body.removeChild(toast)
//         }
//       }, 300)
//     }
//   }, 5000)

//   // Animate in
//   setTimeout(() => {
//     toast.classList.add("toast-visible")
//   }, 10)
// }

// // Simulated Database (localStorage)
// const initializeDatabase = () => {
//   // Check if database is already initialized
//   if (!localStorage.getItem("docufind_initialized")) {
//     // Users Table
//     const users = [
//       {
//         id: 1,
//         name: "John Doe",
//         email: "john@example.com",
//         password: "password123", // In a real app, this would be hashed
//         phone: "1234567890",
//         userType: "reportee",
//         dateJoined: new Date().toISOString(),
//       },
//       {
//         id: 2,
//         name: "Jane Smith",
//         email: "jane@example.com",
//         password: "password123",
//         phone: "0987654321",
//         userType: "reporter",
//         dateJoined: new Date().toISOString(),
//       },
//       {
//         id: 3,
//         name: "Agent Johnson",
//         email: "agent@example.com",
//         password: "password123",
//         phone: "5555555555",
//         userType: "agent",
//         locationId: 1,
//         outletId: 1,
//         dateJoined: new Date().toISOString(),
//       },
//       {
//         id: 4,
//         name: "Admin User",
//         email: "admin@example.com",
//         password: "admin123",
//         phone: "9999999999",
//         userType: "admin",
//         dateJoined: new Date().toISOString(),
//       },
//     ]

//     // Locations Table
//     const locations = [
//       {
//         id: 1,
//         name: "Central City",
//         address: "123 Main Street, Central City",
//         phone: "1234567890",
//         email: "central@docufind.com",
//         coordinates: { lat: -1.286389, lng: 36.817223 },
//       },
//       {
//         id: 2,
//         name: "North District",
//         address: "456 North Avenue, North District",
//         phone: "2345678901",
//         email: "north@docufind.com",
//         coordinates: { lat: -1.256389, lng: 36.827223 },
//       },
//       {
//         id: 3,
//         name: "East Region",
//         address: "789 East Boulevard, East Region",
//         phone: "3456789012",
//         email: "east@docufind.com",
//         coordinates: { lat: -1.276389, lng: 36.837223 },
//       },
//       {
//         id: 4,
//         name: "West County",
//         address: "321 West Road, West County",
//         phone: "4567890123",
//         email: "west@docufind.com",
//         coordinates: { lat: -1.296389, lng: 36.807223 },
//       },
//       {
//         id: 5,
//         name: "South City",
//         address: "654 South Street, South City",
//         phone: "5678901234",
//         email: "south@docufind.com",
//         coordinates: { lat: -1.306389, lng: 36.797223 },
//       },
//     ]

//     // Outlets Table
//     const outlets = [
//       { id: 1, locationId: 1, name: "Central Office", address: "123 Main Street, Suite 101" },
//       { id: 2, locationId: 1, name: "Downtown Branch", address: "456 Central Avenue, Downtown" },
//       { id: 3, locationId: 2, name: "North Main", address: "789 North Road, Suite 201" },
//       { id: 4, locationId: 2, name: "North Plaza", address: "321 Plaza Circle, North District" },
//       { id: 5, locationId: 3, name: "East Center", address: "654 East Boulevard, Suite 301" },
//       { id: 6, locationId: 3, name: "Eastside Mall", address: "987 Mall Road, East Region" },
//       { id: 7, locationId: 4, name: "West Main", address: "147 West Street, Suite 401" },
//       { id: 8, locationId: 4, name: "Westfield Office", address: "258 Field Avenue, West County" },
//       { id: 9, locationId: 5, name: "South Center", address: "369 South Road, Suite 501" },
//       { id: 10, locationId: 5, name: "Southside Mall", address: "741 Mall Circle, South City" },
//     ]

//     // Categories Table
//     const categories = [
//       {
//         id: 1,
//         name: "National ID",
//         description: "National Identification Card",
//         reporterFee: 500,
//         ownerFee: 200,
//       },
//       {
//         id: 2,
//         name: "Passport",
//         description: "International Passport",
//         reporterFee: 1000,
//         ownerFee: 500,
//       },
//       {
//         id: 3,
//         name: "Driver's License",
//         description: "Driver's License",
//         reporterFee: 700,
//         ownerFee: 300,
//       },
//       {
//         id: 4,
//         name: "Foreign ID",
//         description: "Foreign Identification Card",
//         reporterFee: 800,
//         ownerFee: 400,
//       },
//       {
//         id: 5,
//         name: "Birth Certificate",
//         description: "Birth Certificate",
//         reporterFee: 600,
//         ownerFee: 250,
//       },
//       {
//         id: 6,
//         name: "Student ID",
//         description: "Student Identification Card",
//         reporterFee: 300,
//         ownerFee: 150,
//       },
//       {
//         id: 7,
//         name: "Other",
//         description: "Other Important Documents",
//         reporterFee: 400,
//         ownerFee: 200,
//       },
//     ]

//     // Reports Table (Initially empty, but with some sample data)
//     const reports = [
//       {
//         id: 1,
//         documentType: 1, // National ID
//         documentNumber: "12345678",
//         documentName: "John Smith",
//         reporterId: 2, // Jane Smith
//         locationId: 1,
//         outletId: 1,
//         dateFound: "2025-03-15T10:30:00Z",
//         dateReported: "2025-03-16T14:20:00Z",
//         status: "pending", // pending, claimed, expired
//         additionalDetails: "Found near the central bus station",
//         claimedBy: null,
//         dateClaimed: null,
//         reporterPaid: false,
//         ownerPaid: false,
//       },
//       {
//         id: 2,
//         documentType: 2, // Passport
//         documentNumber: "AB123456",
//         documentName: "Mary Johnson",
//         reporterId: 2, // Jane Smith
//         locationId: 2,
//         outletId: 3,
//         dateFound: "2025-03-20T15:45:00Z",
//         dateReported: "2025-03-21T09:10:00Z",
//         status: "claimed",
//         additionalDetails: "Found at North Mall food court",
//         claimedBy: 1, // John Doe
//         dateClaimed: "2025-03-25T11:30:00Z",
//         reporterPaid: true,
//         ownerPaid: true,
//       },
//       {
//         id: 3,
//         documentType: 3, // Driver's License
//         documentNumber: "DL987654",
//         documentName: "Robert Brown",
//         reporterId: 1, // John Doe
//         locationId: 3,
//         outletId: 5,
//         dateFound: "2025-04-05T12:15:00Z",
//         dateReported: "2025-04-05T16:40:00Z",
//         status: "pending",
//         additionalDetails: "Found in East Region park",
//         claimedBy: null,
//         dateClaimed: null,
//         reporterPaid: false,
//         ownerPaid: false,
//       },
//       {
//         id: 4,
//         documentType: 1, // National ID
//         documentNumber: "87654321",
//         documentName: "Sarah Wilson",
//         reporterId: 1, // John Doe
//         locationId: 4,
//         outletId: 7,
//         dateFound: "2025-04-10T09:20:00Z",
//         dateReported: "2025-04-10T13:50:00Z",
//         status: "pending",
//         additionalDetails: "Found at West County library",
//         claimedBy: null,
//         dateClaimed: null,
//         reporterPaid: false,
//         ownerPaid: false,
//       },
//       {
//         id: 5,
//         documentType: 4, // Foreign ID
//         documentNumber: "FID456789",
//         documentName: "Carlos Rodriguez",
//         reporterId: 2, // Jane Smith
//         locationId: 5,
//         outletId: 9,
//         dateFound: "2025-04-15T14:30:00Z",
//         dateReported: "2025-04-16T10:15:00Z",
//         status: "claimed",
//         additionalDetails: "Found at South City shopping center",
//         claimedBy: 1, // John Doe (acting on behalf of the owner)
//         dateClaimed: "2025-04-20T15:45:00Z",
//         reporterPaid: true,
//         ownerPaid: true,
//       },
//     ]

//     // Save to localStorage
//     localStorage.setItem("docufind_users", JSON.stringify(users))
//     localStorage.setItem("docufind_locations", JSON.stringify(locations))
//     localStorage.setItem("docufind_outlets", JSON.stringify(outlets))
//     localStorage.setItem("docufind_categories", JSON.stringify(categories))
//     localStorage.setItem("docufind_reports", JSON.stringify(reports))
//     localStorage.setItem("docufind_initialized", "true")
//   }
// }

// // Database Helper Functions
// const getUsers = () => JSON.parse(localStorage.getItem("docufind_users") || "[]")
// const getLocations = () => JSON.parse(localStorage.getItem("docufind_locations") || "[]")
// const getOutlets = () => JSON.parse(localStorage.getItem("docufind_outlets") || "[]")
// const getCategories = () => JSON.parse(localStorage.getItem("docufind_categories") || "[]")
// const getReports = () => JSON.parse(localStorage.getItem("docufind_reports") || "[]")

// const saveUsers = (users) => localStorage.setItem("docufind_users", JSON.stringify(users))
// const saveLocations = (locations) => localStorage.setItem("docufind_locations", JSON.stringify(locations))
// const saveOutlets = (outlets) => localStorage.setItem("docufind_outlets", JSON.stringify(outlets))
// const saveCategories = (categories) => localStorage.setItem("docufind_categories", JSON.stringify(categories))
// const saveReports = (reports) => localStorage.setItem("docufind_reports", JSON.stringify(reports))

// const getUserById = (id) => getUsers().find((user) => user.id === id)
// const getLocationById = (id) => getLocations().find((location) => location.id === id)
// const getOutletById = (id) => getOutlets().find((outlet) => outlet.id === id)
// const getCategoryById = (id) => getCategories().find((category) => category.id === id)
// const getReportById = (id) => getReports().find((report) => report.id === id)

// const getOutletsByLocationId = (locationId) => getOutlets().filter((outlet) => outlet.locationId === locationId)

// // Authentication Functions
// const getCurrentUser = () => {
//   const userId = localStorage.getItem("docufind_current_user")
//   if (!userId) return null
//   return getUserById(Number.parseInt(userId))
// }

// const login = (email, password) => {
//   const users = getUsers()
//   const user = users.find((u) => u.email === email && u.password === password)
//   if (user) {
//     localStorage.setItem("docufind_current_user", user.id)
//     return user
//   }
//   return null
// }

// const logout = () => {
//   localStorage.removeItem("docufind_current_user")
// }

// const register = (userData) => {
//   const users = getUsers()
//   const newUser = {
//     id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
//     ...userData,
//     dateJoined: new Date().toISOString(),
//   }
//   users.push(newUser)
//   saveUsers(users)
//   return newUser
// }

// // UI Functions
// const showPage = (pageId) => {
//   // Hide all pages
//   document.querySelectorAll(".page").forEach((page) => {
//     page.classList.remove("active")
//   })

//   // Show the selected page
//   const page = document.getElementById(pageId)
//   if (page) {
//     page.classList.add("active")
//   }

//   // Update active nav link
//   document.querySelectorAll("nav a").forEach((link) => {
//     link.classList.remove("active")
//   })

//   const activeLink = document.querySelector(`nav a[data-page="${pageId}"]`)
//   if (activeLink) {
//     activeLink.classList.add("active")
//   }

//   // Special page handling
//   if (pageId === "dashboard" || pageId === "profile") {
//     updateAuthenticatedPages()
//   } else if (pageId === "report") {
//     updateReportPage()
//   } else if (pageId === "locations") {
//     loadLocations()
//   } else if (pageId === "search") {
//     populateLocationFilter()
//     populateCategoryFilter()
//     performSearch() // Load initial search results
//   }

//   // Scroll to top
//   window.scrollTo(0, 0)
// }

// const updateAuthUI = () => {
//   const currentUser = getCurrentUser()

//   if (currentUser) {
//     if (authSection) authSection.style.display = "none"
//     if (userProfile) userProfile.style.display = "flex"
//     if (usernameDisplay) usernameDisplay.textContent = currentUser.name

//     // Update navigation based on user type
//     updateNavigationForUserType(currentUser.userType)
//   } else {
//     if (authSection) authSection.style.display = "flex"
//     if (userProfile) userProfile.style.display = "none"

//     // Reset navigation to default
//     updateNavigationForUserType(null)
//   }
// }

// const updateNavigationForUserType = (userType) => {
//   // Hide all user-specific nav items first
//   document.querySelectorAll(".nav-user-specific").forEach((item) => {
//     item.style.display = "none"
//   })

//   // Show relevant nav items based on user type
//   if (userType) {
//     document.querySelectorAll(`.nav-${userType}`).forEach((item) => {
//       item.style.display = "block"
//     })

//     // All logged-in users see these
//     document.querySelectorAll(".nav-authenticated").forEach((item) => {
//       item.style.display = "block"
//     })
//   } else {
//     // Show items for non-authenticated users
//     document.querySelectorAll(".nav-public").forEach((item) => {
//       item.style.display = "block"
//     })
//   }
// }

// // Improve role-based dashboard display
// const updateAuthenticatedPages = () => {
//   const currentUser = getCurrentUser()
//   const dashboardContent = document.getElementById("dashboard-content")
//   const profileContent = document.getElementById("profile-content")

//   if (!dashboardContent || !profileContent) return

//   if (currentUser) {
//     // Update user role display in the header
//     const usernameDisplay = document.getElementById("username-display")
//     if (usernameDisplay) {
//       usernameDisplay.innerHTML = `${currentUser.name} <span class="user-role">(${currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1)})</span>`
//     }

//     // Dashboard content based on user type
//     let dashboardHTML = ""

//     if (currentUser.userType === "reportee") {
//       dashboardHTML = `
//                 <div class="dashboard-welcome">
//                     <h2>Welcome, ${currentUser.name}!</h2>
//                     <p>This is your document owner dashboard. Here you can track documents you've claimed and search for lost documents.</p>
//                     <div class="user-role-badge reportee">Document Owner</div>
//                 </div>
//                 <div class="dashboard-actions">
//                     <button class="btn btn-primary" onclick="showPage('search')">
//                         <i class="fas fa-search"></i> Search for Documents
//                     </button>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-file-alt"></i> My Claimed Documents</h3>
//                     <div class="dashboard-cards" id="reportee-documents">
//                         ${generateReporteeDocumentsHTML()}
//                     </div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-chart-line"></i> Activity Summary</h3>
//                     <div class="dashboard-stats">
//                         <div class="dashboard-stat">
//                             <div class="stat-value">${getReports().filter((r) => r.claimedBy === currentUser.id).length}</div>
//                             <div class="stat-label">Documents Claimed</div>
//                         </div>
//                         <div class="dashboard-stat">
//                             <div class="stat-value">${getReports().filter((r) => r.claimedBy === currentUser.id && r.status === "claimed").length}</div>
//                             <div class="stat-label">Successfully Recovered</div>
//                         </div>
//                         <div class="dashboard-stat">
//                             <div class="stat-value">${getReports().filter((r) => r.status === "pending").length}</div>
//                             <div class="stat-label">Available Documents</div>
//                         </div>
//                     </div>
//                 </div>
//             `
//     } else if (currentUser.userType === "reporter") {
//       dashboardHTML = `
//                 <div class="dashboard-welcome">
//                     <h2>Welcome, ${currentUser.name}!</h2>
//                     <p>This is your document reporter dashboard. Here you can track documents you've reported and report new found documents.</p>
//                     <div class="user-role-badge reporter">Document Finder</div>
//                 </div>
//                 <div class="dashboard-actions">
//                     <button class="btn btn-primary" onclick="showPage('report')">
//                         <i class="fas fa-plus-circle"></i> Report New Document
//                     </button>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-file-alt"></i> My Reported Documents</h3>
//                     <div class="dashboard-cards" id="reporter-documents">
//                         ${generateReporterDocumentsHTML()}
//                     </div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-chart-line"></i> Reporting Summary</h3>
//                     <div class="dashboard-stats">
//                         <div class="dashboard-stat">
//                             <div class="stat-value">${getReports().filter((r) => r.reporterId === currentUser.id).length}</div>
//                             <div class="stat-label">Total Reported</div>
//                         </div>
//                         <div class="dashboard-stat">
//                             <div class="stat-value">${getReports().filter((r) => r.reporterId === currentUser.id && r.status === "claimed").length}</div>
//                             <div class="stat-label">Successfully Claimed</div>
//                         </div>
//                         <div class="dashboard-stat">
//                             <div class="stat-value">${getReports().filter((r) => r.reporterId === currentUser.id && r.reporterPaid).length}</div>
//                             <div class="stat-label">Rewards Received</div>
//                         </div>
//                     </div>
//                 </div>
//             `
//     } else if (currentUser.userType === "agent") {
//       const location = getLocationById(currentUser.locationId)
//       const outlet = getOutletById(currentUser.outletId)
//       const pendingCount = getReports().filter(
//         (r) => r.locationId === currentUser.locationId && r.outletId === currentUser.outletId && r.status === "pending",
//       ).length

//       dashboardHTML = `
//                 <div class="dashboard-welcome">
//                     <h2>Welcome, Agent ${currentUser.name}!</h2>
//                     <p>This is your agent dashboard. Here you can manage documents at your location and handle claims.</p>
//                     <div class="user-role-badge agent">Collection Agent</div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-building"></i> Agent Information</h3>
//                     <div class="agent-info">
//                         <div class="agent-info-item">
//                             <i class="fas fa-map-marker-alt"></i>
//                             <div>
//                                 <h4>Location</h4>
//                                 <p>${location ? location.name : "Unknown"}</p>
//                             </div>
//                         </div>
//                         <div class="agent-info-item">
//                             <i class="fas fa-store"></i>
//                             <div>
//                                 <h4>Outlet</h4>
//                                 <p>${outlet ? outlet.name : "Unknown"}</p>
//                             </div>
//                         </div>
//                         <div class="agent-info-item">
//                             <i class="fas fa-clipboard-list"></i>
//                             <div>
//                                 <h4>Pending Documents</h4>
//                                 <p>${pendingCount} document${pendingCount !== 1 ? "s" : ""}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-file-alt"></i> Pending Documents</h3>
//                     <div class="dashboard-cards" id="agent-pending-documents">
//                         ${generateAgentPendingDocumentsHTML(currentUser.locationId, currentUser.outletId)}
//                     </div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-history"></i> Recent Activity</h3>
//                     <div class="dashboard-table">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Document</th>
//                                     <th>Type</th>
//                                     <th>Date Reported</th>
//                                     <th>Status</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 ${generateAgentActivityTableHTML(currentUser.locationId, currentUser.outletId)}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             `
//     } else if (currentUser.userType === "admin") {
//       dashboardHTML = `
//                 <div class="dashboard-welcome">
//                     <h2>Welcome, Administrator!</h2>
//                     <p>This is your admin dashboard. Here you can monitor all system activity and manage documents.</p>
//                     <div class="user-role-badge admin">System Administrator</div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-chart-line"></i> System Overview</h3>
//                     <div class="admin-stats">
//                         <div class="admin-stat">
//                             <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
//                             <div class="stat-value">${getReports().length}</div>
//                             <div class="stat-label">Total Reports</div>
//                         </div>
//                         <div class="admin-stat">
//                             <div class="stat-icon"><i class="fas fa-clock"></i></div>
//                             <div class="stat-value">${getReports().filter((r) => r.status === "pending").length}</div>
//                             <div class="stat-label">Pending</div>
//                         </div>
//                         <div class="admin-stat">
//                             <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
//                             <div class="stat-value">${getReports().filter((r) => r.status === "claimed").length}</div>
//                             <div class="stat-label">Claimed</div>
//                         </div>
//                         <div class="admin-stat">
//                             <div class="stat-icon"><i class="fas fa-users"></i></div>
//                             <div class="stat-value">${getUsers().length}</div>
//                             <div class="stat-label">Users</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-file-alt"></i> Recent Reports</h3>
//                     <div class="dashboard-table">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Document</th>
//                                     <th>Type</th>
//                                     <th>Location</th>
//                                     <th>Date</th>
//                                     <th>Status</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 ${generateAdminReportsTableHTML()}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div class="dashboard-section">
//                     <h3><i class="fas fa-users"></i> User Management</h3>
//                     <div class="dashboard-table">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Name</th>
//                                     <th>Email</th>
//                                     <th>Type</th>
//                                     <th>Joined</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 ${generateAdminUsersTableHTML()}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             `
//     }

//     dashboardContent.innerHTML = dashboardHTML

//     // Add event listeners for dashboard elements
//     addDashboardEventListeners(currentUser.userType)

//     // Profile content
//     profileContent.innerHTML = `
//             <div class="profile-container">
//                 <div class="profile-header">
//                     <div class="profile-avatar">
//                         <i class="fas fa-user-circle"></i>
//                     </div>
//                     <div class="profile-info">
//                         <h3>${currentUser.name}</h3>
//                         <div class="user-role-badge ${currentUser.userType}">${currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1)}</div>
//                     </div>
//                 </div>
//                 <div class="profile-details">
//                     <div class="profile-section">
//                         <h4><i class="fas fa-user"></i> Personal Information</h4>
//                         <div class="profile-field">
//                             <label>Email:</label>
//                             <p>${currentUser.email}</p>
//                         </div>
//                         <div class="profile-field">
//                             <label>Phone:</label>
//                             <p>${currentUser.phone}</p>
//                         </div>
//                         <div class="profile-field">
//                             <label>Joined:</label>
//                             <p>${new Date(currentUser.dateJoined).toLocaleDateString()}</p>
//                         </div>
//                         ${
//                           currentUser.userType === "agent"
//                             ? `
//                             <div class="profile-field">
//                                 <label>Location:</label>
//                                 <p>${getLocationById(currentUser.locationId)?.name || "Unknown"}</p>
//                             </div>
//                             <div class="profile-field">
//                                 <label>Outlet:</label>
//                                 <p>${getOutletById(currentUser.outletId)?.name || "Unknown"}</p>
//                             </div>
//                             `
//                             : ""
//                         }
//                     </div>
//                     <div class="profile-section">
//                         <h4><i class="fas fa-cog"></i> Account Settings</h4>
//                         <div class="profile-actions">
//                             <button class="btn btn-primary" id="edit-profile-btn">
//                                 <i class="fas fa-user-edit"></i> Edit Profile
//                             </button>
//                             <button class="btn btn-secondary" id="change-password-btn">
//                                 <i class="fas fa-key"></i> Change Password
//                             </button>
//                         </div>
//                     </div>
//                     <div class="profile-section">
//                         <h4><i class="fas fa-shield-alt"></i> Security</h4>
//                         <div class="profile-actions">
//                             <button class="btn btn-danger" id="logout-profile-btn">
//                                 <i class="fas fa-sign-out-alt"></i> Logout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `

//     // Add event listeners for profile buttons
//     document.getElementById("edit-profile-btn")?.addEventListener("click", openEditProfileModal)
//     document.getElementById("change-password-btn")?.addEventListener("click", openChangePasswordModal)
//     document.getElementById("logout-profile-btn")?.addEventListener("click", () => {
//       logout()
//       updateAuthUI()
//       showPage("home")
//       createToast("You have been logged out successfully", "success")
//     })
//   } else {
//     // Show login required message
//     dashboardContent.innerHTML = `
//             <div class="login-required-message">
//                 <i class="fas fa-lock"></i>
//                 <h3>Access Restricted</h3>
//                 <p>You need to <a href="#" id="dashboard-login-link">login</a> to access your dashboard.</p>
//                 <p>Don't have an account? <a href="#" id="dashboard-register-link">Register now</a> to get started.</p>
//             </div>
//         `

//     profileContent.innerHTML = `
//             <div class="login-required-message">
//                 <i class="fas fa-lock"></i>
//                 <h3>Access Restricted</h3>
//                 <p>You need to <a href="#" id="profile-login-link">login</a> to access your profile.</p>
//                 <p>Don't have an account? <a href="#" id="profile-register-link">Register now</a> to get started.</p>
//             </div>
//         `

//     // Add event listeners for login links
//     document.getElementById("dashboard-login-link")?.addEventListener("click", (e) => {
//       e.preventDefault()
//       openLoginModal()
//     })

//     document.getElementById("dashboard-register-link")?.addEventListener("click", (e) => {
//       e.preventDefault()
//       openRegisterModal()
//     })

//     document.getElementById("profile-login-link")?.addEventListener("click", (e) => {
//       e.preventDefault()
//       openLoginModal()
//     })

//     document.getElementById("profile-register-link")?.addEventListener("click", (e) => {
//       e.preventDefault()
//       openRegisterModal()
//     })
//   }
// }

// // Helper Functions for Dashboard
// const generateReporteeDocumentsHTML = () => {
//   const currentUser = getCurrentUser()
//   if (!currentUser) return ""

//   const reports = getReports().filter((r) => r.claimedBy === currentUser.id)

//   if (reports.length === 0) {
//     return `<p class="no-data"><i class="fas fa-info-circle"></i> You haven't claimed any documents yet. <a href="#" onclick="showPage('search'); return false;">Search for documents</a> to see if yours has been found.</p>`
//   }

//   let html = ""
//   reports.forEach((report) => {
//     const category = getCategoryById(report.documentType)
//     const location = getLocationById(report.locationId)
//     const outlet = getOutletById(report.outletId)

//     html += `
//             <div class="dashboard-card">
//                 <div class="card-header">
//                     <h4>${category ? category.name : "Unknown"}</h4>
//                     <span class="status ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
//                 </div>
//                 <div class="card-body">
//                     <p><strong>Document Number:</strong> ${report.documentNumber}</p>
//                     <p><strong>Name on Document:</strong> ${report.documentName}</p>
//                     <p><strong>Location:</strong> ${location ? location.name : "Unknown"}</p>
//                     <p><strong>Outlet:</strong> ${outlet ? outlet.name : "Unknown"}</p>
//                     <p><strong>Date Claimed:</strong> ${report.dateClaimed ? new Date(report.dateClaimed).toLocaleDateString() : "N/A"}</p>
//                 </div>
//                 <div class="card-footer">
//                     <button class="btn btn-primary view-document" data-id="${report.id}">
//                         <i class="fas fa-eye"></i> View Details
//                     </button>
//                 </div>
//             </div>
//         `
//   })

//   return html
// }

// const generateReporterDocumentsHTML = () => {
//   const currentUser = getCurrentUser()
//   if (!currentUser) return ""

//   const reports = getReports().filter((r) => r.reporterId === currentUser.id)

//   if (reports.length === 0) {
//     return `<p class="no-data"><i class="fas fa-info-circle"></i> You haven't reported any documents yet. <a href="#" onclick="showPage('report'); return false;">Report a found document</a> to help someone recover their lost item.</p>`
//   }

//   let html = ""
//   reports.forEach((report) => {
//     const category = getCategoryById(report.documentType)
//     const location = getLocationById(report.locationId)
//     const outlet = getOutletById(report.outletId)

//     html += `
//             <div class="dashboard-card">
//                 <div class="card-header">
//                     <h4>${category ? category.name : "Unknown"}</h4>
//                     <span class="status ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
//                 </div>
//                 <div class="card-body">
//                     <p><strong>Document Number:</strong> ${report.documentNumber}</p>
//                     <p><strong>Name on Document:</strong> ${report.documentName}</p>
//                     <p><strong>Location:</strong> ${location ? location.name : "Unknown"}</p>
//                     <p><strong>Outlet:</strong> ${outlet ? outlet.name : "Unknown"}</p>
//                     <p><strong>Date Reported:</strong> ${new Date(report.dateReported).toLocaleDateString()}</p>
//                     <p><strong>Reward Status:</strong> 
//                         <span class="badge ${report.reporterPaid ? "badge-success" : "badge-pending"}">
//                             ${report.reporterPaid ? "Paid" : "Pending"}
//                         </span>
//                     </p>
//                 </div>
//                 <div class="card-footer">
//                     <button class="btn btn-primary view-document" data-id="${report.id}">
//                         <i class="fas fa-eye"></i> View Details
//                     </button>
//                 </div>
//             </div>
//         `
//   })

//   return html
// }

// const generateAgentPendingDocumentsHTML = (locationId, outletId) => {
//   const reports = getReports().filter(
//     (r) => r.locationId === locationId && r.outletId === outletId && r.status === "pending",
//   )

//   if (reports.length === 0) {
//     return `<p class="no-data"><i class="fas fa-info-circle"></i> No pending documents at your outlet.</p>`
//   }

//   let html = ""
//   reports.forEach((report) => {
//     const category = getCategoryById(report.documentType)
//     const reporter = getUserById(report.reporterId)

//     html += `
//             <div class="dashboard-card">
//                 <div class="card-header">
//                     <h4>${category ? category.name : "Unknown"}</h4>
//                     <span class="status pending">Pending</span>
//                 </div>
//                 <div class="card-body">
//                     <p><strong>Document Number:</strong> ${report.documentNumber}</p>
//                     <p><strong>Name on Document:</strong> ${report.documentName}</p>
//                     <p><strong>Reported By:</strong> ${reporter ? reporter.name : "Unknown"}</p>
//                     <p><strong>Date Reported:</strong> ${new Date(report.dateReported).toLocaleDateString()}</p>
//                 </div>
//                 <div class="card-footer">
//                     <button class="btn btn-primary view-document" data-id="${report.id}">
//                         <i class="fas fa-eye"></i> View Details
//                     </button>
//                     <button class="btn btn-success mark-claimed" data-id="${report.id}">
//                         <i class="fas fa-check-circle"></i> Mark as Claimed
//                     </button>
//                 </div>
//             </div>
//         `
//   })

//   return html
// }

// const generateAgentActivityTableHTML = (locationId, outletId) => {
//   const reports = getReports()
//     .filter((r) => r.locationId === locationId && r.outletId === outletId)
//     .sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))
//     .slice(0, 10)

//   if (reports.length === 0) {
//     return `<tr><td colspan="5" class="no-data">No activity found at your outlet.</td></tr>`
//   }

//   let html = ""
//   reports.forEach((report) => {
//     const category = getCategoryById(report.documentType)

//     html += `
//             <tr>
//                 <td>${report.documentNumber}</td>
//                 <td>${category ? category.name : "Unknown"}</td>
//                 <td>${new Date(report.dateReported).toLocaleDateString()}</td>
//                 <td><span class="status-badge ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span></td>
//                 <td>
//                     <button class="btn-icon view-document" data-id="${report.id}" title="View Details">
//                         <i class="fas fa-eye"></i>
//                     </button>
//                     ${
//                       report.status === "pending"
//                         ? `
//                     <button class="btn-icon mark-claimed" data-id="${report.id}" title="Mark as Claimed">
//                         <i class="fas fa-check-circle"></i>
//                     </button>
//                     `
//                         : ""
//                     }
//                 </td>
//             </tr>
//         `
//   })

//   return html
// }

// const generateAdminReportsTableHTML = () => {
//   const reports = getReports()
//     .sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))
//     .slice(0, 10)

//   if (reports.length === 0) {
//     return `<tr><td colspan="7" class="no-data">No reports found.</td></tr>`
//   }

//   let html = ""
//   reports.forEach((report) => {
//     const category = getCategoryById(report.documentType)
//     const location = getLocationById(report.locationId)

//     html += `
//             <tr>
//                 <td>${report.id}</td>
//                 <td>${report.documentNumber}</td>
//                 <td>${category ? category.name : "Unknown"}</td>
//                 <td>${location ? location.name : "Unknown"}</td>
//                 <td>${new Date(report.dateReported).toLocaleDateString()}</td>
//                 <td><span class="status-badge ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span></td>
//                 <td>
//                     <button class="btn-icon view-document" data-id="${report.id}" title="View Details">
//                         <i class="fas fa-eye"></i>
//                     </button>
//                     <button class="btn-icon edit-document" data-id="${report.id}" title="Edit Document">
//                         <i class="fas fa-edit"></i>
//                     </button>
//                     <button class="btn-icon delete-document" data-id="${report.id}" title="Delete Document">
//                         <i class="fas fa-trash"></i>
//                     </button>
//                 </td>
//             </tr>
//         `
//   })

//   return html
// }

// const generateAdminUsersTableHTML = () => {
//   const users = getUsers().sort((a, b) => new Date(b.dateJoined) - new Date(a.dateJoined))

//   if (users.length === 0) {
//     return `<tr><td colspan="6" class="no-data">No users found.</td></tr>`
//   }

//   let html = ""
//   users.forEach((user) => {
//     html += `
//             <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td><span class="badge badge-${user.userType}">${user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}</span></td>
//                 <td>${new Date(user.dateJoined).toLocaleDateString()}</td>
//                 <td>
//                     <button class="btn-icon edit-user" data-id="${user.id}" title="Edit User">
//                         <i class="fas fa-edit"></i>
//                     </button>
//                     <button class="btn-icon delete-user" data-id="${user.id}" title="Delete User">
//                         <i class="fas fa-trash"></i>
//                     </button>
//                 </td>
//             </tr>
//         `
//   })

//   return html
// }

// const addDashboardEventListeners = (userType) => {
//   // Add event listeners for view document buttons
//   document.querySelectorAll(".view-document").forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//       openDocumentDetails(reportId)
//     })
//   })

//   // Add event listeners for mark as claimed buttons (agent only)
//   if (userType === "agent") {
//     document.querySelectorAll(".mark-claimed").forEach((button) => {
//       button.addEventListener("click", (e) => {
//         const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//         openMarkAsClaimedModal(reportId)
//       })
//     })
//   }

//   // Add event listeners for admin actions
//   if (userType === "admin") {
//     document.querySelectorAll(".edit-document").forEach((button) => {
//       button.addEventListener("click", (e) => {
//         const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//         openEditDocumentModal(reportId)
//       })
//     })

//     document.querySelectorAll(".delete-document").forEach((button) => {
//       button.addEventListener("click", (e) => {
//         const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//         confirmDeleteDocument(reportId)
//       })
//     })

//     document.querySelectorAll(".edit-user").forEach((button) => {
//       button.addEventListener("click", (e) => {
//         const userId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//         openEditUserModal(userId)
//       })
//     })

//     document.querySelectorAll(".delete-user").forEach((button) => {
//       button.addEventListener("click", (e) => {
//         const userId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//         confirmDeleteUser(userId)
//       })
//     })
//   }
// }

// const updateReportPage = () => {
//   if (!reportForm || !reportLoginRequired) return

//   const currentUser = getCurrentUser()

//   if (currentUser) {
//     reportLoginRequired.style.display = "none"
//     reportForm.style.display = "block"

//     // Populate location dropdown
//     populateLocationDropdown(foundLocation)

//     // Populate document type dropdown
//     populateDocumentTypeDropdown()

//     // Set default date to today
//     const today = new Date().toISOString().split("T")[0]
//     document.getElementById("found-date").value = today
//   } else {
//     reportLoginRequired.style.display = "block"
//     reportForm.style.display = "none"

//     // Add event listeners for login/register links
//     document.getElementById("report-login-link")?.addEventListener("click", (e) => {
//       e.preventDefault()
//       openLoginModal()
//     })

//     document.getElementById("report-register-link")?.addEventListener("click", (e) => {
//       e.preventDefault()
//       openRegisterModal()
//     })
//   }
// }

// // Modal Functions
// const openLoginModal = () => {
//   if (!modalContainer || !loginModal || !registerModal || !documentDetailsModal) return

//   modalContainer.style.display = "block"
//   loginModal.style.display = "block"
//   registerModal.style.display = "none"
//   documentDetailsModal.style.display = "none"

//   // Clear form
//   if (loginForm) loginForm.reset()
// }

// const openRegisterModal = () => {
//   if (!modalContainer || !loginModal || !registerModal || !documentDetailsModal) return

//   modalContainer.style.display = "block"
//   registerModal.style.display = "block"
//   loginModal.style.display = "none"
//   documentDetailsModal.style.display = "none"

//   // Clear form
//   if (registerForm) registerForm.reset()

//   // Populate location dropdown for agent registration
//   populateLocationDropdown(agentLocation)
// }

// const closeModals = () => {
//   if (!modalContainer) return

//   modalContainer.style.display = "none"

//   if (loginModal) loginModal.style.display = "none"
//   if (registerModal) registerModal.style.display = "none"
//   if (documentDetailsModal) documentDetailsModal.style.display = "none"
//   if (loginRequiredModal) loginRequiredModal.style.display = "none"
// }

// // Dropdown Population Functions
// const populateLocationDropdown = (selectElement) => {
//   if (!selectElement) return

//   const locations = getLocations()

//   // Clear existing options except the first one
//   while (selectElement.options.length > 1) {
//     selectElement.remove(1)
//   }

//   // Add location options
//   locations.forEach((location) => {
//     const option = document.createElement("option")
//     option.value = location.id
//     option.textContent = location.name
//     selectElement.appendChild(option)
//   })
// }

// const populateOutletDropdown = (locationId, selectElement) => {
//   if (!selectElement) return

//   const outlets = getOutletsByLocationId(Number.parseInt(locationId))

//   // Clear existing options except the first one
//   while (selectElement.options.length > 1) {
//     selectElement.remove(1)
//   }

//   // Add outlet options
//   outlets.forEach((outlet) => {
//     const option = document.createElement("option")
//     option.value = outlet.id
//     option.textContent = outlet.name
//     selectElement.appendChild(option)
//   })
// }

// const populateLocationFilter = () => {
//   if (!locationFilter) return

//   const locations = getLocations()

//   // Clear existing options except the first one
//   while (locationFilter.options.length > 1) {
//     locationFilter.remove(1)
//   }

//   // Add location options
//   locations.forEach((location) => {
//     const option = document.createElement("option")
//     option.value = location.id
//     option.textContent = location.name
//     locationFilter.appendChild(option)
//   })
// }

// const populateCategoryFilter = () => {
//   const categoryFilter = document.getElementById("category-filter")
//   if (!categoryFilter) return

//   const categories = getCategories()

//   // Clear existing options except the first one
//   while (categoryFilter.options.length > 1) {
//     categoryFilter.remove(1)
//   }

//   // Add category options
//   categories.forEach((category) => {
//     const option = document.createElement("option")
//     option.value = category.id
//     option.textContent = category.name
//     categoryFilter.appendChild(option)
//   })
// }

// const populateDocumentTypeDropdown = () => {
//   const documentTypeSelect = document.getElementById("document-type")
//   if (!documentTypeSelect) return

//   const categories = getCategories()

//   // Clear existing options except the first one
//   while (documentTypeSelect.options.length > 1) {
//     documentTypeSelect.remove(1)
//   }

//   // Add category options
//   categories.forEach((category) => {
//     const option = document.createElement("option")
//     option.value = category.id
//     option.textContent = category.name
//     documentTypeSelect.appendChild(option)
//   })
// }

// // Search Functions
// const performSearch = () => {
//   if (!searchInput || !resultsList || !resultsCount) return

//   const searchTerm = searchInput.value.trim().toLowerCase()
//   const categoryFilter = document.getElementById("category-filter")?.value
//   const locationFilterValue = locationFilter?.value
//   const dateFilter = document.getElementById("date-filter")?.value
//   const sortBy = document.getElementById("sort-select")?.value

//   let reports = getReports()

//   // Apply filters
//   if (searchTerm) {
//     reports = reports.filter(
//       (report) =>
//         report.documentNumber.toLowerCase().includes(searchTerm) ||
//         report.documentName.toLowerCase().includes(searchTerm),
//     )
//   }

//   if (categoryFilter && categoryFilter !== "all") {
//     reports = reports.filter((report) => report.documentType.toString() === categoryFilter)
//   }

//   if (locationFilterValue && locationFilterValue !== "all") {
//     reports = reports.filter((report) => report.locationId.toString() === locationFilterValue)
//   }

//   if (dateFilter && dateFilter !== "all") {
//     const now = new Date()
//     const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
//     const weekAgo = new Date(today)
//     weekAgo.setDate(today.getDate() - 7)
//     const monthAgo = new Date(today)
//     monthAgo.setMonth(today.getMonth() - 1)
//     const yearAgo = new Date(today)
//     yearAgo.setFullYear(today.getFullYear() - 1)

//     reports = reports.filter((report) => {
//       const reportDate = new Date(report.dateReported)

//       if (dateFilter === "today") {
//         return reportDate >= today
//       } else if (dateFilter === "week") {
//         return reportDate >= weekAgo
//       } else if (dateFilter === "month") {
//         return reportDate >= monthAgo
//       } else if (dateFilter === "year") {
//         return reportDate >= yearAgo
//       }

//       return true
//     })
//   }

//   // Apply sorting
//   if (sortBy === "date-desc") {
//     reports.sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))
//   } else if (sortBy === "date-asc") {
//     reports.sort((a, b) => new Date(a.dateReported) - new Date(b.dateReported))
//   } else if (sortBy === "relevance" && searchTerm) {
//     // Simple relevance sorting - exact matches first
//     reports.sort((a, b) => {
//       const aExact = a.documentNumber.toLowerCase() === searchTerm || a.documentName.toLowerCase() === searchTerm
//       const bExact = b.documentNumber.toLowerCase() === searchTerm || b.documentName.toLowerCase() === searchTerm

//       if (aExact && !bExact) return -1
//       if (!aExact && bExact) return 1
//       return 0
//     })
//   }

//   // Update results count
//   resultsCount.textContent = `${reports.length} document${reports.length !== 1 ? "s" : ""} found`

//   // Display results
//   displaySearchResults(reports)
// }

// // Function to display search results
// const displaySearchResults = (reports) => {
//   if (!resultsList || !pagination) return

//   if (reports.length === 0) {
//     resultsList.innerHTML = `
//             <div class="no-results">
//                 <i class="fas fa-search"></i>
//                 <h3>No documents found</h3>
//                 <p>We couldn't find any documents matching your search. Try different keywords or <a href="#" data-page="report">report a found document</a>.</p>
//             </div>
//         `
//     pagination.innerHTML = ""
//     return
//   }

//   // Simple pagination (first 5 results)
//   const displayReports = reports.slice(0, 5)

//   let html = ""
//   displayReports.forEach((report) => {
//     const category = getCategoryById(report.documentType)
//     const location = getLocationById(report.locationId)
//     const dateReported = new Date(report.dateReported).toLocaleDateString()

//     html += `
//             <div class="result-item">
//                 <div class="result-header">
//                     <div class="result-title">${category ? category.name : "Unknown Document"}</div>
//                     <div class="result-date">${dateReported}</div>
//                 </div>
//                 <div class="result-details">
//                     <div class="result-detail">
//                         <i class="fas fa-id-card"></i>
//                         <div>
//                             <strong>Document Number:</strong>
//                             <p>${report.documentNumber}</p>
//                         </div>
//                     </div>
//                     <div class="result-detail">
//                         <i class="fas fa-user"></i>
//                         <div>
//                             <strong>Name on Document:</strong>
//                             <p>${report.documentName}</p>
//                         </div>
//                     </div>
//                     <div class="result-detail">
//                         <i class="fas fa-map-marker-alt"></i>
//                         <div>
//                             <strong>Location:</strong>
//                             <p>${location ? location.name : "Unknown"}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="result-actions">
//                     <button class="btn btn-primary view-document-search" data-id="${report.id}">
//                         <i class="fas fa-eye"></i> View Details
//                     </button>
//                 </div>
//             </div>
//         `
//   })

//   resultsList.innerHTML = html

//   // Add pagination if needed
//   if (reports.length > 5) {
//     pagination.innerHTML = `
//             <button class="active">1</button>
//             <button>2</button>
//             <button>3</button>
//             <button disabled>...</button>
//             <button>Next</button>
//         `
//   } else {
//     pagination.innerHTML = ""
//   }

//   // Add event listeners for view document buttons
//   document.querySelectorAll(".view-document-search").forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//       handleViewDocument(reportId)
//     })
//   })
// }

// // Report Form Functions
// const submitReport = (e) => {
//   e.preventDefault()

//   const currentUser = getCurrentUser()
//   if (!currentUser) {
//     createToast("You need to login to report a found document.", "error")
//     openLoginModal()
//     return
//   }

//   const documentType = document.getElementById("document-type")?.value
//   const documentNumber = document.getElementById("document-number")?.value
//   const documentName = document.getElementById("document-name")?.value
//   const foundLocationId = document.getElementById("found-location")?.value
//   const foundOutletId = document.getElementById("found-outlet")?.value
//   const foundDate = document.getElementById("found-date")?.value
//   const additionalDetails = document.getElementById("additional-details")?.value

//   if (!documentType || !documentNumber || !documentName || !foundLocationId || !foundOutletId || !foundDate) {
//     createToast("Please fill in all required fields.", "error")
//     return
//   }

//   const reports = getReports()
//   const newReport = {
//     id: reports.length > 0 ? Math.max(...reports.map((r) => r.id)) + 1 : 1,
//     documentType: Number.parseInt(documentType),
//     documentNumber,
//     documentName,
//     reporterId: currentUser.id,
//     locationId: Number.parseInt(foundLocationId),
//     outletId: Number.parseInt(foundOutletId),
//     dateFound: new Date(foundDate).toISOString(),
//     dateReported: new Date().toISOString(),
//     status: "pending",
//     additionalDetails,
//     claimedBy: null,
//     dateClaimed: null,
//     reporterPaid: false,
//     ownerPaid: false,
//   }

//   reports.push(newReport)
//   saveReports(reports)

//   createToast("Document reported successfully! Thank you for helping someone recover their document.", "success")
//   if (reportForm) reportForm.reset()
//   showPage("dashboard")
// }

// // Home Search Functions
// const performHomeSearch = () => {
//   if (!homeSearchInput || !homeResultsList || !homeResultsCount || !homeSearchResultsSection) return

//   const searchTerm = homeSearchInput.value.trim().toLowerCase()

//   if (!searchTerm) {
//     createToast("Please enter a search term", "info")
//     return
//   }

//   let reports = getReports()

//   // Filter reports by search term
//   reports = reports.filter(
//     (report) =>
//       report.documentNumber.toLowerCase().includes(searchTerm) ||
//       report.documentName.toLowerCase().includes(searchTerm),
//   )

//   // Update results count
//   homeResultsCount.textContent = `${reports.length} document${reports.length !== 1 ? "s" : ""} found`

//   // Display results
//   displayHomeSearchResults(reports)

//   // Show results section
//   homeSearchResultsSection.style.display = "block"

//   // Scroll to results
//   homeSearchResultsSection.scrollIntoView({ behavior: "smooth" })
// }

// const displayHomeSearchResults = (reports) => {
//   if (!homeResultsList || !homePagination) return

//   if (reports.length === 0) {
//     homeResultsList.innerHTML = `
//       <div class="no-results">
//         <i class="fas fa-search"></i>
//         <h3>No documents found</h3>
//         <p>We couldn't find any documents matching your search. Try different keywords or <a href="#" data-page="report">report a found document</a>.</p>
//       </div>
//     `
//     homePagination.innerHTML = ""
//     return
//   }

//   // Sort by date (newest first)
//   reports.sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))

//   // Simple pagination (first 5 results)
//   const displayReports = reports.slice(0, 5)

//   let html = ""
//   displayReports.forEach((report) => {
//     const category = getCategoryById(report.documentType)
//     const location = getLocationById(report.locationId)
//     const dateReported = new Date(report.dateReported).toLocaleDateString()

//     html += `
//       <div class="result-item">
//         <div class="result-header">
//           <div class="result-title">${category ? category.name : "Unknown Document"}</div>
//           <div class="result-date">${dateReported}</div>
//         </div>
//         <div class="result-details">
//           <div class="result-detail">
//             <i class="fas fa-id-card"></i>
//             <div>
//               <strong>Document Number:</strong>
//               <p>${report.documentNumber}</p>
//             </div>
//           </div>
//           <div class="result-detail">
//             <i class="fas fa-user"></i>
//             <div>
//               <strong>Name on Document:</strong>
//               <p>${report.documentName}</p>
//             </div>
//           </div>
//           <div class="result-detail">
//             <i class="fas fa-map-marker-alt"></i>
//             <div>
//               <strong>Location:</strong>
//               <p>${location ? location.name : "Unknown"}</p>
//             </div>
//           </div>
//         </div>
//         <div class="result-actions">
//           <button class="btn btn-primary view-document-home" data-id="${report.id}">
//             <i class="fas fa-eye"></i> View Details
//           </button>
//         </div>
//       </div>
//     `
//   })

//   homeResultsList.innerHTML = html

//   // Add pagination if needed
//   if (reports.length > 5) {
//     homePagination.innerHTML = `
//       <button class="active">1</button>
//       <button>2</button>
//       <button>3</button>
//       <button disabled>...</button>
//       <button>Next</button>
//     `
//   } else {
//     homePagination.innerHTML = ""
//   }

//   // Add event listeners for view document buttons
//   document.querySelectorAll(".view-document-home").forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
//       handleViewDocument(reportId)
//     })
//   })
// }

// const handleViewDocument = (reportId) => {
//   const report = getReportById(reportId)
//   const currentUser = getCurrentUser()

//   // Store the current document being viewed
//   currentViewingDocument = report

//   // Check if user is logged in and is a reportee
//   if (!currentUser) {
//     // Show login required modal
//     openLoginRequiredModal()
//     return
//   } else if (
//     currentUser.userType !== "reportee" &&
//     currentUser.userType !== "admin" &&
//     currentUser.userType !== "agent"
//   ) {
//     // If user is not a reportee, admin, or agent, show a message
//     createToast("You need to be registered as a document owner to view document details", "error")
//     return
//   }

//   // User is logged in and is a reportee, admin, or agent - show document details
//   openDocumentDetails(reportId)
// }

// const openLoginRequiredModal = () => {
//   if (!modalContainer || !loginRequiredModal) return

//   modalContainer.style.display = "block"
//   loginRequiredModal.style.display = "block"

//   if (loginModal) loginModal.style.display = "none"
//   if (registerModal) registerModal.style.display = "none"
//   if (documentDetailsModal) documentDetailsModal.style.display = "none"
// }

// const clearHomeSearchResults = () => {
//   if (!homeSearchInput || !homeSearchResultsSection) return

//   homeSearchInput.value = ""
//   homeSearchResultsSection.style.display = "none"
// }

// // Function to open document details
// const openDocumentDetails = (reportId) => {
//   if (!modalContainer || !documentDetailsModal) return

//   const report = getReportById(reportId)
//   if (!report) return

//   const category = getCategoryById(report.documentType)
//   const location = getLocationById(report.locationId)
//   const outlet = getOutletById(report.outletId)
//   const reporter = getUserById(report.reporterId)

//   modalContainer.style.display = "block"
//   documentDetailsModal.style.display = "block"

//   if (loginModal) loginModal.style.display = "none"
//   if (registerModal) registerModal.style.display = "none"
//   if (loginRequiredModal) loginRequiredModal.style.display = "none"

//   const dateReported = new Date(report.dateReported).toLocaleDateString()
//   const dateFound = new Date(report.dateFound).toLocaleDateString()

//   let claimButton = ""
//   const currentUser = getCurrentUser()

//   // Only show claim button for reportees and if document is not claimed
//   if (currentUser && currentUser.userType === "reportee" && report.status === "pending") {
//     claimButton = `
//       <button class="btn btn-success claim-document" data-id="${report.id}">
//         <i class="fas fa-hand-holding"></i> Claim This Document
//       </button>
//     `
//   }

//   const detailsContent = documentDetailsModal.querySelector("#document-details-content")
//   if (detailsContent) {
//     detailsContent.innerHTML = `
//       <div class="document-details">
//         <h3>${category ? category.name : "Unknown Document"}</h3>
//         <div class="document-status">
//           <span class="status ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
//         </div>
        
//         <div class="details-section">
//           <h4>Document Information</h4>
//           <div class="details-grid">
//             <div class="detail-item">
//               <label>Document Number:</label>
//               <p>${report.documentNumber}</p>
//             </div>
//             <div class="detail-item">
//               <label>Name on Document:</label>
//               <p>${report.documentName}</p>
//             </div>
//             <div class="detail-item">
//               <label>Date Found:</label>
//               <p>${dateFound}</p>
//             </div>
//             <div class="detail-item">
//               <label>Date Reported:</label>
//               <p>${dateReported}</p>
//             </div>
//           </div>
//         </div>
        
//         <div class="details-section">
//           <h4>Location Information</h4>
//           <div class="details-grid">
//             <div class="detail-item">
//               <label>Location:</label>
//               <p>${location ? location.name : "Unknown"}</p>
//             </div>
//             <div class="detail-item">
//               <label>Outlet:</label>
//               <p>${outlet ? outlet.name : "Unknown"}</p>
//             </div>
//             <div class="detail-item">
//               <label>Address:</label>
//               <p>${location ? location.address : "Unknown"}</p>
//             </div>
//             <div class="detail-item">
//               <label>Contact:</label>
//               <p>${location ? location.phone : "Unknown"}</p>
//             </div>
//           </div>
//         </div>
        
//         <div class="details-section">
//           <h4>Additional Information</h4>
//           <p>${report.additionalDetails || "No additional details provided."}</p>
//         </div>
        
//         <div class="document-actions">
//           ${claimButton}
//           <button class="btn btn-secondary close-details">
//             <i class="fas fa-times"></i> Close
//           </button>
//         </div>
//       </div>
//     `

//     // Add event listener for claim button
//     const claimBtn = documentDetailsModal.querySelector(".claim-document")
//     if (claimBtn) {
//       claimBtn.addEventListener("click", () => {
//         claimDocument(reportId)
//       })
//     }

//     // Add event listener for close button
//     documentDetailsModal.querySelector(".close-details")?.addEventListener("click", closeModals)
//   }
// }

// // Function to handle document claiming
// const claimDocument = (reportId) => {
//   const currentUser = getCurrentUser()
//   if (!currentUser || currentUser.userType !== "reportee") {
//     createToast("You must be logged in as a document owner to claim documents", "error")
//     return
//   }

//   const reports = getReports()
//   const reportIndex = reports.findIndex((r) => r.id === reportId)

//   if (reportIndex === -1) {
//     createToast("Document not found", "error")
//     return
//   }

//   // Update report status
//   reports[reportIndex].status = "claimed"
//   reports[reportIndex].claimedBy = currentUser.id
//   reports[reportIndex].dateClaimed = new Date().toISOString()

//   // Save updated reports
//   saveReports(reports)

//   // Close modal
//   closeModals()

//   // Show success message
//   createToast("Document claimed successfully! Please visit the collection point to retrieve your document.", "success")

//   // Refresh dashboard if on dashboard page
//   if (document.getElementById("dashboard").classList.contains("active")) {
//     updateAuthenticatedPages()
//   }
// }

// // Load locations function
// const loadLocations = () => {
//   if (!locationsContainer) return

//   const locations = getLocations()

//   let html = ""

//   locations.forEach((location) => {
//     html += `
//       <div class="location-card">
//         <div class="location-image">
//           <i class="fas fa-building"></i>
//         </div>
//         <div class="location-details">
//           <h3 class="location-name">${location.name}</h3>
//           <div class="location-info">
//             <p><i class="fas fa-map-marker-alt"></i> ${location.address}</p>
//             <p><i class="fas fa-phone"></i> ${location.phone}</p>
//             <p><i class="fas fa-envelope"></i> ${location.email}</p>
//           </div>
//           <div class="location-outlets">
//             <h4>Outlets</h4>
//             <div class="outlets-list">
//               ${getOutletsByLocationId(location.id)
//                 .map((outlet) => `<span class="outlet-tag">${outlet.name}</span>`)
//                 .join("")}
//             </div>
//           </div>
//         </div>
//       </div>
//     `
//   })

//   locationsContainer.innerHTML = html
// }

// // Placeholder functions for features not yet implemented
// const openEditProfileModal = () => {
//   createToast("Edit profile feature coming soon!", "info")
// }

// const openChangePasswordModal = () => {
//   createToast("Change password feature coming soon!", "info")
// }

// const openMarkAsClaimedModal = (reportId) => {
//   createToast("Mark as claimed feature coming soon!", "info")
// }

// const openEditDocumentModal = (reportId) => {
//   createToast("Edit document feature coming soon!", "info")
// }

// const confirmDeleteDocument = (reportId) => {
//   if (confirm("Are you sure you want to delete this document?")) {
//     const reports = getReports()
//     const reportIndex = reports.findIndex((r) => r.id === reportId)

//     if (reportIndex !== -1) {
//       reports.splice(reportIndex, 1)
//       saveReports(reports)
//       createToast("Document deleted successfully", "success")

//       // Refresh current page
//       if (document.getElementById("dashboard").classList.contains("active")) {
//         updateAuthenticatedPages()
//       } else if (document.getElementById("search").classList.contains("active")) {
//         performSearch()
//       }
//     }
//   }
// }

// const openEditUserModal = (userId) => {
//   createToast("Edit user feature coming soon!", "info")
// }

// const confirmDeleteUser = (userId) => {
//   createToast("Delete user feature coming soon!", "info")
// }

// // Event Listeners
// document.addEventListener("DOMContentLoaded", () => {
//   // Initialize database
//   initializeDatabase()

//   // Update UI based on authentication status
//   updateAuthUI()

//   // Add CSS for toast notifications
//   const toastStyles = document.createElement("style")
//   toastStyles.textContent = `
//         .toast {
//             position: fixed;
//             bottom: 20px;
//             right: 20px;
//             background-color: white;
//             color: var(--text-color);
//             padding: 0;
//             border-radius: var(--border-radius);
//             box-shadow: var(--shadow-lg);
//             max-width: 350px;
//             width: 100%;
//             z-index: 9999;
//             transform: translateY(100px);
//             opacity: 0;
//             transition: transform 0.3s, opacity 0.3s;
//             overflow: hidden;
//         }
        
//         .toast-visible {
//             transform: translateY(0);
//             opacity: 1;
//         }
        
//         .toast-hiding {
//             transform: translateY(100px);
//             opacity: 0;
//         }
        
//         .toast-content {
//             display: flex;
//             align-items: flex-start;
//             padding: 16px;
//             gap: 12px;
//         }
        
//         .toast i {
//             font-size: 20px;
//             margin-top: 2px;
//         }
        
//         .toast-success {
//             border-left: 4px solid var(--success-color);
//         }
        
//         .toast-success i {
//             color: var(--success-color);
//         }
        
//         .toast-error {
//             border-left: 4px solid var(--danger-color);
//         }
        
//         .toast-error i {
//             color: var(--danger-color);
//         }
        
//         .toast-info {
//             border-left: 4px solid var(--primary-color);
//         }
        
//         .toast-info i {
//             color: var(--primary-color);
//         }
        
//         .toast-close {
//             position: absolute;
//             top: 8px;
//             right: 8px;
//             background: none;
//             border: none;
//             color: var(--text-light);
//             cursor: pointer;
//             font-size: 14px;
//             padding: 4px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             width: 24px;
//             height: 24px;
//         }
        
//         .toast-close:hover {
//             background-color: rgba(0, 0, 0, 0.05);
//         }
//   `
//   document.head.appendChild(toastStyles)

//   // Navigation
//   if (mainNav) {
//     mainNav.addEventListener("click", (e) => {
//       if (e.target.tagName === "A") {
//         e.preventDefault()
//         const pageId = e.target.getAttribute("data-page")
//         showPage(pageId)
//       }
//     })
//   }

//   // Footer navigation
//   document.querySelectorAll("footer a[data-page]").forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault()
//       const pageId = e.target.getAttribute("data-page")
//       showPage(pageId)
//     })
//   })

//   // Auth buttons
//   if (loginBtn) {
//     loginBtn.addEventListener("click", openLoginModal)
//   }

//   if (registerBtn) {
//     registerBtn.addEventListener("click", openRegisterModal)
//   }

//   if (logoutBtn) {
//     logoutBtn.addEventListener("click", () => {
//       logout()
//       updateAuthUI()
//       showPage("home")
//       createToast("You have been logged out successfully", "success")
//     })
//   }

//   // Modal close buttons
//   document.querySelectorAll(".close-modal").forEach((button) => {
//     button.addEventListener("click", closeModals)
//   })

//   // Close modal when clicking outside
//   if (modalContainer) {
//     modalContainer.addEventListener("click", (e) => {
//       if (e.target === modalContainer) {
//         closeModals()
//       }
//     })
//   }

//   // Switch between login and register
//   if (switchToRegister) {
//     switchToRegister.addEventListener("click", (e) => {
//       e.preventDefault()
//       if (loginModal) loginModal.style.display = "none"
//       if (registerModal) registerModal.style.display = "block"
//     })
//   }

//   if (switchToLogin) {
//     switchToLogin.addEventListener("click", (e) => {
//       e.preventDefault()
//       if (registerModal) registerModal.style.display = "none"
//       if (loginModal) loginModal.style.display = "block"
//     })
//   }

//   // User type change in registration
//   if (registerUserType) {
//     registerUserType.addEventListener("change", () => {
//       if (agentLocationGroup && agentOutletGroup) {
//         if (registerUserType.value === "agent") {
//           agentLocationGroup.style.display = "block"
//           agentOutletGroup.style.display = "block"
//         } else {
//           agentLocationGroup.style.display = "none"
//           agentOutletGroup.style.display = "none"
//         }
//       }
//     })
//   }

//   // Location change for outlets
//   if (foundLocation) {
//     foundLocation.addEventListener("change", () => {
//       if (foundLocation.value && foundOutlet) {
//         populateOutletDropdown(foundLocation.value, foundOutlet)
//       }
//     })
//   }

//   if (agentLocation) {
//     agentLocation.addEventListener("change", () => {
//       if (agentLocation.value && agentOutlet) {
//         populateOutletDropdown(agentLocation.value, agentOutlet)
//       }
//     })
//   }

//   // Hero buttons
//   if (searchDocsBtn) {
//     searchDocsBtn.addEventListener("click", () => {
//       showPage("search")
//     })
//   }

//   if (reportFoundBtn) {
//     reportFoundBtn.addEventListener("click", () => {
//       showPage("report")
//     })
//   }

//   // Login form submission
//   if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//       e.preventDefault()

//       const email = document.getElementById("login-email")?.value
//       const password = document.getElementById("login-password")?.value

//       if (!email || !password) {
//         createToast("Please enter both email and password", "error")
//         return
//       }

//       const user = login(email, password)

//       if (user) {
//         updateAuthUI()
//         closeModals()
//         showPage("dashboard")
//         createToast(`Welcome back, ${user.name}!`, "success")
//       } else {
//         createToast("Invalid email or password. Please try again.", "error")
//       }
//     })
//   }

//   // Register form submission
//   if (registerForm) {
//     registerForm.addEventListener("submit", (e) => {
//       e.preventDefault()

//       const name = document.getElementById("register-name")?.value
//       const email = document.getElementById("register-email")?.value
//       const phone = document.getElementById("register-phone")?.value
//       const password = document.getElementById("register-password")?.value
//       const confirmPassword = document.getElementById("register-confirm-password")?.value
//       const userType = document.getElementById("register-user-type")?.value
//       const termsAgreed = document.getElementById("register-terms")?.checked

//       if (!name || !email || !phone || !password || !confirmPassword || !userType) {
//         createToast("Please fill in all required fields.", "error")
//         return
//       }

//       if (password !== confirmPassword) {
//         createToast("Passwords do not match.", "error")
//         return
//       }

//       if (!termsAgreed) {
//         createToast("You must agree to the Terms and Conditions.", "error")
//         return
//       }

//       // Check if email already exists
//       const users = getUsers()
//       if (users.some((user) => user.email === email)) {
//         createToast("Email already in use. Please use a different email or login.", "error")
//         return
//       }

//       const userData = {
//         name,
//         email,
//         phone,
//         password,
//         userType,
//       }

//       // Add location and outlet for agents
//       if (userType === "agent") {
//         const locationId = document.getElementById("agent-location")?.value
//         const outletId = document.getElementById("agent-outlet")?.value

//         if (!locationId || !outletId) {
//           createToast("Please select a location and outlet.", "error")
//           return
//         }

//         userData.locationId = Number.parseInt(locationId)
//         userData.outletId = Number.parseInt(outletId)
//       }

//       const newUser = register(userData)

//       if (newUser) {
//         login(email, password)
//         updateAuthUI()
//         closeModals()
//         showPage("dashboard")
//         createToast("Registration successful! Welcome to DocuFind.", "success")
//       } else {
//         createToast("Registration failed. Please try again.", "error")
//       }
//     })
//   }

//   // Report form submission
//   if (reportForm) {
//     reportForm.addEventListener("submit", submitReport)
//   }

//   // Search functionality
//   if (searchButton) {
//     searchButton.addEventListener("click", performSearch)
//   }

//   if (searchInput) {
//     searchInput.addEventListener("keypress", (e) => {
//       if (e.key === "Enter") {
//         performSearch()
//       }
//     })
//   }

//   document.getElementById("sort-select")?.addEventListener("change", performSearch)
//   document.getElementById("category-filter")?.addEventListener("change", performSearch)
//   locationFilter?.addEventListener("change", performSearch)
//   document.getElementById("date-filter")?.addEventListener("change", performSearch)

//   // Home search event listeners
//   if (homeSearchButton) {
//     homeSearchButton.addEventListener("click", performHomeSearch)
//   }

//   if (homeSearchInput) {
//     homeSearchInput.addEventListener("keypress", (e) => {
//       if (e.key === "Enter") {
//         performHomeSearch()
//       }
//     })
//   }

//   if (clearHomeSearch) {
//     clearHomeSearch.addEventListener("click", clearHomeSearchResults)
//   }

//   // Search suggestion clicks
//   document.querySelectorAll(".search-suggestions span").forEach((span) => {
//     span.addEventListener("click", () => {
//       if (homeSearchInput) {
//         homeSearchInput.value = span.textContent
//         performHomeSearch()
//       }
//     })
//   })

//   // Login required modal buttons
//   if (loginRequiredLoginBtn) {
//     loginRequiredLoginBtn.addEventListener("click", () => {
//       if (loginRequiredModal) loginRequiredModal.style.display = "none"
//       openLoginModal()
//     })
//   }

//   if (loginRequiredRegisterBtn) {
//     loginRequiredRegisterBtn.addEventListener("click", () => {
//       if (loginRequiredModal) loginRequiredModal.style.display = "none"
//       openRegisterModal()

//       // Pre-select reportee user type
//       const userTypeSelect = document.getElementById("register-user-type")
//       if (userTypeSelect) userTypeSelect.value = "reportee"
//     })
//   }

//   // Fix mobile menu toggle
//   const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
//   const nav = document.querySelector("nav")

//   if (mobileMenuBtn && nav) {
//     mobileMenuBtn.addEventListener("click", () => {
//       nav.classList.toggle("active")
//     })
//   }

//   // Show home page by default
//   showPage("home")
// })

// DOM Elements
const mainNav = document.getElementById("main-nav")
const mainContent = document.getElementById("main-content")
const authSection = document.getElementById("auth-section")
const userProfile = document.getElementById("user-profile")
const usernameDisplay = document.getElementById("username-display")
const loginBtn = document.getElementById("login-btn")
const registerBtn = document.getElementById("register-btn")
const logoutBtn = document.getElementById("logout-btn")
const modalContainer = document.getElementById("modal-container")
const loginModal = document.getElementById("login-modal")
const registerModal = document.getElementById("register-modal")
const documentDetailsModal = document.getElementById("document-details-modal")
const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form")
const switchToRegister = document.getElementById("switch-to-register")
const switchToLogin = document.getElementById("switch-to-login")
const registerUserType = document.getElementById("register-user-type")
const agentLocationGroup = document.getElementById("agent-location-group")
const agentOutletGroup = document.getElementById("agent-outlet-group")
const searchDocsBtn = document.getElementById("search-docs-btn")
const reportFoundBtn = document.getElementById("report-found-btn")
const reportForm = document.getElementById("report-form")
const reportLoginRequired = document.getElementById("report-login-required")
const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const resultsCount = document.getElementById("results-count")
const resultsList = document.getElementById("results-list")
const pagination = document.getElementById("pagination")
const locationFilter = document.getElementById("location-filter")
const foundLocation = document.getElementById("found-location")
const foundOutlet = document.getElementById("found-outlet")
const agentLocation = document.getElementById("agent-location")
const agentOutlet = document.getElementById("agent-outlet")
const locationsContainer = document.getElementById("locations-container")

// DOM Elements for Home Search
const homeSearchInput = document.getElementById("home-search-input")
const homeSearchButton = document.getElementById("home-search-button")
const homeSearchResultsSection = document.getElementById("home-search-results-section")
const homeResultsList = document.getElementById("home-results-list")
const homeResultsCount = document.getElementById("home-results-count")
const homePagination = document.getElementById("home-pagination")
const clearHomeSearch = document.getElementById("clear-home-search")
const loginRequiredModal = document.getElementById("login-required-modal")
const loginRequiredLoginBtn = document.getElementById("login-required-login-btn")
const loginRequiredRegisterBtn = document.getElementById("login-required-register-btn")

// Store the current document being viewed
let currentViewingDocument = null

// Toast notification system
const createToast = (message, type = "info") => {
  const toast = document.createElement("div")
  toast.className = `toast toast-${type}`
  toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `

  document.body.appendChild(toast)

  // Add event listener to close button
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.classList.add("toast-hiding")
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  })

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (document.body.contains(toast)) {
      toast.classList.add("toast-hiding")
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast)
        }
      }, 300)
    }
  }, 5000)

  // Animate in
  setTimeout(() => {
    toast.classList.add("toast-visible")
  }, 10)
}

// Simulated Database (localStorage)
const initializeDatabase = () => {
  // Check if database is already initialized
  if (!localStorage.getItem("docufind_initialized")) {
    // Users Table
    const users = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        password: "password123", // In a real app, this would be hashed
        phone: "1234567890",
        userType: "reportee",
        dateJoined: new Date().toISOString(),
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123",
        phone: "0987654321",
        userType: "reporter",
        dateJoined: new Date().toISOString(),
      },
      {
        id: 3,
        name: "Agent Johnson",
        email: "agent@example.com",
        password: "password123",
        phone: "5555555555",
        userType: "agent",
        locationId: 1,
        outletId: 1,
        dateJoined: new Date().toISOString(),
      },
      {
        id: 4,
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
        phone: "9999999999",
        userType: "admin",
        dateJoined: new Date().toISOString(),
      },
    ]

    // Locations Table
    const locations = [
      {
        id: 1,
        name: "Central City",
        address: "123 Main Street, Central City",
        phone: "1234567890",
        email: "central@docufind.com",
        coordinates: { lat: -1.286389, lng: 36.817223 },
      },
      {
        id: 2,
        name: "North District",
        address: "456 North Avenue, North District",
        phone: "2345678901",
        email: "north@docufind.com",
        coordinates: { lat: -1.256389, lng: 36.827223 },
      },
      {
        id: 3,
        name: "East Region",
        address: "789 East Boulevard, East Region",
        phone: "3456789012",
        email: "east@docufind.com",
        coordinates: { lat: -1.276389, lng: 36.837223 },
      },
      {
        id: 4,
        name: "West County",
        address: "321 West Road, West County",
        phone: "4567890123",
        email: "west@docufind.com",
        coordinates: { lat: -1.296389, lng: 36.807223 },
      },
      {
        id: 5,
        name: "South City",
        address: "654 South Street, South City",
        phone: "5678901234",
        email: "south@docufind.com",
        coordinates: { lat: -1.306389, lng: 36.797223 },
      },
    ]

    // Outlets Table
    const outlets = [
      { id: 1, locationId: 1, name: "Central Office", address: "123 Main Street, Suite 101" },
      { id: 2, locationId: 1, name: "Downtown Branch", address: "456 Central Avenue, Downtown" },
      { id: 3, locationId: 2, name: "North Main", address: "789 North Road, Suite 201" },
      { id: 4, locationId: 2, name: "North Plaza", address: "321 Plaza Circle, North District" },
      { id: 5, locationId: 3, name: "East Center", address: "654 East Boulevard, Suite 301" },
      { id: 6, locationId: 3, name: "Eastside Mall", address: "987 Mall Road, East Region" },
      { id: 7, locationId: 4, name: "West Main", address: "147 West Street, Suite 401" },
      { id: 8, locationId: 4, name: "Westfield Office", address: "258 Field Avenue, West County" },
      { id: 9, locationId: 5, name: "South Center", address: "369 South Road, Suite 501" },
      { id: 10, locationId: 5, name: "Southside Mall", address: "741 Mall Circle, South City" },
    ]

    // Categories Table
    const categories = [
      {
        id: 1,
        name: "National ID",
        description: "National Identification Card",
        reporterFee: 500,
        ownerFee: 200,
      },
      {
        id: 2,
        name: "Passport",
        description: "International Passport",
        reporterFee: 1000,
        ownerFee: 500,
      },
      {
        id: 3,
        name: "Driver's License",
        description: "Driver's License",
        reporterFee: 700,
        ownerFee: 300,
      },
      {
        id: 4,
        name: "Foreign ID",
        description: "Foreign Identification Card",
        reporterFee: 800,
        ownerFee: 400,
      },
      {
        id: 5,
        name: "Birth Certificate",
        description: "Birth Certificate",
        reporterFee: 600,
        ownerFee: 250,
      },
      {
        id: 6,
        name: "Student ID",
        description: "Student Identification Card",
        reporterFee: 300,
        ownerFee: 150,
      },
      {
        id: 7,
        name: "Other",
        description: "Other Important Documents",
        reporterFee: 400,
        ownerFee: 200,
      },
    ]

    // Reports Table (Initially empty, but with some sample data)
    const reports = [
      {
        id: 1,
        documentType: 1, // National ID
        documentNumber: "12345678",
        documentName: "John Smith",
        reporterId: 2, // Jane Smith
        locationId: 1,
        outletId: 1,
        dateFound: "2025-03-15T10:30:00Z",
        dateReported: "2025-03-16T14:20:00Z",
        status: "pending", // pending, claimed, expired
        additionalDetails: "Found near the central bus station",
        claimedBy: null,
        dateClaimed: null,
        reporterPaid: false,
        ownerPaid: false,
      },
      {
        id: 2,
        documentType: 2, // Passport
        documentNumber: "AB123456",
        documentName: "Mary Johnson",
        reporterId: 2, // Jane Smith
        locationId: 2,
        outletId: 3,
        dateFound: "2025-03-20T15:45:00Z",
        dateReported: "2025-03-21T09:10:00Z",
        status: "claimed",
        additionalDetails: "Found at North Mall food court",
        claimedBy: 1, // John Doe
        dateClaimed: "2025-03-25T11:30:00Z",
        reporterPaid: true,
        ownerPaid: true,
      },
      {
        id: 3,
        documentType: 3, // Driver's License
        documentNumber: "DL987654",
        documentName: "Robert Brown",
        reporterId: 1, // John Doe
        locationId: 3,
        outletId: 5,
        dateFound: "2025-04-05T12:15:00Z",
        dateReported: "2025-04-05T16:40:00Z",
        status: "pending",
        additionalDetails: "Found in East Region park",
        claimedBy: null,
        dateClaimed: null,
        reporterPaid: false,
        ownerPaid: false,
      },
      {
        id: 4,
        documentType: 1, // National ID
        documentNumber: "87654321",
        documentName: "Sarah Wilson",
        reporterId: 1, // John Doe
        locationId: 4,
        outletId: 7,
        dateFound: "2025-04-10T09:20:00Z",
        dateReported: "2025-04-10T13:50:00Z",
        status: "pending",
        additionalDetails: "Found at West County library",
        claimedBy: null,
        dateClaimed: null,
        reporterPaid: false,
        ownerPaid: false,
      },
      {
        id: 5,
        documentType: 4, // Foreign ID
        documentNumber: "FID456789",
        documentName: "Carlos Rodriguez",
        reporterId: 2, // Jane Smith
        locationId: 5,
        outletId: 9,
        dateFound: "2025-04-15T14:30:00Z",
        dateReported: "2025-04-16T10:15:00Z",
        status: "claimed",
        additionalDetails: "Found at South City shopping center",
        claimedBy: 1, // John Doe (acting on behalf of the owner)
        dateClaimed: "2025-04-20T15:45:00Z",
        reporterPaid: true,
        ownerPaid: true,
      },
    ]

    // Save to localStorage
    localStorage.setItem("docufind_users", JSON.stringify(users))
    localStorage.setItem("docufind_locations", JSON.stringify(locations))
    localStorage.setItem("docufind_outlets", JSON.stringify(outlets))
    localStorage.setItem("docufind_categories", JSON.stringify(categories))
    localStorage.setItem("docufind_reports", JSON.stringify(reports))
    localStorage.setItem("docufind_initialized", "true")
  }
}

// Database Helper Functions
const getUsers = () => JSON.parse(localStorage.getItem("docufind_users") || "[]")
const getLocations = () => JSON.parse(localStorage.getItem("docufind_locations") || "[]")
const getOutlets = () => JSON.parse(localStorage.getItem("docufind_outlets") || "[]")
const getCategories = () => JSON.parse(localStorage.getItem("docufind_categories") || "[]")
const getReports = () => JSON.parse(localStorage.getItem("docufind_reports") || "[]")

const saveUsers = (users) => localStorage.setItem("docufind_users", JSON.stringify(users))
const saveLocations = (locations) => localStorage.setItem("docufind_locations", JSON.stringify(locations))
const saveOutlets = (outlets) => localStorage.setItem("docufind_outlets", JSON.stringify(outlets))
const saveCategories = (categories) => localStorage.setItem("docufind_categories", JSON.stringify(categories))
const saveReports = (reports) => localStorage.setItem("docufind_reports", JSON.stringify(reports))

const getUserById = (id) => getUsers().find((user) => user.id === id)
const getLocationById = (id) => getLocations().find((location) => location.id === id)
const getOutletById = (id) => getOutlets().find((outlet) => outlet.id === id)
const getCategoryById = (id) => getCategories().find((category) => category.id === id)
const getReportById = (id) => getReports().find((report) => report.id === id)

const getOutletsByLocationId = (locationId) => getOutlets().filter((outlet) => outlet.locationId === locationId)

// Authentication Functions
const getCurrentUser = () => {
  const userId = localStorage.getItem("docufind_current_user")
  if (!userId) return null
  return getUserById(Number.parseInt(userId))
}

const login = (email, password) => {
  const users = getUsers()
  const user = users.find((u) => u.email === email && u.password === password)
  if (user) {
    localStorage.setItem("docufind_current_user", user.id)
    return user
  }
  return null
}

const logout = () => {
  localStorage.removeItem("docufind_current_user")
}

const register = (userData) => {
  const users = getUsers()
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    ...userData,
    dateJoined: new Date().toISOString(),
  }
  users.push(newUser)
  saveUsers(users)
  return newUser
}

// UI Functions
const showPage = (pageId) => {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })

  // Show the selected page
  const page = document.getElementById(pageId)
  if (page) {
    page.classList.add("active")
  }

  // Update active nav link
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active")
  })

  const activeLink = document.querySelector(`nav a[data-page="${pageId}"]`)
  if (activeLink) {
    activeLink.classList.add("active")
  }

  // Special page handling
  if (pageId === "dashboard" || pageId === "profile") {
    updateAuthenticatedPages()
  } else if (pageId === "report") {
    updateReportPage()
  } else if (pageId === "locations") {
    loadLocations()
  } else if (pageId === "search") {
    populateLocationFilter()
    populateCategoryFilter()
    performSearch() // Load initial search results
  }

  // Scroll to top
  window.scrollTo(0, 0)
}

const updateAuthUI = () => {
  const currentUser = getCurrentUser()

  if (currentUser) {
    if (authSection) authSection.style.display = "none"
    if (userProfile) userProfile.style.display = "flex"
    if (usernameDisplay) usernameDisplay.textContent = currentUser.name

    // Update navigation based on user type
    updateNavigationForUserType(currentUser.userType)
  } else {
    if (authSection) authSection.style.display = "flex"
    if (userProfile) userProfile.style.display = "none"

    // Reset navigation to default
    updateNavigationForUserType(null)
  }
}

const updateNavigationForUserType = (userType) => {
  // Hide all user-specific nav items first
  document.querySelectorAll(".nav-user-specific").forEach((item) => {
    item.style.display = "none"
  })

  // Show relevant nav items based on user type
  if (userType) {
    document.querySelectorAll(`.nav-${userType}`).forEach((item) => {
      item.style.display = "block"
    })

    // All logged-in users see these
    document.querySelectorAll(".nav-authenticated").forEach((item) => {
      item.style.display = "block"
    })
  } else {
    // Show items for non-authenticated users
    document.querySelectorAll(".nav-public").forEach((item) => {
      item.style.display = "block"
    })
  }
}

// Improve role-based dashboard display
const updateAuthenticatedPages = () => {
  const currentUser = getCurrentUser()
  const dashboardContent = document.getElementById("dashboard-content")
  const profileContent = document.getElementById("profile-content")

  if (!dashboardContent || !profileContent) return

  if (currentUser) {
    // Update user role display in the header
    const usernameDisplay = document.getElementById("username-display")
    if (usernameDisplay) {
      usernameDisplay.innerHTML = `${currentUser.name} <span class="user-role">(${currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1)})</span>`
    }

    // Dashboard content based on user type
    let dashboardHTML = ""

    if (currentUser.userType === "reportee") {
      dashboardHTML = `
                <div class="dashboard-welcome">
                    <h2>Welcome, ${currentUser.name}!</h2>
                    <p>This is your document owner dashboard. Here you can track documents you've claimed and search for lost documents.</p>
                    <div class="user-role-badge reportee">Document Owner</div>
                </div>
                <div class="dashboard-actions">
                    <button class="btn btn-primary" onclick="showPage('search')">
                        <i class="fas fa-search"></i> Search for Documents
                    </button>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-file-alt"></i> My Claimed Documents</h3>
                    <div class="dashboard-cards" id="reportee-documents">
                        ${generateReporteeDocumentsHTML()}
                    </div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-chart-line"></i> Activity Summary</h3>
                    <div class="dashboard-stats">
                        <div class="dashboard-stat">
                            <div class="stat-value">${getReports().filter((r) => r.claimedBy === currentUser.id).length}</div>
                            <div class="stat-label">Documents Claimed</div>
                        </div>
                        <div class="dashboard-stat">
                            <div class="stat-value">${getReports().filter((r) => r.claimedBy === currentUser.id && r.status === "claimed").length}</div>
                            <div class="stat-label">Successfully Recovered</div>
                        </div>
                        <div class="dashboard-stat">
                            <div class="stat-value">${getReports().filter((r) => r.status === "pending").length}</div>
                            <div class="stat-label">Available Documents</div>
                        </div>
                    </div>
                </div>
            `
    } else if (currentUser.userType === "reporter") {
      dashboardHTML = `
                <div class="dashboard-welcome">
                    <h2>Welcome, ${currentUser.name}!</h2>
                    <p>This is your document reporter dashboard. Here you can track documents you've reported and report new found documents.</p>
                    <div class="user-role-badge reporter">Document Finder</div>
                </div>
                <div class="dashboard-actions">
                    <button class="btn btn-primary" onclick="showPage('report')">
                        <i class="fas fa-plus-circle"></i> Report New Document
                    </button>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-file-alt"></i> My Reported Documents</h3>
                    <div class="dashboard-cards" id="reporter-documents">
                        ${generateReporterDocumentsHTML()}
                    </div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-chart-line"></i> Reporting Summary</h3>
                    <div class="dashboard-stats">
                        <div class="dashboard-stat">
                            <div class="stat-value">${getReports().filter((r) => r.reporterId === currentUser.id).length}</div>
                            <div class="stat-label">Total Reported</div>
                        </div>
                        <div class="dashboard-stat">
                            <div class="stat-value">${getReports().filter((r) => r.reporterId === currentUser.id && r.status === "claimed").length}</div>
                            <div class="stat-label">Successfully Claimed</div>
                        </div>
                        <div class="dashboard-stat">
                            <div class="stat-value">${getReports().filter((r) => r.reporterId === currentUser.id && r.reporterPaid).length}</div>
                            <div class="stat-label">Rewards Received</div>
                        </div>
                    </div>
                </div>
            `
    } else if (currentUser.userType === "agent") {
      const location = getLocationById(currentUser.locationId)
      const outlet = getOutletById(currentUser.outletId)
      const pendingCount = getReports().filter(
        (r) => r.locationId === currentUser.locationId && r.outletId === currentUser.outletId && r.status === "pending",
      ).length

      dashboardHTML = `
                <div class="dashboard-welcome">
                    <h2>Welcome, Agent ${currentUser.name}!</h2>
                    <p>This is your agent dashboard. Here you can manage documents at your location and handle claims.</p>
                    <div class="user-role-badge agent">Collection Agent</div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-building"></i> Agent Information</h3>
                    <div class="agent-info">
                        <div class="agent-info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p>${location ? location.name : "Unknown"}</p>
                            </div>
                        </div>
                        <div class="agent-info-item">
                            <i class="fas fa-store"></i>
                            <div>
                                <h4>Outlet</h4>
                                <p>${outlet ? outlet.name : "Unknown"}</p>
                            </div>
                        </div>
                        <div class="agent-info-item">
                            <i class="fas fa-clipboard-list"></i>
                            <div>
                                <h4>Pending Documents</h4>
                                <p>${pendingCount} document${pendingCount !== 1 ? "s" : ""}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-file-alt"></i> Pending Documents</h3>
                    <div class="dashboard-cards" id="agent-pending-documents">
                        ${generateAgentPendingDocumentsHTML(currentUser.locationId, currentUser.outletId)}
                    </div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-history"></i> Recent Activity</h3>
                    <div class="dashboard-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Document</th>
                                    <th>Type</th>
                                    <th>Date Reported</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${generateAgentActivityTableHTML(currentUser.locationId, currentUser.outletId)}
                            </tbody>
                        </table>
                    </div>
                </div>
            `
    } else if (currentUser.userType === "admin") {
      dashboardHTML = `
                <div class="dashboard-welcome">
                    <h2>Welcome, Administrator!</h2>
                    <p>This is your admin dashboard. Here you can monitor all system activity and manage documents.</p>
                    <div class="user-role-badge admin">System Administrator</div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-chart-line"></i> System Overview</h3>
                    <div class="admin-stats">
                        <div class="admin-stat">
                            <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
                            <div class="stat-value">${getReports().length}</div>
                            <div class="stat-label">Total Reports</div>
                        </div>
                        <div class="admin-stat">
                            <div class="stat-icon"><i class="fas fa-clock"></i></div>
                            <div class="stat-value">${getReports().filter((r) => r.status === "pending").length}</div>
                            <div class="stat-label">Pending</div>
                        </div>
                        <div class="admin-stat">
                            <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                            <div class="stat-value">${getReports().filter((r) => r.status === "claimed").length}</div>
                            <div class="stat-label">Claimed</div>
                        </div>
                        <div class="admin-stat">
                            <div class="stat-icon"><i class="fas fa-users"></i></div>
                            <div class="stat-value">${getUsers().length}</div>
                            <div class="stat-label">Users</div>
                        </div>
                    </div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-file-alt"></i> Recent Reports</h3>
                    <div class="dashboard-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Document</th>
                                    <th>Type</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${generateAdminReportsTableHTML()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="dashboard-section">
                    <h3><i class="fas fa-users"></i> User Management</h3>
                    <div class="dashboard-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Joined</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${generateAdminUsersTableHTML()}
                            </tbody>
                        </table>
                    </div>
                </div>
            `
    }

    dashboardContent.innerHTML = dashboardHTML

    // Add event listeners for dashboard elements
    addDashboardEventListeners(currentUser.userType)

    // Profile content
    profileContent.innerHTML = `
            <div class="profile-container">
                <div class="profile-header">
                    <div class="profile-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="profile-info">
                        <h3>${currentUser.name}</h3>
                        <div class="user-role-badge ${currentUser.userType}">${currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1)}</div>
                    </div>
                </div>
                <div class="profile-details">
                    <div class="profile-section">
                        <h4><i class="fas fa-user"></i> Personal Information</h4>
                        <div class="profile-field">
                            <label>Email:</label>
                            <p>${currentUser.email}</p>
                        </div>
                        <div class="profile-field">
                            <label>Phone:</label>
                            <p>${currentUser.phone}</p>
                        </div>
                        <div class="profile-field">
                            <label>Joined:</label>
                            <p>${new Date(currentUser.dateJoined).toLocaleDateString()}</p>
                        </div>
                        ${
                          currentUser.userType === "agent"
                            ? `
                            <div class="profile-field">
                                <label>Location:</label>
                                <p>${getLocationById(currentUser.locationId)?.name || "Unknown"}</p>
                            </div>
                            <div class="profile-field">
                                <label>Outlet:</label>
                                <p>${getOutletById(currentUser.outletId)?.name || "Unknown"}</p>
                            </div>
                            `
                            : ""
                        }
                    </div>
                    <div class="profile-section">
                        <h4><i class="fas fa-cog"></i> Account Settings</h4>
                        <div class="profile-actions">
                            <button class="btn btn-primary" id="edit-profile-btn">
                                <i class="fas fa-user-edit"></i> Edit Profile
                            </button>
                            <button class="btn btn-secondary" id="change-password-btn">
                                <i class="fas fa-key"></i> Change Password
                            </button>
                        </div>
                    </div>
                    <div class="profile-section">
                        <h4><i class="fas fa-shield-alt"></i> Security</h4>
                        <div class="profile-actions">
                            <button class="btn btn-danger" id="logout-profile-btn">
                                <i class="fas fa-sign-out-alt"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `

    // Add event listeners for profile buttons
    document.getElementById("edit-profile-btn")?.addEventListener("click", openEditProfileModal)
    document.getElementById("change-password-btn")?.addEventListener("click", openChangePasswordModal)
    document.getElementById("logout-profile-btn")?.addEventListener("click", () => {
      logout()
      updateAuthUI()
      showPage("home")
      createToast("You have been logged out successfully", "success")
    })
  } else {
    // Show login required message
    dashboardContent.innerHTML = `
            <div class="login-required-message">
                <i class="fas fa-lock"></i>
                <h3>Access Restricted</h3>
                <p>You need to <a href="#" id="dashboard-login-link">login</a> to access your dashboard.</p>
                <p>Don't have an account? <a href="#" id="dashboard-register-link">Register now</a> to get started.</p>
            </div>
        `

    profileContent.innerHTML = `
            <div class="login-required-message">
                <i class="fas fa-lock"></i>
                <h3>Access Restricted</h3>
                <p>You need to <a href="#" id="profile-login-link">login</a> to access your profile.</p>
                <p>Don't have an account? <a href="#" id="profile-register-link">Register now</a> to get started.</p>
            </div>
        `

    // Add event listeners for login links
    document.getElementById("dashboard-login-link")?.addEventListener("click", (e) => {
      e.preventDefault()
      openLoginModal()
    })

    document.getElementById("dashboard-register-link")?.addEventListener("click", (e) => {
      e.preventDefault()
      openRegisterModal()
    })

    document.getElementById("profile-login-link")?.addEventListener("click", (e) => {
      e.preventDefault()
      openLoginModal()
    })

    document.getElementById("profile-register-link")?.addEventListener("click", (e) => {
      e.preventDefault()
      openRegisterModal()
    })
  }
}

// Helper Functions for Dashboard
const generateReporteeDocumentsHTML = () => {
  const currentUser = getCurrentUser()
  if (!currentUser) return ""

  const reports = getReports().filter((r) => r.claimedBy === currentUser.id)

  if (reports.length === 0) {
    return `<p class="no-data"><i class="fas fa-info-circle"></i> You haven't claimed any documents yet. <a href="#" onclick="showPage('search'); return false;">Search for documents</a> to see if yours has been found.</p>`
  }

  let html = ""
  reports.forEach((report) => {
    const category = getCategoryById(report.documentType)
    const location = getLocationById(report.locationId)
    const outlet = getOutletById(report.outletId)

    html += `
            <div class="dashboard-card">
                <div class="card-header">
                    <h4>${category ? category.name : "Unknown"}</h4>
                    <span class="status ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
                </div>
                <div class="card-body">
                    <p><strong>Document Number:</strong> ${report.documentNumber}</p>
                    <p><strong>Name on Document:</strong> ${report.documentName}</p>
                    <p><strong>Location:</strong> ${location ? location.name : "Unknown"}</p>
                    <p><strong>Outlet:</strong> ${outlet ? outlet.name : "Unknown"}</p>
                    <p><strong>Date Claimed:</strong> ${report.dateClaimed ? new Date(report.dateClaimed).toLocaleDateString() : "N/A"}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary view-document" data-id="${report.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `
  })

  return html
}

const generateReporterDocumentsHTML = () => {
  const currentUser = getCurrentUser()
  if (!currentUser) return ""

  const reports = getReports().filter((r) => r.reporterId === currentUser.id)

  if (reports.length === 0) {
    return `<p class="no-data"><i class="fas fa-info-circle"></i> You haven't reported any documents yet. <a href="#" onclick="showPage('report'); return false;">Report a found document</a> to help someone recover their lost item.</p>`
  }

  let html = ""
  reports.forEach((report) => {
    const category = getCategoryById(report.documentType)
    const location = getLocationById(report.locationId)
    const outlet = getOutletById(report.outletId)

    html += `
            <div class="dashboard-card">
                <div class="card-header">
                    <h4>${category ? category.name : "Unknown"}</h4>
                    <span class="status ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
                </div>
                <div class="card-body">
                    <p><strong>Document Number:</strong> ${report.documentNumber}</p>
                    <p><strong>Name on Document:</strong> ${report.documentName}</p>
                    <p><strong>Location:</strong> ${location ? location.name : "Unknown"}</p>
                    <p><strong>Outlet:</strong> ${outlet ? outlet.name : "Unknown"}</p>
                    <p><strong>Date Reported:</strong> ${new Date(report.dateReported).toLocaleDateString()}</p>
                    <p><strong>Reward Status:</strong> 
                        <span class="badge ${report.reporterPaid ? "badge-success" : "badge-pending"}">
                            ${report.reporterPaid ? "Paid" : "Pending"}
                        </span>
                    </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary view-document" data-id="${report.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `
  })

  return html
}

const generateAgentPendingDocumentsHTML = (locationId, outletId) => {
  const reports = getReports().filter(
    (r) => r.locationId === locationId && r.outletId === outletId && r.status === "pending",
  )

  if (reports.length === 0) {
    return `<p class="no-data"><i class="fas fa-info-circle"></i> No pending documents at your outlet.</p>`
  }

  let html = ""
  reports.forEach((report) => {
    const category = getCategoryById(report.documentType)
    const reporter = getUserById(report.reporterId)

    html += `
            <div class="dashboard-card">
                <div class="card-header">
                    <h4>${category ? category.name : "Unknown"}</h4>
                    <span class="status pending">Pending</span>
                </div>
                <div class="card-body">
                    <p><strong>Document Number:</strong> ${report.documentNumber}</p>
                    <p><strong>Name on Document:</strong> ${report.documentName}</p>
                    <p><strong>Reported By:</strong> ${reporter ? reporter.name : "Unknown"}</p>
                    <p><strong>Date Reported:</strong> ${new Date(report.dateReported).toLocaleDateString()}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary view-document" data-id="${report.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn btn-success mark-claimed" data-id="${report.id}">
                        <i class="fas fa-check-circle"></i> Mark as Claimed
                    </button>
                </div>
            </div>
        `
  })

  return html
}

const generateAgentActivityTableHTML = (locationId, outletId) => {
  const reports = getReports()
    .filter((r) => r.locationId === locationId && r.outletId === outletId)
    .sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))
    .slice(0, 10)

  if (reports.length === 0) {
    return `<tr><td colspan="5" class="no-data">No activity found at your outlet.</td></tr>`
  }

  let html = ""
  reports.forEach((report) => {
    const category = getCategoryById(report.documentType)

    html += `
            <tr>
                <td>${report.documentNumber}</td>
                <td>${category ? category.name : "Unknown"}</td>
                <td>${new Date(report.dateReported).toLocaleDateString()}</td>
                <td><span class="status-badge ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span></td>
                <td>
                    <button class="btn-icon view-document" data-id="${report.id}" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    ${
                      report.status === "pending"
                        ? `
                    <button class="btn-icon mark-claimed" data-id="${report.id}" title="Mark as Claimed">
                        <i class="fas fa-check-circle"></i>
                    </button>
                    `
                        : ""
                    }
                </td>
            </tr>
        `
  })

  return html
}

const generateAdminReportsTableHTML = () => {
  const reports = getReports()
    .sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))
    .slice(0, 10)

  if (reports.length === 0) {
    return `<tr><td colspan="7" class="no-data">No reports found.</td></tr>`
  }

  let html = ""
  reports.forEach((report) => {
    const category = getCategoryById(report.documentType)
    const location = getLocationById(report.locationId)

    html += `
            <tr>
                <td>${report.id}</td>
                <td>${report.documentNumber}</td>
                <td>${category ? category.name : "Unknown"}</td>
                <td>${location ? location.name : "Unknown"}</td>
                <td>${new Date(report.dateReported).toLocaleDateString()}</td>
                <td><span class="status-badge ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span></td>
                <td>
                    <button class="btn-icon view-document" data-id="${report.id}" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon edit-document" data-id="${report.id}" title="Edit Document">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon delete-document" data-id="${report.id}" title="Delete Document">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `
  })

  return html
}

const generateAdminUsersTableHTML = () => {
  const users = getUsers().sort((a, b) => new Date(b.dateJoined) - new Date(a.dateJoined))

  if (users.length === 0) {
    return `<tr><td colspan="6" class="no-data">No users found.</td></tr>`
  }

  let html = ""
  users.forEach((user) => {
    html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><span class="badge badge-${user.userType}">${user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}</span></td>
                <td>${new Date(user.dateJoined).toLocaleDateString()}</td>
                <td>
                    <button class="btn-icon edit-user" data-id="${user.id}" title="Edit User">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon delete-user" data-id="${user.id}" title="Delete User">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `
  })

  return html
}

const addDashboardEventListeners = (userType) => {
  // Add event listeners for view document buttons
  document.querySelectorAll(".view-document").forEach((button) => {
    button.addEventListener("click", (e) => {
      const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
      openDocumentDetails(reportId)
    })
  })

  // Add event listeners for mark as claimed buttons (agent only)
  if (userType === "agent") {
    document.querySelectorAll(".mark-claimed").forEach((button) => {
      button.addEventListener("click", (e) => {
        const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
        openMarkAsClaimedModal(reportId)
      })
    })
  }

  // Add event listeners for admin actions
  if (userType === "admin") {
    document.querySelectorAll(".edit-document").forEach((button) => {
      button.addEventListener("click", (e) => {
        const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
        openEditDocumentModal(reportId)
      })
    })

    document.querySelectorAll(".delete-document").forEach((button) => {
      button.addEventListener("click", (e) => {
        const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
        confirmDeleteDocument(reportId)
      })
    })

    document.querySelectorAll(".edit-user").forEach((button) => {
      button.addEventListener("click", (e) => {
        const userId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
        openEditUserModal(userId)
      })
    })

    document.querySelectorAll(".delete-user").forEach((button) => {
      button.addEventListener("click", (e) => {
        const userId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
        confirmDeleteUser(userId)
      })
    })
  }
}

const updateReportPage = () => {
  if (!reportForm || !reportLoginRequired) return

  const currentUser = getCurrentUser()

  if (currentUser) {
    reportLoginRequired.style.display = "none"
    reportForm.style.display = "block"

    // Populate location dropdown
    populateLocationDropdown(foundLocation)

    // Populate document type dropdown
    populateDocumentTypeDropdown()

    // Set default date to today
    const today = new Date().toISOString().split("T")[0]
    document.getElementById("found-date").value = today
  } else {
    reportLoginRequired.style.display = "block"
    reportForm.style.display = "none"

    // Add event listeners for login/register links
    document.getElementById("report-login-link")?.addEventListener("click", (e) => {
      e.preventDefault()
      openLoginModal()
    })

    document.getElementById("report-register-link")?.addEventListener("click", (e) => {
      e.preventDefault()
      openRegisterModal()
    })
  }
}

// Modal Functions
const openLoginModal = () => {
  if (!modalContainer || !loginModal || !registerModal || !documentDetailsModal) return

  modalContainer.style.display = "block"
  loginModal.style.display = "block"
  registerModal.style.display = "none"
  documentDetailsModal.style.display = "none"

  // Clear form
  if (loginForm) loginForm.reset()
}

const openRegisterModal = () => {
  if (!modalContainer || !loginModal || !registerModal || !documentDetailsModal) return

  modalContainer.style.display = "block"
  registerModal.style.display = "block"
  loginModal.style.display = "none"
  documentDetailsModal.style.display = "none"

  // Clear form
  if (registerForm) registerForm.reset()

  // Populate location dropdown for agent registration
  populateLocationDropdown(agentLocation)
}

const closeModals = () => {
  if (!modalContainer) return

  modalContainer.style.display = "none"

  if (loginModal) loginModal.style.display = "none"
  if (registerModal) registerModal.style.display = "none"
  if (documentDetailsModal) documentDetailsModal.style.display = "none"
  if (loginRequiredModal) loginRequiredModal.style.display = "none"
}

// Dropdown Population Functions
const populateLocationDropdown = (selectElement) => {
  if (!selectElement) return

  const locations = getLocations()

  // Clear existing options except the first one
  while (selectElement.options.length > 1) {
    selectElement.remove(1)
  }

  // Add location options
  locations.forEach((location) => {
    const option = document.createElement("option")
    option.value = location.id
    option.textContent = location.name
    selectElement.appendChild(option)
  })
}

const populateOutletDropdown = (locationId, selectElement) => {
  if (!selectElement) return

  const outlets = getOutletsByLocationId(Number.parseInt(locationId))

  // Clear existing options except the first one
  while (selectElement.options.length > 1) {
    selectElement.remove(1)
  }

  // Add outlet options
  outlets.forEach((outlet) => {
    const option = document.createElement("option")
    option.value = outlet.id
    option.textContent = outlet.name
    selectElement.appendChild(option)
  })
}

const populateLocationFilter = () => {
  if (!locationFilter) return

  const locations = getLocations()

  // Clear existing options except the first one
  while (locationFilter.options.length > 1) {
    locationFilter.remove(1)
  }

  // Add location options
  locations.forEach((location) => {
    const option = document.createElement("option")
    option.value = location.id
    option.textContent = location.name
    locationFilter.appendChild(option)
  })
}

const populateCategoryFilter = () => {
  const categoryFilter = document.getElementById("category-filter")
  if (!categoryFilter) return

  const categories = getCategories()

  // Clear existing options except the first one
  while (categoryFilter.options.length > 1) {
    categoryFilter.remove(1)
  }

  // Add category options
  categories.forEach((category) => {
    const option = document.createElement("option")
    option.value = category.id
    option.textContent = category.name
    categoryFilter.appendChild(option)
  })
}

const populateDocumentTypeDropdown = () => {
  const documentTypeSelect = document.getElementById("document-type")
  if (!documentTypeSelect) return

  const categories = getCategories()

  // Clear existing options except the first one
  while (documentTypeSelect.options.length > 1) {
    documentTypeSelect.remove(1)
  }

  // Add category options
  categories.forEach((category) => {
    const option = document.createElement("option")
    option.value = category.id
    option.textContent = category.name
    documentTypeSelect.appendChild(option)
  })
}

// Search Functions
const performSearch = () => {
  if (!searchInput || !resultsList || !resultsCount) return

  const searchTerm = searchInput.value.trim().toLowerCase()
  const categoryFilter = document.getElementById("category-filter")?.value
  const locationFilterValue = locationFilter?.value
  const dateFilter = document.getElementById("date-filter")?.value
  const sortBy = document.getElementById("sort-select")?.value

  let reports = getReports()

  // Apply filters
  if (searchTerm) {
    reports = reports.filter(
      (report) =>
        report.documentNumber.toLowerCase().includes(searchTerm) ||
        report.documentName.toLowerCase().includes(searchTerm),
    )
  }

  if (categoryFilter && categoryFilter !== "all") {
    reports = reports.filter((report) => report.documentType.toString() === categoryFilter)
  }

  if (locationFilterValue && locationFilterValue !== "all") {
    reports = reports.filter((report) => report.locationId.toString() === locationFilterValue)
  }

  if (dateFilter && dateFilter !== "all") {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const weekAgo = new Date(today)
    weekAgo.setDate(today.getDate() - 7)
    const monthAgo = new Date(today)
    monthAgo.setMonth(today.getMonth() - 1)
    const yearAgo = new Date(today)
    yearAgo.setFullYear(today.getFullYear() - 1)

    reports = reports.filter((report) => {
      const reportDate = new Date(report.dateReported)

      if (dateFilter === "today") {
        return reportDate >= today
      } else if (dateFilter === "week") {
        return reportDate >= weekAgo
      } else if (dateFilter === "month") {
        return reportDate >= monthAgo
      } else if (dateFilter === "year") {
        return reportDate >= yearAgo
      }

      return true
    })
  }

  // Apply sorting
  if (sortBy === "date-desc") {
    reports.sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))
  } else if (sortBy === "date-asc") {
    reports.sort((a, b) => new Date(a.dateReported) - new Date(b.dateReported))
  } else if (sortBy === "relevance" && searchTerm) {
    // Simple relevance sorting - exact matches first
    reports.sort((a, b) => {
      const aExact = a.documentNumber.toLowerCase() === searchTerm || a.documentName.toLowerCase() === searchTerm
      const bExact = b.documentNumber.toLowerCase() === searchTerm || b.documentName.toLowerCase() === searchTerm

      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
      return 0
    })
  }

  // Update results count
  resultsCount.textContent = `${reports.length} document${reports.length !== 1 ? "s" : ""} found`

  // Display results
  displaySearchResults(reports)
}

// Function to display search results
const displaySearchResults = (reports) => {
  if (!resultsList || !pagination) return

  if (reports.length === 0) {
    resultsList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No documents found</h3>
                <p>We couldn't find any documents matching your search. Try different keywords or <a href="#" data-page="report">report a found document</a>.</p>
            </div>
        `
    pagination.innerHTML = ""
    return
  }

  // Simple pagination (first 5 results)
  const displayReports = reports.slice(0, 5)

  let html = ""
  displayReports.forEach((report) => {
    const category = getCategoryById(report.documentType)
    const location = getLocationById(report.locationId)
    const dateReported = new Date(report.dateReported).toLocaleDateString()

    html += `
            <div class="result-item">
                <div class="result-header">
                    <div class="result-title">${category ? category.name : "Unknown Document"}</div>
                    <div class="result-date">${dateReported}</div>
                </div>
                <div class="result-details">
                    <div class="result-detail">
                        <i class="fas fa-id-card"></i>
                        <div>
                            <strong>Document Number:</strong>
                            <p>${report.documentNumber}</p>
                        </div>
                    </div>
                    <div class="result-detail">
                        <i class="fas fa-user"></i>
                        <div>
                            <strong>Name on Document:</strong>
                            <p>${report.documentName}</p>
                        </div>
                    </div>
                    <div class="result-detail">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Location:</strong>
                            <p>${location ? location.name : "Unknown"}</p>
                        </div>
                    </div>
                </div>
                <div class="result-actions">
                    <button class="btn btn-primary view-document-search" data-id="${report.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `
  })

  resultsList.innerHTML = html

  // Add pagination if needed
  if (reports.length > 5) {
    pagination.innerHTML = `
            <button class="active">1</button>
            <button>2</button>
            <button>3</button>
            <button disabled>...</button>
            <button>Next</button>
        `
  } else {
    pagination.innerHTML = ""
  }

  // Add event listeners for view document buttons
  document.querySelectorAll(".view-document-search").forEach((button) => {
    button.addEventListener("click", (e) => {
      const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
      handleViewDocument(reportId)
    })
  })
}

// Report Form Functions
const submitReport = (e) => {
  e.preventDefault()

  const currentUser = getCurrentUser()
  if (!currentUser) {
    createToast("You need to login to report a found document.", "error")
    openLoginModal()
    return
  }

  const documentType = document.getElementById("document-type")?.value
  const documentNumber = document.getElementById("document-number")?.value
  const documentName = document.getElementById("document-name")?.value
  const foundLocationId = document.getElementById("found-location")?.value
  const foundOutletId = document.getElementById("found-outlet")?.value
  const foundDate = document.getElementById("found-date")?.value
  const additionalDetails = document.getElementById("additional-details")?.value

  if (!documentType || !documentNumber || !documentName || !foundLocationId || !foundOutletId || !foundDate) {
    createToast("Please fill in all required fields.", "error")
    return
  }

  const reports = getReports()
  const newReport = {
    id: reports.length > 0 ? Math.max(...reports.map((r) => r.id)) + 1 : 1,
    documentType: Number.parseInt(documentType),
    documentNumber,
    documentName,
    reporterId: currentUser.id,
    locationId: Number.parseInt(foundLocationId),
    outletId: Number.parseInt(foundOutletId),
    dateFound: new Date(foundDate).toISOString(),
    dateReported: new Date().toISOString(),
    status: "pending",
    additionalDetails,
    claimedBy: null,
    dateClaimed: null,
    reporterPaid: false,
    ownerPaid: false,
  }

  reports.push(newReport)
  saveReports(reports)

  createToast("Document reported successfully! Thank you for helping someone recover their document.", "success")
  if (reportForm) reportForm.reset()
  showPage("dashboard")
}

// Home Search Functions
const performHomeSearch = () => {
  if (!homeSearchInput || !homeResultsList || !homeResultsCount || !homeSearchResultsSection) return

  const searchTerm = homeSearchInput.value.trim().toLowerCase()

  if (!searchTerm) {
    createToast("Please enter a search term", "info")
    return
  }

  let reports = getReports()

  // Filter reports by search term
  reports = reports.filter(
    (report) =>
      report.documentNumber.toLowerCase().includes(searchTerm) ||
      report.documentName.toLowerCase().includes(searchTerm),
  )

  // Update results count
  homeResultsCount.textContent = `${reports.length} document${reports.length !== 1 ? "s" : ""} found`

  // Display results
  displayHomeSearchResults(reports)

  // Show results section
  homeSearchResultsSection.style.display = "block"

  // Scroll to results
  homeSearchResultsSection.scrollIntoView({ behavior: "smooth" })
}

const displayHomeSearchResults = (reports) => {
  if (!homeResultsList || !homePagination) return

  if (reports.length === 0) {
    homeResultsList.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No documents found</h3>
        <p>We couldn't find any documents matching your search. Try different keywords or <a href="#" data-page="report">report a found document</a>.</p>
      </div>
    `
    homePagination.innerHTML = ""
    return
  }

  // Sort by date (newest first)
  reports.sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))

  // Simple pagination (first 5 results)
  const displayReports = reports.slice(0, 5)

  let html = ""
  displayReports.forEach((report) => {
    const category = getCategoryById(report.documentType)
    const location = getLocationById(report.locationId)
    const dateReported = new Date(report.dateReported).toLocaleDateString()

    html += `
      <div class="result-item">
        <div class="result-header">
          <div class="result-title">${category ? category.name : "Unknown Document"}</div>
          <div class="result-date">${dateReported}</div>
        </div>
        <div class="result-details">
          <div class="result-detail">
            <i class="fas fa-id-card"></i>
            <div>
              <strong>Document Number:</strong>
              <p>${report.documentNumber}</p>
            </div>
          </div>
          <div class="result-detail">
            <i class="fas fa-user"></i>
            <div>
              <strong>Name on Document:</strong>
              <p>${report.documentName}</p>
            </div>
          </div>
          <div class="result-detail">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <strong>Location:</strong>
              <p>${location ? location.name : "Unknown"}</p>
            </div>
          </div>
        </div>
        <div class="result-actions">
          <button class="btn btn-primary view-document-home" data-id="${report.id}">
            <i class="fas fa-eye"></i> View Details
          </button>
        </div>
      </div>
    `
  })

  homeResultsList.innerHTML = html

  // Add pagination if needed
  if (reports.length > 5) {
    homePagination.innerHTML = `
      <button class="active">1</button>
      <button>2</button>
      <button>3</button>
      <button disabled>...</button>
      <button>Next</button>
    `
  } else {
    homePagination.innerHTML = ""
  }

  // Add event listeners for view document buttons
  document.querySelectorAll(".view-document-home").forEach((button) => {
    button.addEventListener("click", (e) => {
      const reportId = Number.parseInt(e.currentTarget.getAttribute("data-id"))
      handleViewDocument(reportId)
    })
  })
}

const handleViewDocument = (reportId) => {
  const report = getReportById(reportId)
  const currentUser = getCurrentUser()

  // Store the current document being viewed
  currentViewingDocument = report

  // Check if user is logged in and is a reportee
  if (!currentUser) {
    // Show login required modal
    openLoginRequiredModal()
    return
  } else if (
    currentUser.userType !== "reportee" &&
    currentUser.userType !== "admin" &&
    currentUser.userType !== "agent"
  ) {
    // If user is not a reportee, admin, or agent, show a message
    createToast("You need to be registered as a document owner to view document details", "error")
    return
  }

  // User is logged in and is a reportee, admin, or agent - show document details
  openDocumentDetails(reportId)
}

const openLoginRequiredModal = () => {
  if (!modalContainer || !loginRequiredModal) return

  modalContainer.style.display = "block"
  loginRequiredModal.style.display = "block"

  if (loginModal) loginModal.style.display = "none"
  if (registerModal) registerModal.style.display = "none"
  if (documentDetailsModal) documentDetailsModal.style.display = "none"
}

const clearHomeSearchResults = () => {
  if (!homeSearchInput || !homeSearchResultsSection) return

  homeSearchInput.value = ""
  homeSearchResultsSection.style.display = "none"
}

// Function to open document details
const openDocumentDetails = (reportId) => {
  if (!modalContainer || !documentDetailsModal) return

  const report = getReportById(reportId)
  if (!report) return

  const category = getCategoryById(report.documentType)
  const location = getLocationById(report.locationId)
  const outlet = getOutletById(report.outletId)
  const reporter = getUserById(report.reporterId)

  modalContainer.style.display = "block"
  documentDetailsModal.style.display = "block"

  if (loginModal) loginModal.style.display = "none"
  if (registerModal) registerModal.style.display = "none"
  if (loginRequiredModal) loginRequiredModal.style.display = "none"

  const dateReported = new Date(report.dateReported).toLocaleDateString()
  const dateFound = new Date(report.dateFound).toLocaleDateString()

  let claimButton = ""
  const currentUser = getCurrentUser()

  // Only show claim button for reportees and if document is not claimed
  if (currentUser && currentUser.userType === "reportee" && report.status === "pending") {
    claimButton = `
      <button class="btn btn-success claim-document" data-id="${report.id}">
        <i class="fas fa-hand-holding"></i> Claim This Document
      </button>
    `
  }

  const detailsContent = documentDetailsModal.querySelector("#document-details-content")
  if (detailsContent) {
    detailsContent.innerHTML = `
      <div class="document-details">
        <h3>${category ? category.name : "Unknown Document"}</h3>
        <div class="document-status">
          <span class="status ${report.status}">${report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
        </div>
        
        <div class="details-section">
          <h4>Document Information</h4>
          <div class="details-grid">
            <div class="detail-item">
              <label>Document Number:</label>
              <p>${report.documentNumber}</p>
            </div>
            <div class="detail-item">
              <label>Name on Document:</label>
              <p>${report.documentName}</p>
            </div>
            <div class="detail-item">
              <label>Date Found:</label>
              <p>${dateFound}</p>
            </div>
            <div class="detail-item">
              <label>Date Reported:</label>
              <p>${dateReported}</p>
            </div>
          </div>
        </div>
        
        <div class="details-section">
          <h4>Location Information</h4>
          <div class="details-grid">
            <div class="detail-item">
              <label>Location:</label>
              <p>${location ? location.name : "Unknown"}</p>
            </div>
            <div class="detail-item">
              <label>Outlet:</label>
              <p>${outlet ? outlet.name : "Unknown"}</p>
            </div>
            <div class="detail-item">
              <label>Address:</label>
              <p>${location ? location.address : "Unknown"}</p>
            </div>
            <div class="detail-item">
              <label>Contact:</label>
              <p>${location ? location.phone : "Unknown"}</p>
            </div>
          </div>
        </div>
        
        <div class="details-section">
          <h4>Additional Information</h4>
          <p>${report.additionalDetails || "No additional details provided."}</p>
        </div>
        
        <div class="document-actions">
          ${claimButton}
          <button class="btn btn-secondary close-details">
            <i class="fas fa-times"></i> Close
          </button>
        </div>
      </div>
    `

    // Add event listener for claim button
    const claimBtn = documentDetailsModal.querySelector(".claim-document")
    if (claimBtn) {
      claimBtn.addEventListener("click", () => {
        claimDocument(reportId)
      })
    }

    // Add event listener for close button
    documentDetailsModal.querySelector(".close-details")?.addEventListener("click", closeModals)
  }
}

// Function to handle document claiming
const claimDocument = (reportId) => {
  const currentUser = getCurrentUser()
  if (!currentUser || currentUser.userType !== "reportee") {
    createToast("You must be logged in as a document owner to claim documents", "error")
    return
  }

  const reports = getReports()
  const reportIndex = reports.findIndex((r) => r.id === reportId)

  if (reportIndex === -1) {
    createToast("Document not found", "error")
    return
  }

  // Update report status
  reports[reportIndex].status = "claimed"
  reports[reportIndex].claimedBy = currentUser.id
  reports[reportIndex].dateClaimed = new Date().toISOString()

  // Save updated reports
  saveReports(reports)

  // Close modal
  closeModals()

  // Show success message
  createToast("Document claimed successfully! Please visit the collection point to retrieve your document.", "success")

  // Refresh dashboard if on dashboard page
  if (document.getElementById("dashboard").classList.contains("active")) {
    updateAuthenticatedPages()
  }
}

// Load locations function
const loadLocations = () => {
  if (!locationsContainer) return

  const locations = getLocations()

  let html = ""

  locations.forEach((location) => {
    html += `
      <div class="location-card">
        <div class="location-image">
          <i class="fas fa-building"></i>
        </div>
        <div class="location-details">
          <h3 class="location-name">${location.name}</h3>
          <div class="location-info">
            <p><i class="fas fa-map-marker-alt"></i> ${location.address}</p>
            <p><i class="fas fa-phone"></i> ${location.phone}</p>
            <p><i class="fas fa-envelope"></i> ${location.email}</p>
          </div>
          <div class="location-outlets">
            <h4>Outlets</h4>
            <div class="outlets-list">
              ${getOutletsByLocationId(location.id)
                .map((outlet) => `<span class="outlet-tag">${outlet.name}</span>`)
                .join("")}
            </div>
          </div>
        </div>
      </div>
    `
  })

  locationsContainer.innerHTML = html
}

// Placeholder functions for features not yet implemented
const openEditProfileModal = () => {
  createToast("Edit profile feature coming soon!", "info")
}

const openChangePasswordModal = () => {
  createToast("Change password feature coming soon!", "info")
}

const openMarkAsClaimedModal = (reportId) => {
  createToast("Mark as claimed feature coming soon!", "info")
}

const openEditDocumentModal = (reportId) => {
  createToast("Edit document feature coming soon!", "info")
}

const confirmDeleteDocument = (reportId) => {
  if (confirm("Are you sure you want to delete this document?")) {
    const reports = getReports()
    const reportIndex = reports.findIndex((r) => r.id === reportId)

    if (reportIndex !== -1) {
      reports.splice(reportIndex, 1)
      saveReports(reports)
      createToast("Document deleted successfully", "success")

      // Refresh current page
      if (document.getElementById("dashboard").classList.contains("active")) {
        updateAuthenticatedPages()
      } else if (document.getElementById("search").classList.contains("active")) {
        performSearch()
      }
    }
  }
}

const openEditUserModal = (userId) => {
  createToast("Edit user feature coming soon!", "info")
}

const confirmDeleteUser = (userId) => {
  createToast("Delete user feature coming soon!", "info")
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize database
  initializeDatabase()

  // Update UI based on authentication status
  updateAuthUI()

  // Add CSS for toast notifications
  const toastStyles = document.createElement("style")
  toastStyles.textContent = `
        .toast {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: white;
            color: var(--text-color);
            padding: 0;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            max-width: 350px;
            width: 100%;
            z-index: 9999;
            transform: translateY(100px);
            opacity: 0;
            transition: transform 0.3s, opacity 0.3s;
            overflow: hidden;
        }
        
        .toast-visible {
            transform: translateY(0);
            opacity: 1;
        }
        
        .toast-hiding {
            transform: translateY(100px);
            opacity: 0;
        }
        
        .toast-content {
            display: flex;
            align-items: flex-start;
            padding: 16px;
            gap: 12px;
        }
        
        .toast i {
            font-size: 20px;
            margin-top: 2px;
        }
        
        .toast-success {
            border-left: 4px solid var(--success-color);
        }
        
        .toast-success i {
            color: var(--success-color);
        }
        
        .toast-error {
            border-left: 4px solid var(--danger-color);
        }
        
        .toast-error i {
            color: var(--danger-color);
        }
        
        .toast-info {
            border-left: 4px solid var(--primary-color);
        }
        
        .toast-info i {
            color: var(--primary-color);
        }
        
        .toast-close {
            position: absolute;
            top: 8px;
            right: 8px;
            background: none;
            border: none;
            color: var(--text-light);
            cursor: pointer;
            font-size: 14px;
            padding: 4px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
        }
        
        .toast-close:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
  `
  document.head.appendChild(toastStyles)

  // Navigation
  if (mainNav) {
    mainNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault()
        const pageId = e.target.getAttribute("data-page")
        showPage(pageId)
      }
    })
  }

  // Footer navigation
  document.querySelectorAll("footer a[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const pageId = e.target.getAttribute("data-page")
      showPage(pageId)
    })
  })

  // Auth buttons
  if (loginBtn) {
    loginBtn.addEventListener("click", openLoginModal)
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", openRegisterModal)
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logout()
      updateAuthUI()
      showPage("home")
      createToast("You have been logged out successfully", "success")
    })
  }

  // Modal close buttons
  document.querySelectorAll(".close-modal").forEach((button) => {
    button.addEventListener("click", closeModals)
  })

  // Close modal when clicking outside
  if (modalContainer) {
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        closeModals()
      }
    })
  }

  // Switch between login and register
  if (switchToRegister) {
    switchToRegister.addEventListener("click", (e) => {
      e.preventDefault()
      if (loginModal) loginModal.style.display = "none"
      if (registerModal) registerModal.style.display = "block"
    })
  }

  if (switchToLogin) {
    switchToLogin.addEventListener("click", (e) => {
      e.preventDefault()
      if (registerModal) registerModal.style.display = "none"
      if (loginModal) loginModal.style.display = "block"
    })
  }

  // User type change in registration
  if (registerUserType) {
    registerUserType.addEventListener("change", () => {
      if (agentLocationGroup && agentOutletGroup) {
        if (registerUserType.value === "agent") {
          agentLocationGroup.style.display = "block"
          agentOutletGroup.style.display = "block"
        } else {
          agentLocationGroup.style.display = "none"
          agentOutletGroup.style.display = "none"
        }
      }
    })
  }

  // Location change for outlets
  if (foundLocation) {
    foundLocation.addEventListener("change", () => {
      if (foundLocation.value && foundOutlet) {
        populateOutletDropdown(foundLocation.value, foundOutlet)
      }
    })
  }

  if (agentLocation) {
    agentLocation.addEventListener("change", () => {
      if (agentLocation.value && agentOutlet) {
        populateOutletDropdown(agentLocation.value, agentOutlet)
      }
    })
  }

  // Hero buttons
  if (searchDocsBtn) {
    searchDocsBtn.addEventListener("click", () => {
      showPage("search")
    })
  }

  if (reportFoundBtn) {
    reportFoundBtn.addEventListener("click", () => {
      showPage("report")
    })
  }

  // Login form submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("login-email")?.value
      const password = document.getElementById("login-password")?.value

      if (!email || !password) {
        createToast("Please enter both email and password", "error")
        return
      }

      const user = login(email, password)

      if (user) {
        updateAuthUI()
        closeModals()
        showPage("dashboard")
        createToast(`Welcome back, ${user.name}!`, "success")
      } else {
        createToast("Invalid email or password. Please try again.", "error")
      }
    })
  }

  // Register form submission
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("register-name")?.value
      const email = document.getElementById("register-email")?.value
      const phone = document.getElementById("register-phone")?.value
      const password = document.getElementById("register-password")?.value
      const confirmPassword = document.getElementById("register-confirm-password")?.value
      const userType = document.getElementById("register-user-type")?.value
      const termsAgreed = document.getElementById("register-terms")?.checked

      if (!name || !email || !phone || !password || !confirmPassword || !userType) {
        createToast("Please fill in all required fields.", "error")
        return
      }

      if (password !== confirmPassword) {
        createToast("Passwords do not match.", "error")
        return
      }

      if (!termsAgreed) {
        createToast("You must agree to the Terms and Conditions.", "error")
        return
      }

      // Check if email already exists
      const users = getUsers()
      if (users.some((user) => user.email === email)) {
        createToast("Email already in use. Please use a different email or login.", "error")
        return
      }

      const userData = {
        name,
        email,
        phone,
        password,
        userType,
      }

      // Add location and outlet for agents
      if (userType === "agent") {
        const locationId = document.getElementById("agent-location")?.value
        const outletId = document.getElementById("agent-outlet")?.value

        if (!locationId || !outletId) {
          createToast("Please select a location and outlet.", "error")
          return
        }

        userData.locationId = Number.parseInt(locationId)
        userData.outletId = Number.parseInt(outletId)
      }

      const newUser = register(userData)

      if (newUser) {
        login(email, password)
        updateAuthUI()
        closeModals()
        showPage("dashboard")
        createToast("Registration successful! Welcome to DocuFind.", "success")
      } else {
        createToast("Registration failed. Please try again.", "error")
      }
    })
  }

  // Report form submission
  if (reportForm) {
    reportForm.addEventListener("submit", submitReport)
  }

  // Search functionality
  if (searchButton) {
    searchButton.addEventListener("click", performSearch)
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })
  }

  document.getElementById("sort-select")?.addEventListener("change", performSearch)
  document.getElementById("category-filter")?.addEventListener("change", performSearch)
  locationFilter?.addEventListener("change", performSearch)
  document.getElementById("date-filter")?.addEventListener("change", performSearch)

  // Home search event listeners
  if (homeSearchButton) {
    homeSearchButton.addEventListener("click", performHomeSearch)
  }

  if (homeSearchInput) {
    homeSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performHomeSearch()
      }
    })
  }

  if (clearHomeSearch) {
    clearHomeSearch.addEventListener("click", clearHomeSearchResults)
  }

  // Search suggestion clicks
  document.querySelectorAll(".search-suggestions span").forEach((span) => {
    span.addEventListener("click", () => {
      if (homeSearchInput) {
        homeSearchInput.value = span.textContent
        performHomeSearch()
      }
    })
  })

  // Login required modal buttons
  if (loginRequiredLoginBtn) {
    loginRequiredLoginBtn.addEventListener("click", () => {
      if (loginRequiredModal) loginRequiredModal.style.display = "none"
      openLoginModal()
    })
  }

  if (loginRequiredRegisterBtn) {
    loginRequiredRegisterBtn.addEventListener("click", () => {
      if (loginRequiredModal) loginRequiredModal.style.display = "none"
      openRegisterModal()

      // Pre-select reportee user type
      const userTypeSelect = document.getElementById("register-user-type")
      if (userTypeSelect) userTypeSelect.value = "reportee"
    })
  }

  // Fix mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector("nav")

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Show home page by default
  showPage("home")
})

// Format date function
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

// Generate unique ID
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Calculate total revenue
const calculateTotalRevenue = () => {
  // This would normally calculate from transactions
  return 1250.75
}

// Calculate period revenue
const calculatePeriodRevenue = (period) => {
  // This would normally calculate from transactions based on period
  switch (period) {
    case "week":
      return 325.5
    case "month":
      return 1250.75
    case "year":
      return 15420.25
    default:
      return 325.5
  }
}

// Calculate reporter revenue
const calculateReporterRevenue = (period) => {
  // This would normally calculate from transactions based on period
  switch (period) {
    case "week":
      return 97.65
    case "month":
      return 375.22
    case "year":
      return 4626.07
    default:
      return 97.65
  }
}

// Calculate reportee revenue
const calculateReporteeRevenue = (period) => {
  // This would normally calculate from transactions based on period
  switch (period) {
    case "week":
      return 227.85
    case "month":
      return 875.53
    case "year":
      return 10794.18
    default:
      return 227.85
  }
}

// Update revenue stats
const updateRevenueStats = (period) => {
  const periodRevenueElement = document.getElementById("period-revenue")
  const reporterRevenueElement = document.getElementById("reporter-revenue")
  const reporteeRevenueElement = document.getElementById("reportee-revenue")

  if (periodRevenueElement) {
    periodRevenueElement.textContent = `$${calculatePeriodRevenue(period).toFixed(2)}`
  }

  if (reporterRevenueElement) {
    reporterRevenueElement.textContent = `$${calculateReporterRevenue(period).toFixed(2)}`
  }

  if (reporteeRevenueElement) {
    reporteeRevenueElement.textContent = `$${calculateReporteeRevenue(period).toFixed(2)}`
  }
}

// Calculate reporter earnings
const calculateReporterEarnings = (reporterId) => {
  // This would normally calculate from transactions
  return 325.5
}

// Calculate reportee fees
const calculateReporteeFees = (reporteeId) => {
  // This would normally calculate from transactions
  return 150.25
}

