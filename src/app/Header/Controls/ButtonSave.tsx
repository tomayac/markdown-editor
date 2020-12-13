import React from 'react';
import { useStoreState, useActions } from 'unistore-hooks';

import { actions, defaultFile } from '@store/index';
import { State } from '@store/types';
import cn from '@utils/classnames';
import { saveFileToSystem } from '@utils/fileAccess';

import { Button } from '@theme';

import './ButtonSave.css';

const ButtonSave = ({ className = '' }: { className?: string }) => {
  const { updateActiveFile } = useActions(actions);
  const { activeFileIndex, files } = useStoreState<State>([
    'activeFileIndex',
    'files',
  ]);

  const activeFile = React.useMemo(
    () => files[activeFileIndex] || defaultFile,
    [files, activeFileIndex]
  );

  const canSave = React.useMemo(
    () => activeFile.content !== activeFile.savedContent,
    [activeFile.content, activeFile.savedContent]
  );

  React.useEffect(() => {
    window.addEventListener('keydown', keyEvent, false);
    return () => {
      window.removeEventListener('keydown', keyEvent);
    };
  }, [activeFile.handle, activeFile.content, canSave]);

  const keyEvent = async (e: KeyboardEvent) => {
    if ((e.ctrlKey === true || e.metaKey === true) && e.key === 's') {
      e.preventDefault();
      await saveFile();
      return;
    }
  };

  const saveFile = async () => {
    if (!canSave) {
      return;
    }
    const file = await saveFileToSystem(activeFile);
    updateActiveFile(file);
  };

  return (
    <Button
      className={cn(className)}
      icon="mdi/save"
      onClick={saveFile}
      color={canSave ? 'primary' : 'black'}
      title="CTRL+S"
      round
      layout={canSave ? 'solid' : 'empty'}
      disabled={!canSave}
    >
      Save
    </Button>
  );
};

export default ButtonSave;
