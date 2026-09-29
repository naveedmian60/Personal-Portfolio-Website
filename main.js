/*
 * Personal project data
 * Add, edit or remove objects in this array to update the Work section.
 * Leave a URL empty until that project is published; its button will be disabled.
 */
const projects = [
  {
    title: 'ShopZone — MERN E-Commerce Website',
    description: 'MERN storefront with product browsing and details, user features, cart and wishlist tools, and admin store management.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    // Add CSS or Tailwind CSS after confirming which one the ShopZone frontend uses.
    image: 'images/shopzone-preview.png',
    imageAlt: 'ShopZone storefront homepage with product search, shopping links, and a featured collection',
    liveUrl: 'https://mern-frontend-six-phi.vercel.app/',
    githubUrl: 'https://github.com/naveedmian60'
  },
  {
    title: 'Workspace Manager',
    description: 'A team workspace app for managing projects, tasks and collaboration, with authentication and a responsive dashboard.',
    technologies: [], // Add only technologies confirmed from the Workspace Manager source files.
    technologyPlaceholder: 'Add confirmed technologies in main.js',
    image: 'images/workspace-manager-preview.png',
    imageAlt: 'Workspace Manager sign-in screen with team collaboration, project and task features',
    liveUrl: 'https://workspace-manager-phi.vercel.app/',
    githubUrl: 'https://github.com/naveedmian60'
  },
  {
    title: 'Golden Crust — Restaurant Website',
    description: 'Responsive restaurant site with menu, story, gallery, chefs, reviews and reservations in a polished dark theme.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/golden-crust-preview.png',
    imageAlt: 'Golden Crust restaurant homepage with dark styling, navigation, and featured burger',
    liveUrl: 'https://fast-alpha-five.vercel.app/',
    githubUrl: 'https://github.com/naveedmian60'
  }
];

/* EmailJS account settings. The public key is intended for browser use. Never add a private key here.
 * In your EmailJS template, set the To Email field to naveedmian0342@gmail.com.
 */
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';

/* Public contact links. */
const PUBLIC_CONTACT_EMAIL = 'naveedmian0342@gmail.com';
const GITHUB_PROFILE_URL = 'https://github.com/naveedmian60';
const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/naveed-ahmad-870a253a4/';

const isPlaceholder = (value) => !value || /YOUR_|example\.com/i.test(value);

function isWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createProjectLink(label, url) {
  if (isWebUrl(url)) {
    const link = createTextElement('a', 'project-link', label);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  }

  const button = createTextElement('button', 'project-link is-unconfigured', label);
  button.type = 'button';
  button.disabled = true;
  button.title = `Add a ${label} URL to this project in main.js`;
  return button;
}

function renderProjects() {
  const projectGrid = document.getElementById('project-grid');
  if (!projectGrid) return;

  projectGrid.replaceChildren();

  if (projects.length === 0) {
    projectGrid.append(createTextElement('p', 'projects-empty', 'Projects will appear here soon.'));
    return;
  }

  projects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'work-card project-card reveal';

    const imageFrame = document.createElement('div');
    imageFrame.className = 'work-image project-image';
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.imageAlt || `${project.title || project.name} project preview`;
    image.loading = 'lazy';
    imageFrame.append(image);

    const imageLabel = createTextElement('span', 'work-count', `PROJECT ${String(index + 1).padStart(2, '0')}`);
    imageFrame.append(imageLabel);

    const details = document.createElement('div');
    details.className = 'project-details';
    details.append(createTextElement('p', 'project-kicker', 'SELECTED WORK'));
    details.append(createTextElement('h3', '', project.title || project.name || 'Untitled project'));
    details.append(createTextElement('p', 'project-description', project.description));

    const techList = document.createElement('ul');
    techList.className = 'project-technologies';
    techList.setAttribute('aria-label', 'Technologies used');
    const technologies = Array.isArray(project.technologies) ? project.technologies : [];
    technologies.forEach((technology) => {
      techList.append(createTextElement('li', '', technology));
    });
    if (technologies.length === 0) {
      techList.append(createTextElement('li', 'technology-pending', project.technologyPlaceholder || 'Add confirmed technologies in main.js'));
    }

    const actions = document.createElement('div');
    actions.className = 'project-actions';
    actions.append(createProjectLink('Live Demo ↗', project.liveUrl));
    actions.append(createProjectLink('GitHub ↗', project.githubUrl));

    details.append(techList, actions);
    card.append(imageFrame, details);
    projectGrid.append(card);
  });

  if ('IntersectionObserver' in window) {
    projectGrid.querySelectorAll('.reveal').forEach((card) => revealObserver.observe(card));
  } else {
    projectGrid.querySelectorAll('.reveal').forEach((card) => card.classList.add('is-visible'));
  }
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navLinks.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navLinks.classList.toggle('is-open', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const navItems = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
let revealObserver;

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-28% 0px -62% 0px' });

  sections.forEach((section) => sectionObserver.observe(section));

  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.body.classList.add('js-ready');
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
}

