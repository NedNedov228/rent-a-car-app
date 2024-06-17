import './sider.scss'
import React, {useState} from "react";
import cn from 'classnames'
import menuOpenIcon from '../../assets/menu_btn.svg'
import menuCloseIcon from '../../assets/menu_btn_close.svg'
import SiderContent from "./SiderContent/siderContent";

const Sider = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <aside className={cn('burger-menu', {'_open': isOpen})}>
            {isOpen ? (<p className='burger-menu__language burger-menu__language_mobile'>Eng</p>) : (
                <a className='burger-menu__language'>Eng</a>)}
            <div className='burger-menu__buttons' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (<img src={menuCloseIcon} alt='close'/>) : (<img src={menuOpenIcon} alt='open'/>)}
            </div>
            {isOpen ?
                (<SiderContent/>)
                : isOpen}
        </aside>
    );
}

export default Sider;
