import "./competences.css"


const CVViewer = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CVBellissensOphélie.pdf';
        link.click();
    };

    return (
            <button onClick={handleDownloadCV} className='button-cv'>Télécharge mon CV</button>
    );
    };

export default CVViewer;