<!-- Generated by SpecStory -->

# Web tasarımı için gizlilik politikası (2025-08-01 12:23Z)

_**User**_

📄 FamilyList – Gizlilik Politikası
Son Güncelleme: 1 Ağustos 2025
Uygulama Adı: FamilyList
Geliştirici: STAAU DIGITAL LLC

📌 Toplanan Veriler
AileListesi uygulaması, uygulamanın doğru ve güvenli çalışmasını sağlamak amacıyla aşağıdaki verileri toplar ve işler:

Kullanıcı adı / takma ad

Görev içerikleri (metin olarak)

Görevi ekleyen kullanıcıya ait ID

Renk tercihi ve tamamlanma durumu

Bu veriler Firebase altyapısında şifrelenmiş ve güvenli şekilde saklanır.

☁️ Veri Saklama ve Güvenlik
Tüm veriler, Google Firebase tarafından sağlanan bulut veri tabanlarında (Firestore/Realtime DB) saklanır.

Firebase, GDPR ve KVKK gibi uluslararası veri koruma yönetmeliklerine uygundur.

Kullanıcı verileri, yalnızca görev paylaşımı amacıyla işlenir ve üçüncü kişilerle paylaşılmaz.

👨‍👩‍👧‍👦 Aile Üyeleri ile Paylaşım
Uygulamada oluşturulan görevler, sadece aynı listeye dahil olan kullanıcılar tarafından görüntülenebilir.

Her görev, görevi ekleyen kişinin rengine göre ayrıştırılır ve sadece bu kişiler arası paylaşım yapılır.

👶 13 Yaş Altı Kullanıcılar
Uygulama 13 yaş altı çocukları hedeflemez. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplanmaz.

🔐 Haklarınız
Uygulamayı istediğiniz zaman silebilir ve bilgilerinizin Firebase'den kaldırılmasını talep edebilirsiniz.

Verilerinizin silinmesini isterseniz, aşağıdaki e-posta adresinden bizimle iletişime geçebilirsiniz.

🛠️ Kullanılan Hizmetler
Bu uygulama aşağıdaki hizmetleri kullanır:

Google Firebase Authentication (Giriş işlemleri)

Firebase Firestore / Realtime Database (Veri saklama)

Firebase’in gizlilik politikası için:
https://firebase.google.com/support/privacy

📫 İletişim
Herhangi bir gizlilik sorusu için bize şu adresten ulaşabilirsiniz:
info@staau.com.tr


BUnunla alakalı tek sayfalık bir web tasarım lazım ki netlifly üzerinden deploy edelim ve google play sorede link paylaşalım 


---

_**Assistant**_

I'll help you create a single-page privacy policy website for FamilyList that can be deployed on Netlify. Let me start by exploring the workspace and then create a modern, responsive design.


---

<details>
            <summary>Listed current directory • **2** results</summary>
        
| Name |
|-------|
| 📁 `.specstory` |
| 📄 `.cursorindexingignore` |

</details>

---

I'll create a modern, responsive privacy policy website for FamilyList. Let me start by creating the HTML structure with a beautiful design.


---

<details><summary>Edit file: index.html</summary>

Creating the main HTML file for the FamilyList privacy policy website with a modern, responsive design.

**Chunk 1**
Lines added: 110, lines removed: 1

