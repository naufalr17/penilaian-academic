"use client";
import React from "react";

const {
  default: NavigationStudent,
} = require("@/components/navigations/student");
const {
  default: StudentTable,
} = require("@/app/student/components/student-table");

const StudentDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto items-center justify-center p-0">
      <div className="flex w-full lg:w-[20%] p-0">
        <NavigationStudent />
      </div>
      <div className="flex w-full lg:w-[80%] h-auto lg:h-screen p-4">
        <div className="flex flex-col w-full items-center justify-center">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
