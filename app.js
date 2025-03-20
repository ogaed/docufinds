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
    authSection.style.display = "none"
    userProfile.style.display = "flex"
    usernameDisplay.textContent = currentUser.name

    // Update navigation based on user type
    updateNavigationForUserType(currentUser.userType)
  } else {
    authSection.style.display = "flex"
    userProfile.style.display = "none"

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

  if (currentUser) {
    // Update user role display in the header
    const usernameDisplay = document.getElementById("username-display")
    usernameDisplay.innerHTML = `${currentUser.name} <span class="user-role">(${currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1)})</span>`

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
      const reportId = Number.parseInt(e.target.getAttribute("data-id"))
      openDocumentDetails(reportId)
    })
  })

  // Add event listeners for mark as claimed buttons (agent only)
  if (userType === "agent") {
    document.querySelectorAll(".mark-claimed").forEach((button) => {
      button.addEventListener("click", (e) => {
        const reportId = Number.parseInt(e.target.getAttribute("data-id"))
        openMarkAsClaimedModal(reportId)
      })
    })
  }

  // Add event listeners for admin actions
  if (userType === "admin") {
    document.querySelectorAll(".edit-document").forEach((button) => {
      button.addEventListener("click", (e) => {
        const reportId = Number.parseInt(e.target.getAttribute("data-id"))
        openEditDocumentModal(reportId)
      })
    })

    document.querySelectorAll(".delete-document").forEach((button) => {
      button.addEventListener("click", (e) => {
        const reportId = Number.parseInt(e.target.getAttribute("data-id"))
        confirmDeleteDocument(reportId)
      })
    })

    document.querySelectorAll(".edit-user").forEach((button) => {
      button.addEventListener("click", (e) => {
        const userId = Number.parseInt(e.target.getAttribute("data-id"))
        openEditUserModal(userId)
      })
    })

    document.querySelectorAll(".delete-user").forEach((button) => {
      button.addEventListener("click", (e) => {
        const userId = Number.parseInt(e.target.getAttribute("data-id"))
        confirmDeleteUser(userId)
      })
    })
  }
}

const updateReportPage = () => {
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
    document.getElementById("report-login-link").addEventListener("click", (e) => {
      e.preventDefault()
      openLoginModal()
    })

    document.getElementById("report-register-link").addEventListener("click", (e) => {
      e.preventDefault()
      openRegisterModal()
    })
  }
}

// Modal Functions
const openLoginModal = () => {
  modalContainer.style.display = "block"
  loginModal.style.display = "block"
  registerModal.style.display = "none"
  documentDetailsModal.style.display = "none"

  // Clear form
  loginForm.reset()
}

const openRegisterModal = () => {
  modalContainer.style.display = "block"
  registerModal.style.display = "block"
  loginModal.style.display = "none"
  documentDetailsModal.style.display = "none"

  // Clear form
  registerForm.reset()

  // Populate location dropdown for agent registration
  populateLocationDropdown(agentLocation)
}

const closeModals = () => {
  modalContainer.style.display = "none"
  loginModal.style.display = "none"
  registerModal.style.display = "none"
  documentDetailsModal.style.display = "none"
  loginRequiredModal.style.display = "none"
}

