import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function Register() {
  const nav = useNavigate();
  const onFinish = async (values) => {
    // console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/register",
        values
      );

      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to Login Page");
        nav("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // console.error("Error during registration:", error);
      toast.error("Something went wrong");
    }

    // console.log("Received values of form :", values);
  };
  return (
    <>
      <div className="register">
        <div className="register-form card">
          <h1 className="card-title p-2 m-1">Nice to Meet You</h1>
          <Form layout="vertical" className="m-2" onFinish={onFinish}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Name" type="text" required />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" type="password" required />
            </Form.Item>

            <Button className="primary-button my-3 mb-2 " htmlType="submit">
              Sign In
            </Button>

            <Link to="/login" className="anchor ">
              Already have an Account?Login
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
