// import { Suspense, useState } from "react";
// import Loading from "../components/Loading";
// import { Outlet, useNavigate } from "react-router-dom";
// // import AddUserForm from "../components/admin-form/AddUserForm";
// // import AdminUserList from "../components/admin-form/AdminUserList";

// // const AddUserForm = lazy(() => import("../components/admin-form/AddUserForm"));
// // const AdminUserList = lazy(
// //   () => import("../components/admin-form/AdminUserList")
// // );
// function AdminManage() {
//   const [page, setPage] = useState<"list" | "add">("list");
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="max-w-4xl  mx-auto mt-10">
//         <div className="gap-4 mb-6 flex justify-center">
//           <button
//             className={`px-4 py-2 rounded-md  ${
//               page === "add"
//                 ? "bg-secondary text-black outline-2 outline-primary  "
//                 : "bg-secondary"
//             }`}
//             onClick={() => {
//               // setPage("add");
//               navigate("/users/add");
//             }}
//           >
//             اضافه کردن کاربر
//           </button>

//           <button
//             className={`px-4 py-2 rounded-md  ${
//               page === "list"
//                 ? "bg-secondary text-black outline-2 outline-primary "
//                 : "bg-secondary"
//             }`}
//             onClick={() => {
//               // setPage("list");
//               navigate("/users/list");
//             }}
//           >
//             لیست کاربران
//           </button>
//         </div>
//         <Suspense fallback={<Loading />}>
//           {/* {page === "add" && <AddUserForm />}
//           {page === "list" && <AdminUserList />} */}
//           <Outlet />
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// export default AdminManage;

import { Suspense } from "react";
import Loading from "../components/Loading";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function AdminManage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine which page is active based on the URL
  const page = location.pathname.includes("/add") ? "add" : "list";

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="gap-4 mb-6 flex justify-center">
        <button
          className={`px-4 py-2 rounded-md ${
            page === "add"
              ? "bg-secondary text-black outline-2 outline-primary"
              : "bg-secondary"
          }`}
          onClick={() => navigate("/users/add")}
        >
          اضافه کردن کاربر
        </button>

        <button
          className={`px-4 py-2 rounded-md ${
            page === "list"
              ? "bg-secondary text-black outline-2 outline-primary"
              : "bg-secondary"
          }`}
          onClick={() => navigate("/users/list")}
        >
          لیست کاربران
        </button>
      </div>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AdminManage;
