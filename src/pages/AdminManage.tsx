import { lazy, Suspense, useState } from "react";
import Loading from "../components/Loading";

const adminSections = {
  list: {
    label: "لیست کاربران",
    component: lazy(() => import("../components/admin-form/AdminUserList")),
  },
  add: {
    label: "اضافه کردن کاربر",
    component: lazy(() => import("../components/admin-form/AddUserForm")),
  },
};

type AdminSectionKey = keyof typeof adminSections;

function AdminManage() {
  const [activeSection, setActiveSection] = useState<AdminSectionKey>("list");

  const ActiveComponent = adminSections[activeSection].component;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex gap-4 mb-6 justify-center">
        {Object.entries(adminSections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key as AdminSectionKey)}
            className={`px-4 py-2 rounded-md ${
              activeSection === key
                ? "bg-secondary text-black outline outline-primary"
                : "bg-secondary"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <Suspense fallback={<Loading />}>
        <ActiveComponent />
      </Suspense>
    </div>
  );
}

export default AdminManage;
