import { useState } from 'react';

import Container from './ui/Container';
import Info from './feature/Info';
import Thanks from './feature/Thanks';
import SideImage from './ui/SideImage';

function App() {
  const [shown, setShown] = useState('info');
  const [email, setEmail] = useState('');

  return (
    <div className='main-page'>
      <Container shown={shown}>
        {shown === 'info' && (
          <>
            <Info setShown={setShown} setEmail={setEmail} />
            <SideImage />
          </>
        )}
        {shown === 'thanks' && <Thanks email={email} setShown={setShown} />}
      </Container>
    </div>
  );
}

export default App;
