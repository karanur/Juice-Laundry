const thumbs = document.querySelectorAll('.icon-thumb');
const mainImage = document.getElementById('mainImage');
const productName = document.getElementById('productName');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // Change main image and product name
    mainImage.src = thumb.getAttribute('data-img');
    productName.textContent = thumb.getAttribute('data-name');

    // Remove 'selected' from all wrappers
    document.querySelectorAll('.thumb-wrapper').forEach(wrapper =>
      wrapper.classList.remove('selected')
    );

    // Add 'selected' to clicked one’s wrapper
    thumb.parentElement.classList.add('selected');
  });
});
