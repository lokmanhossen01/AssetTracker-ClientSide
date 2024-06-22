import image1 from "../../assets/image/mt-1944-content-bg04.jpg";
import img1 from "../../assets/image/mt-1944-team-img01.png";
import img2 from "../../assets/image/mt-1944-team-img02.png";
import img3 from "../../assets/image/mt-1944-team-img03.png";
import img4 from "../../assets/image/mt-1944-team-img04.png";
import img5 from "../../assets/image/mt-1944-team-img05.png";
import img6 from "../../assets/image/mt-1944-team-img06.png";
import img7 from "../../assets/image/mt-1944-team-img07.png";
import img8 from "../../assets/image/mt-1944-team-img08.png";
const About = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <p className="text-center my-2">
        To create an astonishing website for a company that provides financial
        consultations and services, use this well-developed, niche-specific
        asset management website design. Built with the visual drag-and-drop
        builder, this financial website theme lets you personalize different
        pre-designed pages and launch your financial company site effortlessly.
      </p>
      <div className="flex gap-8 w-full mt-12">
        <div>
          <img className=" w-full" src={image1} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold my-2">
            We'll help manage your business
          </h1>
          <p>
            Place your business on the high-level position with our services and
            experts. We will help you with managing using the last digital
            technology and technics. All processes will be displayed on your
            gadgets carefully.
          </p>
          <li>Updating digital database with guide consultation at all</li>
          <li>Stages of your business strategy</li>
          <li>Further investigation of the market.</li>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            Competitors analysis will provide you with strategy
          </h1>
          <p>
            If you need to know who was the best at the market and which
            position was replaced, try our award-winning service. It is also
            possible to know the startup’s priorities. Besides, take information
            from the Knowledge Centre.
          </p>
          <p>
            For getting particular information for your business, you will be
            able to consult with us.
          </p>
          <button className="btn btn-primary my-2">Free consultation</button>
        </div>
        <div className="flex items-center">
          <div className="mr-5">
            <div className="text-white p-8 w-full text-center bg-blue-800 rounded-2xl">
              <h1 className="text-5xl font-bold">36k</h1>
              <p>Startup growth</p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="text-white p-8 w-full text-center bg-violet-500 rounded-2xl">
              <h1 className="text-5xl font-bold">50k</h1>
              <p>Awards won</p>
            </div>
            <div className="text-white p-8 w-full text-center bg-blue-400 rounded-2xl">
              <h1 className="text-5xl font-bold">75k</h1>
              <p>Awards won</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold my-2">
            Let them know you’re the best
          </h1>
          <p>
            A team of high-quality experts is ready for investigations to help
            you make your business competitive in the market. We help you to
            increase the clients and be the best on your way. Be sure in all
            your steps with our support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-16 p-12">
          <div className="card w-96 bg-base-100 shadow-2xl  ">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img1} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Alberto Biffi</h2>
              <p>Creative Director</p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img2} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Amanda Brown</h2>
              <p>Manager</p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img3} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Samuel Scalzo</h2>
              <p>Finance expert</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img4} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Jessica Jones</h2>
              <p>Consultant</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img5} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Marjorie Murphy</h2>
              <p>Finance expert</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img6} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Calvin Pena</h2>
              <p>Consultant</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img7} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Jennie Russell</h2>
              <p>Manager</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 avatar">
              <div className="w-24 rounded-full">
                <img src={img1} />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Greg Bell</h2>
              <p>Consultant</p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
