import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';


export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rebtal',
  Description: 'Find your dream rental property',
};

const Mainlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Navbar />
        <main>{children}</main>
        </body>
    </html>
    
  )
}

export default Mainlayout;