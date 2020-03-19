import React from 'react';
import {
  Form,
  Input,
  Icon,
  Checkbox,
  Button,
} from 'antd';

// const residences = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

class NewOrgnization extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleReset = e => {
    this.props.form.resetFields();
  }

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };


  render(){
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="机构名称">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入机构名称',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="机构缩写">
          {getFieldDecorator('shorter', {
            rules: [
              {
                required: true,
                message: '请输入机构缩写',
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="机构地区">
          {getFieldDecorator('area', {
            rules: [
              {
                required: true,
                message: '请输入机构地区',
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="机构地址">
          {getFieldDecorator('address', {
            rules: [
              {
                required: true,
                message: '请输入机构地址',
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="校长姓名">
          {getFieldDecorator('master', {
            rules: [
              {
                required: true,
                message: '请输入校长姓名',
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="校长手机号">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请输入校长手机号',
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <p>合同信息</p>
        </Form.Item>
        <Form.Item label="合同编号">
          {getFieldDecorator('num', {
            rules: [
              {
                required: true,
                message: '请输入合同编号',
              }
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="是否可用">
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox/>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button htmlType="reset" onClick={()=>this.handleReset()}>
            取消
          </Button>
          <Button type="primary" htmlType="submit" style={{marginLeft: '30px'}}>
            添加
          </Button>
        </Form.Item>
      </Form>
    );
  }
}


export default Form.create()(NewOrgnization)
