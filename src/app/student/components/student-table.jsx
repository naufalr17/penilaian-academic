import React from "react";

const StudentTable = () => {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <table className="w-[640px] bg-white">
        <thead>
          <th>
            <p className="text-[#292D32] font-bold text-xs text-center tracking-tight">
              Nama
            </p>
          </th>
          <th>
            <p className="text-[#292D32] font-bold text-xs text-center tracking-tight">
              Usia
            </p>
          </th>
          <th>
            <p className="text-[#292D32] font-bold text-xs text-center tracking-tight">
              Jenis Kelamin
            </p>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                Anom
              </p>
            </td>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                19
              </p>
            </td>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                Laki-Laki
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                Anom
              </p>
            </td>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                19
              </p>
            </td>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                Laki-Laki
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                Anom
              </p>
            </td>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
                19
              </p>
            </td>
            <td>
              <p className="text-[#292D32] font-medium text-xs text-center tracking-tight">
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
