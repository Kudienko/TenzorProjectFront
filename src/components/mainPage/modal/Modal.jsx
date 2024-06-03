import React, {useEffect, useState} from 'react'
import './Modal.scss'
import {Transition} from 'react-transition-group'
import {ReactComponent as IconClose} from '../../../assets/close.svg'
import arrow from '../../../assets/arrow.png'

import iconhead from '../../../assets/clothes/bodyParts/head.svg'
import iconfeet from '../../../assets/clothes/bodyParts/Feet.svg'
import iconlegs from '../../../assets/clothes/bodyParts/legs.svg'
import icontorso from '../../../assets/clothes/bodyParts/torso.svg'
// male
import male from '../../../assets/clothes/man/male.svg'
//head
import cap from '../../../assets/clothes/man/spring/headdress.svg'
import panamaMale from '../../../assets/clothes/man/summer/headdress.svg'
import winterHatMale from '../../../assets/clothes/man/winter/headdress.svg'
//body
import coatMale from '../../../assets/clothes/man/autumn/jacket.svg'
import shirtMale from '../../../assets/clothes/man/spring/shirt.svg'
import TshirtMale from '../../../assets/clothes/man/summer/jacket.svg'
import jacketMale from '../../../assets/clothes/man/winter/jacket.svg'
//legs
import shortsMale from '../../../assets/clothes/man/summer/trousers.svg'
import winterTrousersMale from '../../../assets/clothes/man/winter/trousers.svg'
import springTrousersMale from '../../../assets/clothes/man/spring/trousers.svg'
import autumnTrousersMale from '../../../assets/clothes/man/autumn/trousers.svg'
//feet
import bootsMale from '../../../assets/clothes/man/autumn/shoes.svg'
import sneakersMale from '../../../assets/clothes/man/spring/shoes.svg'
import moccasins from '../../../assets/clothes/man/summer/shoes.svg'
import shoesMale from '../../../assets/clothes/man/autumn/shoes.svg'
//female
import female from '../../../assets/clothes/woman/female.svg'
//head
import winterHatFemale from '../../../assets/clothes/woman/winter/headdress.svg'
import panamaFemale from '../../../assets/clothes/woman/summer/headdress.svg'
import autumnHatFemale from '../../../assets/clothes/woman/autumn/headdress.svg'
import springHatFemale from '../../../assets/clothes/woman/spring/headdress.svg'
//body
import top from '../../../assets/clothes/woman/summer/jacket.svg'
import winterCoatFemale from '../../../assets/clothes/woman/winter/jacket.svg'
import sweater from '../../../assets/clothes/woman/spring/jacket.svg'
import coatFemale from '../../../assets/clothes/woman/autumn/jacket.svg'
//legs
import trousersFemale from '../../../assets/clothes/woman/autumn/trousers.svg'
import jeansFemale from '../../../assets/clothes/woman/spring/trousers.svg'
import shortsFemale from '../../../assets/clothes/woman/summer/trousers.svg'
import skirtFemale from '../../../assets/clothes/woman/winter/trousers.svg'
//feet
import autumnBootsFemale from '../../../assets/clothes/woman/autumn/shoes.svg'
import sneakersFemale from '../../../assets/clothes/woman/spring/shoes.svg'
import slippersFemale from '../../../assets/clothes/woman/summer/shoes.svg'
import winterBootsFemale from '../../../assets/clothes/woman/winter/shoes.svg'

const maleIcons = {
    head: {
        'Кепка': cap,
        'Панамка': panamaMale,
        'Шапка': winterHatMale,
    },
    body: {
        'Футболка': TshirtMale,
        'Рубашка': shirtMale,
        'Пальто': coatMale,
        'Куртка': jacketMale,
    },
    legs: {
        'Шорты': shortsMale,
        'Брюки': autumnTrousersMale,
        'Штаны': winterTrousersMale,
    },
    feet: {
        'Кроссовки': sneakersMale,
        'Мокасины': moccasins,
        'Туфли': shoesMale,
        'Ботинки': bootsMale,
    }
};

