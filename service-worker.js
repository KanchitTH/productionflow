self.addEventListener("install", e => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", event => {
  // สำหรับ cache offline เราไม่ได้ใช้งานเพราะโหลดจาก Google Apps Script โดยตรง
});
