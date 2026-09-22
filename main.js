// Interatividade do Portfólio - Felipe Melo

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Alternância do menu móvel (Mobile hamburger)
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Fechar ao clicar em qualquer item
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // Clique manual nos links atualiza imediatamente o estado visual
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ScrollSpy para sincronizar o link ativo conforme a rolagem
  const sections = document.querySelectorAll('section[id], footer[id]');

  window.addEventListener('scroll', () => {
    // Sombra sutil ao rolar
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Identificar a seção visível
    let currentSectionId = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // ==========================================================================
  // GALERIAS DOS PROJETOS & MODAL LIGHTBOX
  // ==========================================================================
  const imageModal = document.getElementById('image-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const modalCounter = document.getElementById('modal-counter');
  const modalBody = document.getElementById('modal-body');

  let activeModalCard = null;
  let activeModalImages = [];
  let currentModalIndex = 0;

  function updateModalView() {
    if (!activeModalImages.length) return;
    const currentImg = activeModalImages[currentModalIndex];
    modalImage.src = currentImg.src;
    modalImage.alt = currentImg.alt;
    modalCaption.textContent = currentImg.alt || 'Visualização do projeto';
    modalCounter.textContent = `${currentModalIndex + 1} / ${activeModalImages.length}`;

    // Sincronizar o card original de fundo
    if (activeModalCard && typeof activeModalCard.syncIndex === 'function') {
      activeModalCard.syncIndex(currentModalIndex);
    }
  }

  function openModal(card, initialIndex) {
    activeModalCard = card;
    activeModalImages = Array.from(card.querySelectorAll('.gallery-image'));
    currentModalIndex = initialIndex;

    const isMobileProject = card.getAttribute('data-project') === 'telos';
    if (isMobileProject) {
      modalBody.classList.add('is-mobile');
    } else {
      modalBody.classList.remove('is-mobile');
    }

    updateModalView();
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  if (modalPrev) {
    modalPrev.addEventListener('click', () => {
      currentModalIndex = (currentModalIndex - 1 + activeModalImages.length) % activeModalImages.length;
      updateModalView();
    });
  }

  if (modalNext) {
    modalNext.addEventListener('click', () => {
      currentModalIndex = (currentModalIndex + 1) % activeModalImages.length;
      updateModalView();
    });
  }

  // Atalhos de teclado para o modal
  window.addEventListener('keydown', (e) => {
    if (!imageModal || !imageModal.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      currentModalIndex = (currentModalIndex - 1 + activeModalImages.length) % activeModalImages.length;
      updateModalView();
    } else if (e.key === 'ArrowRight') {
      currentModalIndex = (currentModalIndex + 1) % activeModalImages.length;
      updateModalView();
    }
  });

  // Configurar cada card de projeto com setas internas e clique para abrir modal
  const projectCards = document.querySelectorAll('.project-card[data-project]');
  projectCards.forEach(card => {
    const images = card.querySelectorAll('.gallery-image');
    const mediaContainer = card.querySelector('.project-media');
    const prevBtn = card.querySelector('.gallery-arrow.prev');
    const nextBtn = card.querySelector('.gallery-arrow.next');
    const counterIndex = card.querySelector('.gallery-counter .current-index');

    function setActiveImage(index) {
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
      if (counterIndex) {
        counterIndex.textContent = index + 1;
      }
    }

    card.syncIndex = setActiveImage;

    function getActiveIndex() {
      const idx = Array.from(images).findIndex(img => img.classList.contains('active'));
      return idx >= 0 ? idx : 0;
    }

    // Setas internas
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentIdx = getActiveIndex();
        const newIdx = (currentIdx - 1 + images.length) % images.length;
        setActiveImage(newIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentIdx = getActiveIndex();
        const newIdx = (currentIdx + 1) % images.length;
        setActiveImage(newIdx);
      });
    }

    // Clicar na imagem abre o modal maior
    if (mediaContainer) {
      mediaContainer.addEventListener('click', (e) => {
        // Se o clique foi nas setas, não abre o modal
        if (e.target.closest('.gallery-arrow')) return;
        const currentIdx = getActiveIndex();
        openModal(card, currentIdx);
      });
    }
  });
});
