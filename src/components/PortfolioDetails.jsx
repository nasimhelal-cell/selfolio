import { useLocation } from "react-router-dom";

const PortfolioDetails = () => {
  const { state: data } = useLocation();
  return (
    <div className=" py-20">
      <h2 className="text-center text-5xl ">See the project by image </h2>
      <div className="container mx-auto mt-20">
        {
          <img
            src={data.img2}
            alt="Portfolio images details"
            className="w-[100%] h-[100%]"
          />
        }
      </div>
    </div>
  );
};

export default PortfolioDetails;
