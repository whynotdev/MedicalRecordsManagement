import React from "react";
import Layout from "../Components/Layout";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../Redux/alertsSlice";
import toast from "react-hot-toast";
import axios from "axios";
import { setUser } from "../Redux/userSlice";

function Notifications() {
  const { user } = useSelector((state) => state.user);
  // console.log()
  const t = user?.unseenNotifications;
  const t1 = user?.seenNotifications;

  const nav = useNavigate();
  const dispatch = useDispatch();
  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:8000/api/user/mark-all-notifications-as-seen",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.message));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      // console.error("Error during registration:", error);
      toast.error("Something went wrong");
    }
  };
  //delete all notification
  const deleteAll = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:8000/api/user/delete-all-notifications",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.message));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      // console.error("Error during registration:", error);
      toast.error("Something went wrong");
    }
  };
  // console.log(t);
  return (
    <Layout>
      <h1 className="page-title">Notifications</h1>
      <Tabs>
        <Tabs.TabPane tab="Unseen" key={0}>
          <div className="d-flex justify-content-end">
            <h1 className="anchor" onClick={() => markAllAsSeen()}>
              {" "}
              Mark All as seen
            </h1>
          </div>
          {t?.map((val) => (
            <div className="card p-2" onClick={() => nav(val.onclickPath)}>
              <div className="card-text">{val.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Seen" key={1}>
          <div className="d-flex justify-content-end">
            <h1 className="anchor" onClick={()=>deleteAll()}> Delete All</h1>
          </div>
          {t1?.map((val) => (
            <div className="card p-2" onClick={() => nav(val.onclickPath)}>
              <div className="card-text">{val.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
}
export default Notifications;
