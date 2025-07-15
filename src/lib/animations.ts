import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation configurations for consistency
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
    slower: 1.0,
  },
  easing: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.5)",
    power: "power3.out",
  },
  stagger: {
    fast: 0.1,
    normal: 0.15,
    slow: 0.2,
  },
  distances: {
    small: 20,
    medium: 40,
    large: 60,
    xlarge: 80,
  }
};

// Standard page entrance animation
export const createPageEntranceAnimation = (selector: string, delay = 0) => {
  return gsap.fromTo(selector, 
    { 
      y: ANIMATION_CONFIG.distances.large, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: ANIMATION_CONFIG.durations.slow, 
      delay,
      ease: ANIMATION_CONFIG.easing.power 
    }
  );
};

// Hero section animation sequence
export const createHeroAnimation = (selector = '.hero-content', triggerElement?: HTMLElement | null) => {
  // Immediately set all hero elements to their final state
  gsap.set(`${selector} .hero-badge`, { y: 0, opacity: 1 });
  gsap.set(`${selector} .heading-display, ${selector} .hero-title`, { y: 0, opacity: 1 });
  gsap.set(`${selector} .text-lead, ${selector} .hero-subtitle`, { y: 0, opacity: 1 });
  gsap.set(`${selector} .text-body`, { y: 0, opacity: 1 });
  gsap.set(`${selector} .btn, ${selector} .hero-buttons`, { y: 0, opacity: 1 });
  gsap.set(`${selector} .hero-proof`, { y: 0, opacity: 1 });
  
  return gsap.timeline(); // Return an empty timeline
};

