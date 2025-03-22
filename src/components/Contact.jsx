import React from "react";

const Contact = ({ designer }) => {
  const { email, phone, location, social } = designer;

  const socialIcons = {
    linkedin: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
    dribbble: (
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.847 7.929c-.218-.655-.49-1.284-.812-1.884-1.372 1.372-3.066 2.188-4.929 2.188-1.862 0-3.557-.816-4.929-2.188-.322.6-.594 1.229-.812 1.884 1.372 1.372 3.066 2.188 4.929 2.188 1.862 0 3.557-.816 4.929-2.188zm-9.847 12.071c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" />
    ),
    behance: (
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988v-5.989h-.087c-1.211.734-2.153 1.566-2.153 3.049 0 1.593.964 2.94 2.24 2.94zm-2.24-6.988v2.939h-2.451v-2.939h2.451zm0-3.049v2.939h-2.451v-2.939h2.451zm8.301 0v2.939h-2.451v-2.939h2.451zm0 3.049v2.939h-2.451v-2.939h2.451z" />
    ),
    instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
    medium: (
      <path d="M7.5 3c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zM21 7h-1v10h1v-10zm-3 0h-1v10h1v-10zm-6-4h-1v14h1v-14z" />
    ),
  };

  return (
    <section id="contact" className="py-20 bg-[color:var(--color-lightBg)]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
          </p>
        </div>

        {/* Contact & Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6 mx-auto w-full max-w-md">
            {/* Contact Item */}
            {[
              { label: "Email", value: email, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { label: "Phone", value: phone, icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
              { label: "Location", value: location, icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[color:var(--color-primary)] bg-opacity-10 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-[color:var(--color-secondary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-lg">{item.label}</h4>
                  <p className="text-gray-600 text-sm sm:text-base break-words">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {Object.entries(social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[color:var(--color-primary)] bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
                >
                  <svg
                    className="h-6 w-6 text-[color:var(--color-secondary)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {socialIcons[platform]}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
