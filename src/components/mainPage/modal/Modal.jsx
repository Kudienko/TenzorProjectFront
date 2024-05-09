import React from 'react'
import './Modal.scss'
import { Transition } from 'react-transition-group'
import { ReactComponent as IconClose } from '../../../assets/close.svg'
import iconhead from '../../../assets/clothes/bodyParts/head.svg'
import iconfeet from '../../../assets/clothes/bodyParts/Feet.svg'
import iconlegs from '../../../assets/clothes/bodyParts/legs.svg'
import icontorso from '../../../assets/clothes/bodyParts/torso.svg'
import headdressMale from '../../../assets/clothes/man/summer/headdress.svg'
import jacketMale from '../../../assets/clothes/man/summer/jacket.svg'
import shoesMale from '../../../assets/clothes/man/summer/shoes.svg'
import trousersMale from '../../../assets/clothes/man/summer/trousers.svg'
import headdressFemale from '../../../assets/clothes/woman/summer/headdress.svg'
import jacketFemale from '../../../assets/clothes/woman/summer/jacket.svg'
import shoesFemale from '../../../assets/clothes/woman/summer/shoes.svg'
import trousersFemale from '../../../assets/clothes/woman/summer/trousers.svg'
import female from '../../../assets/clothes/woman/female.svg'
import male from '../../../assets/clothes/man/male.svg'


export const Modal = ({ isOpen, onClose }) => {
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose()
    }

    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className="modal-wrapper" onClick={onWrapperClick}>
                            <div className="modal-content">
                                <button className="modal-close-button" onClick={() => onClose()}>
                                    <IconClose className="close-icon" />
                                </button>
                                <div className="grid-container">
                                    <div className="A"></div>
                                    <div className="B"><img src={male} alt="" className='gender'/></div>
                                    <div className="C"><img src={female} alt="" className='gender'/></div>
                                    <div className="C"><img src={iconhead} alt="" className='bodyPart'/></div>
                                    <div className="C"><img src={headdressMale} alt=""/></div>
                                    <div className="D"><img src={headdressFemale} alt="" /></div>
                                    <div className="D"><img src={icontorso} alt="" className='bodyPart' /></div>
                                    <div className="D"><img src={jacketMale} alt="" /></div>
                                    <div className="D"><img src={jacketFemale} alt="" /></div>
                                    <div className="E"><img src={iconlegs} alt="" className='bodyPart' /></div>
                                    <div className="E"><img src={trousersMale} alt="" /></div>
                                    <div className="D"><img src={trousersFemale} alt="" /></div>
                                    <div className="E"><img src={iconfeet} alt="" className='bodyPart'/></div>
                                    <div className="E"><img src={shoesMale} alt="" /></div>
                                    <div className="D"><img src={shoesFemale} alt="" /></div>                    
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    )
}