// Card animations with scroll trigger
export const createCardScrollAnimation = (selector: string, triggerElement: HTMLElement | null) => {
  if (!triggerElement) return;

  return gsap.fromTo(selector, 
    { 
      y: ANIMATION_CONFIG.distances.large, 
      opacity: 0,
      scale: 0.95
    },
    { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      duration: ANIMATION_CONFIG.durations.slow, 
      stagger: ANIMATION_CONFIG.stagger.normal, 
      ease: ANIMATION_CONFIG.easing.power,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Metrics/stats counter animation
export const createMetricsAnimation = (selector: string, triggerElement: HTMLElement | null) => {
  if (!triggerElement) return;

  return gsap.fromTo(selector, 
    { 
      scale: 0.8, 
      opacity: 0,
      y: ANIMATION_CONFIG.distances.small
    },
    { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      duration: ANIMATION_CONFIG.durations.normal, 
      stagger: ANIMATION_CONFIG.stagger.normal, 
      ease: ANIMATION_CONFIG.easing.bounce,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Process steps animation
export const createProcessAnimation = (selector: string, triggerElement: HTMLElement | null) => {
  if (!triggerElement) return;

  return gsap.fromTo(selector, 
    { 
      x: -ANIMATION_CONFIG.distances.medium, 
      opacity: 0 
    },
    { 
      x: 0, 
      opacity: 1, 
      duration: ANIMATION_CONFIG.durations.slow, 
      stagger: ANIMATION_CONFIG.stagger.slow, 
      ease: ANIMATION_CONFIG.easing.power,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Feature cards animation
export const createFeatureAnimation = (selector: string, triggerElement: HTMLElement | null) => {
  if (!triggerElement) return;

  return gsap.fromTo(selector, 
    { 
      y: ANIMATION_CONFIG.distances.large, 
      opacity: 0,
      rotationX: 15
    },
    { 
      y: 0, 
      opacity: 1, 
      rotationX: 0,
      duration: ANIMATION_CONFIG.durations.slow, 
      stagger: ANIMATION_CONFIG.stagger.normal, 
      ease: ANIMATION_CONFIG.easing.power,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// CTA section animation
export const createCTAAnimation = (selector: string, triggerElement: HTMLElement | null) => {
  if (!triggerElement) return;

  // Simple animation for all children of the CTA section
  return gsap.fromTo(`${selector} > *`, 
    { 
      y: ANIMATION_CONFIG.distances.medium, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: ANIMATION_CONFIG.durations.slow, 
      stagger: ANIMATION_CONFIG.stagger.normal, 
      ease: ANIMATION_CONFIG.easing.power,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Navbar animation
export const createNavbarAnimation = (navElement: HTMLElement, logoElement: HTMLElement, itemsElement: HTMLElement) => {
  // Immediately set all elements to their final state without animation
  gsap.set(navElement, { y: 0, opacity: 1 });
  gsap.set(logoElement, { scale: 1, opacity: 1 });
  gsap.set(itemsElement.children, { y: 0, opacity: 1 });
  
  return gsap.timeline(); // Return an empty timeline
};

// Modern hover animations for links with professional elegance
export const setupLinkHoverAnimation = (selector: string, parentElement: HTMLElement | null) => {
  if (!parentElement) return;
  
  const links = parentElement.querySelectorAll(selector);
  
  links.forEach(link => {
    const text = link.querySelector('span') || link;
    let currentTween: gsap.core.Timeline | null = null;
    
    // Check if underline already exists to prevent duplication
    let underline = link.querySelector('.gsap-underline') as HTMLElement;
    if (!underline) {
      // Create an elegant underline element
      underline = document.createElement('div');
      underline.className = 'gsap-underline';
      underline.style.cssText = `
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0%;
        height: 2px;
        background: currentColor;
        border-radius: 1px;
        pointer-events: none;
        z-index: 1;
      `;
      
      // Make the link relative positioned
      (link as HTMLElement).style.position = 'relative';
      (link as HTMLElement).style.display = 'inline-block';
      (link as HTMLElement).style.overflow = 'visible';
      link.appendChild(underline);
    }
    
    // Set initial states explicitly
    gsap.set(underline, { width: '0%' });
    
    // Create elegant underline-only hover animation
    link.addEventListener('mouseenter', () => {
      // Kill any existing animation
      if (currentTween) {
        currentTween.kill();
      }
      
      currentTween = gsap.timeline();
      
      currentTween.to(underline, {
        width: '100%',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    link.addEventListener('mouseleave', () => {
      // Kill any existing animation
      if (currentTween) {
        currentTween.kill();
      }
      
      currentTween = gsap.timeline();
      
      currentTween.to(underline, {
        width: '0%',
        duration: 0.2,
        ease: 'power2.in'
      });
    });
  });
};

// Premium button hover animation with sophisticated elegance and luxury feel
export const setupButtonHoverAnimation = (selector: string, parentElement: HTMLElement | null) => {
  if (!parentElement) return;
  
  const buttons = parentElement.querySelectorAll(selector);
  
  buttons.forEach(button => {
    let hoverTween: gsap.core.Timeline | null = null;
    let leaveTween: gsap.core.Timeline | null = null;
    let isPressed = false;
    
    // Set initial styles for smooth transitions and performance
    gsap.set(button, {
      transformOrigin: 'center center',
      willChange: 'transform, box-shadow, filter',
      backfaceVisibility: 'hidden',
      perspective: 1000
    });
    
    // Store original box-shadow for restoration
    const originalBoxShadow = window.getComputedStyle(button).boxShadow;
    
    // Create sophisticated multi-stage hover sequence
    button.addEventListener('mouseenter', () => {
      // Kill any existing animations
      if (hoverTween) hoverTween.kill();
      if (leaveTween) leaveTween.kill();
      
      hoverTween = gsap.timeline();
      
      // Stage 1: Initial subtle scale and enhanced shadow (no y movement)
      hoverTween.to(button, {
        scale: 1.012,
        filter: 'brightness(1.1) saturate(1.15)',
        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2), 0 2px 8px rgba(139, 92, 246, 0.12), 0 1px 4px rgba(139, 92, 246, 0.08)',
        duration: 0.4,
        ease: 'power3.out'
      })
      // Stage 2: Subtle glow intensification for premium feel
      .to(button, {
        boxShadow: '0 6px 16px rgba(139, 92, 246, 0.22), 0 3px 10px rgba(139, 92, 246, 0.14), 0 1px 6px rgba(139, 92, 246, 0.1), 0 0 12px rgba(139, 92, 246, 0.06)',
        filter: 'brightness(1.15) saturate(1.2)',
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.2')
      // Stage 3: Final premium glow
      .to(button, {
        boxShadow: '0 8px 20px rgba(139, 92, 246, 0.25), 0 4px 12px rgba(139, 92, 246, 0.16), 0 2px 8px rgba(139, 92, 246, 0.12), 0 0 16px rgba(139, 92, 246, 0.08)',
        duration: 0.25,
        ease: 'power1.out'
      }, '-=0.15');
    });
    
    button.addEventListener('mouseleave', () => {
      // Kill any existing animations
      if (hoverTween) hoverTween.kill();
      if (leaveTween) leaveTween.kill();
      
      leaveTween = gsap.timeline();
      
      // Elegant return with gentle spring motion
      leaveTween.to(button, {
        scale: 1,
        filter: 'brightness(1) saturate(1)',
        boxShadow: originalBoxShadow || '0 1px 4px rgba(139, 92, 246, 0.1), 0 1px 2px rgba(139, 92, 246, 0.06)',
        duration: 0.5,
        ease: 'power3.out'
      });
      
      // Reset willChange for performance
      gsap.delayedCall(0.5, () => {
        gsap.set(button, { willChange: 'auto' });
      });
    });
    
    // Premium click feedback with micro-interactions
    button.addEventListener('mousedown', () => {
      if (!isPressed) {
        isPressed = true;
        gsap.to(button, {
          scale: 1.008,
          filter: 'brightness(1.2) saturate(1.25)',
          duration: 0.1,
          ease: 'power2.out'
        });
      }
    });
    
    button.addEventListener('mouseup', () => {
      if (isPressed) {
        isPressed = false;
        // Return to hover state with subtle bounce
        gsap.to(button, {
          scale: 1.012,
          filter: 'brightness(1.15) saturate(1.2)',
          duration: 0.2,
          ease: 'back.out(1.2)'
        });
      }
    });
    
    // Handle mouse leave during press
    button.addEventListener('mouseleave', () => {
      isPressed = false;
      gsap.set(button, { willChange: 'transform, box-shadow, filter' });
    });
    
    button.addEventListener('mouseenter', () => {
      gsap.set(button, { willChange: 'transform, box-shadow, filter' });
    });
    
    // Accessibility: keyboard focus enhancement
    button.addEventListener('focus', () => {
      if (!button.matches(':hover')) {
        gsap.to(button, {
          boxShadow: `${originalBoxShadow || '0 1px 4px rgba(139, 92, 246, 0.1)'}, 0 0 0 3px rgba(139, 92, 246, 0.3)`,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    });
    
    button.addEventListener('blur', () => {
      if (!button.matches(':hover')) {
        gsap.to(button, {
          boxShadow: originalBoxShadow || '0 1px 4px rgba(139, 92, 246, 0.1), 0 1px 2px rgba(139, 92, 246, 0.06)',
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    });
  });
};

// Enhanced mobile menu animation with professional elegance and improved sequencing
export const createMobileMenuAnimation = (menuElement: HTMLElement, isOpen: boolean) => {
  if (!menuElement) return;
  
  if (isOpen) {
    // Opening animation sequence with staggered items
    const tl = gsap.timeline();
    const menuItems = menuElement.querySelectorAll('.mobile-nav-link, button');
    
    // Initial setup for menu container
    gsap.set(menuElement, {
      opacity: 0,
      y: -20,
      scale: 0.95
    });
    
    // Initial setup for menu items
    gsap.set(menuItems, {
      opacity: 0,
      y: -15,
      scale: 0.9
    });
    
    // Elegant opening sequence
    tl.to(menuElement, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power3.out'
    })
    .to(menuItems, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.3,
      stagger: {
        amount: 0.25,
        from: 'start',
        ease: 'power2.out'
      },
      ease: 'back.out(1.1)'
    }, '-=0.25')
    .to(menuElement, {
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2)',
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.5');
    
    return tl;
  } else {
    // Closing animation with reverse stagger
    const tl = gsap.timeline();
    const menuItems = menuElement.querySelectorAll('.mobile-nav-link, button');
    
    tl.to(menuItems, {
      opacity: 0,
      y: -12,
      scale: 0.95,
      duration: 0.2,
      stagger: {
        amount: 0.15,
        from: 'end',
        ease: 'power2.in'
      },
      ease: 'power2.in'
    })
    .to(menuElement, {
      opacity: 0,
      y: -20,
      scale: 0.95,
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
      duration: 0.3,
      ease: 'power3.in'
    }, '-=0.1');
    
    return tl;
  }
};

// Form animation
export const createFormAnimation = (selector: string) => {
  return gsap.fromTo(selector, 
    { 
      y: ANIMATION_CONFIG.distances.medium, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: ANIMATION_CONFIG.durations.slow, 
      stagger: ANIMATION_CONFIG.stagger.fast,
      ease: ANIMATION_CONFIG.easing.power
    }
  );
};

// Page transition animation
export const createPageTransition = () => {
  const tl = gsap.timeline();
  
  tl.to('.page-transition', {
    scaleY: 1,
    duration: ANIMATION_CONFIG.durations.fast,
    ease: ANIMATION_CONFIG.easing.power,
    transformOrigin: "bottom"
  })
  .to('.page-transition', {
    scaleY: 0,
    duration: ANIMATION_CONFIG.durations.fast,
    ease: ANIMATION_CONFIG.easing.power,
    transformOrigin: "top",
    delay: 0.1
  });

  return tl;
};

// Utility function to refresh ScrollTrigger
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