// Dropdown Population Functions
const populateLocationDropdown = (selectElement) => {
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
  const searchTerm = searchInput.value.trim().toLowerCase()
  const categoryFilter = document.getElementById("category-filter").value
  const locationFilterValue = locationFilter.value
  const dateFilter = document.getElementById("date-filter").value
  const sortBy = document.getElementById("sort-select").value

  let reports = getReports()

  // Apply filters
  if (searchTerm) {
    reports = reports.filter(
      (report) =>
        report.documentNumber.toLowerCase().includes(searchTerm) ||
        report.documentName.toLowerCase().includes(searchTerm),
    )
  }

  if (categoryFilter) {
    reports = reports.filter((report) => report.documentType.toString() === categoryFilter)
  }

  if (locationFilterValue) {
    reports = reports.filter((report) => report.locationId.toString() === locationFilterValue)
  }

  if (dateFilter) {
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

  const documentType = document.getElementById("document-type").value
  const documentNumber = document.getElementById("document-number").value
  const documentName = document.getElementById("document-name").value
  const foundLocationId = document.getElementById("found-location").value
  const foundOutletId = document.getElementById("found-outlet").value
  const foundDate = document.getElementById("found-date").value
  const additionalDetails = document.getElementById("additional-details").value

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
  reportForm.reset()
  showPage("dashboard")
}

// Home Search Functions
const performHomeSearch = () => {
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
  modalContainer.style.display = "block"
  loginRequiredModal.style.display = "block"
  loginModal.style.display = "none"
  registerModal.style.display = "none"
  documentDetailsModal.style.display = "none"
}

const clearHomeSearchResults = () => {
  homeSearchInput.value = ""
  homeSearchResultsSection.style.display = "none"
}

// Function to open document details (existing function, just referenced here)
const openDocumentDetails = (reportId) => {
  const report = getReportById(reportId)
  const category = getCategoryById(report.documentType)
  const location = getLocationById(report.locationId)
  const outlet = getOutletById(report.outletId)
  const reporter = getUserById(report.reporterId)

  modalContainer.style.display = "block"
  documentDetailsModal.style.display = "block"
  loginModal.style.display = "none"
  registerModal.style.display = "none"
  loginRequiredModal.style.display = "none"

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

  documentDetailsModal.querySelector("#document-details-content").innerHTML = `
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
  documentDetailsModal.querySelector(".close-details").addEventListener("click", closeModals)
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
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault()
      const pageId = e.target.getAttribute("data-page")
      showPage(pageId)
    }
  })

  // Footer navigation
  document.querySelectorAll("footer a[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const pageId = e.target.getAttribute("data-page")
      showPage(pageId)
    })
  })

  // Auth buttons
  loginBtn.addEventListener("click", openLoginModal)
  registerBtn.addEventListener("click", openRegisterModal)
  logoutBtn.addEventListener("click", () => {
    logout()
    updateAuthUI()
    showPage("home")
    createToast("You have been logged out successfully", "success")
  })

  // Modal close buttons
  document.querySelectorAll(".close-modal").forEach((button) => {
    button.addEventListener("click", closeModals)
  })

  // Close modal when clicking outside
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      closeModals()
    }
  })

  // Switch between login and register
  switchToRegister.addEventListener("click", (e) => {
    e.preventDefault()
    loginModal.style.display = "none"
    registerModal.style.display = "block"
  })

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault()
    registerModal.style.display = "none"
    loginModal.style.display = "block"
  })

  // User type change in registration
  registerUserType.addEventListener("change", () => {
    if (registerUserType.value === "agent") {
      agentLocationGroup.style.display = "block"
      agentOutletGroup.style.display = "block"
    } else {
      agentLocationGroup.style.display = "none"
      agentOutletGroup.style.display = "none"
    }
  })

  // Location change for outlets
  foundLocation.addEventListener("change", () => {
    if (foundLocation.value) {
      populateOutletDropdown(foundLocation.value, foundOutlet)
    }
  })

  agentLocation.addEventListener("change", () => {
    if (agentLocation.value) {
      populateOutletDropdown(agentLocation.value, agentOutlet)
    }
  })

  // Hero buttons
  searchDocsBtn.addEventListener("click", () => {
    showPage("search")
  })

  reportFoundBtn.addEventListener("click", () => {
    showPage("report")
  })

  // Login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value

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

  // Register form submission
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("register-name").value
    const email = document.getElementById("register-email").value
    const phone = document.getElementById("register-phone").value
    const password = document.getElementById("register-password").value
    const confirmPassword = document.getElementById("register-confirm-password").value
    const userType = document.getElementById("register-user-type").value
    const termsAgreed = document.getElementById("register-terms").checked

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
      const locationId = document.getElementById("agent-location").value
      const outletId = document.getElementById("agent-outlet").value

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

  // Report form submission
  reportForm.addEventListener("submit", submitReport)

  // Search functionality
  searchButton.addEventListener("click", performSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })

  document.getElementById("sort-select")?.addEventListener("change", performSearch)
  document.getElementById("category-filter")?.addEventListener("change", performSearch)
  locationFilter?.addEventListener("change", performSearch)
  document.getElementById("date-filter")?.addEventListener("change", performSearch)

  // Home search event listeners
  homeSearchButton.addEventListener("click", performHomeSearch)
  homeSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performHomeSearch()
    }
  })

  clearHomeSearch.addEventListener("click", clearHomeSearchResults)

  // Search suggestion clicks
  document.querySelectorAll(".search-suggestions span").forEach((span) => {
    span.addEventListener("click", () => {
      homeSearchInput.value = span.textContent
      performHomeSearch()
    })
  })

  // Login required modal buttons
  loginRequiredLoginBtn.addEventListener("click", () => {
    loginRequiredModal.style.display = "none"
    openLoginModal()

    // Add event listener to login form for this specific case
    const loginFormHandler = (e) => {
      e.preventDefault()

      const email = document.getElementById("login-email").value
      const password = document.getElementById("login-password").value

      const user = login(email, password)

      if (user) {
        updateAuthUI()
        closeModals()

        // If user is a reportee, show document details
        if (user.userType === "reportee" && currentViewingDocument) {
          openDocumentDetails(currentViewingDocument.id)
        } else if (user.userType !== "reportee") {
          createToast("You need to be registered as a document owner to view document details", "error")
        }

        // Remove this specific event listener
        loginForm.removeEventListener("submit", loginForm.onsubmit)
        loginForm.addEventListener("submit", loginFormHandler)
      } else {
        createToast("Invalid email or password. Please try again.", "error")
      }
    }

    // Replace the existing event listener
    loginForm.removeEventListener("submit", loginForm.onsubmit)
    loginForm.addEventListener("submit", loginFormHandler)
  })

  loginRequiredRegisterBtn.addEventListener("click", () => {
    loginRequiredModal.style.display = "none"
    openRegisterModal()

    // Pre-select reportee user type
    document.getElementById("register-user-type").value = "reportee"
  })

  // Show home page by default
  showPage("home")
})

// Fix mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector("nav")

  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
  })
})

// Dummy functions to resolve errors
const loadLocations = () => {
  console.warn("loadLocations function is a placeholder.")
}

const openEditProfileModal = () => {
  console.warn("openEditProfileModal function is a placeholder.")
}

const openChangePasswordModal = () => {
  console.warn("openChangePasswordModal function is a placeholder.")
}

const openMarkAsClaimedModal = (reportId) => {
  console.warn("openMarkAsClaimedModal function is a placeholder. Report ID:", reportId)
}

const openEditDocumentModal = (reportId) => {
  console.warn("openEditDocumentModal function is a placeholder. Report ID:", reportId)
}

const confirmDeleteDocument = (reportId) => {
  console.warn("confirmDeleteDocument function is a placeholder. Report ID:", reportId)
}

const openEditUserModal = (userId) => {
  console.warn("openEditUserModal function is a placeholder. User ID:", userId)
}

const confirmDeleteUser = (userId) => {
  console.warn("confirmDeleteUser function is a placeholder. User ID:", userId)
}

// Global variables
let currentUser = null;
let documents = [];
let users = [];
let categories = [];
let locations = [];
let transactions = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Load data from localStorage
  loadData();
  
  // Setup navigation
  setupNavigation();
  
  // Setup event listeners
  setupEventListeners();
  
  // Check if user is logged in
  checkUserLogin();
  
  // Show home page by default
  showPageFunc('home');
});

// Load data from localStorage
function loadData() {
  documents = JSON.parse(localStorage.getItem('documents')) || [];
  users = JSON.parse(localStorage.getItem('users')) || [];
  categories = JSON.parse(localStorage.getItem('categories')) || getDefaultCategories();
  locations = JSON.parse(localStorage.getItem('locations')) || getDefaultLocations();
  transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
  // If no users exist, create default admin
  if (users.length === 0) {
    const adminUser = {
      id: generateId(),
      name: 'Admin User',
      email: 'admin@docufind.com',
      password: 'admin123',
      role: 'admin',
      createdAt: new Date().toISOString()
    };
    users.push(adminUser);
    saveData('users');
  }
}

// Default categories
function getDefaultCategories() {
  return [
    { id: 'cat1', name: 'ID Cards', description: 'National ID, Voter ID, etc.', fee: 20 },
    { id: 'cat2', name: 'Passports', description: 'International passports', fee: 50 },
    { id: 'cat3', name: 'Driver\'s License', description: 'Driving permits', fee: 30 },
    { id: 'cat4', name: 'Academic Certificates', description: 'Diplomas, degrees, etc.', fee: 25 },
    { id: 'cat5', name: 'Credit/Debit Cards', description: 'Bank cards', fee: 15 }
  ];
}

// Default locations
function getDefaultLocations() {
  return [
    {
      id: 'loc1',
      name: 'Central Police Station',
      address: '123 Main Street, Downtown',
      city: 'Metropolis',
      phone: '+1-555-123-4567',
      email: 'central@police.gov',
      hours: 'Mon-Fri: 8am-6pm, Sat: 9am-1pm',
      type: 'Police Station'
    },
    {
      id: 'loc2',
      name: 'City Hall Document Center',
      address: '456 Government Ave, Civic Center',
      city: 'Metropolis',
      phone: '+1-555-987-6543',
      email: 'documents@cityhall.gov',
      hours: 'Mon-Fri: 9am-5pm',
      type: 'Government Office'
    },
    {
      id: 'loc3',
      name: 'University Lost & Found',
      address: '789 Campus Drive, University District',
      city: 'Metropolis',
      phone: '+1-555-234-5678',
      email: 'lostandfound@university.edu',
      hours: 'Mon-Fri: 10am-4pm',
      type: 'Educational Institution'
    },
    {
      id: 'loc4',
      name: 'Metro Mall Information Desk',
      address: '101 Shopping Lane, Retail District',
      city: 'Metropolis',
      phone: '+1-555-345-6789',
      email: 'info@metromall.com',
      hours: 'Mon-Sun: 10am-9pm',
      type: 'Commercial Center'
    }
  ];
}

// Save data to localStorage
function saveData(dataType) {
  switch (dataType) {
    case 'documents':
      localStorage.setItem('documents', JSON.stringify(documents));
      break;
    case 'users':
      localStorage.setItem('users', JSON.stringify(users));
      break;
    case 'categories':
      localStorage.setItem('categories', JSON.stringify(categories));
      break;
    case 'locations':
      localStorage.setItem('locations', JSON.stringify(locations));
      break;
    case 'transactions':
      localStorage.setItem('transactions', JSON.stringify(transactions));
      break;
    case 'all':
      localStorage.setItem('documents', JSON.stringify(documents));
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('categories', JSON.stringify(categories));
      localStorage.setItem('locations', JSON.stringify(locations));
      localStorage.setItem('transactions', JSON.stringify(transactions));
      break;
  }
}

// Setup navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('href').substring(1);
      showPageFunc(page);
    });
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

// Setup event listeners
function setupEventListeners() {
  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
  
  // Register form
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }
  
  // Report document form
  const reportDocForm = document.getElementById('report-document-form');
  if (reportDocForm) {
    reportDocForm.addEventListener('submit', handleReportDocument);
  }
  
  // Search form
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', handleSearch);
  }
  
  // Home search form
  const homeSearchForm = document.getElementById('home-search-form');
  if (homeSearchForm) {
    homeSearchForm.addEventListener('submit', handleHomeSearch);
  }
  
  // Logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
  
  // Category form
  const categoryForm = document.getElementById('category-form');
  if (categoryForm) {
    categoryForm.addEventListener('submit', handleCategorySubmit);
  }
  
  // Location form
  const locationForm = document.getElementById('location-form');
  if (locationForm) {
    locationForm.addEventListener('submit', handleLocationSubmit);
  }
  
  // User form
  const userForm = document.getElementById('user-form');
  if (userForm) {
    userForm.addEventListener('submit', handleUserSubmit);
  }
  
  // Close modal buttons
  const closeModalBtns = document.querySelectorAll('.close-modal');
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });
  
  // Modal container click to close
  const modalContainers = document.querySelectorAll('.modal-container');
  modalContainers.forEach(container => {
    container.addEventListener('click', (e) => {
      if (e.target === container) {
        closeAllModals();
      }
    });
  });
  
  // Claim document buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('claim-document-btn')) {
      const documentId = e.target.getAttribute('data-id');
      showClaimDocumentModal(documentId);
    }
  });
  
  // Claim document form
  const claimDocForm = document.getElementById('claim-document-form');
  if (claimDocForm) {
    claimDocForm.addEventListener('submit', handleClaimDocument);
  }
  
  // Edit document buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-document-btn')) {
      const documentId = e.target.getAttribute('data-id');
      showEditDocumentModal(documentId);
    }
  });
  
  // Edit document form
  const editDocForm = document.getElementById('edit-document-form');
  if (editDocForm) {
    editDocForm.addEventListener('submit', handleEditDocument);
  }
  
  // Delete document buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-document-btn')) {
      const documentId = e.target.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this document?')) {
        deleteDocument(documentId);
      }
    }
  });
  
  // Edit category buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-category-btn')) {
      const categoryId = e.target.getAttribute('data-id');
      showEditCategoryModal(categoryId);
    }
  });
  
  // Delete category buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-category-btn')) {
      const categoryId = e.target.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this category?')) {
        deleteCategory(categoryId);
      }
    }
  });
  
  // Edit location buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-location-btn')) {
      const locationId = e.target.getAttribute('data-id');
      showEditLocationModal(locationId);
    }
  });
  
  // Delete location buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-location-btn')) {
      const locationId = e.target.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this location?')) {
        deleteLocation(locationId);
      }
    }
  });
  
  // Edit user buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-user-btn')) {
      const userId = e.target.getAttribute('data-id');
      showEditUserModal(userId);
    }
  });
  
  // Delete user buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-user-btn')) {
      const userId = e.target.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this user?')) {
        deleteUser(userId);
      }
    }
  });
  
  // Revenue period buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('revenue-period-btn')) {
      const period = e.target.getAttribute('data-period');
      updateRevenueStats(period);
      
      // Update active button
      document.querySelectorAll('.revenue-period-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
}

// Check if user is logged in
function checkUserLogin() {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    updateUIForLoggedInUser();
  } else {
    updateUIForLoggedOutUser();
  }
}

// Update UI for logged in user
function updateUIForLoggedInUser() {
  const authButtons = document.querySelector('.auth-buttons');
  const userProfile = document.querySelector('.user-profile');
  const usernameDisplay = document.getElementById('username-display');
  const userRoleDisplay = document.getElementById('user-role');
  
  if (authButtons) authButtons.style.display = 'none';
  if (userProfile) userProfile.style.display = 'flex';
  if (usernameDisplay) usernameDisplay.textContent = currentUser.name;
  if (userRoleDisplay) userRoleDisplay.textContent = currentUser.role;
  
  // Update navigation based on user role
  updateNavigation();
}

// Update UI for logged out user
function updateUIForLoggedOutUser() {
  const authButtons = document.querySelector('.auth-buttons');
  const userProfile = document.querySelector('.user-profile');
  
  if (authButtons) authButtons.style.display = 'flex';
  if (userProfile) userProfile.style.display = 'none';
  
  // Update navigation for logged out user
  updateNavigation();
}

// Update navigation based on user role
function updateNavigation() {
  const dashboardLink = document.getElementById('nav-dashboard');
  const reportDocLink = document.getElementById('nav-report-document');
  
  if (dashboardLink) {
    if (currentUser) {
      dashboardLink.style.display = 'block';
    } else {
      dashboardLink.style.display = 'none';
    }
  }
  
  if (reportDocLink) {
    if (currentUser && (currentUser.role === 'reporter' || currentUser.role === 'agent' || currentUser.role === 'admin')) {
      reportDocLink.style.display = 'block';
    } else {
      reportDocLink.style.display = 'none';
    }
  }
}

// Show page
function showPageFunc(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show the selected page
  const selectedPage = document.getElementById(`${pageId}-page`);
  if (selectedPage) {
    selectedPage.classList.add('active');
    
    // Special handling for specific pages
    if (pageId === 'dashboard' && currentUser) {
      loadDashboard();
    } else if (pageId === 'search') {
      loadSearchPage();
    } else if (pageId === 'locations') {
      loadLocationsPage();
    } else if (pageId === 'report-document' && !currentUser) {
      showLoginRequiredModal();
      return;
    }
  }
  
  // Update active navigation link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPage = link.getAttribute('href').substring(1);
    if (linkPage === pageId) {
      link.classList.add('active');
    }
  });
  
  // Close mobile menu after navigation
  const nav = document.querySelector('nav');
  if (nav) nav.classList.remove('active');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Handle login
function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    updateUIForLoggedInUser();
    showToast('Login successful!', 'success');
    
    // Redirect to dashboard
    showPageFunc('dashboard');
    
    // Reset form
    e.target.reset();
  } else {
    showToast('Invalid email or password!', 'error');
  }
}

// Handle register
function handleRegister(e) {
  e.preventDefault();
  
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;
  const role = document.getElementById('register-role').value;
  
  // Validate passwords match
  if (password !== confirmPassword) {
    showToast('Passwords do not match!', 'error');
    return;
  }
  
  // Check if email already exists
  if (users.some(u => u.email === email)) {
    showToast('Email already registered!', 'error');
    return;
  }
  
  // Create new user
  const newUser = {
    id: generateId(),
    name,
    email,
    password,
    role,
    createdAt: new Date().toISOString()
  };
  
  // Add user to users array
  users.push(newUser);
  saveData('users');
  
  // Log in the new user
  currentUser = newUser;
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  updateUIForLoggedInUser();
  
  showToast('Registration successful!', 'success');
  
  // Redirect to dashboard
  showPageFunc('dashboard');
  
  // Reset form
  e.target.reset();
}

// Handle logout
function handleLogout(e) {
  e.preventDefault();
  
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateUIForLoggedOutUser();
  
  showToast('Logged out successfully!', 'success');
  
  // Redirect to home
  showPageFunc('home');
}

// Handle report document
function handleReportDocument(e) {
  e.preventDefault();
  
  if (!currentUser) {
    showLoginRequiredModal();
    return;
  }
  
  const title = document.getElementById('document-title').value;
  const category = document.getElementById('document-category').value;
  const location = document.getElementById('document-location').value;
  const description = document.getElementById('document-description').value;
  const ownerName = document.getElementById('document-owner-name').value;
  const ownerContact = document.getElementById('document-owner-contact').value;
  
  // Get category fee
  const selectedCategory = categories.find(cat => cat.id === category);
  const fee = selectedCategory ? selectedCategory.fee : 0;
  
  // Create new document
  const newDocument = {
    id: generateId(),
    title,
    category,
    location,
    description,
    ownerName,
    ownerContact,
    status: 'pending',
    reportedBy: currentUser.id,
    reportedAt: new Date().toISOString(),
    fee
  };
  
  // Add document to documents array
  documents.push(newDocument);
  saveData('documents');
  
  // Create transaction for reporter fee
  const reporterTransaction = {
    id: generateId(),
    type: 'reporter_fee',
    amount: fee * 0.3, // 30% of fee goes to reporter
    documentId: newDocument.id,
    userId: currentUser.id,
    date: new Date().toISOString(),
    status: 'completed'
  };
  
  transactions.push(reporterTransaction);
  saveData('transactions');
  
  showToast('Document reported successfully!', 'success');
  
  // Reset form
  e.target.reset();
  
  // Redirect to dashboard
  showPageFunc('dashboard');
}

// Handle search
function handleSearch(e) {
  e.preventDefault();
  
  const searchQuery = document.getElementById('search-query').value.toLowerCase();
  const categoryFilter = document.getElementById('category-filter').value;
  const locationFilter = document.getElementById('location-filter').value;
  const dateFilter = document.getElementById('date-filter').value;
  
  let filteredDocuments = documents.filter(doc => {
    // Search query
    const matchesQuery = doc.title.toLowerCase().includes(searchQuery) || 
                         doc.description.toLowerCase().includes(searchQuery) ||
                         doc.ownerName.toLowerCase().includes(searchQuery);
    
    // Category filter
    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;
    
    // Location filter
    const matchesLocation = locationFilter === 'all' || doc.location === locationFilter;
    
// Date filter
    let matchesDate = true;
    if (dateFilter !== 'all') {
      const docDate = new Date(doc.reportedAt);
      const now = new Date();
      
      switch (dateFilter) {
        case 'today':
          matchesDate = docDate.toDateString() === now.toDateString();
          break;
        case 'week':
          const weekAgo = new Date(now.setDate(now.getDate() - 7));
          matchesDate = docDate >= weekAgo;
          break;
        case 'month':
          const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
          matchesDate = docDate >= monthAgo;
          break;
      }
    }
    
    return matchesQuery && matchesCategory && matchesLocation && matchesDate;
  });
  
  displaySearchResultsFunc(filteredDocuments);
}

// Handle home search
function handleHomeSearch(e) {
  e.preventDefault();
  
  const searchQuery = document.getElementById('home-search-input').value.toLowerCase();
  
  // Filter documents based on search query
  let filteredDocuments = documents.filter(doc => {
    return doc.title.toLowerCase().includes(searchQuery) || 
           doc.description.toLowerCase().includes(searchQuery) ||
           doc.ownerName.toLowerCase().includes(searchQuery);
  });
  
  // Show search results section
  const searchResultsSection = document.getElementById('home-search-results-section');
  if (searchResultsSection) {
    searchResultsSection.style.display = 'block';
  }
  
  // Display search results
  displayHomeSearchResultsFunc(filteredDocuments);
}

// Display search results
function displaySearchResultsFunc(results) {
  const resultsContainer = document.getElementById('search-results');
  const resultsCount = document.getElementById('results-count');
  
  if (resultsContainer) {
    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search"></i>
          <h3>No documents found</h3>
          <p>Try adjusting your search criteria or check back later.</p>
        </div>
      `;
    } else {
      let html = '<div class="results-list">';
      
      results.forEach(doc => {
        const category = categories.find(cat => cat.id === doc.category);
        const location = locations.find(loc => loc.id === doc.location);
        const reporter = users.find(user => user.id === doc.reportedBy);
        
        html += `
          <div class="result-item">
            <div class="result-header">
              <div class="result-title">${doc.title}</div>
              <div class="result-date">${formatDate(doc.reportedAt)}</div>
            </div>
            <div class="result-details">
              <div class="result-detail">
                <i class="fas fa-folder"></i>
                <div>
                  <strong>Category</strong>
                  <div>${category ? category.name : 'Unknown'}</div>
                </div>
              </div>
              <div class="result-detail">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Location</strong>
                  <div>${location ? location.name : 'Unknown'}</div>
                </div>
              </div>
              <div class="result-detail">
                <i class="fas fa-user"></i>
                <div>
                  <strong>Owner</strong>
                  <div>${doc.ownerName}</div>
                </div>
              </div>
              <div class="result-detail">
                <i class="fas fa-user-edit"></i>
                <div>
                  <strong>Reported By</strong>
                  <div>${reporter ? reporter.name : 'Unknown'}</div>
                </div>
              </div>
              <div class="result-detail">
                <i class="fas fa-tag"></i>
                <div>
                  <strong>Status</strong>
                  <div><span class="status ${doc.status}">${doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}</span></div>
                </div>
              </div>
            </div>
            <div class="result-actions">
              ${currentUser && currentUser.role === 'reportee' ? 
                `<button class="btn btn-primary claim-document-btn" data-id="${doc.id}">Claim Document</button>` : ''}
              ${currentUser && (currentUser.role === 'admin' || currentUser.role === 'agent' || currentUser.id === doc.reportedBy) ? 
                `<button class="btn btn-secondary edit-document-btn" data-id="${doc.id}">Edit</button>
                 <button class="btn btn-danger delete-document-btn" data-id="${doc.id}">Delete</button>` : ''}
            </div>
          </div>
        `;
      });
      
      html += '</div>';
      resultsContainer.innerHTML = html;
    }
  }
  
  if (resultsCount) {
    resultsCount.textContent = `${results.length} document${results.length !== 1 ? 's' : ''} found`;
  }
}

