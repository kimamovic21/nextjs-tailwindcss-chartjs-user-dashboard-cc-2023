import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }) {
  return (
     <Sidebar>
       <Component {...pageProps} />
     </Sidebar>
  );
};



// 1. importujemo Sidebar komponentu
// 2. dodajemo <Component /> komponentu unutar <Sidebar> komponente
