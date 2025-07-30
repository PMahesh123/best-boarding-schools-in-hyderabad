// Smooth hover effects and interactions
document.querySelectorAll('.school-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
  });
});

// Button click effect
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Loading...';
    setTimeout(() => {
      btn.textContent = 'Explore Campus';
      alert('School details would load here!');
    }, 800);
  });
});