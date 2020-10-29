import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class Sidebar extends Component{
    render(){
        return(
            <div>
                <div className='sidebar-block'>
                    <div className="sidebar">
                        <div className="sidebar-box">
                            <div className="p-header">
                                <div className="p-header-mob">
                                    <img className="p-header-mob-icon" src="./img/icons/menu_mob.svg"/>
                                </div>
                                <div className="p-header-left">
                                    <img className="p-header-logo" src="./img/icons/logo.svg"/>
                                </div>
                                <div className="p-header-mid"></div>
                                <div className="p-header-right">
                                    <img className="p-header-icon" src="./img/icons/exit.svg"/>
                                </div>
                            </div>

                            <div className="profile-info-box">
                                <div className="profile-info">
                                    <div className="profile-photo-box">
                                        <div className="profile-photo">
                                            <img className="profile-photo-icon" src="./img/icons/ellipse.png"/>
                                        </div>
                                        <div className="profile-name">Сухофруктова Анна Анатольевна</div>
                                        <div className="profile-dolgnost">Специалист высшей кактегории</div>
                                        <div className="profile-indicator">В сети Премьер</div>
                                    </div>
                                </div>

                                <div className="profile-options-block">
                                    <div className="profile-opt-box">
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/telephone_operator.svg"/></div>
                                            <div className="profile-opt-word">Дежурства</div>
                                            <div className="profile-opt-number">30</div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/edit.svg"/></div>
                                            <div className="profile-opt-word">Заявки</div>
                                            <div className="profile-opt-number">12</div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/bi_shield_fill.svg"/></div>
                                            <div className="profile-opt-word">Брони</div>
                                            <div className="profile-opt-number">0</div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/bx_bxs_phone.svg"/></div>
                                            <div className="profile-opt-word">Не распределенные звонки</div>
                                            <div className="profile-opt-number">12</div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/mail.svg"/></div>
                                            <div className="profile-opt-word">Моя почта</div>
                                            <div className="profile-opt-number">12</div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/mail.svg"/></div>
                                            <div className="profile-opt-word">Почта новострой</div>
                                            <div className="profile-opt-number">12</div>
                                        </div>
                                    </div>
                                    <div className="profile-realty-box">
                                        <div className="profile-opt-item item-wrap">
                                            <div className="profile-opt-icon"><img src="./img/icons/server.svg"/></div>
                                            <div className="profile-opt-word">База</div>
                                            <div className="profile-opt-chevron"><img className="profile-opt-chevron-icon" src="./img/icons/arrow_down.svg"/></div>

                                            <div className="profile-opt-drop">
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">Покупатели</div>
                                                    <div className="profile-opt-drop-icon"><img src="./img/icons/plus.svg"/></div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">Информация об объектах</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">Проверить объект</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/bx_bxs_chess.svg"/></div>
                                            <div className="profile-opt-word">Шахматки</div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/star.svg"/></div>
                                            <div className="profile-opt-word">Эксклюзивы</div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/world_globe.svg"/></div>
                                            <div className="profile-opt-word">Зарубежная</div>
                                        </div>
                                        <div className="profile-opt-item item-wrap">
                                            <div className="profile-opt-icon"><img src="./img/icons/content.svg"/></div>
                                            <div className="profile-opt-word">Оперативный журнал</div>
                                            <div className="profile-opt-chevron"><img className="profile-opt-chevron-icon" src="./img/icons/arrow_down.svg"/></div>

                                            <div className="profile-opt-drop">
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">1-комнатные</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">2-комнатные</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">3-комнатные</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">4-комнатные</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">5+ комнатные</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">Коммуна</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">Дома, таунхаусы</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">Участки</div>
                                                </div>
                                                <div className="profile-opt-drop-item">
                                                    <div className="profile-opt-drop-word">Коммерческая</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="img/icons/user_group.svg"/></div>
                                            <div className="profile-opt-word">Сотрудники</div>

                                        </div>
                                        <div className="profile-opt-item">
                                            <div className="profile-opt-icon"><img src="./img/icons/bookmark.svg"/></div>
                                            <div className="profile-opt-word">Обучение</div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;
