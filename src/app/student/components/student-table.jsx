import React from "react";

const StudentTable = () => {
  return (
    <table className="bg-[#FFFFFF] rounded-lg w-full lg:w-[640px] mt-8 lg:mt-16">
      <thead>
        <tr>
          <th className="text-start">Mata Pelajaran</th>
          <th className="text-start">Nilai Angka</th>
          <th className="text-start">Nilai Huruf</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Anom</td>
          <td>80</td>
          <td>AB</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentTable;
