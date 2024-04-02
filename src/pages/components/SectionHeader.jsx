

const SectionHeader = ({ title, children }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl	">{title}</h1>
      <p className="mb-0 text-xs text-gray-400">See All</p>
      {children}
    </div>
  );
};

export default SectionHeader;
