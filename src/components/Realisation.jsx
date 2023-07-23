import React, { useEffect, useState } from 'react';
import CardReal from './CardReal';
import "./styles/realisations.css"



const Realisation = () => {
    const [realisations, setRealisation] = useState([]);

    useEffect(fetchRealisation, []);

    function fetchRealisation(){
        fetch('realisations.json')
            .then((res) => res.json())
            .then((res) => setRealisation(res));
            
    }
    return( 
        <section className='block-real' id='Projets'>
            <h1>Mes Réalisations</h1>
            <div className='realisation'>
                
                {realisations.map((realisation) => 
                <React.Fragment key={realisation.id}>
                    <CardReal
                        name={realisation.name}
                        icon={realisation.images}
                        tags={realisation.tags}
                        description={realisation.description}
                        context={realisation.context}
                        site={realisation.site}
                        problematique={realisation.problematique}
                    />
                </React.Fragment>
                )
                }
            </div>
        </section>
    )
};

export default Realisation;