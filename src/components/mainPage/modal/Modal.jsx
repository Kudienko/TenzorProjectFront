import React from 'react'
import './Modal.scss'
import { Transition } from 'react-transition-group'
import { ReactComponent as IconClose } from '../../../assets/close.svg'

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
        'Шорты': shortsMale
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
    },
    legs: {
        'Шорты': shortsFemale,
        'Юбка': skirtFemale,
        'Брюки': trousersFemale,
        'Джинсы': jeansFemale,
    },
    feet: {
        'Тапочки': slippersFemale,
        'Кроссовки': sneakersFemale,
        'Ботинки': autumnBootsFemale,
        'Утепленные ботинки': winterBootsFemale,
    }
};


export const Modal = ({ isOpen, onClose, clothes }) => {
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose()
    }
    console.log(clothes)

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
                                    <div className="C"><img src={maleIcons.head[clothes.male.head[0]]} alt=""/></div>
                                    <div className="D"><img src={femaleIcons.head[clothes.female.head[0]]} alt="" /></div>
                                    <div className="D"><img src={icontorso} alt="" className='bodyPart' /></div>
                                    <div className="D"><img src={maleIcons.body[clothes.male.body[0]]} alt="" /></div>
                                    <div className="D"><img src={femaleIcons.body[clothes.female.body[0]]} alt="" /></div>
                                    <div className="E"><img src={iconlegs} alt="" className='bodyPart' /></div>
                                    <div className="E"><img src={maleIcons.legs[clothes.male.legs[0]]} alt="" /></div>
                                    <div className="D"><img src={femaleIcons.legs[clothes.female.legs[0]]} alt="" /></div>
                                    <div className="E"><img src={iconfeet} alt="" className='bodyPart'/></div>
                                    <div className="E"><img src={maleIcons.feet[clothes.male.feet[0]]} alt="" /></div>
                                    <div className="D"><img src={femaleIcons.feet[clothes.female.feet[0]]} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    )
}
