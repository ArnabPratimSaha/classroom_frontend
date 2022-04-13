import { useEffect, useRef, useState } from 'react'
import { memo } from 'react'
import './AssignmentPage.css'

import { FaRegDotCircle } from 'react-icons/fa'
import { MdCenterFocusWeak, MdDriveFileRenameOutline } from 'react-icons/md'
import { AiOutlineFilePdf, AiFillFileAdd } from 'react-icons/ai'
import { VscReplaceAll } from 'react-icons/vsc'

import Buttons from '../../components/Buttons/Buttons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const AssignmentPage = () => {

    const { classId, assignmentId } = useParams();
    const { isLoggedIn, accessToken, refreshToken, user, id } = useSelector(state => state.userReducer);

    const addFileRef = useRef();
    const formSubmitRef = useRef();
    const promptRef = useRef();
    const modalRef = useRef();

    const conflictingFileIndex = useRef(-1);
    const conflictingNewFile = useRef(null);

    const [uploadingFilePreview, setUploadingFilePreview] = useState(null);
    const [newAddedFiles, setNewAddedFiles] = useState([]);



    const [assignment, setAssignment] = useState();
    const [studentAssignmentData , setStudentAssignmentData] = useState(null)

    

    useEffect(() => {

        const func = async () => {

            if (!id || !accessToken || !refreshToken || !classId || !assignmentId) return;

            try {

                const res = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_API}/assignment`,
                    headers: {
                        id: id,
                        accesstoken: accessToken,
                        refreshtoken: refreshToken,
                        classid: classId,
                        assignmentid: assignmentId,
                    }
                });

                if(res.status === 200){
                    setAssignment(res.data.assignment);
                }

            } catch (error) {
                console.log({ error });
            }
        }

        func();

    }, [id, accessToken, refreshToken, classId, assignmentId])

    useEffect(() => {

        const func = async () => {

            if (!id || !accessToken || !refreshToken || !classId || !assignmentId) return;

            try {

                const res = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_API}/assignment/submit`,
                    headers: {
                        id: id,
                        accesstoken: accessToken,
                        refreshtoken: refreshToken,
                        classid: classId,
                        assignmentid: assignmentId,
                    }
                });

                if(res.status === 200){
                    console.log(res.data.assignment);
                }

            } catch (error) {
                console.log({ error });
            }
        }

        func();

    }, [id, accessToken, refreshToken, classId, assignmentId])


    const fileOnChangeHandler = async (e) => {
        const files = e.target.files;
        // check for duplicate files
        for await (const eachNewFile of files) {
            const index = await newAddedFiles.findIndex((eachFile) => eachFile.name === eachNewFile.name);
            if (index === -1) {
                setNewAddedFiles(prev => [...prev, ...files]);
            } else {
                conflictingFileIndex.current = index;
                conflictingNewFile.current = eachNewFile;

                if (promptRef && promptRef.current && modalRef && modalRef.current) {
                    promptRef.current.style.display = 'block';
                    modalRef.current.style.display = 'block';
                }
            }
        }
    }

    const addWorkButtonClickHandler = () => {
        if (addFileRef && addFileRef.current) {
            addFileRef.current.click();
        }
    }

    const formOnSubmitHandler = (e) => {
        e.preventDefault();
        console.log('form submitting');
    }

    const PdfSvgIcon = (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 303.188 303.188"
            style={{
                enableBackground: "new 0 0 303.188 303.188",
            }}
            xmlSpace="preserve"
            {...props}
        >
            <path
                style={{
                    fill: "#e8e8e8",
                }}
                d="M219.821 0H32.842v303.188h237.504V50.525z"
            />
            <path
                style={{
                    fill: "#fb3449",
                }}
                d="M230.013 149.935c-3.643-6.493-16.231-8.533-22.006-9.451-4.552-.724-9.199-.94-13.803-.936-3.615-.024-7.177.154-10.693.354-1.296.087-2.579.199-3.861.31a93.594 93.594 0 0 1-3.813-4.202c-7.82-9.257-14.134-19.755-19.279-30.664 1.366-5.271 2.459-10.772 3.119-16.485 1.205-10.427 1.619-22.31-2.288-32.251-1.349-3.431-4.946-7.608-9.096-5.528-4.771 2.392-6.113 9.169-6.502 13.973-.313 3.883-.094 7.776.558 11.594.664 3.844 1.733 7.494 2.897 11.139a165.324 165.324 0 0 0 3.588 9.943 171.593 171.593 0 0 1-2.63 7.603c-2.152 5.643-4.479 11.004-6.717 16.161l-3.465 7.507c-3.576 7.855-7.458 15.566-11.815 23.02-10.163 3.585-19.283 7.741-26.857 12.625-4.063 2.625-7.652 5.476-10.641 8.603-2.822 2.952-5.69 6.783-5.941 11.024-.141 2.394.807 4.717 2.768 6.137 2.697 2.015 6.271 1.881 9.4 1.225 10.25-2.15 18.121-10.961 24.824-18.387 4.617-5.115 9.872-11.61 15.369-19.465l.037-.054c9.428-2.923 19.689-5.391 30.579-7.205 4.975-.825 10.082-1.5 15.291-1.974 3.663 3.431 7.621 6.555 11.939 9.164 3.363 2.069 6.94 3.816 10.684 5.119 3.786 1.237 7.595 2.247 11.528 2.886 1.986.284 4.017.413 6.092.335 4.631-.175 11.278-1.951 11.714-7.57.134-1.72-.237-3.228-.98-4.55zm-110.869 10.31a170.827 170.827 0 0 1-6.232 9.041c-4.827 6.568-10.34 14.369-18.322 17.286-1.516.554-3.512 1.126-5.616 1.002-1.874-.11-3.722-.937-3.637-3.065.042-1.114.587-2.535 1.423-3.931.915-1.531 2.048-2.935 3.275-4.226 2.629-2.762 5.953-5.439 9.777-7.918 5.865-3.805 12.867-7.23 20.672-10.286-.449.71-.897 1.416-1.34 2.097zm27.222-84.26a38.169 38.169 0 0 1-.323-10.503 24.858 24.858 0 0 1 1.038-4.952c.428-1.33 1.352-4.576 2.826-4.993 2.43-.688 3.177 4.529 3.452 6.005 1.566 8.396.186 17.733-1.693 25.969-.299 1.31-.632 2.599-.973 3.883a121.219 121.219 0 0 1-1.648-4.821c-1.1-3.525-2.106-7.091-2.679-10.588zm16.683 66.28a236.508 236.508 0 0 0-25.979 5.708c.983-.275 5.475-8.788 6.477-10.555 4.721-8.315 8.583-17.042 11.358-26.197 4.9 9.691 10.847 18.962 18.153 27.214.673.749 1.357 1.489 2.053 2.22-4.094.441-8.123.978-12.062 1.61zm61.744 11.694c-.334 1.805-4.189 2.837-5.988 3.121-5.316.836-10.94.167-16.028-1.542-3.491-1.172-6.858-2.768-10.057-4.688-3.18-1.921-6.155-4.181-8.936-6.673 3.429-.206 6.9-.341 10.388-.275 3.488.035 7.003.211 10.475.664 6.511.726 13.807 2.961 18.932 7.186 1.009.833 1.331 1.569 1.214 2.207zM227.64 25.263H32.842V0h186.979z"
            />
            <path
                style={{
                    fill: "#a4a9ad",
                }}
                d="M126.841 241.152c0 5.361-1.58 9.501-4.742 12.421-3.162 2.921-7.652 4.381-13.472 4.381h-3.643v15.917H92.022v-47.979h16.606c6.06 0 10.611 1.324 13.652 3.971 3.041 2.647 4.561 6.41 4.561 11.289zm-21.856 6.235h2.363c1.947 0 3.495-.546 4.644-1.641 1.149-1.094 1.723-2.604 1.723-4.529 0-3.238-1.794-4.857-5.382-4.857h-3.348v11.027zM175.215 248.864c0 8.007-2.205 14.177-6.613 18.509s-10.606 6.498-18.591 6.498h-15.523v-47.979h16.606c7.701 0 13.646 1.969 17.836 5.907 4.189 3.938 6.285 9.627 6.285 17.065zm-13.455.46c0-4.398-.87-7.657-2.609-9.78-1.739-2.122-4.381-3.183-7.926-3.183h-3.773v26.877h2.888c3.939 0 6.826-1.143 8.664-3.43 1.837-2.285 2.756-5.78 2.756-10.484zM196.579 273.871h-12.766v-47.979h28.355v10.403h-15.589v9.156h14.374v10.403h-14.374v18.017z"
            />
            <path
                style={{
                    fill: "#d1d3d3",
                }}
                d="M219.821 50.525h50.525L219.821 0z"
            />
        </svg>
    )

    const renameFile = () => {
        if (conflictingFileIndex && conflictingFileIndex.current !== -1 && conflictingNewFile && conflictingNewFile.current) {
            setNewAddedFiles(prev => {
                conflictingNewFile.current.name += "_";
            })
        }
    }

    const replaceFile = () => {
        if (conflictingFileIndex && conflictingFileIndex.current !== -1 && conflictingNewFile && conflictingNewFile.current) {
            setNewAddedFiles(prev => {
                prev[conflictingFileIndex.current] = conflictingNewFile.current;
                return prev;
            })
        }

        conflictingFileIndex.current = -1;
        conflictingNewFile.current = null;
    }

    return (
        <>
            <div ref={modalRef} className='assignment-page__modal'></div>
            <div ref={promptRef} className='assignment-page__prompt-div'>
                <span className='assignment-page__prompt__text'>
                    There are multiple files with the same name. Do you want to replace it or Rename it ?
                </span>
                <br />
                <Buttons
                    text='Replace'
                    icon={<VscReplaceAll
                        style={{
                            marginRight: '5px',
                            fontSize: '1.2rem'
                        }}
                    />}
                    style={{
                        padding: '0 10px',
                        height: '2.2rem',
                        backgroundColor: 'white',
                        color: 'orange',
                        borderColor: 'orange',
                        marginRight: '20px'
                    }}
                    onClick={renameFile}
                />
                <Buttons
                    text='Rename'
                    icon={<MdDriveFileRenameOutline
                        style={{
                            marginRight: '5px',
                            fontSize: '1.2rem'
                        }}
                    />}
                    style={{
                        padding: '0 10px',
                        height: '2.2rem',
                        backgroundColor: 'orange',
                        color: 'white',
                        borderColor: 'orange',
                        marginRight: '20px'
                    }}
                    onClick={replaceFile}
                />
            </div>
            <div className='assignment-page__full-div'>
                <div className='assignment-page__inner-div'>
                    {assignment && assignment.title && <span className='assignment-page__assignment-title'>
                        {assignment.title}
                    </span>}
                    <div style={{ backgroundColor: 'orange', height: '4px', marginTop: '10px' }} className='underline'></div>
                    {assignment && assignment.details &&
                        <div className='assignment-page__description-div'>
                            <span className='assignment-page__description-text'>
                                {assignment.details}
                            </span>
                        </div>}
                    <span className='assignment-page__submission-details-title'>
                        <MdCenterFocusWeak
                            style={{ transform: 'translateY(4px)', marginRight: '10px' }}
                        />
                        Submission Details
                    </span>
                    <div className='assignment-page__submission-details__div'>
                        <span style={{ color: assignment && assignment.submittedStudent &&  assignment.submittedStudent.includes(id) ? 'green' : 'red' }} className='assignment__is-completed'><FaRegDotCircle style={{ marginRight: '10px' }} />{assignment && assignment.submittedStudent && (assignment.submittedStudent.includes(id) ? "Submitted" : "Not Submitted")}</span>
                        <br />
                        <span className='assignment-page__assignment-submission-time'>{`Due : ${assignment && assignment.lastSubmittedDate && new Date(assignment.lastSubmittedDate).toLocaleString()}`}</span>
                        <br />
                        <span className='assignment-page__my-submitted-files-title'><FaRegDotCircle style={{ marginRight: '10px' }} />Submitted files</span>
                        {<div style={{ color: '#FB3449' }} className='assignment-page__my-submission-div'>
                            <AiOutlineFilePdf
                                className='assignment-page__submitted-file__type-icon'
                            />
                            {/* <span className='assignment-page__submitted-file__name'>{assignment && assignment.submittedFileName && assignment.submittedFileName}</span> */}
                        </div>}
                    </div>
                    <br />
                    <form onSubmit={formOnSubmitHandler} type='submit'>
                        <input multiple='multiple' key={Math.random()} ref={addFileRef} style={{ display: 'none' }} type='file' onChange={(e) => { fileOnChangeHandler(e) }} />
                        <input ref={formSubmitRef} style={{ display: 'none' }} type='submit' />
                    </form>
                    <div className='assignment-page__new-submission-div'>
                        <div className='assignment-page__new-files-div'>
                            {newAddedFiles && newAddedFiles.length > 0 && newAddedFiles.map((eachFile) => {
                                return (
                                    <div key={eachFile.name} className='assignment-page__new-each-file-div'>
                                        <PdfSvgIcon
                                            height='5rem'
                                        />
                                        <br />
                                        <span style={{ fontWeight: '500' }} >{eachFile.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                        {newAddedFiles && newAddedFiles.length > 0 && <div className='underline' />}
                        <br />
                        <Buttons
                            text='Add work'
                            icon={<AiFillFileAdd
                                style={{
                                    marginRight: '5px',
                                    fontSize: '1.3rem'
                                }}
                            />}
                            style={{
                                padding: '0 20px',
                                height: '2.4rem',
                                backgroundColor: 'white',
                                color: '#1967D2',
                                borderColor: '#1967D2',
                                marginRight: '20px'
                            }}
                            onClick={addWorkButtonClickHandler}
                        />
                        <Buttons
                            text='Submit'
                            icon={<AiFillFileAdd
                                style={{
                                    marginRight: '5px',
                                    fontSize: '1.3rem'
                                }}
                            />}
                            style={{
                                padding: '0 20px',
                                height: '2.4rem',
                                backgroundColor: 'white',
                                color: '#1967D2',
                                borderColor: '#1967D2',
                            }}
                            onClick={() => {
                                formSubmitRef && formSubmitRef.current && formSubmitRef.current.click();
                            }}
                        />
                    </div>
                    {/* {uploadingFilePreview && <iframe className='assignment-page__pdf-viewer' title='pdf-viewer' src = {uploadingFilePreview} />} */}
                </div>
            </div>
        </>
    )
}

export default memo(AssignmentPage)