```diff
@@ -1,1 +1,110 @@
- 
+ <!DOCTYPE html>
+ <html lang="tr">
+ <head>
+     <meta charset="UTF-8">
+     <meta name="viewport" content="width=device-width, initial-scale=1.0">
+     <title>FamilyList - Gizlilik Politikası</title>
+     <link rel="stylesheet" href="styles.css">
+     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
+     <link rel="icon" type="image/x-icon" href="favicon.ico">
+ </head>
+ <body>
+     <div class="container">
+         <header class="header">
+             <div class="logo">
+                 <div class="logo-icon">👨‍👩‍👧‍👦</div>
+                 <h1>FamilyList</h1>
+             </div>
+             <h2>Gizlilik Politikası</h2>
+             <p class="last-updated">Son Güncelleme: 1 Ağustos 2025</p>
+         </header>
+ 
+         <main class="content">
+             <section class="section">
+                 <div class="section-header">
+                     <div class="icon">📌</div>
+                     <h3>Toplanan Veriler</h3>
+                 </div>
+                 <p>AileListesi uygulaması, uygulamanın doğru ve güvenli çalışmasını sağlamak amacıyla aşağıdaki verileri toplar ve işler:</p>
+                 <ul>
+                     <li>Kullanıcı adı / takma ad</li>
+                     <li>Görev içerikleri (metin olarak)</li>
+                     <li>Görevi ekleyen kullanıcıya ait ID</li>
+                     <li>Renk tercihi ve tamamlanma durumu</li>
+                 </ul>
+                 <p class="highlight">Bu veriler Firebase altyapısında şifrelenmiş ve güvenli şekilde saklanır.</p>
+             </section>
+ 
+             <section class="section">
+                 <div class="section-header">
+                     <div class="icon">☁️</div>
+                     <h3>Veri Saklama ve Güvenlik</h3>
+                 </div>
+                 <ul>
+                     <li>Tüm veriler, Google Firebase tarafından sağlanan bulut veri tabanlarında (Firestore/Realtime DB) saklanır.</li>
+                     <li>Firebase, GDPR ve KVKK gibi uluslararası veri koruma yönetmeliklerine uygundur.</li>
+                     <li>Kullanıcı verileri, yalnızca görev paylaşımı amacıyla işlenir ve üçüncü kişilerle paylaşılmaz.</li>
+                 </ul>
+             </section>
+ 
+             <section class="section">
+                 <div class="section-header">
+                     <div class="icon">👨‍👩‍👧‍👦</div>
+                     <h3>Aile Üyeleri ile Paylaşım</h3>
+                 </div>
+                 <ul>
+                     <li>Uygulamada oluşturulan görevler, sadece aynı listeye dahil olan kullanıcılar tarafından görüntülenebilir.</li>
+                     <li>Her görev, görevi ekleyen kişinin rengine göre ayrıştırılır ve sadece bu kişiler arası paylaşım yapılır.</li>
+                 </ul>
+             </section>
+ 
+             <section class="section">
+                 <div class="section-header">
+                     <div class="icon">👶</div>
+                     <h3>13 Yaş Altı Kullanıcılar</h3>
+                 </div>
+                 <p>Uygulama 13 yaş altı çocukları hedeflemez. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplanmaz.</p>
+             </section>
+ 
+             <section class="section">
+                 <div class="section-header">
+                     <div class="icon">🔐</div>
+                     <h3>Haklarınız</h3>
+                 </div>
+                 <ul>
+                     <li>Uygulamayı istediğiniz zaman silebilir ve bilgilerinizin Firebase'den kaldırılmasını talep edebilirsiniz.</li>
+                     <li>Verilerinizin silinmesini isterseniz, aşağıdaki e-posta adresinden bizimle iletişime geçebilirsiniz.</li>
+                 </ul>
+             </section>
+ 
+             <section class="section">
+                 <div class="section-header">
+                     <div class="icon">🛠️</div>
+                     <h3>Kullanılan Hizmetler</h3>
+                 </div>
+                 <p>Bu uygulama aşağıdaki hizmetleri kullanır:</p>
+                 <ul>
+                     <li>Google Firebase Authentication (Giriş işlemleri)</li>
+                     <li>Firebase Firestore / Realtime Database (Veri saklama)</li>
+                 </ul>
+                 <p>Firebase'in gizlilik politikası için: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">https://firebase.google.com/support/privacy</a></p>
+             </section>
+ 
+             <section class="section contact-section">
+                 <div class="section-header">
+                     <div class="icon">📫</div>
+                     <h3>İletişim</h3>
+                 </div>
+                 <p>Herhangi bir gizlilik sorusu için bize şu adresten ulaşabilirsiniz:</p>
+                 <div class="contact-info">
+                     <a href="mailto:info@staau.com.tr" class="email-link">info@staau.com.tr</a>
+                 </div>
+             </section>
+         </main>
+ 
+         <footer class="footer">
+             <p>&copy; 2025 STAAU DIGITAL LLC. Tüm hakları saklıdır.</p>
+         </footer>
+     </div>
+ </body>
+ </html> 
```

