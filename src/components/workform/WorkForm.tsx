import {Button, Input} from "antd";
import './workform.scss'
import {useState} from "react";
import {AddedMyWork} from "../../data.ts"

export default function WorkForm({
                                     selectedImage,
                                     handleImageUpload,
                                     handleSaveImage,
                                     portfolioOpen,
                                     setPortfolioOpen,
                                     createWorkPlace,
                                     handleAddWorksClick
                                 }) {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState('');

    const handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void = () => {
        event?.preventDefault()

        // Validate the inputs
        if (title.trim() === '' || link.trim() === '' || img.trim() === '') {
            // Handle the validation error (e.g., show an error message)
            return;
        }

        const newItem: AddedMyWork = {
            id: Number(new Date()),
            title: title,
            link: link,
            img: img
        }
        createWorkPlace(newItem)
        setTitle('')
        setLink('')
        setImg('')
    }
    const isSubmitDisabled = title.trim() === '' || link.trim() === '' || img.trim() === '';

    return (
        <form action="" className={`form-action ${portfolioOpen ? 'visible' : ''}`}
              onSubmit={handleSubmit}
        >
            <label htmlFor="WorkName">Enter work title</label>
            <Input className={"input"} type="text" required={true} value={title}
                   onChange={(e) => setTitle(e.target.value)} placeholder={"Work title"}/>
            <label>Enter a link to your work</label>
            <Input className={"input"} type="text" required={true} value={link}
                   onChange={(e) => setLink(e.target.value)} placeholder={"link to your work"}/>
            <label>Image urlAddress</label>
            <Input className={"input"} type="text" required={true} value={img} onChange={(e) => setImg(e.target.value)}
                   placeholder={"image link "}/>
            <input className={"confirm"} type="submit" disabled={isSubmitDisabled} onClick={handleAddWorksClick}/>
            <Button className={"cancel"}
                    danger
                    onClick={handleAddWorksClick}>Close</Button>
        </form>
    );
}
