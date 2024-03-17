import React from "react";

const StudentTable = () => {
  return (
    <table className="bg-[#FFFFFF] rounded-lg w-full lg:w-[640px] mt-8 lg:mt-16">
      <thead>
        <tr>
          <th className="text-[#2563EB] text-start font-semibold text-sm pl-4 py-4">No</th>
          <th className="text-[#2563EB] text-start font-semibold text-sm pl-0 pr-0 py-4">
            Mata Pelajaran
          </th>
          <th className="text-[#2563EB] text-start font-semibold text-sm pl-0 pr-0 py-4">
            Nilai Angka
          </th>
          <th className="text-[#2563EB] text-start font-semibold text-sm pr-4 py-4">
            Nilai Huruf
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-start font-medium text-xs pl-4 pt-0 pb-4">1</td>
          <td className="text-start font-medium text-xs pl-0 pr-0 pt-0 pb-4">
            Sains
          </td>
          <td className="text-start font-medium text-xs pl-0 pr-0 pt-0 pb-4">
            80
          </td>
          <td className="text-start font-medium text-xs pr-4 pt-0 pb-4">AB</td>
        </tr>
        <tr>
          <td className="text-start font-medium text-xs pl-4 pt-0 pb-4">2</td>
          <td className="text-start font-medium text-xs pl-0 pr-0 pt-0 pb-4">
            Matematika
          </td>
          <td className="text-start font-medium text-xs pl-0 pr-0 pt-0 pb-4">
            95
          </td>
          <td className="text-start font-medium text-xs pr-4 pt-0 pb-4">A</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentTable;
