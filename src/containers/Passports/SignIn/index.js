import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { Layout, message } from 'antd'
import { Link } from 'react-router-dom'
import {
  SIGN_IN
} from '../../../constants/passport'
import './index.scss'

const {Content} = Layout
const FormItem = Form.Item

class SignInComponent extends React.Component {
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.isFail !== this.props.isFail) {
      if (this.props.isFail) {
        message.warning(this.props.failMessage)
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signIn(values.username, values.password)
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
                getFieldDecorator('username', {
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
              <a className="login-form-forgot" href="/">忘记密码？</a>
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
  return {
    loading: passport.loading,
    isFail: passport.isFail,
    failMessage: passport.failMessage
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    signIn: (username, password) => {
      dispatch({type: SIGN_IN, payload: {username, password}})
    }
  }
}

const signInComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedSignIn)

export default signInComponent
