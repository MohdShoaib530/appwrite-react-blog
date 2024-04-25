import { useDispatch } from "react-redux";
import authServices from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
import toast from "react-hot-toast";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authServices.logout().then(() => {
      dispatch(logout());
      toast.success("Logged out successfully");
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
