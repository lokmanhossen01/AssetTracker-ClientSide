const PricingSection = () => {
    return (
      <div>
        <div>
          <h1 className="text-center font-bold text-4xl my-2">
            Let's get started Register
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5 ">
          {" "}
          <div className="bg-blue-400 text-center rounded-2xl p-4 my-2 text-white">
            <h1 className="text-5xl font-bold">$5</h1>
  
            <li>Maximum 5 employees</li>
            <li>Employee register</li>
            <hr />
            <button className="btn mt-2 btn-primary">Book</button>
          </div>
          <div className="bg-orange-400 text-center rounded-2xl p-4 my-2 text-white">
            <h1 className="text-5xl font-bold">$8</h1>
  
            <li>Maximum 10 employees</li>
            <li>Employee register</li>
            <hr />
            <button className="btn btn-primary mt-2">Book</button>
          </div>
          <div className="bg-blue-400 text-center rounded-2xl p-4 my-2 text-white">
            <h1 className="text-5xl font-bold">$15</h1>
  
            <li>Maximum 20 employees</li>
            <li>Employee register</li>
            <hr />
            <button className="btn btn-primary mt-2">Book</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingSection;
  