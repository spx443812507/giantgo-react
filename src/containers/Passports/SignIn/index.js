import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { Layout, Alert } from 'antd'
import { Link } from 'react-router-dom'
import types from '../../../constants'
import './index.less'

const {Content} = Layout
const FormItem = Form.Item

class SignInComponent extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signIn(values.userName, values.password)
      }
    })
  }

  closeAlert = (e) => {
    e.preventDefault()

    this.props.closeAlert()
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <Layout className="bg-container">
        {this.props.isFail}
        <div>
          {
            this.props.isFail ? (
              <Alert message="登录失败" type="warning" showIcon closable afterClose={this.closeAlert}/>
            ) : null
          }
          <p>{this.props.failMessage}</p>
        </div>
        <Content>
          <Form onSubmit={this.handleSubmit} className="login-container">
            <FormItem>
              {
                getFieldDecorator('userName', {
                  rules: [{required: true, message: '请输入用户名!'}],
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{required: true, message: '请输入密码!'}],
                })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                         placeholder="密码"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住我</Checkbox>
                )
              }
              <a className="login-form-forgot" href="">忘记密码？</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              Or <Link to='/passports/signup'>注册新用户!</Link>
            </FormItem>
          </Form>
        </Content>
      </Layout>
    )
  }
}

const WrappedSignIn = Form.create()(SignInComponent)

const mapStateToProps = ({passport}, ownProps) => {
  console.log(passport)
  return {
    isSubmitting: passport.isSubmitting,
    isFail: passport.isFail,
    failMessage: passport.failMessage
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    signIn: (userName, password) => {
      dispatch({type: types.SIGN_IN_REQUEST, payload: {userName, password}})
    }
  }
}

const signInComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedSignIn)

export default signInComponent
