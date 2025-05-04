import { Footer } from '@/components';
import { login } from '@/services/airport/authController';
import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Helmet, history, useModel } from '@umijs/max';
import { message, Tabs } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});
const ActionIcons = () => {
  const { styles } = useStyles();
  return (
    <>
      <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.action} />
      <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.action} />
      <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.action} />
    </>
  );
};

const Login: React.FC = () => {
  // const [userLoginState, setUserLoginState] = useState<API.LoginResponse>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const { styles } = useStyles();

  const handleSubmit = async (values: API.LoginRequest) => {
    try {
      // Login using username and password
      const res = await login({
        ...values,
      });

      if (res.data) {
        // Set token in localStorage
        localStorage.setItem('token', res.data.token ? res.data.token : '');

        // Fetch user information after login
        if (initialState?.fetchUserInfo) {
          const userInfo = await initialState.fetchUserInfo();

          setInitialState((prev) => {
            return {
              ...prev,
              user: userInfo.user,
            } as typeof prev; // Cast the entire object to the same type as prev
          });
        }

        const defaultLoginSuccessMessage = 'Login successful!';
        message.success(defaultLoginSuccessMessage);
        const urlParams = new URL(window.location.href).searchParams;

        history.push(urlParams.get('redirect') || '/');
        return res.data;
      }

      message.error(res.message);
    } catch (error) {
      const defaultLoginFailureMessage = 'Login failed, please try again!';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {'Login'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="Ant Design"
          subTitle={'Ant Design is the most influential web design specification in Xihu district'}
          initialValues={{
            autoLogin: true,
          }}
          actions={['Login with :', <ActionIcons key="icons" />]}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: 'Account Login',
              },
              {
                key: 'mobile',
                label: 'Phone Login',
              },
            ]}
          />

          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'Username: admin or user'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'Password: ant.design'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Remember me
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              Forgot Password ?
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
