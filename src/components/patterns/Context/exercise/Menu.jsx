import React from 'react'
import SideMenu from 'react-burger-menu'

import withWidth, { LARGE } from '../../HigherOrderComponents/exercise/withWidth'
import FloatingMenuBtn from '../../../FloatingMenuBtn'

class Menu extends Component {

  getChildContext () {
    const { toggleMenu } = this.props
    return { toggleMenu }
  }

  render () {
    const { isOpen, children, pageWrapId, width, toggleMenu } = this.props
    return (
      <div>
        { width === LARGE ? '' :
          <FloatingMenuBtn toggleMenu={ toggleMenu } />
        }
        <SideMenu.slide
          isOpen={ isOpen }
          pageWrapId={ pageWrapId || 'page-wrap' }
        >
          { children }
        </SideMenu.slide>
      </div>
    )
  }
}

Menu.childContextTypes = {
  toggleMenu: React.PropTypes.func
}

export default withWidth()(Menu)
