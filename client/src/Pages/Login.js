import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Login() {

  const onFinish = (values) => {
    
    console.log("Received values of form :" ,values)
  }
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

            <Button className="primary-button my-3 mb-2 " htmlType="submit">Log In</Button>

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