// Display home search results
function displayHomeSearchResultsFunc(results) {
  const resultsContainer = document.getElementById('home-search-results');
  
  if (resultsContainer) {
    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search"></i>
          <h3>No documents found</h3>
          <p>Try adjusting your search criteria or check back later.</p>
        </div>
      `;
    } else {
      let html = '<div class="results-list">';
      
      results.forEach(doc => {
        const category = categories.find(cat => cat.id === doc.category);
        const location = locations.find(loc => loc.id === doc.location);
        
        html += `
          <div class="result-item">
            <div class="result-header">
              <div class="result-title">${doc.title}</div>
              <div class="result-date">${formatDate(doc.reportedAt)}</div>
            </div>
            <div class="result-details">
              <div class="result-detail">
                <i class="fas fa-folder"></i>
                <div>
                  <strong>Category</strong>
                  <div>${category ? category.name : 'Unknown'}</div>
                </div>
              </div>
              <div class="result-detail">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Location</strong>
                  <div>${location ? location.name : 'Unknown'}</div>
                </div>
              </div>
              <div class="result-detail">
                <i class="fas fa-tag"></i>
                <div>
                  <strong>Status</strong>
                  <div><span class="status ${doc.status}">${doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}</span></div>
                </div>
              </div>
            </div>
            <div class="result-actions">
              <button class="btn btn-primary view-details-btn" onclick="showLoginRequiredModal()">View Details</button>
            </div>
          </div>
        `;
      });
      
      html += '</div>';
      resultsContainer.innerHTML = html;
    }
  }
}

// Load search page
function loadSearchPage() {
  // Populate category filter
  const categoryFilter = document.getElementById('category-filter');
  if (categoryFilter) {
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    
    categories.forEach(category => {
      categoryFilter.innerHTML += `<option value="${category.id}">${category.name}</option>`;
    });
  }
  
  // Populate location filter
  const locationFilter = document.getElementById('location-filter');
  if (locationFilter) {
    locationFilter.innerHTML = '<option value="all">All Locations</option>';
    
    locations.forEach(location => {
      locationFilter.innerHTML += `<option value="${location.id}">${location.name}</option>`;
    });
  }
}

// Load locations page
function loadLocationsPage() {
  const locationsContainer = document.getElementById('locations-container');
  
  if (locationsContainer) {
    let html = '';
    
    locations.forEach(location => {
      html += `
        <div class="location-card">
          <div class="location-image">
            <i class="fas fa-building"></i>
          </div>
          <div class="location-details">
            <h3 class="location-name">${location.name}</h3>
            <div class="location-info">
              <p><i class="fas fa-map-marker-alt"></i> ${location.address}, ${location.city}</p>
              <p><i class="fas fa-phone"></i> ${location.phone}</p>
              <p><i class="fas fa-envelope"></i> ${location.email}</p>
              <p><i class="fas fa-clock"></i> ${location.hours}</p>
            </div>
            <div class="location-outlets">
              <h4>Type</h4>
              <div class="outlets-list">
                <span class="outlet-tag">${location.type}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    
    locationsContainer.innerHTML = html;
  }
}

