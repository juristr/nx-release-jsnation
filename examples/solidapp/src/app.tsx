import { MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import './app.css';

import { solidQueryLogic } from '@juriorg/solid-query';

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <main>
            <Title>Hello World</Title>
            <h1>Hello world!</h1>
            <div>{solidQueryLogic()}</div>
          </main>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
