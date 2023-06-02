import '@style/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'laern NextJs',
  description: 'Discover & Share'
}

function DefaultLayout({ children }) {
  return (
    <html lang='en'>
      <Provider>
        <body>
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <main className='main'>
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
}

export default DefaultLayout;