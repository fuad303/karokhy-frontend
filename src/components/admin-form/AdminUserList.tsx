import { useEffect, useState } from "react";
import api from "../../config/axios.interceptor";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import type { UserInterface } from "../../interfaces/adminmanage.interface";
type GetUsersResponse = {
  users: UserInterface[];
};
function AdminUserList() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [editingUser, setEditingUser] = useState<UserInterface | null>(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await api.get<GetUsersResponse>("/api/admin/get-users");
        setUsers(res.data.users);
        console.log(res.data.users);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data?.message ?? "مشکلی رخ داد");
        }
      }
    };

    getUsers();
  }, []);

  const deleteUser = async (id: string) => {
    try {
      await api.delete(`/user/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message ?? "مشکلی رخ داد");
      }
    }
  };

  const handleUpdate = async () => {
    if (!editingUser) return;
    try {
      await api.put(`/user/${editingUser.id}`, {
        username: editingUser.username,
        role: editingUser.role,
        phone: editingUser.phone,
      });
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? editingUser : u))
      );
      setEditingUser(null);
    } catch (error) {
      console.log("خطا در ویرایش کاربری", error);
    }
  };

  return (
    // <div className="mt-5 w-full sm:max-w-[500px] lg:max-w-[700px] mx-auto bg-white p-3 sm:p-5">
    //   <h2 className="text-xl text-gray-600 font-semibold mb-5 text-center">
    //     لیست کاربران
    //   </h2>

    //   <>
    //     <div className="w-full overflow-x-auto">
    //       {/* <table className="w-full border-collapse  shadow-md rounded-lg overflow-hidden"> */}
    //       <table className="min-w-[400px] w-full border-collapse shadow-md rounded-lg overflow-hidden">
    //         <thead>
    //           <tr className=" text-gray-600">
    //             <th className="p-3 text-right">نام کاربری</th>
    //             <th className="p-3 text-right">نقش</th>
    //             <th className="p-3 text-right">تلفن</th>
    //           </tr>
    //         </thead>

    //         <tbody>
    //           {users.length === 0 && (
    //             <tr>
    //               <td colSpan={4} className="text-center p-4 text-gray-400">
    //                 کاربری وجود ندارد
    //               </td>
    //             </tr>
    //           )}

    //           {users.map((user) => (
    //             <tr key={user.id} className="border-b">
    //               <td className="p-3">{user.username}</td>
    //               <td className="p-3">{user.role}</td>
    //               <td className="p-3">{user.phone}</td>

    //               <td className="p-3 flex gap-2">
    //                 <button
    //                   className="bg-gray-300 text-black px-3 py-1 rounded"
    //                   onClick={() => setEditingUser(user)}
    //                 >
    //                   ویرایش
    //                 </button>

    //                 <button
    //                   className="bg-red-600 text-white px-3 py-1 rounded"
    //                   onClick={() => deleteUser(user.id)}
    //                 >
    //                   حذف
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>

    //     {editingUser && (
    //       <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
    //         <div className="bg-white p-5 rounded w-96">
    //           <h3>ویرایش کاربر</h3>

    //           <input
    //             className="w-full border p-2 mb-3"
    //             value={editingUser.username}
    //             onChange={(e) =>
    //               setEditingUser({
    //                 ...editingUser!,
    //                 username: e.target.value,
    //               })
    //             }
    //           />

    //           <input
    //             className="w-full border p-2 mb-3"
    //             value={editingUser.phone}
    //             onChange={(e) =>
    //               setEditingUser({ ...editingUser!, phone: e.target.value })
    //             }
    //           />

    //           <select
    //             className="w-full p-2 mb-3"
    //             value={editingUser.role}
    //             onChange={(e) =>
    //               setEditingUser({
    //                 ...editingUser!,
    //                 role: e.target.value,
    //               })
    //             }
    //           >
    //             <option value="ADMIN">مدیر</option>
    //             <option value="ACCOUNTANT">حسابدار</option>
    //             <option value="ACCOUNTANT_SUPER">حسابدار ارشد</option>
    //           </select>

    //           <div className="flex justify-end gap-2">
    //             <button
    //               className="bg-gray-400 px-3 py-1 rounded"
    //               onClick={() => setEditingUser(null)}
    //             >
    //               لغو
    //             </button>

    //             <button
    //               className="bg-green-600 text-white px-3 py-1 rounded"
    //               onClick={handleUpdate}
    //             >
    //               ذخیره
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </>
    // </div>
    <div className="mt-5 w-full max-w-7xl mx-auto bg-white p-3 sm:p-5">
      <h2 className="text-xl text-gray-600 font-semibold mb-5 text-center">
        لیست کاربران
      </h2>

      {/* Desktop / Tablet Table */}
      <div className="hidden sm:block w-full overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="text-gray-600 bg-gray-50">
              <th className="p-3 text-right">نام کاربری</th>
              <th className="p-3 text-right">نقش</th>
              <th className="p-3 text-right">تلفن</th>
              <th className="p-3 text-left pl-14 "> ویرایش / حذف</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b text-sm sm:text-base">
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3 flex flex-wrap gap-2 justify-end ">
                  <button
                    className="bg-green-400 text-white px-3 py-1 rounded"
                    onClick={() => setEditingUser(user)}
                  >
                    ویرایش
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => deleteUser(user.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden flex flex-col gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-md bg-gray-50"
          >
            <p>
              <strong>نقش :</strong> {user.role}
            </p>
            <p>
              <strong>نام کاربری :</strong> {user.username}
            </p>

            <p>
              <strong>تلفن :</strong> {user.phone}
            </p>
            <div className="flex gap-2 mt-6 justify-center">
              <button
                className="bg-green-400 text-white px-3 py-1 rounded"
                onClick={() => setEditingUser(user)}
              >
                ویرایش
              </button>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => deleteUser(user.id)}
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUserList;
