// دالة لفتح المودال وعرض الصورة الكبيرة
function openModal(largeImageSrc, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = largeImageSrc;
    caption.innerHTML = captionText;
}

// دالة لغلق المودال
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// دالة لإنشاء تأثير الفراشات عند النقر
document.addEventListener('click', function(event) {
    createButterfly(event.pageX, event.pageY);
});

function createButterfly(x, y) {
    const butterfly = document.createElement('div');
    butterfly.classList.add('butterfly');
    butterfly.style.left = `${x}px`;
    butterfly.style.top = `${y}px`;
    document.body.appendChild(butterfly);

    butterfly.addEventListener('animationend', () => {
        butterfly.remove();
    });
}
