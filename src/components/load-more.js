import React from "react"
import PropTypes from "prop-types"

export default class LoadMore extends React.Component {
  isBottom = e => {
    return e.getBoundingClientRect().bottom <= window.innerHeight + 50
  }

  handleLoadMore = () => {
    if(this.props.maxItem<this.props.data.length) {
      this.props.onChange(this.props.maxItem + this.props.step)
    }
  }

  trackScrolling = () => {
    const wrappedElement = document.body
    if (this.isBottom(wrappedElement)) {
      this.handleLoadMore()
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling)
  }

  render() {
    return (
      <>
        {this.props.data.map((item, index) => {
          if (index < this.props.maxItem)
            return this.props.renderItem(item, index)
        })}
      </>
    )
  }
}

LoadMore.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  step: PropTypes.number,
  maxItem: PropTypes.number,
  onChange: PropTypes.func
}