</details>

---

Now let me create the CSS file with a modern, beautiful design that's responsive and professional:


---

<details><summary>Edit file: styles.css</summary>

Creating a modern, responsive CSS design for the FamilyList privacy policy website with beautiful styling, gradients, and mobile-friendly layout.

**Chunk 1**
Lines added: 320, lines removed: 1

```diff
@@ -1,1 +1,320 @@
- 
+ /* Reset and base styles */
+ * {
+     margin: 0;
+     padding: 0;
+     box-sizing: border-box;
+ }
+ 
+ body {
+     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
+     line-height: 1.6;
+     color: #333;
+     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
+     min-height: 100vh;
+ }
+ 
+ .container {
+     max-width: 800px;
+     margin: 0 auto;
+     padding: 20px;
+     background: rgba(255, 255, 255, 0.95);
+     backdrop-filter: blur(10px);
+     border-radius: 20px;
+     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
+     margin-top: 20px;
+     margin-bottom: 20px;
+ }
+ 
+ /* Header styles */
+ .header {
+     text-align: center;
+     padding: 40px 0;
+     border-bottom: 2px solid #f0f0f0;
+     margin-bottom: 40px;
+ }
+ 
+ .logo {
+     display: flex;
+     align-items: center;
+     justify-content: center;
+     gap: 15px;
+     margin-bottom: 20px;
+ }
+ 
+ .logo-icon {
+     font-size: 3rem;
+     background: linear-gradient(135deg, #667eea, #764ba2);
+     -webkit-background-clip: text;
+     -webkit-text-fill-color: transparent;
+     background-clip: text;
+ }
+ 
+ .header h1 {
+     font-size: 2.5rem;
+     font-weight: 700;
+     background: linear-gradient(135deg, #667eea, #764ba2);
+     -webkit-background-clip: text;
+     -webkit-text-fill-color: transparent;
+     background-clip: text;
+     margin: 0;
+ }
+ 
+ .header h2 {
+     font-size: 1.8rem;
+     font-weight: 600;
+     color: #4a5568;
+     margin-bottom: 10px;
+ }
+ 
+ .last-updated {
+     color: #718096;
+     font-size: 0.9rem;
+     font-weight: 500;
+ }
+ 
+ /* Content styles */
+ .content {
+     padding: 0 20px;
+ }
+ 
+ .section {
+     margin-bottom: 40px;
+     padding: 30px;
+     background: #ffffff;
+     border-radius: 15px;
+     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
+     border: 1px solid #e2e8f0;
+     transition: transform 0.2s ease, box-shadow 0.2s ease;
+ }
+ 
+ .section:hover {
+     transform: translateY(-2px);
+     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
+ }
+ 
+ .section-header {
+     display: flex;
+     align-items: center;
+     gap: 15px;
+     margin-bottom: 20px;
+ }
+ 
+ .section-header .icon {
+     font-size: 1.5rem;
+     width: 40px;
+     height: 40px;
+     display: flex;
+     align-items: center;
+     justify-content: center;
+     background: linear-gradient(135deg, #667eea, #764ba2);
+     border-radius: 50%;
+     color: white;
+     font-size: 1.2rem;
+ }
+ 
+ .section-header h3 {
+     font-size: 1.4rem;
+     font-weight: 600;
+     color: #2d3748;
+     margin: 0;
+ }
+ 
+ .section p {
+     margin-bottom: 15px;
+     color: #4a5568;
+     font-size: 1rem;
+ }
+ 
+ .section ul {
+     list-style: none;
+     padding-left: 0;
+ }
+ 
+ .section ul li {
+     position: relative;
+     padding-left: 25px;
+     margin-bottom: 12px;
+     color: #4a5568;
+     line-height: 1.6;
+ }
+ 
+ .section ul li::before {
+     content: "•";
+     position: absolute;
+     left: 0;
+     color: #667eea;
+     font-weight: bold;
+     font-size: 1.2rem;
+ }
+ 
+ .highlight {
+     background: linear-gradient(135deg, #667eea20, #764ba220);
+     padding: 15px;
+     border-radius: 10px;
+     border-left: 4px solid #667eea;
+     font-weight: 500;
+     color: #2d3748 !important;
+ }
+ 
+ /* Contact section special styling */
+ .contact-section {
+     background: linear-gradient(135deg, #667eea10, #764ba210);
+     border: 2px solid #667eea20;
+ }
+ 
+ .contact-info {
+     text-align: center;
+     margin-top: 20px;
+ }
+ 
+ .email-link {
+     display: inline-block;
+     padding: 12px 24px;
+     background: linear-gradient(135deg, #667eea, #764ba2);
+     color: white;
+     text-decoration: none;
+     border-radius: 25px;
+     font-weight: 500;
+     transition: all 0.3s ease;
+     box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
+ }
+ 
+ .email-link:hover {
+     transform: translateY(-2px);
+     box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
+     color: white;
+ }
+ 
+ /* Links */
+ a {
+     color: #667eea;
+     text-decoration: none;
+     transition: color 0.2s ease;
+ }
+ 
+ a:hover {
+     color: #764ba2;
+     text-decoration: underline;
+ }
+ 
+ /* Footer */
+ .footer {
+     text-align: center;
+     padding: 30px 0;
+     margin-top: 40px;
+     border-top: 2px solid #f0f0f0;
+     color: #718096;
+     font-size: 0.9rem;
+ }
+ 
+ /* Responsive design */
+ @media (max-width: 768px) {
+     .container {
+         margin: 10px;
+         padding: 15px;
+         border-radius: 15px;
+     }
+     
+     .header {
+         padding: 30px 0;
+     }
+     
+     .header h1 {
+         font-size: 2rem;
+     }
+     
+     .header h2 {
+         font-size: 1.5rem;
+     }
+     
+     .logo-icon {
+         font-size: 2.5rem;
+     }
+     
+     .content {
+         padding: 0 10px;
+     }
+     
+     .section {
+         padding: 20px;
+         margin-bottom: 30px;
+     }
+     
+     .section-header h3 {
+         font-size: 1.2rem;
+     }
+     
+     .section-header .icon {
+         width: 35px;
+         height: 35px;
+         font-size: 1rem;
+     }
+ }
+ 
+ @media (max-width: 480px) {
+     .container {
+         margin: 5px;
+         padding: 10px;
+     }
+     
+     .header {
+         padding: 20px 0;
+     }
+     
+     .header h1 {
+         font-size: 1.8rem;
+     }
+     
+     .header h2 {
+         font-size: 1.3rem;
+     }
+     
+     .logo {
+         flex-direction: column;
+         gap: 10px;
+     }
+     
+     .section {
+         padding: 15px;
+     }
+     
+     .section-header {
+         flex-direction: column;
+         text-align: center;
+         gap: 10px;
+     }
+     
+     .email-link {
+         padding: 10px 20px;
+         font-size: 0.9rem;
+     }
+ }
+ 
+ /* Smooth scrolling */
+ html {
+     scroll-behavior: smooth;
+ }
+ 
+ /* Loading animation */
+ @keyframes fadeInUp {
+     from {
+         opacity: 0;
+         transform: translateY(30px);
+     }
+     to {
+         opacity: 1;
+         transform: translateY(0);
+     }
+ }
+ 
+ .section {
+     animation: fadeInUp 0.6s ease forwards;
+ }
+ 
+ .section:nth-child(1) { animation-delay: 0.1s; }
+ .section:nth-child(2) { animation-delay: 0.2s; }
+ .section:nth-child(3) { animation-delay: 0.3s; }
+ .section:nth-child(4) { animation-delay: 0.4s; }
+ .section:nth-child(5) { animation-delay: 0.5s; }
+ .section:nth-child(6) { animation-delay: 0.6s; }
+ .section:nth-child(7) { animation-delay: 0.7s; } 
```

