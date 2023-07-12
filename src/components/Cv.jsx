import "./styles/competences.css"


const CVViewer = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CVBellissensOphélie.pdf';
        link.click();
    };

    return (
        <div className='button'>
            <button onClick={handleDownloadCV} className='button-cv'>Télécharge mon CV</button>
        </div>
    );
    };

export default CVViewer;