// Load dashboard
function loadDashboard() {
  if (!currentUser) {
    showPageFunc('home');
    return;
  }
  
  // Load dashboard based on user role
  switch (currentUser.role) {
    case 'admin':
      loadAdminDashboard();
      break;
    case 'agent':
      loadAgentDashboard();
      break;
    case 'reporter':
      loadReporterDashboard();
      break;
    case 'reportee':
      loadReporteeDashboard();
      break;
  }
}

// Load admin dashboard
function loadAdminDashboard() {
  const dashboardContent = document.getElementById('dashboard-content');
  
  if (dashboardContent) {
    // Get dashboard stats
    const totalDocuments = documents.length;
    const pendingDocuments = documents.filter(doc => doc.status === 'pending').length;
    const claimedDocuments = documents.filter(doc => doc.status === 'claimed').length;
    const totalUsers = users.length;
    const totalRevenue = calculateTotalRevenue();
    
    // Create dashboard HTML
    let html = `
      <div class="dashboard-welcome">
        <h2>Welcome, ${currentUser.name}</h2>
        <p>Here's an overview of your system</p>
        <span class="user-role-badge admin">Administrator</span>
      </div>
      
      <div class="admin-stats">
        <div class="admin-stat">
          <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
          <div class="stat-value">${totalDocuments}</div>
          <div class="stat-label">Total Documents</div>
        </div>
        <div class="admin-stat">
          <div class="stat-icon"><i class="fas fa-hourglass-half"></i></div>
          <div class="stat-value">${pendingDocuments}</div>
          <div class="stat-label">Pending Documents</div>
        </div>
        <div class="admin-stat">
          <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
          <div class="stat-value">${claimedDocuments}</div>
          <div class="stat-label">Claimed Documents</div>
        </div>
        <div class="admin-stat">
          <div class="stat-icon"><i class="fas fa-users"></i></div>
          <div class="stat-value">${totalUsers}</div>
          <div class="stat-label">Total Users</div>
        </div>
        <div class="admin-stat">
          <div class="stat-icon"><i class="fas fa-dollar-sign"></i></div>
          <div class="stat-value">$${totalRevenue.toFixed(2)}</div>
          <div class="stat-label">Total Revenue</div>
        </div>
      </div>
      
      <div class="dashboard-section">
        <h3><i class="fas fa-chart-line"></i> Revenue Analytics</h3>
        <div class="revenue-section">
          <div class="revenue-header">
            <h3>Revenue Overview</h3>
            <div class="revenue-period">
              <button class="revenue-period-btn active" data-period="week">Week</button>
              <button class="revenue-period-btn" data-period="month">Month</button>
              <button class="revenue-period-btn" data-period="year">Year</button>
            </div>
          </div>
          
          <div class="revenue-cards">
            <div class="revenue-card">
              <h4>Total Revenue</h4>
              <div class="amount" id="period-revenue">$${calculatePeriodRevenue('week').toFixed(2)}</div>
              <div class="change positive"><i class="fas fa-arrow-up"></i> 12.5% from previous period</div>
            </div>
            <div class="revenue-card">
              <h4>Reporter Fees</h4>
              <div class="amount" id="reporter-revenue">$${calculateReporterRevenue('week').toFixed(2)}</div>
              <div class="change positive"><i class="fas fa-arrow-up"></i> 8.3% from previous period</div>
            </div>
            <div class="revenue-card">
              <h4>Reportee Fees</h4>
              <div class="amount" id="reportee-revenue">$${calculateReporteeRevenue('week').toFixed(2)}</div>
              <div class="change positive"><i class="fas fa-arrow-up"></i> 15.2% from previous period</div>
            </div>
          </div>
          
          <div class="revenue-chart">
            <p style="text-align: center; padding-top: 120px; color: #666;">Revenue chart visualization would appear here</p>
          </div>
        </div>
      </div>
      
      <div class="dashboard-section">
        <h3><i class="fas fa-file-alt"></i> Recent Documents</h3>
        <div class="dashboard-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Reported On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${getRecentDocumentsHTML(5)}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="dashboard-section">
        <h3><i class="fas fa-users"></i> Recent Users</h3>
        <div class="dashboard-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${getRecentUsersHTML(5)}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="dashboard-actions">
        <button class="btn btn-primary" onclick="showPageFunc('categories')">Manage Categories</button>
        <button class="btn btn-primary" onclick="showPageFunc('locations')">Manage Locations</button>
        <button class="btn btn-primary" onclick="showPageFunc('users')">Manage Users</button>
      </div>
    `;
    
    dashboardContent.innerHTML = html;
    
    // Initialize revenue stats
    updateRevenueStats('week');
  }
}