</details>

---

Now let me create a simple favicon and a README file for deployment instructions:


---

<details><summary>Edit file: README.md</summary>

Creating a README file with deployment instructions for Netlify and information about the privacy policy website.

**Chunk 1**
Lines added: 42, lines removed: 1

```diff
@@ -1,1 +1,42 @@
- 
+ # FamilyList - Gizlilik Politikası
+ 
+ Bu proje, FamilyList uygulamasının gizlilik politikasını içeren tek sayfalık web sitesidir.
+ 
+ ## 🚀 Netlify'da Deploy Etme
+ 
+ ### Yöntem 1: Drag & Drop (En Kolay)
+ 1. Bu klasördeki tüm dosyaları seçin
+ 2. [Netlify](https://netlify.com) sitesine gidin
+ 3. "Deploy manually" bölümüne dosyaları sürükleyip bırakın
+ 4. Siteniz otomatik olarak yayınlanacak
+ 
+ ### Yöntem 2: GitHub ile
+ 1. Bu dosyaları GitHub'a yükleyin
+ 2. Netlify'da "New site from Git" seçin
+ 3. GitHub repository'nizi bağlayın
+ 4. Deploy butonuna tıklayın
+ 
+ ## 📁 Dosya Yapısı
+ ```
+ ├── index.html          # Ana HTML dosyası
+ ├── styles.css          # CSS stilleri
+ ├── README.md           # Bu dosya
+ └── favicon.ico         # Site ikonu (opsiyonel)
+ ```
+ 
+ ## 🎨 Özellikler
+ - ✅ Responsive tasarım (mobil uyumlu)
+ - ✅ Modern gradient arka plan
+ - ✅ Smooth animasyonlar
+ - ✅ Türkçe içerik
+ - ✅ SEO dostu
+ - ✅ Hızlı yükleme
+ 
+ ## 🔗 Google Play Store
+ Deploy ettikten sonra Netlify'dan aldığınız URL'yi Google Play Store'da gizlilik politikası linki olarak kullanabilirsiniz.
+ 
+ ## 📧 İletişim
+ Herhangi bir sorunuz için: info@staau.com.tr
+ 
+ ---
+ **STAAU DIGITAL LLC** © 2025 
```

