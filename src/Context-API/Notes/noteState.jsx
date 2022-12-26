import NoteContext from './noteContext'
const NoteState = (props) => {
  const s1 = {
    name: 'maruf',
    class: '5b',
  }
  return (
    <NoteContext.Provider value={s1}>{props.children}</NoteContext.Provider>
  )
}

export default NoteState
