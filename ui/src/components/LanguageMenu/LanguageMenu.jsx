import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Popover, Position, Menu, MenuItem } from '@blueprintjs/core';

import { setLocale } from 'src/actions';

class LanguageMenu extends Component {
  onSetLanguage(locale) {
    const { setLocale } = this.props;
    return async (event) => {
      event.preventDefault();
      await setLocale({ locale });
      window.location.reload();
    }
  }

  render() {
    const { metadata, config } = this.props;
    const locales = metadata.app.locales.filter((locale) => (locale !== config.locale));
    const content = (
      <Menu>
        {locales.map((locale) => (
          <MenuItem key={locale}
                    text={metadata.languages[locale]}
                    onClick={this.onSetLanguage(locale)} />
        ))}
      </Menu>
    )

    return (
      <Popover content={content} position={Position.BOTTOM_LEFT}>
        <Button icon="translate" className="pt-minimal" />
      </Popover>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session,
    metadata: state.metadata,
    config: state.config
  };
};

LanguageMenu = connect(mapStateToProps, { setLocale })(LanguageMenu);
export default LanguageMenu;