// Load agent dashboard
function loadAgentDashboard() {
  const dashboardContent = document.getElementById('dashboard-content');
  
  if (dashboardContent) {
    // Get dashboard stats
    const totalHandled = documents.filter(doc => doc.handledBy === currentUser.id).length;
    const pendingDocuments = documents.filter(doc => doc.status === 'pending').length;
    const claimedDocuments = documents.filter(doc => doc.status === 'claimed' && doc.handledBy === currentUser.id).length;
    
    // Create dashboard HTML
    let html = `
      <div class="dashboard-welcome">
        <h2>Welcome, ${currentUser.name}</h2>
        <p>Here's an overview of your activities</p>
        <span class="user-role-badge agent">Agent</span>
      </div>
      
      <div class="agent-info">
        <div class="agent-info-item">
          <i class="fas fa-file-alt"></i>
          <div>
            <h4>Total Documents Handled</h4>
            <p>${totalHandled}</p>
          </div>
        </div>
        <div class="agent-info-item">
          <i class="fas fa-hourglass-half"></i>
          <div>
            <h4>Pending Documents</h4>
            <p>${pendingDocuments}</p>
          </div>
        </div>
        <div class="agent-info-item">
          <i class="fas fa-check-circle"></i>
          <div>
            <h4>Claimed Documents</h4>
            <p>${claimedDocuments}</p>
          </div>
        </div>
      </div>
      
      <div class="dashboard-section">
        <h3><i class="fas fa-file-alt"></i> Recent Documents</h3>
        <div class="dashboard-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Reported On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${getRecentDocumentsHTML(10)}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="dashboard-actions">
        <button class="btn btn-primary" onclick="showPageFunc('report-document')">Report New Document</button>
        <button class="btn btn-primary" onclick="showPageFunc('search')">Search Documents</button>
      </div>
    `;
    
    dashboardContent.innerHTML = html;
  }
}

// Load reporter dashboard
function loadReporterDashboard() {
  const dashboardContent = document.getElementById('dashboard-content');
  
  if (dashboardContent) {
    // Get dashboard stats
    const totalReported = documents.filter(doc => doc.reportedBy === currentUser.id).length;
    const pendingDocuments = documents.filter(doc => doc.status === 'pending' && doc.reportedBy === currentUser.id).length;
    const claimedDocuments = documents.filter(doc => doc.status === 'claimed' && doc.reportedBy === currentUser.id).length;
    const totalEarnings = calculateReporterEarnings(currentUser.id);
    
    // Create dashboard HTML
    let html = `
      <div class="dashboard-welcome">
        <h2>Welcome, ${currentUser.name}</h2>
        <p>Here's an overview of your reporting activities</p>
        <span class="user-role-badge reporter">Reporter</span>
      </div>
      
      <div class="reporter-stats">
        <div class="reporter-stat">
          <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
          <div class="stat-value">${totalReported}</div>
          <div class="stat-label">Documents Reported</div>
        </div>
        <div class="reporter-stat">
          <div class="stat-icon"><i class="fas fa-hourglass-half"></i></div>
          <div class="stat-value">${pendingDocuments}</div>
          <div class="stat-label">Pending Documents</div>
        </div>
        <div class="reporter-stat">
          <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
          <div class="stat-value">${claimedDocuments}</div>
          <div class="stat-label">Claimed Documents</div>
        </div>
        <div class="reporter-stat">
          <div class="stat-icon"><i class="fas fa-dollar-sign"></i></div>
          <div class="stat-value">$${totalEarnings.toFixed(2)}</div>
          <div class="stat-label">Total Earnings</div>
        </div>
      </div>
      
      <div class="dashboard-section">
        <h3><i class="fas fa-file-alt"></i> Your Reported Documents</h3>
        <div class="dashboard-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Reported On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${getReporterDocumentsHTML(currentUser.id)}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="dashboard-section">
        <h3><i class="fas fa-dollar-sign"></i> Your Earnings</h3>
        <div class="dashboard-table">
          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${getReporterEarningsHTML(currentUser.id)}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="dashboard-actions">
        <button class="btn btn-primary" onclick="showPageFunc('report-document')">Report New Document</button>
        <button class="btn btn-primary" onclick="showPageFunc('search')">Search Documents</button>
      </div>
    `;
    
    dashboardContent.innerHTML = html;
  }
}

// Load reportee dashboard
function loadReporteeDashboard() {
  const dashboardContent = document.getElementById('dashboard-content');
  
  if (dashboardContent) {
    // Get dashboard stats
    const totalClaimed = documents.filter(doc => doc.claimedBy === currentUser.id).length;
    const totalFees = calculateReporteeFees(currentUser.id);
    
    // Create dashboard HTML
    let html = `
      <div class="dashboard-welcome">
        <h2>Welcome, ${currentUser.name}</h2>
        <p>Here's an overview of your claimed documents</p>
        <span class="user-role-badge reportee">Document Owner</span>
      </div>
      
      <div class="reportee-stats">
        <div class="reportee-stat">
          <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
          <div class="stat-value">${totalClaimed}</div>
          <div class="stat-label">Documents Claimed</div>
        </div>
        <div class="reportee-stat">
          <div class="stat-icon"><i class="fas fa-dollar-sign"></i></div>
          <div class="stat-value">$${totalFees.toFixed(2)}</div>
          <div class="stat-label">Total Fees Paid</div>
        </div>
      </div>
      
      <div class="dashboard-section">
        <h3><i class="fas fa-file-alt"></i> Your Claimed Documents</h3>
        <div class="dashboard-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Claimed On</th>
                <th>Fee Paid</th>
              </tr>
            </thead>
            <tbody>
              ${getReporteeDocumentsHTML(currentUser.id)}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="dashboard-actions">
        <button class="btn btn-primary" onclick="showPageFunc('search')">Search Documents</button>
      </div>
    `;
    
    dashboardContent.innerHTML = html;
  }
}

