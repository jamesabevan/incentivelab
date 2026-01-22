const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 lg:py-40 bg-white">
      <div className="px-4 sm:px-6 lg:px-10">
        {/* Large Serif Statement - like Instrument */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-gray-900 max-w-6xl">
          We are a performance consulting firm designing incentive programs that{' '}
          <em>actually motivate</em> teams to succeed.
        </h2>
      </div>
    </section>
  );
};

export default About;
