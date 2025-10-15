export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-white to-[#FAFAFA] border-t border-black/5">
      <div className="container-page py-8 text-center">
        <div className="font-medium">Amigo’s Foreign Languages Academy</div>
        <div className="mt-2 flex items-center justify-center gap-4 text-sm">
           <a href="https://www.instagram.com/amigosforeignlanguages/?utm_source=ig_web_button_share_sheet" aria-label="Instagram" className="accent-underline">Instagram</a>
              
              <a href="https://api.whatsapp.com/send/?phone=8688447525&text&type=phone_number&app_absent=0" aria-label="WhatsApp" className="accent-underline">WhatsApp</a>
        </div>
        <div className="mt-2 text-sm">Contact: amigosacademy@gmail.com</div>
        <div className="mt-2 text-xs">© 2025 Amigo’s Foreign Languages Academy</div>
      </div>
    </footer>
  );
}


