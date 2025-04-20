'use client';
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './menuBar'

export default function hostCard2() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! </p>',
    editorProps:{
      attributes: {
        class: 'prose prose-stone mx-auto outline-none max-w-3xl',
      },
    },
    immediatelyRender: false, 
  })
  return (
    <>
    <MenuBar editor={editor} />
    <EditorContent editor={editor} />
    </>
  )
}
