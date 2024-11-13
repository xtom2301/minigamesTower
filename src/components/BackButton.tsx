import { BsBoxArrowLeft } from "react-icons/bs";

import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 border border-gray-500 p-4 mt-6 rounded-full hover:bg-gray-100 transition-colors"
    >
      <BsBoxArrowLeft className="text-4xl" />
      <div className="text-2xl">Back</div>
    </Link>
  );
};

export default BackButton;
