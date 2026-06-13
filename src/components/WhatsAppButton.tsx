const WHATSAPP_URL =
  "https://wa.me/919288511995?text=" +
  encodeURIComponent(
    "Hello TrueLimb Ranchi, I would like to inquire about your prosthetic/orthotic services."
  );

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TrueLimb on WhatsApp"
      className="fixed right-4 bottom-20 lg:bottom-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 text-white" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.99 0 2.535-.86 2.937-1.776.143-.33.215-.674.215-1.02 0-.27-1.39-.99-1.733-1.218zm-2.087 6.974c-1.834 0-3.626-.515-5.158-1.49l-3.612.946.97-3.515a9.394 9.394 0 0 1-1.62-5.282c0-5.187 4.232-9.418 9.42-9.418a9.418 9.418 0 0 1 9.418 9.418c0 5.188-4.23 9.34-9.418 9.34zm0-20.543c-6.187 0-11.226 5.04-11.226 11.226 0 1.99.53 3.928 1.504 5.642L5.83 27.196l5.27-1.382a11.27 11.27 0 0 0 5.922 1.69c6.187 0 11.226-5.04 11.226-11.226S23.21 3.636 17.023 3.636z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
