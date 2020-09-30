import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import { connect } from 'dva';
import Navigator from 'components/Navigator';
import avatar from 'assets/avatar.png';
import 'wysiwyg.css';
import style from './Profile.css';

const { Content, Footer } = Layout;

class Profile extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'index/update', payload: { defaultMenu: 'profile' } });
  }

  render() {
    return (
      <Layout style={{ height: '100%', minWidth: '1200px' }}>
        <Navigator />
        <Layout>
          <Content style={{ padding: '0 50px', margin: '45px 50px', backgroundColor: '#fff', minWidth: '1280px' }}>
            <Row className={style.row}>
              <Col span={4} />
              <Col span={6} className={style.col1}>
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src={avatar} />
                  </div>
                  <div>
                    <h3>王浩万汇典藏</h3>
                    <p>www.yurencloud.com</p>
                  </div>
                </Card>
              </Col>
              <Col span={14}>
                <Card title="作者简介" bordered={false} style={{ width: 300, border: '1px solid #eee' }}>
                  <p>姓名：王浩</p>
                  <p>职业：后端开发工程师</p>
                  <p>公众号：万汇典藏</p>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', width: '100%' }}>
          万汇典藏 ©2017 浙ICP备17042562号
        </Footer>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Profile);
