const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');

function openModal() {
  modalOverlay.style.display = 'flex';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

// Close only when clicking outside the modal content
modalOverlay.addEventListener('click', function (event) {
  if (!modalBox.contains(event.target)) {
    closeModal();
  }
});