// Get recent documents HTML
function getRecentDocumentsHTML(limit) {
  // Sort documents by reported date (newest first)
  const sortedDocuments = [...documents].sort((a, b) => new Date(b.reportedAt) - new Date(a.reportedAt));
  
  // Limit to specified number
  const recentDocuments = sortedDocuments.slice(0, limit);
  
  if (recentDocuments.length === 0) {
    return `<tr><td colspan="6" style="text-align: center;">No documents found</td></tr>`;
  }
  
  let html = '';
  
  recentDocuments.forEach(doc => {
    const category = categories.find(cat => cat.id === doc.category);
    const location = locations.find(loc => loc.id === doc.location);
    
    html += `
      <tr>
        <td>${doc.title}</td>
        <td>${category ? category.name : 'Unknown'}</td>
        <td>${location ? location.name : 'Unknown'}</td>
        <td><span class="status ${doc.status}">${doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}</span></td>
        <td>${formatDate(doc.reportedAt)}</td>
        <td>
          <button class="btn-icon edit-document-btn" data-id="${doc.id}" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="btn-icon delete-document-btn" data-id="${doc.id}" title="Delete"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
  
  return html;
}

// Get recent users HTML
function getRecentUsersHTML(limit) {
  // Sort users by created date (newest first)
  const sortedUsers = [...users].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
  // Limit to specified number
  const recentUsers = sortedUsers.slice(0, limit);
  
  if (recentUsers.length === 0) {
    return `<tr><td colspan="5" style="text-align: center;">No users found</td></tr>`;
  }
  
  let html = '';
  
  recentUsers.forEach(user => {
    html += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</td>
        <td>${formatDate(user.createdAt)}</td>
        <td>
          <button class="btn-icon edit-user-btn" data-id="${user.id}" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="btn-icon delete-user-btn" data-id="${user.id}" title="Delete"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
  
  return html;
}

// Get reporter documents HTML
function getReporterDocumentsHTML(reporterId) {
  // Filter documents by reporter ID
  const reporterDocuments = documents.filter(doc => doc.reportedBy === reporterId);
  
  if (reporterDocuments.length === 0) {
    return `<tr><td colspan="6" style="text-align: center;">No documents reported yet</td></tr>`;
  }
  
  // Sort by reported date (newest first)
  reporterDocuments.sort((a, b) => new Date(b.reportedAt) - new Date(a.reportedAt));
  
  let html = '';
  
  reporterDocuments.forEach(doc => {
    const category = categories.find(cat => cat.id === doc.category);
    const location = locations.find(loc => loc.id === doc.location);
    
    html += `
      <tr>
        <td>${doc.title}</td>
        <td>${category ? category.name : 'Unknown'}</td>
        <td>${location ? location.name : 'Unknown'}</td>
        <td><span class="status ${doc.status}">${doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}</span></td>
        <td>${formatDate(doc.reportedAt)}</td>
        <td>
          <button class="btn-icon edit-document-btn" data-id="${doc.id}" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="btn-icon delete-document-btn" data-id="${doc.id}" title="Delete"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
  
  return html;
}

// Get reporter earnings HTML
function getReporterEarningsHTML(reporterId) {
  // Filter transactions by reporter ID and type
  const reporterTransactions = transactions.filter(
    trans => trans.userId === reporterId && trans.type === 'reporter_fee'
  );
  
  if (reporterTransactions.length === 0) {
    return `<tr><td colspan="4" style="text-align: center;">No earnings yet</td></tr>`;
  }
  
  // Sort by date (newest first)
  reporterTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  let html = '';
  
  reporterTransactions.forEach(trans => {
    const doc = documents.find(d => d.id === trans.documentId);
    
    html += `
      <tr>
        <td>${doc ? doc.title : 'Unknown Document'}</td>
        <td>$${trans.amount.toFixed(2)}</td>
        <td>${formatDate(trans.date)}</td>
        <td><span class="status ${trans.status}">${trans.status.charAt(0).toUpperCase() + trans.status.slice(1)}</span></td>
      </tr>
    `;
  });
  
  return html;
}

// Get reportee documents HTML
function getReporteeDocumentsHTML(reporteeId) {
  // Filter documents by claimed by ID
  const reporteeDocuments = documents.filter(doc => doc.claimedBy === reporteeId);
  
  if (reporteeDocuments.length === 0) {
    return `<tr><td colspan="5" style="text-align: center;">No documents claimed yet</td></tr>`;
  }
  
  // Sort by claimed date (newest first)
  reporteeDocuments.sort((a, b) => new Date(b.claimedAt) - new Date(a.claimedAt));
  
  let html = '';
  
  reporteeDocuments.forEach(doc => {
    const category = categories.find(cat => cat.id === doc.category);
    const location = locations.find(loc => loc.id === doc.location);
    
    html += `
      <tr>
        <td>${doc.title}</td>
        <td>${category ? category.name : 'Unknown'}</td>
        <td>${location ? location.name : 'Unknown'}</td>
        <td>${formatDate(doc.claimedAt)}</td>
        <td>$${doc.fee.toFixed(2)}</td>
      </tr>
    `;
  });
  
  return html;
}

// Calculate total revenue
function calculateTotalRevenue() {
  return transactions.reduce((total, trans) => total + trans.amount, 0);
}

// Calculate period revenue
function calculatePeriodRevenue(period) {
  const now = new Date();
  let startDate;
  
  switch (period) {
    case 'week':
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case 'month':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case 'year':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      startDate = new Date(now.setDate(now.getDate() - 7));
  }
  
  return transactions
    .filter(trans => new Date(trans.date) >= startDate)
    .reduce((total, trans) => total + trans.amount, 0);
}

// Calculate reporter revenue
function calculateReporterRevenue(period) {
  const now = new Date();
  let startDate;
  
  switch (period) {
    case 'week':
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case 'month':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case 'year':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      startDate = new Date(now.setDate(now.getDate() - 7));
  }
  
  return transactions
    .filter(trans => new Date(trans.date) >= startDate && trans.type === 'reporter_fee')
    .reduce((total, trans) => total + trans.amount, 0);
}

// Calculate reportee revenue
function calculateReporteeRevenue(period) {
  const now = new Date();
  let startDate;
  
  switch (period) {
    case 'week':
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case 'month':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case 'year':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      startDate = new Date(now.setDate(now.getDate() - 7));
  }
  
  return transactions
    .filter(trans => new Date(trans.date) >= startDate && trans.type === 'reportee_fee')
    .reduce((total, trans) => total + trans.amount, 0);
}

// Update revenue stats
function updateRevenueStats(period) {
  const periodRevenueElement = document.getElementById('period-revenue');
  const reporterRevenueElement = document.getElementById('reporter-revenue');
  const reporteeRevenueElement = document.getElementById('reportee-revenue');
  
  if (periodRevenueElement) {
    periodRevenueElement.textContent = `$${calculatePeriodRevenue(period).toFixed(2)}`;
  }
  
  if (reporterRevenueElement) {
    reporterRevenueElement.textContent = `$${calculateReporterRevenue(period).toFixed(2)}`;
  }
  
  if (reporteeRevenueElement) {
    reporteeRevenueElement.textContent = `$${calculateReporteeRevenue(period).toFixed(2)}`;
  }
}

// Calculate reporter earnings
function calculateReporterEarnings(reporterId) {
  return transactions
    .filter(trans => trans.userId === reporterId && trans.type === 'reporter_fee')
    .reduce((total, trans) => total + trans.amount, 0);
}

// Calculate reportee fees
function calculateReporteeFees(reporteeId) {
  return transactions
    .filter(trans => trans.userId === reporteeId && trans.type === 'reportee_fee')
    .reduce((total, trans) => total + trans.amount, 0);
}

// Show login required modal
function showLoginRequiredModal() {
  const modalContainer = document.getElementById('login-required-modal-container');
  const modal = document.getElementById('login-required-modal');
  
  if (modalContainer && modal) {
    modalContainer.style.display = 'block';
    modal.style.display = 'block';
  }
}

// Show claim document modal
function showClaimDocumentModal(documentId) {
  if (!currentUser) {
    showLoginRequiredModal();
    return;
  }
  
  if (currentUser.role !== 'reportee') {
    showToast('Only document owners can claim documents!', 'error');
    return;
  }
  
  const doc = documents.find(d => d.id === documentId);
  
  if (!doc) {
    showToast('Document not found!', 'error');
    return;
  }
  
  if (doc.status === 'claimed') {
    showToast('This document has already been claimed!', 'error');
    return;
  }
  
  const modalContainer = document.getElementById('claim-document-modal-container');
  const modal = document.getElementById('claim-document-modal');
  const form = document.getElementById('claim-document-form');
  
  if (modalContainer && modal && form) {
    // Set document ID in form
    form.setAttribute('data-id', documentId);
    
    // Set document details in modal
    const docTitle = document.getElementById('claim-document-title');
    const docCategory = document.getElementById('claim-document-category');
    const docLocation = document.getElementById('claim-document-location');
    const docFee = document.getElementById('claim-document-fee');
    
    if (docTitle) docTitle.textContent = doc.title;
    
    const category = categories.find(cat => cat.id === doc.category);
    if (docCategory && category) docCategory.textContent = category.name;
    
    const location = locations.find(loc => loc.id === doc.location);
    if (docLocation && location) docLocation.textContent = location.name;
    
    if (docFee) docFee.textContent = `$${doc.fee.toFixed(2)}`;
    
    // Show modal
    modalContainer.style.display = 'block';
    modal.style.display = 'block';
  }
}

// Handle claim document
function handleClaimDocument(e) {
  e.preventDefault();
  
  if (!currentUser) {
    showLoginRequiredModal();
    return;
  }
  
  const documentId = e.target.getAttribute('data-id');
  const doc = documents.find(d => d.id === documentId);
  
  if (!doc) {
    showToast('Document not found!', 'error');
    return;
  }
  
  // Update document
  doc.status = 'claimed';
  doc.claimedBy = currentUser.id;
  doc.claimedAt = new Date().toISOString();
  
  // Create transaction for reportee fee
  const reporteeTransaction = {
    id: generateId(),
    type: 'reportee_fee',
    amount: doc.fee * 0.7, // 70% of fee goes to system
    documentId: doc.id,
    userId: currentUser.id,
    date: new Date().toISOString(),
    status: 'completed'
  };
  
  transactions.push(reporteeTransaction);
  
  // Save data
  saveData('documents');
  saveData('transactions');
  
  // Close modal
  closeAllModals();
  
  showToast('Document claimed successfully!', 'success');
  
  // Reload dashboard if on dashboard page
  if (document.getElementById('dashboard-page').classList.contains('active')) {
    loadDashboard();
  }
}

// Show edit document modal
function showEditDocumentModal(documentId) {
  if (!currentUser) {
    showLoginRequiredModal();
    return;
  }
  
  const doc = documents.find(d => d.id === documentId);
  
  if (!doc) {
    showToast('Document not found!', 'error');
    return;
  }
  
  // Check if user has permission to edit
  if (currentUser.role !== 'admin' && currentUser.role !== 'agent' && currentUser.id !== doc.reportedBy) {
    showToast('You do not have permission to edit this document!', 'error');
    return;
  }
  
  const modalContainer = document.getElementById('edit-document-modal-container');
  const modal = document.getElementById('edit-document-modal');
  const form = document.getElementById('edit-document-form');
  
  if (modalContainer && modal && form) {
    // Set document ID in form
    form.setAttribute('data-id', documentId);
    
    // Set document details in form
    const titleInput = document.getElementById('edit-document-title');
    const categorySelect = document.getElementById('edit-document-category');
    const locationSelect = document.getElementById('edit-document-location');
    const descriptionInput = document.getElementById('edit-document-description');
    const ownerNameInput = document.getElementById('edit-document-owner-name');
    const ownerContactInput = document.getElementById('edit-document-owner-contact');
    const statusSelect = document.getElementById('edit-document-status');
    
    if (titleInput) titleInput.value = doc.title;
    
    if (categorySelect) {
      categorySelect.innerHTML = '';
      categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        if (category.id === doc.category) option.selected = true;
        categorySelect.appendChild(option);
      });
    }
    
    if (locationSelect) {
      locationSelect.innerHTML = '';
      locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location.id;
        option.textContent = location.name;
        if (location.id === doc.location) option.selected = true;
        locationSelect.appendChild(option);
      });
    }
    
    if (descriptionInput) descriptionInput.value = doc.description;
    if (ownerNameInput) ownerNameInput.value = doc.ownerName;
    if (ownerContactInput) ownerContactInput.value = doc.ownerContact;
    
    if (statusSelect) {
      statusSelect.innerHTML = '';
      const statuses = ['pending', 'claimed', 'expired'];
      statuses.forEach(status => {
        const option = document.createElement('option');
        option.value = status;
        option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        if (status === doc.status) option.selected = true;
        statusSelect.appendChild(option);
      });
    }
    
    // Show modal
    modalContainer.style.display = 'block';
    modal.style.display = 'block';
  }
}

