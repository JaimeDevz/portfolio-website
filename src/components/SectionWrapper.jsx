import React from "react";

const SectionWrapper = ({ id, children }) => (
  <section
    id={id}
    className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden focus:outline-none focus-visible:outline-none"
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export default SectionWrapper;
