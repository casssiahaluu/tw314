import React, { Suspense } from "react";

import { Container, ResponsiveImg } from './styles';

import Logo from '../../assets/logo/logo_vertical.png';

const Page = React.lazy(() => import("../../components/Page"));

const renderLoader = () => <i class="fas fa-spinner fa-spin"></i>;

export default function About () {
  return (
    <Suspense fallback={renderLoader()}>
      <Page title="ajuda">
        <Container>
          <div>
            <ResponsiveImg src={Logo} alt="tw314 logo" />
          </div>
          <div>
            <p>
              versão 1.0.0 <br />
              2020 ©
            </p>
          </div>
          <div>
            <a href="mailto:haluanedecassia@gmail.com">deixar feedback</a><br />
            <a href="/help">ajuda</a>
          </div>
        </Container>
      </Page>
    </Suspense>
  );
}
