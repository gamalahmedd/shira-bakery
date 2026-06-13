    /* ── Floating cookies/stars background ── */
    const canvas = document.getElementById('bgCanvas');
    const items = [
      '<circle cx="18" cy="18" r="16" fill="#c0306a" opacity=".9"/><circle cx="10" cy="12" r="3" fill="#4a2000"/><circle cx="24" cy="10" r="2.5" fill="#4a2000"/><circle cx="18" cy="22" r="2" fill="#4a2000"/>',
      '<polygon points="20,2 24,14 37,14 27,22 31,35 20,27 9,35 13,22 3,14 16,14" fill="#f48fb1" opacity=".8"/>',
      '<circle cx="14" cy="14" r="12" fill="#b5651d" opacity=".7"/><circle cx="8" cy="10" r="2.5" fill="#4a2000"/><circle cx="18" cy="8" r="2" fill="#4a2000"/><circle cx="13" cy="18" r="1.8" fill="#4a2000"/>',
      '<path d="M20 2 L22 8 L29 8 L23 12 L25 19 L20 15 L15 19 L17 12 L11 8 L18 8 Z" fill="#e91e8c" opacity=".6"/>',
      '<rect x="2" y="2" width="24" height="24" rx="6" fill="#fce4ec" stroke="#f48fb1" stroke-width="2" opacity=".9"/><circle cx="9" cy="10" r="2.5" fill="#c0306a"/><circle cx="18" cy="10" r="2" fill="#c0306a"/><circle cx="14" cy="18" r="2.5" fill="#c0306a"/>',
      '<circle cx="12" cy="12" r="10" fill="#ffe0b2" opacity=".7"/><circle cx="7" cy="9" r="2" fill="#c0306a"/><circle cx="16" cy="8" r="1.5" fill="#c0306a"/><circle cx="12" cy="15" r="1.8" fill="#c0306a"/>',
    ];

    function makeParticle() {
      const ns = 'http://www.w3.org/2000/svg';
      const size = 18 + Math.random() * 30;
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('viewBox', '0 0 40 40');
      svg.innerHTML = items[Math.floor(Math.random() * items.length)];
      svg.style.left = Math.random() * 100 + 'vw';
      svg.style.animationDuration = (12 + Math.random() * 20) + 's';
      svg.style.animationDelay = (Math.random() * -25) + 's';
      canvas.appendChild(svg);
    }

    for (let i = 0; i < 38; i++) makeParticle();

    /* ── Scroll reveal ── */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));