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
    <button className="btn btn-sm btn-outline" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutBtn;