</details>

---

Now let me create a simple favicon for the website:


---

<details><summary>Edit file: favicon.svg</summary>

Creating a simple SVG favicon for the FamilyList privacy policy website.

**Chunk 1**
Lines added: 10, lines removed: 1

```diff
@@ -1,1 +1,10 @@
- 
+ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
+   <defs>
+     <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
+       <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
+       <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
+     </linearGradient>
+   </defs>
+   <rect width="32" height="32" rx="6" fill="url(#grad)"/>
+   <text x="16" y="22" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="white">👨‍👩‍��‍👦</text>
+ </svg> 
```

</details>

---

Let me also create a simple ICO favicon file and update the HTML to use the SVG favicon:


---

<details><summary>Edit file: index.html</summary>

undefined

**Chunk 1**
Lines added: 1, lines removed: 1

```diff
@@ -7,5 +7,5 @@
      <link rel="stylesheet" href="styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
-     <link rel="icon" type="image/x-icon" href="favicon.ico">
+     <link rel="icon" type="image/svg+xml" href="favicon.svg">
  </head>
  <body>
```

</details>

---

Now let me create a simple deployment configuration file for Netlify:


---

<details><summary>Edit file: netlify.toml</summary>

Creating a Netlify configuration file for optimal deployment settings.

**Chunk 1**
Lines added: 16, lines removed: 1

```diff
@@ -1,1 +1,16 @@
- 
+ [build]
+   publish = "."
+ 
+ [[headers]]
+   for = "/*"
+   [headers.values]
+     X-Frame-Options = "DENY"
+     X-XSS-Protection = "1; mode=block"
+     X-Content-Type-Options = "nosniff"
+     Referrer-Policy = "strict-origin-when-cross-origin"
+     Content-Security-Policy = "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;"
+ 
+ [[redirects]]
+   from = "/*"
+   to = "/index.html"
+   status = 200 
```

</details>

---

Perfect! I've created a beautiful, modern, and responsive privacy policy website for FamilyList. Here's what I've built for you:

