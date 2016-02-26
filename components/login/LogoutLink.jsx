var _ = require('underscore');
var React = require('react');
var OutboundLink = require('react-ga').OutboundLink;
var PureRenderMixin = require('react-addons-pure-render-mixin');

var config = require('../../config/config');

var LogoutLink = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    origin: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      origin: config.ORIGIN
    };
  },
  render: function() {
    var callbackURL = this.props.callbackURL;
    var loginBaseURL = this.props.loginBaseURL;
    var href = loginBaseURL + '/auth/oauth2/logout?callback=' + encodeURIComponent(callbackURL);
    var props = _.extend({}, this.props, { href: href });
    return <OutboundLink {...props}>{this.props.children}</OutboundLink>;
  }
});

module.exports = LogoutLink;
