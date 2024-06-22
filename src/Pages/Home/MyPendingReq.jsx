import React, { useEffect, useState } from "react";

const MyPendingReq = () => {
  const [isAffiliated, setIsAffiliated] = useState(true);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [monthlyRequests, setMonthlyRequests] = useState([]);

  useEffect(() => {
    // Fetch data from an API or some data source
    // For this example, we'll use static data
    const employeeData = {
      isAffiliated: true,
      pendingRequests: ["Pending Request 1", "Pending Request 2"],
      monthlyRequests: [
        { id: 1, request: "Monthly Request 1", date: "2024-06-01" },
        { id: 2, request: "Monthly Request 2", date: "2024-06-02" },
        { id: 3, request: "Monthly Request 3", date: "2024-06-03" },
      ],
    };

    setIsAffiliated(employeeData.isAffiliated);
    setPendingRequests(employeeData.pendingRequests);
    setMonthlyRequests(
      employeeData.monthlyRequests.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
    );
  }, []);
  return (
    <div>
      <div className="container mx-auto p-4">
        {!isAffiliated ? (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636a9 9 0 11-12.728 0m0 0L12 12m0 0l6.364-6.364"
                ></path>
              </svg>
              <span>Contact with your HR</span>
            </div>
          </div>
        ) : (
          <>
            <div className="card bg-base-100 shadow-xl mb-4">
              <div className="card-body">
                <h2 className="card-title">My Pending Requests</h2>
                <ul className="list-disc list-inside">
                  {pendingRequests.map((request, index) => (
                    <li key={index}>{request}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-4">
              <div className="card-body">
                <h2 className="card-title">My Monthly Requests</h2>
                <ul className="list-disc list-inside">
                  {monthlyRequests.map((request) => (
                    <li
                      key={request.id}
                    >{`${request.date}: ${request.request}`}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-4">
              <div className="card-body">
                <h2 className="card-title">Calendar</h2>
                {/* Add calendar content here */}
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-4">
              <div className="card-body">
                <h2 className="card-title">Events</h2>
                {/* Add events content here */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyPendingReq;
