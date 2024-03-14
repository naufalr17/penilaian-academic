import React from "react";

const StudentTable = () => {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <table className="w-[640px] bg-white rounded-lg">
        <thead>
          <th className="p-4">
            <p className="text-[#292D32] font-bold text-xs text-start tracking-tight">
              Nama
            </p>
          </th>
          <th className="p-4">
            <p className="text-[#292D32] font-bold text-xs text-start tracking-tight">
              Usia
            </p>
          </th>
          <th className="p-4">
            <p className="text-[#292D32] font-bold text-xs text-start tracking-tight">
              Jenis Kelamin
            </p>
          </th>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                Anom
              </p>
            </td>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                19
              </p>
            </td>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                Laki-Laki
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                Anom
              </p>
            </td>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                19
              </p>
            </td>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                Laki-Laki
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                Anom
              </p>
            </td>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                19
              </p>
            </td>
            <td className="px-4 pb-4">
              <p className="text-[#292D32] font-medium text-xs text-start tracking-tight">
                Laki-Laki
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