## �� Created Files:

1. **`index.html`** - Main HTML structure with all the privacy policy content
2. **`styles.css`** - Modern, responsive CSS with beautiful gradients and animations
3. **`favicon.svg`** - Custom favicon for the website
4. **`README.md`** - Deployment instructions and project information
5. **`netlify.toml`** - Netlify configuration for optimal deployment

## �� Design Features:

- **Modern Gradient Background** - Beautiful purple-blue gradient
- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Fade-in effects for sections
- **Professional Typography** - Using Inter font family
- **Interactive Elements** - Hover effects and smooth transitions
- **Clean Layout** - Well-organized sections with icons
- **Contact Section** - Highlighted email contact with attractive button

## 🚀 Deployment Instructions:

### Quick Deploy to Netlify:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire folder to the "Deploy manually" section
3. Your site will be live instantly with a random URL
4. You can customize the URL in Netlify settings

### Alternative Method:
1. Upload these files to GitHub
2. Connect your GitHub repo to Netlify
3. Deploy automatically

## 📱 Google Play Store Integration:
Once deployed, you'll get a URL like `https://your-site-name.netlify.app` that you can use as your privacy policy link in the Google Play Store.

The website is fully responsive, loads quickly, and follows modern web design principles. It includes all the privacy policy content you provided, beautifully formatted and easy to read on any device.

Would you like me to make any adjustments to the design or content before you deploy it?

---

_**User**_

ingilizce versiyonunu da ekle dil değiştirme tuşuyla geçiş olsun

📄 Privacy Policy – FamilyList
Last Updated: August 1, 2025
App Name: FamilyList
Developer: STAAU DIGITAL LLC

📌 Collected Data
FamilyList collects and processes the following data to support core app functionality:

Username or nickname

Task contents

Task color and completion status

Anonymous user ID (for syncing data)

All data is stored securely using Google Firebase services.

☁️ Data Storage and Security
Data is stored in Google Firebase Firestore, a secure cloud database.

Firebase complies with global data protection regulations such as GDPR.

All data transmissions are encrypted.

No user data is shared with third parties.

👨‍👩‍👧‍👦 Shared Lists
Task entries are shared only within the same family or group list.

Each task is associated with a specific user and visually marked by color.

Other users in the list can view and mark tasks based on access.

👶 Children Under 13
This application is not designed for children under 13.

We do not knowingly collect personal information from users under 13.

🔐 Your Rights
You have the right to:

Request deletion of your data

Contact the developer to review or modify stored data

To make such requests, contact us at the email address below.

🛠️ Services We Use
Firebase Authentication (for user login)

Firebase Firestore (for task and user data)


Learn more about Firebase’s privacy practices at:
🔗 https://firebase.google.com/support/privacy

📫 Contact
If you have any questions about this privacy policy, you can contact us at:
📧 info@staau.com.tr

---

_**Assistant**_

I'll add an English version with a language switcher button. Let me update the HTML to include both languages and add the language switching functionality.


---

<details><summary>Edit file: index.html</summary>

I'm updating the HTML to include both Turkish and English versions with a language switcher button and JavaScript functionality.

**Chunk 1**
Lines added: 1, lines removed: 1

```diff
@@ -4,5 +4,5 @@
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
-     <title>FamilyList - Gizlilik Politikası</title>
+     <title>FamilyList - Gizlilik Politikası | Privacy Policy</title>
      <link rel="stylesheet" href="styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Chunk 2**
Lines added: 12, lines removed: 2

```diff
@@ -16,9 +16,19 @@
                  <h1>FamilyList</h1>
              </div>
-             <h2>Gizlilik Politikası</h2>
-             <p class="last-updated">Son Güncelleme: 1 Ağustos 2025</p>
+             <div class="language-switcher">
+                 <button class="lang-btn active" data-lang="tr">🇹🇷 Türkçe</button>
+                 <button class="lang-btn" data-lang="en">🇺🇸 English</button>
+             </div>
+             <h2 class="title-tr">Gizlilik Politikası</h2>
+             <h2 class="title-en" style="display: none;">Privacy Policy</h2>
+             <p class="last-updated">
+                 <span class="tr">Son Güncelleme: 1 Ağustos 2025</span>
+                 <span class="en" style="display: none;">Last Updated: August 1, 2025</span>
+             </p>
          </header>
  
          <main class="content">
