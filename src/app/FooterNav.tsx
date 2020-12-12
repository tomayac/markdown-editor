import React from 'react';

import { appTitle } from '@utils/constants';
import cn from '@utils/classnames';
import { Button, ShadowBox } from '@theme';

import './FooterNav.css';

type Menu = 'credits' | 'legal';

const NAVIGATION: Record<Menu, string> = {
  legal: 'legal',
  credits: 'credits',
};

const FooterNav = ({ className = '' }: { className?: string }) => {
  const [activeBox, setActiveBox] = React.useState<Menu>(null);

  return (
    <React.Fragment>
      <nav className={cn(className, 'footer-nav')}>
        {Object.entries(NAVIGATION).map(([key, title]) => (
          <Button
            className={cn('footer-nav__element', `footer-nav__element--${key}`)}
            layout="empty"
            // @ts-ignore
            onClick={() => setActiveBox(key)}
          >
            {title}
          </Button>
        ))}
        {activeBox === 'credits' ? (
          <ShadowBox
            close={() => setActiveBox(null)}
            title="Credits"
            size="small"
          >
            <div className="content">
              <p>
                <b>{appTitle}</b> is a project by Nico Martin:{' '}
                <a
                  href="https://nico.dev"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://nico.dev
                </a>
              </p>

              <h2>Font</h2>

              <p>
                <b>{appTitle}</b> uses the wonderful{' '}
                <a
                  rel="noreferrer noopener"
                  href="https://lobdell.me/affogato/"
                  target="_blank"
                >
                  Affogato
                </a>{' '}
                by{' '}
                <a
                  href="https://www.lobdell.me/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Eric Lobdell
                </a>{' '}
                and{' '}
                <a
                  rel="noreferrer noopener"
                  href="https://www.jetbrains.com/lp/mono/"
                  target="_blank"
                >
                  JetBrains Mono
                </a>{' '}
                by{' '}
                <a
                  href="https://www.jetbrains.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  JetBrains
                </a>
              </p>

              <h2>Frontend</h2>

              <ul>
                <li>
                  <a
                    rel="noreferrer noopener"
                    href="https://preactjs.com/"
                    target="_blank"
                  >
                    Preact v10.5.4
                  </a>
                  : A small but powerful, react-like frontend framework.
                </li>
                <li>
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/developit/unistore"
                    target="_blank"
                  >
                    unistore v3.5.2
                  </a>
                  : A super small global state management.
                </li>
                <li>
                  <a
                    rel="noreferrer noopener"
                    href="https://developers.google.com/web/tools/workbox"
                    target="_blank"
                  >
                    WorkBox
                  </a>
                  : A library that allows easy handling of the Service Worker
                  cache
                </li>
                <li>
                  …a lot of other great open-source projects:{' '}
                  <a href="https://github.com/nico-martin/markdown-editor/blob/main/package.json">
                    https://github.com/nico-martin/markdown-editor/blob/main/package.json
                  </a>
                </li>
              </ul>
              <p>
                The directory is publicly available on GitHub and is{' '}
                <a
                  href="https://github.com/nico-martin/markdown-editor/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  licensed under an open source license
                </a>
                . Just like most of my projects.
              </p>
              <p>
                <a href="https://github.com/nico-martin/markdown-editor/">
                  https://github.com/nico-martin/markdown-editor/
                </a>
              </p>
            </div>
          </ShadowBox>
        ) : null}
      </nav>
    </React.Fragment>
  );
};

export default FooterNav;
