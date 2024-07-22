// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isClicked: false,
    firstname: '',
    lastname: '',
    showFirstNameError: false,
    showLastNameError: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({lastname: value})
  }

  renderLastNameField = () => {
    const {lastname, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-feild error-feild'
      : 'name-input-feild'

    return (
      <div className="input-container">
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={className}
          placeholder="Last Name"
          type="text"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          value={lastname}
          id="lastName"
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({firstname: value})
  }

  renderFirstNameField = () => {
    const {firstname, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-feild error-feild'
      : 'name-input-feild'

    return (
      <div className="input-container">
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={className}
          placeholder="First Name"
          type="text"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          value={firstname}
          id="firstName"
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastname} = this.state

    return lastname !== ''
  }

  validateFirstName = () => {
    const {firstname} = this.state

    return firstname !== ''
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
      firstname: '',
      lastname: '',
    }))
  }

  onSubmitForm = event => {
    event.preventDefalut()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isClicked: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isClicked: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error">Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="description">Submitted Successfully</p>
      <button
        type="button"
        className="submitted-btn"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {isClicked
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
