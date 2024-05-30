import React, { Component } from 'react';

export default class ThpTaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thp_taskId: 0,
      thp_taskName: '',
      thp_level: ''
    }
  }

  thpHandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  thpHandleSubmit = (ev) => {
    console.log("Form2", this.state);
    ev.preventDefault();
    this.props.onSummit(this.state);
  }

  render() {
    return (
      <div>
        <h2>Thêm mới lớp học</h2>
        <form className='col-md-6'>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">thp_taskId</span>
            <input
              type="text"
              className="form-control"
              name='thp_taskId'
              value={this.state.thp_taskId}
              onChange={this.thpHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="t">thp_taskName</span>
            <input
              type="text"
              className="form-control"
              name='thp_taskName'
              value={this.state.thp_taskName}
              onChange={this.thpHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="title">thp_level</span>
            <input
              type="text"
              className="form-control"
              name='thp_level'
              value={this.state.thp_level}
              onChange={this.thpHandleChange}
            />
          </div>
          <button className='btn btn-success' onClick={this.thpHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}
