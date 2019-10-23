//This is an edited copy of this node module
//https://github.com/kmwhelan93/react-geocoder-autocomplete
//The version below includes the country query to limit results to one country and adds a button callback

import React, { Component } from "react";
import ReactDOM from "react-dom";
import FlipMove from "react-flip-move";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import xhr from "xhr";

class Geocoder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      focus: null,
      loading: false,
      searchTime: new Date(),
      showList: false,
      inputValue: "",
      typedInput: ""
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onResult = this.onResult.bind(this);
  }

  componentWillMount() {
    this.setState({ inputValue: this.props.defaultInputValue });
  }
  componentDidMount() {
    if (this.props.focusOnMount) ReactDOM.findDOMNode(this.refs.input).focus();
  }
  componentWillReceiveProps(props) {
    if (props.defaultInputValue !== this.props.inputValue) {
      this.setState({ inputValue: props.defaultInputValue });
    }
  }
  search(
    endpoint,
    source,
    accessToken,
    proximity,
    country,
    bbox,
    types,
    query,
    callback
  ) {
    var searchTime = new Date();
    var uri =
      endpoint +
      "/geocoding/v5/" +
      source +
      "/" +
      encodeURIComponent(query) +
      ".json" +
      "?access_token=" +
      accessToken +
      (proximity ? "&proximity=" + proximity : "") +
      (country ? "&country=" + country : "") +
      (bbox ? "&bbox=" + bbox : "") +
      (types ? "&types=" + encodeURIComponent(types) : "");
    xhr(
      {
        uri: uri,
        json: true
      },
      function(err, res, body) {
        callback(err, res, body, searchTime);
      }
    );
  }

  onInput(e) {
    var value = e.target.value;
    this.setState({
      loading: true,
      showList: true,
      inputValue: value,
      typedInput: value
    });
    this.props.onInputChange(value);
    if (value === "") {
      this.setState({
        results: [],
        focus: null,
        loading: false,
        showList: false
      });
    } else {
      this.search(
        this.props.endpoint,
        this.props.source,
        this.props.accessToken,
        this.props.proximity,
        this.props.country,
        this.props.bbox,
        this.props.types,
        value,
        this.onResult
      );
    }
  }
  moveFocus(dir) {
    if (this.state.loading) return;
    var focus =
      this.state.focus === null
        ? 0
        : Math.max(
            -1,
            Math.min(this.state.results.length - 1, this.state.focus + dir)
          );
    var inputValue =
      focus === -1
        ? this.state.typedInput
        : this.state.results[focus].place_name;
    this.setState({
      focus: focus,
      inputValue: inputValue,
      showList: true
    });
    this.props.onInputChange(inputValue);
  }
  acceptFocus() {
    if (this.state.focus !== null && this.state.focus !== -1) {
      var inputValue = this.state.results[this.state.focus].place_name;
      this.setState({ showList: false, inputValue: inputValue });
      this.props.onInputChange(inputValue);
      this.props.onSelect(this.state.results[this.state.focus]);
    }
  }
  onKeyDown(e) {
    switch (e.which) {
      // up
      case 38:
        e.preventDefault();
        this.moveFocus(-1);
        break;
      // down
      case 40:
        e.preventDefault();
        this.moveFocus(1);
        break;
      // tab
      case 9:
        this.acceptFocus();
        break;
      // esc
      case 27:
        this.setState({ showList: false, results: [] });
        break;
      // accept
      case 13:
        if (this.state.results.length > 0 && this.state.focus == null) {
          this.clickOption(this.state.results[0], 0);
        }
        this.acceptFocus();
        e.preventDefault();
        break;
      default:
        break;
    }
  }
  onResult(err, res, body, searchTime) {
    // searchTime is compared with the last search to set the state
    // to ensure that a slow xhr response does not scramble the
    // sequence of autocomplete display.
    if (!err && body && body.features && this.state.searchTime <= searchTime) {
      this.setState({
        searchTime: searchTime,
        loading: false,
        results: body.features,
        focus: 0
      });
      this.props.onSuggest(this.state.results);
    }
  }
  clickOption(place, listLocation, e) {
    // debugger
    this.props.onInputChange(place.place_name);
    this.props.onSelect(place);
    this.setState({
      focus: listLocation,
      showList: false,
      inputValue: place.place_name
    });
    // focus on the input after click to maintain key traversal
    ReactDOM.findDOMNode(this.refs.input).focus();
    if (e) {
      e.preventDefault();
    }
  }
  handleBlur(e) {
    if (
      !e ||
      !e.relatedTarget ||
      !e.relatedTarget.parentElement ||
      !e.relatedTarget.parentElement.parentElement ||
      e.relatedTarget.parentElement.parentElement.id !== "react-geo-list"
    ) {
      this.setState({ showList: false });
    }
  }
  render() {
    var _this = this;

    var input = React.createElement("input", {
      ref: "input",
      className: this.props.inputClass,
      // onInput: this.onInput,
      onKeyDown: this.onKeyDown,
      placeholder: this.props.inputPlaceholder,
      onBlur: this.handleBlur,
      type: "text",
      // defaultValue: this.state.inputValue
      value: this.state.inputValue,
      onChange: this.onInput
    });
    var searchButton = <button className='button__search' onClick={() => this.props.getUserLocation()}>
      <FontAwesomeIcon icon="location-arrow" />
      </button>
    return React.createElement(
      "div",
      null,
      this.props.inputPosition === "top" && input,
      searchButton,
      React.createElement(
        FlipMove,
        {
          delay: 0,
          duration: 200,
          enterAnimation: "accordionVertical",
          leaveAnimation: "accordionVertical",
          maintainContainerHeight: true
        },
        this.state.results.length > 0 &&
          this.state.showList &&
          React.createElement(
            "ul",
            {
              key: "needed-for-flip-move",
              id: "react-geo-list",
              className:
                (this.props.showLoader && this.state.loading ? "loading" : "") +
                " " +
                this.props.resultsClass
            },
            this.state.results.map(function(result, i) {
              return React.createElement(
                "li",
                { key: result.id },
                React.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: _this.clickOption.bind(_this, result, i),
                    tabIndex: "-1",
                    className:
                      _this.props.resultClass +
                      " " +
                      (i === _this.state.focus
                        ? _this.props.resultFocusClass
                        : ""),
                    key: result.id
                  },
                  result.place_name
                )
              );
            })
          )
      ),
      this.props.inputPosition === "bottom" && input
    );
  }
}
Geocoder.defaultProps = {
  endpoint: "https://api.tiles.mapbox.com",
  defaultInputValue: "",
  inputClass: "",
  resultClass: "",
  resultsClass: "",
  resultFocusClass: "strong",
  inputPosition: "top",
  inputPlaceholder: "Search",
  showLoader: false,
  source: "mapbox.places",
  proximity: "",
  country: "",
  bbox: "",
  types: "",
  onSuggest: function onSuggest() {},
  onInputChange: function onInputChange() {},
  focusOnMount: true
};

Geocoder.propTypes = {
  endpoint: PropTypes.string,
  defaultInputValue: PropTypes.string,
  source: PropTypes.string,
  inputClass: PropTypes.string,
  resultClass: PropTypes.string,
  resultsClass: PropTypes.string,
  inputPosition: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  resultFocusClass: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSuggest: PropTypes.func,
  onInputChange: PropTypes.func,
  accessToken: PropTypes.string.isRequired,
  proximity: PropTypes.string,
  country: PropTypes.string,
  bbox: PropTypes.string,
  showLoader: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  types: PropTypes.string
};
export default Geocoder;