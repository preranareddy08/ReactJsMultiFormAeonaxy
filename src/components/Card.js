const Card = (props) => {
  const { list } = props;
  return (
    <div
      tabIndex={0}
      className="focus:ring-[2px] cursor-pointer focus:ring-yellow-200 focus:border-gray-400 border-gray-500  w-6/12 flex  m-auto p-4 my-4 shadow hover:shadow-lg hover:bg-gray-50  rounded-md  hover:border-yellow-100 "
    >
      <span className=" ">{list.logo}</span>
      <h1 className="ml-8 font-bold">
        {list?.category}
        <span className="text-gray-800 font-normal"> {list.content}</span>
      </h1>
    </div>
  );
};

export default Card;
