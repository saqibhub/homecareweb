// ───────────────────────────────────────────────
// Job Posting Logic
// ───────────────────────────────────────────────
let jobs = [];

const jobForm = document.getElementById('jobForm');
const jobMessage = document.getElementById('message');
const jobList = document.getElementById('jobList');
const noJobsText = document.getElementById('noJobs');

if (jobForm) {
  jobForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // ... your existing job submission code here ...
    // (keep the part that pushes to jobs[] and calls renderJobs())
  });
}

function renderJobs() {
  // ... your existing renderJobs function ...
}

// Initial call
renderJobs();

// ───────────────────────────────────────────────
// Auth Modal Logic
// ───────────────────────────────────────────────
const modal = document.getElementById('authModal');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.getElementById('closeModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const authForm = document.getElementById('authForm');
const authMessage = document.getElementById('authMessage');

function openModal(isSignup = false) {
  modalTitle.textContent = isSignup ? 'Sign Up' : 'Login';
  modal.style.display = 'flex';
  authMessage.style.display = 'none';
  authForm?.reset();
}

loginBtn?.addEventListener('click', (e) => { e.preventDefault(); openModal(false); });
signupBtn?.addEventListener('click', (e) => { e.preventDefault(); openModal(true); });
closeBtn?.addEventListener('click', () => { modal.style.display = 'none'; });
modal?.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const password = document.getElementById('password').value;

    if (!role || !name || !contact || password.length < 6) {
      authMessage.textContent = "Please fill all fields correctly (password ≥ 6 chars)";
      authMessage.style.color = 'red';
      authMessage.style.display = 'block';
      return;
    }

    const roleText = role === 'client' ? 'a Client' : 'a Worker';
    authMessage.textContent = `Welcome, ${name}! You are now ${roleText}. (Demo mode)`;
    authMessage.style.color = 'green';
    authMessage.style.display = 'block';

    authForm.reset();

    setTimeout(() => {
      modal.style.display = 'none';
      authMessage.style.display = 'none';
    }, 3000);
  });
}
// ... your existing code (job form, auth modal, etc.) is above ...

// ───────────────────────────────────────────────
// Interest Modal for "I'm Interested"
// ───────────────────────────────────────────────

const interestModal = document.getElementById('interestModal');
const closeInterest = document.getElementById('closeInterest');
const interestedJobInfo = document.getElementById('interestedJobInfo');
const interestForm = document.getElementById('interestForm');
const interestSuccess = document.getElementById('interestSuccess');

// Close interest modal
closeInterest?.addEventListener('click', () => {
  interestModal.style.display = 'none';
  interestSuccess.style.display = 'none';
  interestForm?.reset();
});

interestModal?.addEventListener('click', (e) => {
  if (e.target === interestModal) {
    interestModal.style.display = 'none';
    interestSuccess.style.display = 'none';
  }
});

// Handle "I'm Interested" clicks (delegation because cards are dynamic)
document.addEventListener('click', function(e) {
  if (e.target && e.target.textContent.trim() === "I'm Interested") {
    // Find the parent card
    const card = e.target.closest('div[style*="background: #f9f9f9"]');
    if (!card) return;

    // Extract job info from card
    const service = card.querySelector('h3')?.textContent || 'Job';
    const location = card.querySelector('p:nth-child(2)')?.textContent.replace('Location: ', '') || '';
    const budget = card.querySelector('p:nth-child(3)')?.textContent.replace('Budget: ', '') || '';

    interestedJobInfo.textContent = `Job: ${service} in ${location} (${budget})`;

    interestModal.style.display = 'flex';
    interestSuccess.style.display = 'none';
    interestForm.reset();
  }
});

// Submit interest
interestForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const msg = document.getElementById('interestMessage').value.trim();
  if (msg.length < 10) {
    alert('Please write a proper message (at least 10 characters)');
    return;
  }

  interestSuccess.style.display = 'block';
  interestForm.reset();

  setTimeout(() => {
    interestModal.style.display = 'none';
    interestSuccess.style.display = 'none';
  }, 3000);
});

// ←←← End of file (you can add more code later below this if needed)