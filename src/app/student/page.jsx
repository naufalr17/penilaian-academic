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
    <div className="flex flex-col w-full h-auto items-center justify-center p-0">
      <NavigationStudent />
      <StudentTable />
    </div>
  );
};

export default StudentDashboard;
