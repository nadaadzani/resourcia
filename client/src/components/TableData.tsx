import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaExclamation } from "react-icons/fa";
import Link from "next/link";

export default function TableData() {
  return (
    <>
      <tr className="h-12 min-[320px]:text-sm">
        <td>
          <span>#1</span>
        </td>
        <td>Adzan</td>
        <td>2.5kg</td>
        <td>16/2/2024</td>
        <td>
          <span className="flex items-center gap-2 p-2 bg-green-400 w-28 h-8 rounded-2xl mx-auto text-sm min-[320px]:w-10 min-[320px]:bg-white min-[320px]:h-6 min-[320px]:text-[10px]">
            <div className="p-1 bg-green-600 rounded-[50%] text-white">
              <FaCheck size={12} />
            </div>
            <span className="min-[320px]:hidden">Accepted</span>
          </span>
        </td>
      </tr>
      {/* Even */}
      <tr className="h-12 bg-gray-100 min-[320px]:text-sm">
        <td>
          <span>#2</span>
        </td>
        <td>Ryan</td>
        <td>2.1kg</td>
        <td>16/2/2024</td>
        <td>
          <Link
            href={"/scan"}
            className="flex items-center gap-2 p-2 bg-yellow-300 w-28 h-8 rounded-2xl mx-auto text-sm min-[320px]:w-10 min-[320px]:bg-gray-100 min-[320px]:h-6 min-[320px]:text-[10px]"
          >
            <div className="p-1 bg-yellow-600 rounded-[50%] text-white">
              <FaExclamation size={12} />
            </div>
            <span className="min-[320px]:hidden">Pending</span>
          </Link>
        </td>
      </tr>
      {/* Odd */}
      <tr className="h-12 min-[320px]:text-sm">
        <td>
          <span>#3</span>
        </td>
        <td>Ilham</td>
        <td>3.4kg</td>
        <td>16/2/2024</td>
        <td>
          <span className="flex items-center gap-2 p-2 bg-yellow-300 w-28 h-8 rounded-2xl mx-auto text-sm min-[320px]:w-10 min-[320px]:bg-white min-[320px]:h-6 min-[320px]:text-[10px]">
            <div className="p-1 bg-yellow-600 rounded-[50%] text-white">
              <FaExclamation size={12} />
            </div>
            <span className="min-[320px]:hidden">Pending</span>
          </span>
        </td>
      </tr>
    </>
  );
}