const femaleIcons = {
    head: {
        'Кепка': cap,
        'Шляпка': panamaFemale,
        'Шапка': winterHatFemale,
    },
    body: {
        'Топ': top,
        'Куртка': winterCoatFemale,
        'Пальто': coatFemale,
        'Свитер': sweater
    },
    legs: {
        'Шорты': shortsFemale,
        'Юбка': skirtFemale,
        'Брюки': trousersFemale,
        'Джинсы': jeansFemale,
    },
    feet: {
        'Тапочки': slippersFemale,
        'Кеды': sneakersFemale,
        'Ботинки': autumnBootsFemale,
        'Утепленные ботинки': winterBootsFemale,
        'Кроссовки': sneakersFemale,
    }
};


export const Modal = ({isOpen, onClose, clothes}) => {
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose()
    }

    const [maleHead, setMaleHead] = useState(0);
    const [maleBody, setMaleBody] = useState(0);
    const [maleLegs, setMaleLegs] = useState(0);
    const [maleFoot, setMaleFoot] = useState(0);

    const [femaleHead, setFemaleHead] = useState(0);
    const [femaleBody, setFemaleBody] = useState(0);
    const [femaleLegs, setFemaleLegs] = useState(0);
    const [femaleFoot, setFemaleFoot] = useState(0);

    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className="modal-wrapper" onClick={onWrapperClick}>
                            <div className="modal-content">
                                <button className="modal-close-button" onClick={() => onClose()}>
                                    <IconClose className="close-icon"/>
                                </button>
                                <div className="grid-container">
                                    <div className="A"></div>
                                    <div className="B"><img src={male} alt="" className='gender'/></div>
                                    <div className="C"><img src={female} alt="" className='gender'/></div>
                                    <div className="C"><img src={iconhead} alt="" className='bodyPart'/></div>
                                    <div className="C">
                                        {
                                            (maleHead + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setMaleHead(maleHead - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={maleIcons.head[clothes.male.head[maleHead]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.male.head.length > (maleHead + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setMaleHead(maleHead + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                    <div className="D">
                                        {
                                            (femaleHead + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleHead(femaleHead - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={femaleIcons.head[clothes.female.head[femaleHead]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.female.head.length > (femaleHead + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleHead(femaleHead + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                    <div className="D"><img src={icontorso} alt="" className='bodyPart'/></div>
                                    <div className="D">
                                        {
                                            (maleBody + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setMaleBody(maleBody - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={maleIcons.body[clothes.male.body[maleBody]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.male.body.length > (maleBody + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setMaleBody(maleBody + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                    <div className="D">
                                        {
                                            (femaleBody + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleBody(femaleBody - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={femaleIcons.body[clothes.female.body[femaleBody]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.female.body.length > (femaleBody + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleBody(femaleBody + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                    <div className="E"><img src={iconlegs} alt="" className='bodyPart'/></div>
                                    <div className="E">
                                        {
                                            (maleLegs + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setMaleLegs(maleLegs - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={maleIcons.legs[clothes.male.legs[maleLegs]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.male.legs.length > (maleLegs + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setMaleLegs(maleLegs + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                    <div className="D">
                                        {
                                            (femaleLegs + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleLegs(femaleLegs - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={femaleIcons.legs[clothes.female.legs[femaleLegs]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.female.legs.length > (femaleLegs + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleLegs(femaleLegs + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                    <div className="E"><img src={iconfeet} alt="" className='bodyPart'/></div>
                                    <div className="E">
                                        {
                                            (maleFoot + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setMaleFoot(maleFoot - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={maleIcons.feet[clothes.male.feet[maleFoot]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.male.feet.length > (maleFoot + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setMaleFoot(maleFoot + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                    <div className="D">
                                        {
                                            (femaleFoot + 1) > 1 && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleFoot(femaleFoot - 1)}>&#10094;</span>
                                            )
                                        }
                                        <img src={femaleIcons.feet[clothes.female.feet[femaleFoot]]} alt=""
                                             className="clothes"/>
                                        {
                                            clothes.female.feet.length > (femaleFoot + 1) && (
                                                <span className="arrow"
                                                      onClick={() => setFemaleFoot(femaleFoot + 1)}>&#10095;</span>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    )
}
