import gsap from "gsap";
import "./Home.css";

function Home() {
  return (
    <div className="container mt-4 mb-4  ">
      <div className=" p-2 p-md-2 mt-5 mb-5 text-start ">
        <div className="col item-align-center">
          <div className="heading pb-5">
            <h1 className="display-1 ">online</h1>
            <h1 className="display-1 ">shopping</h1>
          </div>

          <p className="fs-5 w-50 lh-base fw-semibold ps-2 text-black-50">
            creat digital experiences that merge art direction , branding ,
            creative strategies, web design , prototyping , and digital
            interactions.
          </p>
        </div>
        <div className="heading col text-end align-self-end mb-4 ">
          <p className=" fs-4 text-black-50">100K</p>
          <p className="pb-5 fs-4 text-black-50">customer</p>
          <h1 className="display-1 ">Bloomart</h1>
          <h1 className="display-1 ">digital</h1>
          <h1 className="display-1 ">store</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
