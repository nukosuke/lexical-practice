import { NextPage } from "next";
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'

const Editor: NextPage = () => {
  const initialConfig = {
    namespace: 'lexical-practice',
    theme: {},
    onError: (err: Error) => {
      throw err
    },
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>placeholder ...</div>}
      />
      <OnChangePlugin onChange={() => { }} />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  )
}

export default Editor
