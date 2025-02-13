const VisitOurClinic = () => {
  return (
    <div className="relative w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.6356814358551!2d-6.265161782182605!3d53.33098985108993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670ea09cdf3a61%3A0x35815b739cf060c1!2s42%20Richmond%20St%20S%2C%20Saint%20Kevin&#39;s%2C%20Dublin%202%2C%20D02%20TV08%2C%20Ireland!5e0!3m2!1sen!2sbr!4v1738893132922!5m2!1sen!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a
        href="https://maps.app.goo.gl/7YYV8KSfB4yrxBbo8"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-8 right-8 bg-[#6FC4FA] text-white text-xl px-10 py-3 rounded-full shadow-xl hover:bg-[#8ED1FB] transition"
      >
        Visit Our Clinic
      </a>
    </div>
  );
};

export default VisitOurClinic;