+             <!-- Turkish Content -->
+             <div class="content-tr">
                  <section class="section">
                      <div class="section-header">
```

**Chunk 3**
Lines added: 88, lines removed: undefined

```diff
@@ -101,4 +111,92 @@
                      </div>
                  </section>
+             </div>
+ 
+             <!-- English Content -->
+             <div class="content-en" style="display: none;">
+                 <section class="section">
+                     <div class="section-header">
+                         <div class="icon">📌</div>
+                         <h3>Collected Data</h3>
+                     </div>
+                     <p>FamilyList collects and processes the following data to support core app functionality:</p>
+                     <ul>
+                         <li>Username or nickname</li>
+                         <li>Task contents</li>
+                         <li>Task color and completion status</li>
+                         <li>Anonymous user ID (for syncing data)</li>
+                     </ul>
+                     <p class="highlight">All data is stored securely using Google Firebase services.</p>
+                 </section>
+ 
+                 <section class="section">
+                     <div class="section-header">
+                         <div class="icon">☁️</div>
+                         <h3>Data Storage and Security</h3>
+                     </div>
+                     <ul>
+                         <li>Data is stored in Google Firebase Firestore, a secure cloud database.</li>
+                         <li>Firebase complies with global data protection regulations such as GDPR.</li>
+                         <li>All data transmissions are encrypted.</li>
+                         <li>No user data is shared with third parties.</li>
+                     </ul>
+                 </section>
+ 
+                 <section class="section">
+                     <div class="section-header">
+                         <div class="icon">👨‍👩‍👧‍👦</div>
+                         <h3>Shared Lists</h3>
+                     </div>
+                     <ul>
+                         <li>Task entries are shared only within the same family or group list.</li>
+                         <li>Each task is associated with a specific user and visually marked by color.</li>
+                         <li>Other users in the list can view and mark tasks based on access.</li>
+                     </ul>
+                 </section>
+ 
+                 <section class="section">
+                     <div class="section-header">
+                         <div class="icon">👶</div>
+                         <h3>Children Under 13</h3>
+                     </div>
+                     <p>This application is not designed for children under 13. We do not knowingly collect personal information from users under 13.</p>
+                 </section>
+ 
+                 <section class="section">
+                     <div class="section-header">
+                         <div class="icon">🔐</div>
+                         <h3>Your Rights</h3>
+                     </div>
+                     <p>You have the right to:</p>
+                     <ul>
+                         <li>Request deletion of your data</li>
+                         <li>Contact the developer to review or modify stored data</li>
+                     </ul>
+                     <p>To make such requests, contact us at the email address below.</p>
+                 </section>
+ 
+                 <section class="section">
+                     <div class="section-header">
+                         <div class="icon">🛠️</div>
+                         <h3>Services We Use</h3>
+                     </div>
+                     <ul>
+                         <li>Firebase Authentication (for user login)</li>
+                         <li>Firebase Firestore (for task and user data)</li>
+                     </ul>
+                     <p>Learn more about Firebase's privacy practices at: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">https://firebase.google.com/support/privacy</a></p>
+                 </section>
+ 
+                 <section class="section contact-section">
+                     <div class="section-header">
+                         <div class="icon">📫</div>
+                         <h3>Contact</h3>
+                     </div>
+                     <p>If you have any questions about this privacy policy, you can contact us at:</p>
+                     <div class="contact-info">
+                         <a href="mailto:info@staau.com.tr" class="email-link">info@staau.com.tr</a>
+                     </div>
+                 </section>
+             </div>
          </main>
  
```

**Chunk 4**
Lines added: 2, lines removed: undefined

```diff
@@ -107,4 +205,6 @@
          </footer>
      </div>
+ 
+     <script src="script.js"></script>
  </body>
  </html> 
```

</details>

---

Now let me update the CSS to style the language switcher:


---



---



---

