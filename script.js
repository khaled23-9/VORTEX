// تحديد العناصر من الـ HTML
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// إضافة حدث الضغط على زر الخطوط الثلاثة
hamburger.addEventListener('click', () => {
    // تفعيل وإلغاء تفعيل كلاس active للقائمة الجانبية (لفتحها وإغلاقها)
    navLinks.classList.toggle('active');
    
    // تفعيل وإلغاء تفعيل كلاس active للخطوط (لتشغيل أنيميشن الـ X)
    hamburger.classList.toggle('active');
});