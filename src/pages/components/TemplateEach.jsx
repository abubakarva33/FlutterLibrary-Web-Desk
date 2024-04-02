import { IoPhonePortraitOutline } from "react-icons/io5";
const TemplateEach = ({ data }) => {
  const { image, title, date, category } = data;
  return (
    <div>
      <img src={`/images/${image}.webp`} alt="" className="rounded-lg" />
      <div className="flex items-center mt-3">
        <h3 className="text-base font-semibold me-auto"> {title}</h3>
        <div className="flex me-2">
          <img src="/images/phoneIcon.webp" alt="" />
          <p className="mb-0 text-sm ms-1">{date}</p>
        </div>
        <div className="flex">
          <img src="/images/downloadIcon.webp" alt="" />
          <p className="mb-0 text-sm ms-1">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateEach;
