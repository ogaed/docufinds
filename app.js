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
        dateFound: "2023-03-15T10:30:00Z",
        dateReported: "2023-03-16T14:20:00Z",
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
        dateFound: "2023-03-20T15:45:00Z",
        dateReported: "2023-03-21T09:10:00Z",
        status: "claimed",
        additionalDetails: "Found at North Mall food court",
        claimedBy: 1, // John Doe
        dateClaimed: "2023-03-25T11:30:00Z",
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
        dateFound: "2023-04-05T12:15:00Z",
        dateReported: "2023-04-05T16:40:00Z",
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
        dateFound: "2023-04-10T09:20:00Z",
        dateReported: "2023-04-10T13:50:00Z",
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
        dateFound: "2023-04-15T14:30:00Z",
        dateReported: "2023-04-16T10:15:00Z",
        status: "claimed",
        additionalDetails: "Found at South City shopping center",
        claimedBy: 1, // John Doe (acting on behalf of the owner)
        dateClaimed: "2023-04-20T15:45:00Z",
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

const updateAuthenticatedPages = () => {
  const currentUser = getCurrentUser()
  const dashboardContent = document.getElementById("dashboard-content")
  const profileContent = document.getElementById("profile-content")

  if (currentUser) {
    // Dashboard content based on user type
    let dashboardHTML = ""

    if (currentUser.userType === "reportee") {
      dashboardHTML = `
                <div class="dashboard-welcome">
                    <h2>Welcome, ${currentUser.name}!</h2>
                    <p>This is your document owner dashboard. Here you can track documents you've claimed and search for lost documents.</p>
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
                        <p>${currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1)}</p>
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

  // Show home page by default
  showPage("home")
})