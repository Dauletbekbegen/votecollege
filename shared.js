// ==========================================
// SUPABASE КОНФИГУРАЦИЯСЫ
// ==========================================
const SUPABASE_URL = "https://zzsavqodhaiibdycfzrh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6c2F2cW9kaGFpaWJkeWNmenJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MDc2NjUsImV4cCI6MjEwODA4MzY2NX0.WdXNLGLnF9-Be0dryPo_TWz7zdLizmqGm2QcKgvN3Ls";

// Атаулар қақтығыспауы үшін айнымалыны supabaseClient деп атаймыз
const supabaseClient = (typeof window.supabase !== "undefined" && window.supabase.createClient)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// Әкімші құпиясөзі
const ADMIN_PASS = "admin2024";

// ==========================================
// КӨМЕКШІ ФУНКЦИЯЛАР (UTILITIES)
// ==========================================

function getDeviceId() {
  let devId = localStorage.getItem("parliament_voter_device_id");
  if (!devId) {
    devId = "d_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
    localStorage.setItem("parliament_voter_device_id", devId);
  }
  return devId;
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}