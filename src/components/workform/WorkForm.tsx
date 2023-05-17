import {Button, Input} from "antd";
import './workform.scss'
import {useState} from "react";
import {AddedMyWork} from "../../data.ts"

interface FormWorkProps {
    createFeature: (item: AddedMyWork) => void
}

const WorkForm: React.FC<FormWorkProps> = ({
                                               portfolioOpen,
                                               createWorkPlace,
                                               handleAddWorksClick
                                           }) => {
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
    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImg(imageUrl);
        }
    };
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
            <label>Upload Image</label>
            <Input className={"input"} type="file" accept="image/*" onChange={handleImageUpload}/>
            <input className={"confirm"} type="submit" disabled={isSubmitDisabled} onClick={handleAddWorksClick}/>
            <Button className={"cancel"}
                    danger
                    onClick={handleAddWorksClick}>Close</Button>
        </form>
    );
}
export default WorkForm;