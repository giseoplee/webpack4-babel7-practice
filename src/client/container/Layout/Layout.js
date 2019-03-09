import React, { Component } from 'react';
import Header from './Header';
// import Contents from './Contents';
import { Container } from 'reactstrap';

import {
    AppAside,
    AppBreadcrumb,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
  } from '@coreui/react';

class Layout extends Component {
    render() {
      return (<div>
          <AppHeader>
              <Header />
          </AppHeader>
          <Container>
            컨테이너
          </Container>
      </div>);
    }
}

export default Layout;