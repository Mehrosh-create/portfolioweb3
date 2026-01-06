export default function MessengerPanel() {
  return (
    <>
      {/* Hidden checkbox for toggle */}
      <input type="checkbox" id="messenger-toggle" className="hidden peer" />

      {/* Backdrop - closes when clicked */}
      <label
        htmlFor="messenger-toggle"
        className="fixed inset-0 z-40 hidden bg-black/50 backdrop-blur-sm peer-checked:block"
      />

      {/* Chat Panel */}
      <div className="wrapper fixed bottom-32 right-6 z-50 hidden w-96 max-w-[calc(100vw-2rem)] rounded-2xl bg-[#252525] p-6 shadow-2xl peer-checked:block">
        <div className="head-text mb-4 text-center text-lg font-semibold text-white">
          Let&apos;s chat with me? - Online
        </div>

        <div className="chat-box">
          <div className="desc-text mb-6 text-center text-sm text-gray-300">
            Please fill out the form below to start chatting with me directly.
          </div>

          <form
            className="space-y-4"
            action="https://formspree.io/f/your-form-id" // ← Replace with your actual Formspree ID or other service
            method="POST"
            onSubmit={(e) => {
              // Optional: Add client-side validation or success feedback here
              // For now, the form submits normally to the endpoint
            }}
          >
            <input
              className="input-field w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-[#0FB8AF] focus:outline-none"
              name="name"
              placeholder="Your Name"
              type="text"
              required
            />
            <input
              className="input-field w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-[#0FB8AF] focus:outline-none"
              name="email"
              placeholder="Your Email"
              type="email"
              required
            />
            <textarea
              className="input-field w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-4 text-white placeholder-gray-400 focus:border-[#0FB8AF] focus:outline-none"
              placeholder="Your Message"
              name="message"
              rows={4}
              required
            />
            <button
              type="submit"
              className="messenger-send-btn w-full rounded-lg bg-[#0FB8AF] py-3 font-semibold text-black transition hover:bg-[#0fb8afdd]"
            >
              Send Message
            </button>
          </form>

          {/* Close Icon - Already positioned top-right & closes panel */}
          <label
            htmlFor="messenger-toggle"
            className="absolute right-4 top-4 cursor-pointer text-2xl text-gray-400 hover:text-white transition"
          >
            <i className="fas fa-times" />
          </label>
        </div>
      </div>
    </>
  );
}