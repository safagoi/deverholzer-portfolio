import '@/styles/index.scss';
import MainProvider from '@/context/MainContext';

export default function App({ Component, pageProps }) {
  return (
   <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}
