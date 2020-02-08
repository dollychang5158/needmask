import React from "react"
import PropTypes from "prop-types"

export default class LoadMore extends React.PureComponent {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }
  isBottom = e => {
    return e.getBoundingClientRect().bottom <= window.innerHeight + 50
  }

  handleLoadMore = () => {
    if (this.props.maxItem < this.props.data.length) {
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

  renderItem() {
    const result = []
    for (let index = 0; index < this.props.data.length && index < this.props.maxItem; index++) {
      result.push(this.props.renderItem(this.props.data[index], index))
    }
    return result
  }

  render() {
    return <>{this.renderItem()}</>
  }
}

LoadMore.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  step: PropTypes.number,
  maxItem: PropTypes.number,
  onChange: PropTypes.func,
}
