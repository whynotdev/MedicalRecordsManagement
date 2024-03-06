import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div className="register">
        <div className="register-form card">
          <h1 className="card-title p-2 m-1">Nice to Meet You</h1>
          <Form layout="vertical" className="m-2">
            <Form.Item label="Name" name="name">
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" />
            </Form.Item>

            <Button className="primary-button my-3 mb-2 ">Sign In</Button>

            <Link to="/login" className="anchor ">
              Already have an Account?
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
