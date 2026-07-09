function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;