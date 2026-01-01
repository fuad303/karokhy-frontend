import { useState } from "react";
import api from "../../config/axios.interceptor";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { UserInterface } from "../../interfaces/adminmanage.interface";

function AdminUserList() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [editingUser, setEditingUser] = useState<UserInterface | null>(null);
  const navigate = useNavigate();

  const deleteUser = async (id: string) => {
    try {
      await api.delete(`/user/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      navigate("/");
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
      navigate("/");
    } catch (error) {
      console.log("خطا در ویرایش کاربری", error);
    }
  };

  return (
    <div className="mt-5  w-70 sm:w-100 lg:w-[60%] mx-auto bg-white p-5">
      <h2 className="text-xl text-gray-600 font-semibold mb-5 text-center">
        لیست کاربران
      </h2>

      <>
        <table className="w-full border-collapse  shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className=" text-gray-600">
              <th className="p-3 text-right">نام کاربری</th>
              <th className="p-3 text-right">نقش</th>
              <th className="p-3 text-right">تلفن</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.phone}</td>

                <td className="p-3 flex gap-2">
                  <button
                    className="bg-gray-300 text-black px-3 py-1 rounded"
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

        {editingUser && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-5 rounded w-96">
              <h3>ویرایش کاربر</h3>

              <input
                className="w-full border p-2 mb-3"
                value={editingUser.username}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser!,
                    username: e.target.value,
                  })
                }
              />

              <input
                className="w-full border p-2 mb-3"
                value={editingUser.phone}
                onChange={(e) =>
                  setEditingUser({ ...editingUser!, phone: e.target.value })
                }
              />

              <select
                className="w-full p-2 mb-3"
                value={editingUser.role}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser!,
                    role: e.target.value,
                  })
                }
              >
                <option value="ADMIN">مدیر</option>
                <option value="ACCOUNTANT">حسابدار</option>
                <option value="ACCOUNTANT_SUPER">حسابدار ارشد</option>
              </select>

              <div className="flex justify-end gap-2">
                <button
                  className="bg-gray-400 px-3 py-1 rounded"
                  onClick={() => setEditingUser(null)}
                >
                  لغو
                </button>

                <button
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  onClick={handleUpdate}
                >
                  ذخیره
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default AdminUserList;
