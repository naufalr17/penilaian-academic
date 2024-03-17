import React from "react";

const StudentTable = () => {
  return (
    <table className="w-full lg:w-[640px]">
      <thead>
        <tr>
          <th>Mata Pelajaran</th>
          <th>Nilai Angka</th>
          <th>Nilai Huruf</th>
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
