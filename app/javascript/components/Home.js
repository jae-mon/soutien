import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        Soutien: {this.props.soutien}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  soutien: PropTypes.string
};
export default Home
