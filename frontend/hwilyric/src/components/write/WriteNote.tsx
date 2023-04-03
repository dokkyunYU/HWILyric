import BlockCreate from "../../components/write/note/NoteCreateBlock"
import BlockList from "../../components/write/note/NoteBlockList"
import NoteTitle from "../../components/write/note/NoteTitle"
import { IsLoginAtom }  from "../../atoms/userAtom"
import { NoteBox } from "../../styles/writeNoteStyle"
import { WriteDivBox } from "../../styles/common/DivBox"
import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { blockListState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState, titleState } from "../../atoms/noteAtoms"
import { memoState } from "../../atoms/sidebarAtoms"

function WriteNote() {

    const isLogin = useRecoilValue(IsLoginAtom)

    const blockListReset = useResetRecoilState(blockListState)
    const noteIdReset = useResetRecoilState(noteIdState)
    const titleReset = useResetRecoilState(titleState)

    const memoReset = useResetRecoilState(memoState)
    const thumbnailFileReset = useResetRecoilState(noteThumbnailFileState)
    const noteThumbnailUrlReset = useResetRecoilState(noteThumbnailUrlState)

    useEffect(() => {
        if (isLogin) {
            localStorage.removeItem('note')
            blockListReset()
            noteIdReset()
            titleReset()
            memoReset()
            thumbnailFileReset()
            noteThumbnailUrlReset()
        }
      }, [])
    

    return (
        <WriteDivBox>            
            <NoteBox>
                <NoteTitle />
                <BlockList />
                <BlockCreate />
            </NoteBox>
        </WriteDivBox>
    )
}

export default WriteNote