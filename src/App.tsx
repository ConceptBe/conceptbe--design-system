import { useState } from 'react';

import { Alert, BottomSheet, Button, Confirm, Text } from '.';

const App = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsBottomSheetOpen(true)}>Bottom Sheet</Button>
      <Text font="suit10eb">피드</Text>
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      >
        <Button onClick={() => setIsAlertOpen(true)}>Alert</Button>
        <Button onClick={() => setIsConfirmOpen(true)}>Confirm</Button>
      </BottomSheet>
      <Alert
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        content="alert"
      />
      <Confirm
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        content="confirm"
      />
    </>
  );
};

export default App;