// Handle edit document
function handleEditDocument(e) {
  e.preventDefault();
  
  if (!currentUser) {
    showLoginRequiredModal();
    return;
  }
  
  const documentId = e.target.getAttribute('data-id');
  const doc = documents.find(d => d.id === documentId);
  
  if (!doc) {
    showToast('Document not found!', 'error');
    return;
  }
  
  // Get form values
  const title = document.getElementById('edit-document-title').value;
  const category = document.getElementById('edit-document-category').value;
  const location = document.getElementById('edit-document-location').value;
  const description = document.getElementById('edit-document-description').value;
  const ownerName = document.getElementById('edit-document-owner-name').value;
  const ownerContact = document.getElementById('edit-document-owner-contact').value;
  const status = document.getElementById('edit-document-status').value;
  
  // Update document
  doc.title = title;
  doc.category = category;
  doc.location = location;
  doc.description = description;
  doc.ownerName = ownerName;
  doc.ownerContact = ownerContact;
  doc.status = status;
  
  // Save data
  saveData('documents');
  
  // Close modal
  closeAllModals();
  
  showToast('Document updated successfully!', 'success');
  
  // Reload current page
  if (document.getElementById('dashboard-page').classList.contains('active')) {
    loadDashboard();
  } else if (document.getElementById('search-page').classList.contains('active')) {
    const searchForm = document.getElementById('search-form');
    if (searchForm) searchForm.dispatchEvent(new Event('submit'));
  }
}

// Delete document
function deleteDocument(documentId) {
  if (!currentUser) {
    showLoginRequiredModal();
    return;
  }
  
  const docIndex = documents.findIndex(d => d.id === documentId);
  
  if (docIndex === -1) {
    showToast('Document not found!', 'error');
    return;
  }
  
  const doc = documents[docIndex];
  
  // Check if user has permission to delete
  if (currentUser.role !== 'admin' && currentUser.role !== 'agent' && currentUser.id !== doc.reportedBy) {
    showToast('You do not have permission to delete this document!', 'error');
    return;
  }
  
  // Remove document
  documents.splice(docIndex, 1);
  
  // Remove related transactions
  transactions = transactions.filter(t => t.documentId !== documentId);
  
  // Save data
  saveData('documents');
  
  showToast('Document deleted successfully!', 'success');
  
  // Reload current page
  if (document.getElementById('dashboard-page').classList.contains('active')) {
    loadDashboard();
  } else if (document.getElementById('search-page').classList.contains('active')) {
    const searchForm = document.getElementById('search-form');
    if (searchForm) searchForm.dispatchEvent(new Event('submit'));
  }
}

// Handle category submit
function handleCategorySubmit(e) {
  e.preventDefault();
  
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage categories!', 'error');
    return;
  }
  
  const categoryId = e.target.getAttribute('data-id');
  const name = document.getElementById('category-name').value;
  const description = document.getElementById('category-description').value;
  const fee = parseFloat(document.getElementById('category-fee').value);
  
  if (categoryId) {
    // Edit existing category
    const category = categories.find(c => c.id === categoryId);
    
    if (!category) {
      showToast('Category not found!', 'error');
      return;
    }
    
    category.name = name;
    category.description = description;
    category.fee = fee;
    
    showToast('Category updated successfully!', 'success');
  } else {
    // Add new category
    const newCategory = {
      id: generateId(),
      name,
      description,
      fee
    };
    
    categories.push(newCategory);
    
    showToast('Category added successfully!', 'success');
  }
  
  // Save data
  saveData('categories');
  
  // Reset form
  e.target.reset();
  e.target.removeAttribute('data-id');
  
  // Update categories list
  loadCategoriesPage();
}

// Show edit category modal
function showEditCategoryModal(categoryId) {
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage categories!', 'error');
    return;
  }
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    showToast('Category not found!', 'error');
    return;
  }
  
  const form = document.getElementById('category-form');
  const nameInput = document.getElementById('category-name');
  const descriptionInput = document.getElementById('category-description');
  const feeInput = document.getElementById('category-fee');
  
  if (form && nameInput && descriptionInput && feeInput) {
    form.setAttribute('data-id', categoryId);
    nameInput.value = category.name;
    descriptionInput.value = category.description;
    feeInput.value = category.fee;
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth' });
  }
}

// Delete category
function deleteCategory(categoryId) {
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage categories!', 'error');
    return;
  }
  
  const categoryIndex = categories.findIndex(c => c.id === categoryId);
  
  if (categoryIndex === -1) {
    showToast('Category not found!', 'error');
    return;
  }
  
  // Check if category is in use
  if (documents.some(doc => doc.category === categoryId)) {
    showToast('Cannot delete category that is in use!', 'error');
    return;
  }
  
  // Remove category
  categories.splice(categoryIndex, 1);
  
  // Save data
  saveData('categories');
  
  showToast('Category deleted successfully!', 'success');
  
  // Reload categories page
  loadCategoriesPage();
}

