import React, { useState } from 'react';
import { Modal } from './modal/modal';
import { Button } from './button/button';

function App() {
  const [canDialogVisible, setDialogVisibility] = useState(false);

  const openDialog = () => {
    setDialogVisibility(true);
  };

  return (
    <div>
      <Button text="Open dialog" clickFunc={openDialog} />
      {canDialogVisible && <Modal />}
    </div>
  );
}

export default App;
