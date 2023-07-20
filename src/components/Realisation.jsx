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
                        site={realisation.site}
                        icon={realisation.images}
                        tags={realisation.tags}
                        description={realisation.description}
                    />
                </React.Fragment>
                )
                }
            </div>
        </section>
    )
};

export default Realisation;