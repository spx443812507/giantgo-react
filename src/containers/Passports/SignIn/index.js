import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './index.less'
import { Layout } from 'antd'
import { signIn } from '../../../sagas'

const {Content} = Layout
const FormItem = Form.Item

class Index extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(signIn({
          userName: values.userName,
          password: values.password
        }))
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <Layout className="bg-container">
        <Content>
          <Form onSubmit={this.handleSubmit} className="login-container">
            <FormItem>
              {
                getFieldDecorator('userName', {
                  rules: [{required: true, message: 'Please input your username!'}],
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                         placeholder="Password"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )
              }
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Content>
      </Layout>
    )
  }
}

const WrappedSignIn = Form.create()(Index)

export default WrappedSignIn
