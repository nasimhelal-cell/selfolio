import { Link } from "react-router-dom";

const datas = [
  {
    img2: "https://i.ibb.co/QbDntY6/charkha-com-pk.png",
  },
  {
    img: "https://i.ibb.co/bKrzRQs/f-dracko.png",
    img2: "https://i.ibb.co/gRwmVC6/dracko.png",
  },
  {
    img2: "https://i.ibb.co/w0gvvqc/esha.png",
  },
  {
    img2: "https://i.ibb.co/9p6VhGz/iapple.png",
  },
  {
    img: "https://i.ibb.co/72GDXcX/f-kep.png",
    img2: "https://i.ibb.co/CBF4pv9/kep.png",
  },
  {
    img: "https://i.ibb.co/b7jNsP1/f-lejournaldemayotte.png",
    img2: "https://i.ibb.co/PWLNGzC/lejournaldemayotte.png",
  },
  {
    img2: "https://i.ibb.co/0cn10zt/mojocakes-in.png",
  },
  {
    img: "https://i.ibb.co/6NF80nB/f-nabatechshop.png",
    img2: "https://i.ibb.co/2t2Nc05/nabatechshop.png",
  },
  {
    img: "https://i.ibb.co/6FMw2zH/f-operationkindness.png",
    img2: "https://i.ibb.co/85MgZHr/operationkindness.png",
  },
  {
    img2: "https://i.ibb.co/2sfcHvv/organicstore.png",
  },
  {
    img2: "https://i.ibb.co/x7pJQNQ/vgotel-com.png",
  },
  {
    img: "https://i.ibb.co/5nBfftx/f-rosehan.png",
    img2: "https://i.ibb.co/6Pwkyn8/rosehan.png",
  },
  {
    img: "https://i.ibb.co/drb0Pr0/f-rojinfo.png",
    img2: "https://i.ibb.co/C5LqYkj/rojinfo.png",
  },
  {
    img: "https://i.ibb.co/Jy7TRVL/f-prothomalo.png",
    img2: "https://i.ibb.co/qxcN2V8/prothomalo.png",
  },
  {
    img: "https://i.ibb.co/xmLVTkh/f-promenet.png",
    img2: "https://i.ibb.co/bHr10XN/promenet.png",
  },
  {
    img: "https://i.ibb.co/hCGgXZy/f-penguin.png",
    img2: "https://i.ibb.co/Dbz9hrh/penguin.png",
  },
];

const Portfolios = () => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-16">
      {datas.map((data, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center gap-5 "
        >
          <img
            src={data.img ? data.img : data.img2}
            alt={i + "nasim"}
            className="w-[370px] h-[270px] object-fill"
          />
          <Link
            state={data}
            to={`/portfolios/${1}`}
            className="bg-rose-500 px-6 py-3 rounded-lg"
          >
            Details
          </Link>
        </div>
      ))}
      hi
    </div>
  );
};

export default Portfolios;
