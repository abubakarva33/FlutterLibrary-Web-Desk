const TemplateEach = ({ data }) => {
  const { image, title, count, download } = data;
  return (
    <div>
      <img src={`/images/${image}.webp`} alt="" className="rounded-lg" />
      <div className="flex items-center mt-3">
        <h3 className="text-base font-semibold me-auto"> {title}</h3>
        <div className="flex me-2">
          <img src="/images/phoneIcon.webp" alt="" />
          <p className="mb-0 text-sm ms-1">{count}</p>
        </div>
        <div className="flex">
          <img src="/images/downloadIcon.webp" alt="" />
          <p className="mb-0 text-sm ms-1">{download}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateEach;
