// Fake Auth Service using localStorage

const USERS_KEY = "travel_users";
const CURRENT_USER_KEY = "travel_current_user";

// Helper: Get all users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

// Helper: Save users to localStorage
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Register a new user
export function register(email, password) {
  const users = getUsers();
  const existing = users.find((u) => u.email === email);

  if (existing) {
    return { success: false, message: "Email already registered." };
  }

  const newUser = { email, password };
  users.push(newUser);
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  return { success: true };
}

// Login
export function login(email, password) {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: "Invalid credentials." };
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return { success: true };
}

// Logout
export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// Get current user
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

// Check if user is logged in
export function isLoggedIn() {
  return !!localStorage.getItem(CURRENT_USER_KEY);
}
