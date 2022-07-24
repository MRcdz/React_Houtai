import {
  Card, Breadcrumb, Select,
  Button, Form, Input,
  Radio, Upload
} from 'antd';
import { useState, createContext, useEffect } from 'react';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import './index.css';
import EditorDemo from '../../components/Braft/index';

const { Option } = Select
const { Provider, Consumer } = createContext();

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};


export default function Publish() {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState(1);
  const [loading] = useState(false);
  const [imageUrl] = useState();

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        return;

      default:
        break;
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  const radioChange = (e) => {
    setRadioValue(e.target.value)
  }

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
      </div>
    </div>
  );


  useEffect(() => {
    // setEditorState1(BraftEditor.createEditorState(null))
  }, [])

  return (
    <div className="publish">
      <Card
        className="header"
        title={
          <Breadcrumb separator=">" style={{
            fontWeight: '500'
          }}>
            <Breadcrumb.Item href="">数据概览</Breadcrumb.Item>
            <Breadcrumb.Item href="">发布文章</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{
          width: '100%',
          textAlign: 'left'
        }}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item
            name="note"
            label="你的标题"
            rules={[
              {
                required: true,
                message: '标题是需要的！'
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="研究方向"
            rules={[
              {
                required: true,
                message: '研究方向不能为空！'
              },
            ]}
          >
            <Select
              placeholder="选择一个研究的方向"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">HTML</Option>
              <Option value="female">Css</Option>
              <Option value="other">JavaScript</Option>
              <Option value="other1">JavaScript1</Option>
              <Option value="other2">JavaScript2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
          >
            {({ getFieldValue }) =>
              getFieldValue('gender') === 'other' ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          {/* 选手 */}
          <Provider value={radioValue}>
            <Form.Item
              name="nice"
              label="选手"
            >
              <Consumer>
                {value => (
                  <Radio.Group onChange={radioChange} value={value}>
                    <Radio value={1}>饼饼</Radio>
                    <Radio value={2}>健健</Radio>
                    <Radio value={3}>琪琪</Radio>
                  </Radio.Group>
                )}
              </Consumer>
            </Form.Item>
          </Provider>
          {/* 上传 */}
          <Form.Item
            name="nice"
            label=" "
            colon={false}
            getValueFromEvent={normFile}
            valuePropName="fileList"
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            // onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          {/* 内容 */}
          <Form.Item
            name="content"
            label="内容"
            rules={[
              {
                required: true
              }
            ]}
          >
            <EditorDemo/>
          </Form.Item>
          {/* 提交按钮 */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>
              发布
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              填充
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}