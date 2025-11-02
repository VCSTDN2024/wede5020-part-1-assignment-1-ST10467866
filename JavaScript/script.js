const accordions = document.querySelectorAll('.accordion-btn');
accordions.forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.close');

openModal.onclick = () => modal.style.display = 'flex';
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }


<script>
var map = L.map('map').setView([-26.2041, 28.0473], 10); // Johannesburg

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

L.marker([-26.2041, 28.0473]).addTo(map)
  .bindPopup('Lady Leah’s Transport - Johannesburg HQ')
  .openPopup();
</script>

const search = document.getElementById('serviceSearch');
const services = document.querySelectorAll('#serviceList li');

search.addEventListener('keyup', () => {
  const term = search.value.toLowerCase();
  services.forEach(service => {
    service.style.display = service.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('contactEmail').value;
  const response = document.getElementById('contactResponse');
  response.textContent = `Thank you! Your message has been sent to info@ladyleahs.co.za.`;
});