// Load categories page
function loadCategoriesPage() {
  const categoriesContainer = document.getElementById('categories-container');
  
  if (categoriesContainer) {
    let html = '<div class="dashboard-table">';
    html += `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    if (categories.length === 0) {
      html += `<tr><td colspan="4" style="text-align: center;">No categories found</td></tr>`;
    } else {
      categories.forEach(category => {
        html += `
          <tr>
            <td>${category.name}</td>
            <td>${category.description}</td>
            <td>$${category.fee.toFixed(2)}</td>
            <td>
              <button class="btn-icon edit-category-btn" data-id="${category.id}" title="Edit"><i class="fas fa-edit"></i></button>
              <button class="btn-icon delete-category-btn" data-id="${category.id}" title="Delete"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        `;
      });
    }
    
    html += `
        </tbody>
      </table>
    </div>
    `;
    
    categoriesContainer.innerHTML = html;
  }
}

// Handle location submit
function handleLocationSubmit(e) {
  e.preventDefault();
  
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage locations!', 'error');
    return;
  }
  
  const locationId = e.target.getAttribute('data-id');
  const name = document.getElementById('location-name').value;
  const address = document.getElementById('location-address').value;
  const city = document.getElementById('location-city').value;
  const phone = document.getElementById('location-phone').value;
  const email = document.getElementById('location-email').value;
  const hours = document.getElementById('location-hours').value;
  const type = document.getElementById('location-type').value;
  
  if (locationId) {
    // Edit existing location
    const location = locations.find(l => l.id === locationId);
    
    if (!location) {
      showToast('Location not found!', 'error');
      return;
    }
    
    location.name = name;
    location.address = address;
    location.city = city;
    location.phone = phone;
    location.email = email;
    location.hours = hours;
    location.type = type;
    
    showToast('Location updated successfully!', 'success');
  } else {
    // Add new location
    const newLocation = {
      id: generateId(),
      name,
      address,
      city,
      phone,
      email,
      hours,
      type
    };
    
    locations.push(newLocation);
    
    showToast('Location added successfully!', 'success');
  }
  
  // Save data
  saveData('locations');
  
  // Reset form
  e.target.reset();
  e.target.removeAttribute('data-id');
  
  // Update locations list
  loadLocationsManagementPage();
}

// Show edit location modal
function showEditLocationModal(locationId) {
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage locations!', 'error');
    return;
  }
  
  const location = locations.find(l => l.id === locationId);
  
  if (!location) {
    showToast('Location not found!', 'error');
    return;
  }
  
  const form = document.getElementById('location-form');
  const nameInput = document.getElementById('location-name');
  const addressInput = document.getElementById('location-address');
  const cityInput = document.getElementById('location-city');
  const phoneInput = document.getElementById('location-phone');
  const emailInput = document.getElementById('location-email');
  const hoursInput = document.getElementById('location-hours');
  const typeInput = document.getElementById('location-type');
  
  if (form && nameInput && addressInput && cityInput && phoneInput && emailInput && hoursInput && typeInput) {
    form.setAttribute('data-id', locationId);
    nameInput.value = location.name;
    addressInput.value = location.address;
    cityInput.value = location.city;
    phoneInput.value = location.phone;
    emailInput.value = location.email;
    hoursInput.value = location.hours;
    typeInput.value = location.type;
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth' });
  }
}

// Delete location
function deleteLocation(locationId) {
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage locations!', 'error');
    return;
  }
  
  const locationIndex = locations.findIndex(l => l.id === locationId);
  
  if (locationIndex === -1) {
    showToast('Location not found!', 'error');
    return;
  }
  
  // Check if location is in use
  if (documents.some(doc => doc.location === locationId)) {
    showToast('Cannot delete location that is in use!', 'error');
    return;
  }
  
  // Remove location
  locations.splice(locationIndex, 1);
  
  // Save data
  saveData('locations');
  
  showToast('Location deleted successfully!', 'success');
  
  // Reload locations page
  loadLocationsManagementPage();
}

// Load locations management page
function loadLocationsManagementPage() {
  const locationsContainer = document.getElementById('locations-management-container');
  
  if (locationsContainer) {
    let html = '<div class="dashboard-table">';
    html += `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    if (locations.length === 0) {
      html += `<tr><td colspan="6" style="text-align: center;">No locations found</td></tr>`;
    } else {
      locations.forEach(location => {
        html += `
          <tr>
            <td>${location.name}</td>
            <td>${location.address}</td>
            <td>${location.city}</td>
            <td>${location.phone}</td>
            <td>${location.type}</td>
            <td>
              <button class="btn-icon edit-location-btn" data-id="${location.id}" title="Edit"><i class="fas fa-edit"></i></button>
              <button class="btn-icon delete-location-btn" data-id="${location.id}" title="Delete"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        `;
      });
    }
    
    html += `
        </tbody>
      </table>
    </div>
    `;
    
    locationsContainer.innerHTML = html;
  }
}

// Handle user submit
function handleUserSubmit(e) {
  e.preventDefault();
  
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage users!', 'error');
    return;
  }
  
  const userId = e.target.getAttribute('data-id');
  const name = document.getElementById('user-name').value;
  const email = document.getElementById('user-email').value;
  const password = document.getElementById('user-password').value;
  const role = document.getElementById('user-role').value;
  
  if (userId) {
    // Edit existing user
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      showToast('User not found!', 'error');
      return;
    }
    
    user.name = name;
    user.email = email;
    if (password) user.password = password;
    user.role = role;
    
    showToast('User updated successfully!', 'success');
  } else {
    // Check if email already exists
    if (users.some(u => u.email === email)) {
      showToast('Email already registered!', 'error');
      return;
    }
    
    // Add new user
    const newUser = {
      id: generateId(),
      name,
      email,
      password,
      role,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    showToast('User added successfully!', 'success');
  }
  
  // Save data
  saveData('users');
  
  // Reset form
  e.target.reset();
  e.target.removeAttribute('data-id');
  
  // Update users list
  loadUsersPage();
}

// Show edit user modal
function showEditUserModal(userId) {
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage users!', 'error');
    return;
  }
  
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    showToast('User not found!', 'error');
    return;
  }
  
  const form = document.getElementById('user-form');
  const nameInput = document.getElementById('user-name');
  const emailInput = document.getElementById('user-email');
  const passwordInput = document.getElementById('user-password');
  const passwordLabel = document.querySelector('label[for="user-password"]');
  const roleInput = document.getElementById('user-role');
  
  if (form && nameInput && emailInput && passwordInput && passwordLabel && roleInput) {
    form.setAttribute('data-id', userId);
    nameInput.value = user.name;
    emailInput.value = user.email;
    passwordInput.value = '';
    passwordLabel.textContent = 'Password (leave blank to keep current)';
    
    // Set role
    roleInput.value = user.role;
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth' });
  }
}

// Delete user
function deleteUser(userId) {
  if (!currentUser || currentUser.role !== 'admin') {
    showToast('Only administrators can manage users!', 'error');
    return;
  }
  
  // Prevent deleting yourself
  if (userId === currentUser.id) {
    showToast('You cannot delete your own account!', 'error');
    return;
  }
  
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    showToast('User not found!', 'error');
    return;
  }
  
  // Remove user
  users.splice(userIndex, 1);
  
  // Save data
  saveData('users');
  
  showToast('User deleted successfully!', 'success');
  
  // Reload users page
  loadUsersPage();
}

// Load users page
function loadUsersPage() {
  const usersContainer = document.getElementById('users-container');
  
  if (usersContainer) {
    let html = '<div class="dashboard-table">';
    html += `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    if (users.length === 0) {
      html += `<tr><td colspan="5" style="text-align: center;">No users found</td></tr>`;
    } else {
      users.forEach(user => {
        html += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</td>
            <td>${formatDate(user.createdAt)}</td>
            <td>
              <button class="btn-icon edit-user-btn" data-id="${user.id}" title="Edit"><i class="fas fa-edit"></i></button>
              ${user.id !== currentUser.id ? `<button class="btn-icon delete-user-btn" data-id="${user.id}" title="Delete"><i class="fas fa-trash"></i></button>` : ''}
            </td>
          </tr>
        `;
      });
    }
    
    html += `
        </tbody>
      </table>
    </div>
    `;
    
    usersContainer.innerHTML = html;
  }
}

// Close all modals
function closeAllModals() {
  const modalContainers = document.querySelectorAll('.modal-container');
  const modals = document.querySelectorAll('.modal');
  
  modalContainers.forEach(container => {
    container.style.display = 'none';
  });
  
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
}

// Show toast notification
function showToast(message, type = 'info') {
  // Create toast element if it doesn't exist
  let toast = document.querySelector('.toast');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  // Set toast content
  toast.innerHTML = `
    <div class="toast-content toast-${type}">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <div>
        <strong>${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
        <p>${message}</p>
      </div>
    </div>
    <button class="toast-close">&times;</button>
  `;
  
  // Add visible class
  toast.classList.add('toast-visible');
  
  // Add close button event listener
  const closeBtn = toast.querySelector('.toast-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.classList.remove('toast-visible');
      toast.classList.add('toast-hiding');
    });
  }
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    if (toast) {
      toast.classList.remove('toast-visible');
      toast.classList.add('toast-hiding');
    }
  }, 5000);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Generate ID
function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
