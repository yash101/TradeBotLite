import React from 'react';
import { Typography, Table, Input, Button, Form, Popconfirm } from 'antd';

const { Title, Paragraph } = Typography;

class ConfigVariables extends React.Component {
  state = {
    loading: true,
    data: [],
  };

  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      editable: true,
    },
    {
      title: 'Last Modified',
      dataIndex: 'modified',
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render: (text, record) => {
        return (this.state.data.length >= 1) ?  <Popconfirm title="Confirm Deletion?" onConfirm={() => this.handleDelete(record.key)}><a>Delete</a></Popconfirm> : null;
      }
    }
  ];

  handleAdd = () => {
    const newRow = {
      key: this.state.data.length + 1,
      name: 'New variable',
      value: 'Default value',
      lastUpdated: 'never',
    };

    this.setState({
      data: [...this.state.data, newRow],
    });
  };

  handleDelete = (key) => {
    this.setState({
      data: this.state.data.filter(item => item.key !== key),
    });
    // fire update request
  }

  render() {
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      }
    };

    const columns = this.columns.map(col => {
      return (col.editable) ?
        {
          ...col,
          onCell: record => ({
            record,
            editable: true,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
          }),
        } : col;
    });

    return (
      <div>
        <Title level="1">Config Variables</Title>
        <Paragraph>Update any database-stored configuration values here.</Paragraph>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordereddataSource={this.state.data}
          columns={columns}
        />
      </div>
    )
  }
}

export default ConfigVariables;
