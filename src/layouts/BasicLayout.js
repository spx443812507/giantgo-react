import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import './BasicLayout.scss'

const {Header, Content, Footer, Sider} = Layout

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    menuMaps: {
      '1': [
        {
          title: '用户管理',
          url: {
            name: 'systemUserList'
          },
          icon: 'users'
        }, {
          title: '系统日志',
          url: {
            name: 'systemLogList'
          },
          icon: 'clipboard'
        }
      ],
      '2': [
        {
          title: '到期查询',
          url: {
            name: 'adminExpireList'
          },
          icon: 'bell'
        },
        {
          title: '企业查询',
          url: {
            name: 'adminAuditList'
          },
          icon: 'search'
        },
        {
          title: '审核提交',
          url: {
            name: 'adminAuditSubmitList'
          },
          icon: 'check-circle'
        }, {
          title: '审核新增',
          url: {
            name: 'adminAuditAddList'
          },
          icon: 'address-card'
        }, {
          title: '用户管理',
          url: {
            name: 'adminUserList'
          },
          icon: 'user'
        }, {
          title: '区域管理',
          url: {
            name: 'adminRegionList'
          },
          icon: 'location'
        }, {
          title: '数据管理',
          url: {
            name: 'adminDataList'
          },
          icon: 'database'
        }, {
          title: '联系客户',
          url: {
            name: 'adminSMSList'
          },
          icon: 'message'
        }
      ],
      '3': [
        {
          title: '企业查询',
          url: {
            name: 'managerAuditList'
          },
          icon: 'search'
        },
        {
          title: '到期查询',
          url: {
            name: 'managerExpireList'
          },
          icon: 'bell'
        }
      ],
      '4': [
        {
          title: '到期查询',
          url: {
            name: 'saleExpireList'
          },
          icon: 'bell'
        },
        {
          title: '企业查询',
          url: {
            name: 'saleAuditList'
          },
          icon: 'search'
        },
        {
          title: '企业新增',
          url: {
            name: 'saleCompanyList'
          },
          icon: 'edit'
        }
      ]
    }
  }

  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({collapsed})
  }

  render () {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {this.state.menuMaps['2'].map((menu) => {
              return <Menu.Item key={menu.url}>
                <Icon type={menu.icon}/>
                <span>{menu.title}</span>
              </Menu.Item>
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}/>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout
