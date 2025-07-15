import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 overflow-x-auto">
      {/* Header row */}
      <div className="min-w-[700px] w-full mb-4 py-3 px-4 grid grid-cols-5 gap-4 bg-green-500 rounded text-center text-white text-sm md:text-base font-semibold">
        <div className="bg-pink-500 py-2 rounded-2xl border-2 border-black">Employee Name</div>
        <div className="bg-blue-500 py-2 rounded-2xl border-2 border-black">New Task</div>
        <div className="bg-yellow-500 py-2 rounded-2xl border-2 border-black">Active Task</div>
        <div className="bg-green-900 py-2 rounded-2xl border-2 border-black">Completed Task</div>
        <div className="bg-red-500 py-2 rounded-2xl border-2 border-black">Failed Task</div>
      </div>

      {/* Task rows */}
      <div className="min-w-[700px] w-full space-y-2">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 gap-4 py-2 px-4 border-2 border-emerald-500 rounded text-center text-sm md:text-base text-white"
          >
            <div>{elem.firstName}</div>
            <div className="text-blue-400">{elem.taskCounts.newTask}</div>
            <div className="text-yellow-400">{elem.taskCounts.active}</div>
            <div>{elem.taskCounts.completed}</div>
            <div className="text-red-600">{elem.taskCounts.failed}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
