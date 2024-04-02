const ArticleEach = ({ data }) => {
  const { image, title, date, category } = data;
  return (
    <div>
      <img src={`/images/${image}.webp`} alt="" className="rounded-lg" />
      <div className="flex text-gray-500 mt-2">
        <p className="mb-0 text-sm me-3">{date}</p>
        <p className="mb-0 text-sm ">{category}</p>
      </div>
      <h3 className="text-base font-semibold me-auto"> {title}</h3>
    </div>
  );
};

export default ArticleEach;
