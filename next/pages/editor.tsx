import { NextPage } from "next";
import LexicalComposer from '@lexical/react/LexicalComposer'
import LexicalPlainTextPlugin from '@lexical/react/LexicalPlainTextPlugin'
import LexicalContentEditable from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin'
import LexicalAutoFocusPlugin from '@lexical/react/LexicalAutoFocusPlugin'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

const Editor: NextPage = () => {
  const initialConfig = {
    theme: {},
    onError: () => { },
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <LexicalPlainTextPlugin
        contentEditable={<LexicalContentEditable />}
        placeholder={<div>placeholder ...</div>}
      />
      <LexicalOnChangePlugin onChange={() => { }} />
      <HistoryPlugin />
      <LexicalAutoFocusPlugin />
    </LexicalComposer>
  )
}

export default Editor
