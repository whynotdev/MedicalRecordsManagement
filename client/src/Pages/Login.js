import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../Redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  // const { loading } = useSelector(state => state.alerts);
  // console.log(loading);
  const nav = useNavigate();
  const onFinish = async (values) => {
    // console.log(values);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        values
      );
      dispatch(hideLoading());

      if (response.data.success) {
        toast.success(response.data.message);
        // toast("Redirecting to Home Page");
        //token data storing into local storage
        localStorage.setItem("token", response.data.data);
        nav("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      // console.error("Error during Login:", error);
      toast.error("Something went wrong");
    }
    // console.log("Received values of form :" ,values)
  };
  return (
    <>
      <div className="register">
        <div className="register-form card">
          <h1 className="card-title p-2 m-1">Welcome Back!</h1>
          <Form layout="vertical" className="m-2" onFinish={onFinish}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" type="password" required />
            </Form.Item>

            <Button className="primary-button my-3 mb-2 " htmlType="submit">
              Log In
            </Button>

            <Link to="/register" className="anchor ">
              Don't have an Account? Register
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
