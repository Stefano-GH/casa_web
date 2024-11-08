/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Home.css";
import { useState } from "react";
import Modal from 'react-modal';
import { frasiBenvenuto, links } from "../../data/Data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_2 = `#${process.env.REACT_APP_COLOR_2}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;
const COLOR_5 = `#${process.env.REACT_APP_COLOR_5}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Home = ( {communications} ) => {

    const [buttonHovered, setButtonHovered] = useState(false);

    ////////////////////////////////////////
    // Events
    ////////////////////////////////////////
    // Stato destione della modale
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCommunication, setSelectedCommunication] = useState(null);
    // Funzione per l'apertura della modale
    const openModal = (communication) => {
        setSelectedCommunication(communication);
        setModalIsOpen(true);
    }
    // Funzione per la chiusura della modale
    const closeModal = () => {
        setSelectedCommunication(null);
        setModalIsOpen(false);
    }

    return <div className="home">
        {/* Hero Section */}
        <section className="hero-section">
            <div className="hero-content">
                <h1>Benvenuti in Casa De Simone - Tumino</h1>
                <p>La nostra casa, le nostre regole, i nostri amici a quattro zampe</p>
                <button style={{ backgroundColor:buttonHovered ? `${COLOR_5}` : `${COLOR_4}` }} onClick={() => window.location.href = "#comunicazioni"}
                onMouseEnter={() => setButtonHovered(true)} onMouseLeave={() => setButtonHovered(false)}>
                    Scopri le comunicazioni
                </button>
            </div>
        </section>

        {/* Frasi di Benvenuto */}
        <section className="welcomes-section" id="welcomes">
            <h2>Non sei il benvenuto se...</h2>
            <div className="welcomes-list">
                {frasiBenvenuto.map((item,index) => (
                    <div key={index} className="welcome-item">
                        <p>
                            <FontAwesomeIcon icon={item.icona} style={{ color:COLOR_5, marginRight:'10px' }} /> 
                            {item.frase}
                            <b style={{ color:COLOR_5, marginLeft:'5px' }}>{item.bold}</b>
                        </p>
                    </div>
                ))}
            </div>
        </section>

        {/* Calendario degli eventi e comunicazioni */}
        <section className="events-section" id="comunicazioni" style={{ backgroundColor:COLOR_3, color:`${COLOR_1}` }}>
            <h2>Calendario degli Eventi e Comunicazioni</h2>
            <div className="events-list">
                {communications.map((comm, index) => (
                    <div className="event-card" key={index} onClick={() => openModal(comm)}>
                        <h3>{comm.titolo}</h3>
                        <div className="event-card-low">
                            <div>
                                <p><strong>Creato da:</strong></p>
                                <p>{comm.op_inserimento}</p>
                            </div>
                            <div>
                                <p><strong>Data evento:</strong></p>
                                <p>{comm.data_evento}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal di dettaglio */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Dettaglio Comunicazione"
            className="modal-content" overlayClassName="modal-overlay">
                
                {selectedCommunication && <div>
                    <h4 style={{ marginBottom:'1em', fontSize:'1.5em', textAlign:'center' }}>{selectedCommunication.titolo}</h4>
                    <p style={{ marginBottom:'2.2em' }}>{selectedCommunication.avviso}</p>
                    <div className="modal-first-container">
                        <div>
                            <p><strong>Creato da:</strong></p>
                            <p>{selectedCommunication.op_inserimento}</p>
                        </div>
                        <div style={{ textAlign:'right' }}>
                            <p><b>Data evento:</b></p>
                            <p>{selectedCommunication.data_evento}</p>
                        </div>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center' }}>
                        <button onClick={closeModal} className="modal-btn" style={{ backgroundColor:`${COLOR_4}`, color:`${COLOR_3}` }}>
                            Chiudi
                        </button>
                    </div>
                    
                </div>}
            </Modal>
        </section>

        {/* Card per altre pagine */}
        <section className="cards-section">
            <h2>Esplora le altre pagine</h2>
            <div className="cards">
                {(links.slice(1)).map((link,index) => (
                    <div key={index} className="card" onClick={() => window.location.href=link.to}>
                        <h3>{link.titolo}</h3>
                        <p>{link.note}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
};

export default Home;