function setUpContactLinks() {
  const emailLink = document.getElementById('contact-email-link');
  if (emailLink && !isPlaceholder(PUBLIC_CONTACT_EMAIL)) {
    emailLink.textContent = PUBLIC_CONTACT_EMAIL;
    emailLink.href = `mailto:${PUBLIC_CONTACT_EMAIL}`;
    emailLink.classList.remove('is-unconfigured');
    emailLink.removeAttribute('aria-disabled');
    emailLink.removeAttribute('tabindex');
    emailLink.removeAttribute('title');
  }

  const githubLink = document.getElementById('github-contact-link');
  if (githubLink && isWebUrl(GITHUB_PROFILE_URL)) githubLink.href = GITHUB_PROFILE_URL;

  const linkedinLink = document.getElementById('linkedin-contact-link');
  if (linkedinLink && isWebUrl(LINKEDIN_PROFILE_URL)) {
    linkedinLink.href = LINKEDIN_PROFILE_URL;
    linkedinLink.target = '_blank';
    linkedinLink.rel = 'noopener noreferrer';
    linkedinLink.classList.remove('is-unconfigured');
    linkedinLink.removeAttribute('aria-disabled');
    linkedinLink.removeAttribute('tabindex');
    linkedinLink.removeAttribute('title');
  }
}

function setFormStatus(message, state) {
  const formNote = document.getElementById('form-note');
  if (!formNote) return;
  formNote.textContent = message;
  formNote.dataset.state = state;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function setUpContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('contact-submit');
  if (!contactForm || !submitButton) return;

  contactForm.addEventListener('input', (event) => {
    if (event.target.matches('input, textarea')) event.target.removeAttribute('aria-invalid');
  });

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameField = contactForm.elements.namedItem('name');
    const emailField = contactForm.elements.namedItem('email');
    const messageField = contactForm.elements.namedItem('message');
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    const invalidFields = [];
    [nameField, emailField, messageField].forEach((field) => field.removeAttribute('aria-invalid'));
    if (!name) invalidFields.push(nameField);
    if (!email || !isValidEmail(email)) invalidFields.push(emailField);
    if (!message) invalidFields.push(messageField);

    if (invalidFields.length) {
      invalidFields.forEach((field) => field.setAttribute('aria-invalid', 'true'));
      setFormStatus('Please enter your name, a valid email address and a message.', 'error');
      invalidFields[0].focus();
      return;
    }

    const emailJsIsConfigured = [EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID]
      .every((value) => !isPlaceholder(value));

    if (!emailJsIsConfigured) {
      setFormStatus('Email is not set up yet. Add your EmailJS public key, service ID and template ID in main.js.', 'error');
      return;
    }

    if (!window.emailjs) {
      setFormStatus('EmailJS could not load. Check your internet connection and try again.', 'error');
      return;
    }

    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    submitButton.innerHTML = 'Sending… <span aria-hidden="true">↗</span>';
    setFormStatus('Sending your message…', 'sending');

    try {
      await window.emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);
      contactForm.reset();
      setFormStatus('Thanks! Your message was sent. I’ll reply to the email you shared.', 'success');
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setFormStatus('Your message could not be sent. Please try again shortly.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      submitButton.innerHTML = 'Send message <span aria-hidden="true">↗</span>';
    }
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

renderProjects();
setUpContactLinks();
setUpContactForm();

const emailJsIsConfigured = [EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID]
  .every((value) => !isPlaceholder(value));
if (emailJsIsConfigured && window.emailjs) {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}
