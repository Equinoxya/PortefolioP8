import React, { useEffect, useState } from 'react';
import './competences.css'
import Card from '../Card/Card';
import CVViewer from './Cv';

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
            <h1>Compétences</h1>
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
            </aside>
        </section>
    )
};

export default Competences;