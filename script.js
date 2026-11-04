
// التحكم في التبديل بين الأقسام (SPA Navigation)
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // إزالة التحديد عن جميع روابط القائمة
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // إظهار القسم المطلوب
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // إضافة التحديد للرابط النشط
    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // التمرير لأعلى الصفحة عند التبديل
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// تجهيز وإرسال نموذج الحجز إلى الواتساب مباشرة
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const phone = document.getElementById('phone').value;
    const grade = document.getElementById('grade').value;
    const type = document.getElementById('type').value;

    const teacherPhone = "201091502642";

    // صياغة الرسالة
    const message = `السلام عليكم مستر محمد عطاالله، أود حجز درس إنجليزي.%0A%0A` +
        `👤 *اسم الطالب:* ${encodeURIComponent(name)}%0A` +
        `📱 *رقم التواصل:* ${encodeURIComponent(phone)}%0A` +
        `📚 *المرحلة الدراسية:* ${encodeURIComponent(grade)}%0A` +
        `📍 *نوع المكان:* ${encodeURIComponent(type)}`;

    // فتح رابط الواتساب
    const whatsappUrl = `https://wa.me/${teacherPhone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
});