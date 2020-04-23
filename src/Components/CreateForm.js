import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropType from 'prop-types';
class CreateForm extends Component {
  state = {
    text: '',
    description: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({
      text: '',
      description: '',
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Title</Label>
          <Input
            type="text"
            placeholder="Title"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter Description</Label>
          <Input
            type="textarea"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color="success" type="submit">
          Create Task
        </Button>
      </Form>
    );
  }
}

CreateForm.propTypes = {
  createTodo: PropType.func.isRequired,
};

export default CreateForm;
