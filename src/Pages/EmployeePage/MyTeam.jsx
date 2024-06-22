const MyTeam = () => {
    return (
      <div>
        {/* TODO:  this section use to all company member details */}
        <h1 className="text-center text-4xl text-blue-500">This is My Team</h1>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            {/* TODO: image of member */}
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            {/* TODO:name of member */}
            <h2 className="card-title">Name: Sayem</h2>
            <h2>Member Type:Hr/Employee</h2>
  
            {/* TODO: use to the company logo */}
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyTeam;
  