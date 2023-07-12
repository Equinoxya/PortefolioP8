import React, { useEffect, useState } from 'react';
import './styles/competences.css'
import Card from './Card';
import CVViewer from './Cv';
import Modale from './Modal';

const Competences = () => {
    const [competences, setCompetence] = useState([]);

    useEffect(fetchCompetences, []);

    function fetchCompetences(){
        fetch('competences.json')
            .then((res) => res.json())
            .then((res) => setCompetence(res));
            
    }
    return( 
        <section className='block-comp'id='Competences'>
            <h1>Mes compétences</h1>
            <div className='competence'>
                
                {competences.map((competence) => 
                <React.Fragment key={competence.id}>
                    <Card
                        name={competence.name}
                        icon={competence.icon}
                        tags={competence.tags}
                        description={competence.description}
                        
                        
                    />
                </React.Fragment>
                )
                }
            </div>
            <aside className='buttons'>
                <CVViewer />
                <Modale />
            </aside>
        </section>
    )
};

export default Competences;