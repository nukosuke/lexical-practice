import { NextPage } from "next";
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { Container, Text } from "@chakra-ui/react";
import { $getRoot, $getSelection, EditorState } from "lexical";

const Editor: NextPage = () => {
  const initialConfig = {
    namespace: 'lexical-practice',
    theme: {},
    onError: console.error
  }

  return (
    <Container py={4}>
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<Placeholder />}
        />
        <OnChangePlugin onChange={(editorState: EditorState) => {
          editorState.read(() => {
            const root = $getRoot()
            const selection = $getSelection()
            console.log(root, selection)
          })
        }} />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </LexicalComposer>
    </Container>
  )
}

const Placeholder: React.FC = () => (
  <Text
    color='gray.400'
    display='inline-block'
    overflow='hidden'
    position='relative'
    top='-1.5em'
    left='.25em'
    userSelect='none'
    pointerEvents='none'
  >Enter some plain text...</Text>
)

export default Editor
