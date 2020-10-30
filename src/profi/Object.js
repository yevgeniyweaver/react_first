import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/object.css';

class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <input value = {this.state.data} onChange = {this.updateState}
                           ref = "myInput"></input>
                    <button onClick = {this.clearInput}>CLEAR</button>
                    <h4>{this.state.data}</h4>
                </div>
            </div>
        );
    }
}

class Object extends Component{
    render(){
        return(


            <div className="main">
                <div className="card-block">
                    <div className="card-box">
                        <div className="card-up card-row">
                            <div className="card-title">Одесская обл. г.Одесса, Суворовский, Соляная ул.№ 2А</div>
                            <div className="card-comercial-btn bg_dark_blue">Коммерческое предложение</div>
                        </div>
                        <div className="card-date-row card-row">
                            <div className="card-date-start">Внесён: 02-02-2015</div>
                            <div className="card-date-edit">Изменён: 24-02-2020</div>
                        </div>
                        <div className="card-left">
                            <div className="card-slider-row card-row">
                                <div id="gallery" className="card-slider">
                                    <a data-fancybox="remont" href="img/1.jpg"><img src="img/1.jpg"  alt="Квартиры с ремонтом" itemprop = "contentUrl"/></a>
                                    <a data-fancybox="remont" href="img/1.jpg"><img src="img/2.png"  alt="Квартиры с ремонтом" itemprop = "contentUrl"/></a>
                                    <a data-fancybox="remont" href="img/1.jpg"><img src="img/3.jpg" alt="Квартиры с ремонтом" itemprop = "contentUrl"/></a>
                                </div>
                            </div>
                            <div className="card-file-row card-row">
                                <div className="card-file"><i className="fa fa-file-photo-o icon-file" aria-hidden="true"> </i>
                                    <div className="card-file-span">Скачать все фото</div>
                                </div>
                                <div className="card-edit-btn">
                                    Подать изменения
                                </div>
                            </div>
                            <div className="card-status-row card-row">
                                <div className="card-status-prod st-btn btn_max bg_green c_green"><i className="fa fa-dot-circle-o icon-dot"></i>В продаже</div>
                                <div className="card-status-map c_blue">Посмотреть на карте</div>
                                <div className="card-status-right">
                                    <div className="card-status-st ">Вторичка Премьер</div>
                                    <div className="card-status-id">ID: 123047</div>
                                </div>
                            </div>
                            <div className="card-actions-row card-row">
                                <div className="card-actions-btn st-btn btn_90 bg_orange c_yelow">Эксклюзив</div>
                                <div className="card-actions-btn st-btn btn_160 bg_blue c_dark_blue">Переведен из "Снят"</div>
                                <div className="card-actions-btn st-btn btn_max bg_green c_green">Объект выведен в "Продан" Автоматически!</div>
                                <div className="card-actions-btn st-btn btn_max bg_red c_red">Срочная продажа</div>
                                <div className="card-actions-btn st-btn btn_max bg_purple c_dark_pink">Объект заведен по программе СТАРТ!</div>
                            </div>

                            <div id="card-price-mob" className="card-price-mob card-row"></div>

                            <div className="card-info-row card-row">
                                <div className="card-info-options">
                                    <div className="info-options-item">
                                        <div className="info-opt-title">Комнат</div>
                                        <div className="info-opt-value">2</div>
                                    </div>
                                    <div className="info-options-item">
                                        <div className="info-opt-title">Общая</div>
                                        <div className="info-opt-value">68м<sup>2</sup></div>
                                    </div>
                                    <div className="info-options-item">
                                        <div className="info-opt-title">Жилая</div>
                                        <div className="info-opt-value">43м<sup>2</sup></div>
                                    </div>
                                    <div className="info-options-item">
                                        <div className="info-opt-title">Кухня</div>
                                        <div className="info-opt-value">35м<sup>2</sup></div>
                                    </div>
                                    <div className="info-options-item">
                                        <div className="info-opt-title">Этаж</div>
                                        <div className="info-opt-value">2</div>
                                    </div>
                                    <div className="info-options-item">
                                        <div className="info-opt-title">Этажность</div>
                                        <div className="info-opt-value">2</div>
                                    </div>
                                </div>
                                <div className="card-info-about">Продам земельный участок в городе Одессе. 5,5 соток, правильной формы, все коммуникации на участке (свет, вода, газ). Застроенный обжитый район, рядом два озера, 3 минуты до поселка Котовского. Газ и свет по улице ,а вода на участке.</div>
                                <div className="card-info-about-ru">
                                    <div className="card-info-ru-title c_blue">Описание на сайте<i className="fa fa-chevron-down icon-info"></i> </div>
                                    <div className="card-info-ru-text">
                                        Продам земельный участок в городе Одессе. 5,5 соток, правильной формы, все коммуникации на участке (свет, вода, газ). Застроенный обжитый район, рядом два озера, 3 минуты до поселка Котовского. Газ и свет по улице ,а вода на участке.
                                    </div>
                                </div>
                                <div className="card-info-about-ua">
                                    <div className="card-info-ru-title c_blue">Укр. описание<i className="fa fa-chevron-down icon-info"></i> </div>
                                    <div className="card-info-ru-text">
                                        Продам земельный участок в городе Одессе. 5,5 соток, правильной формы, все коммуникации на участке (свет, вода, газ). Застроенный обжитый район, рядом два озера, 3 минуты до поселка Котовского. Газ и свет по улице ,а вода на участке.
                                    </div>
                                </div>
                                <div className="card-info-features">
                                    <div className="card-info-features-title">Все характеристики</div>
                                    <div className="card-info-feat-box">
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Планировка </div>
                                            <div className="card-info-feat-value c_blue">Раздельная</div>
                                        </div>
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Отопление </div>
                                            <div className="card-info-feat-value">АГВ</div>
                                        </div>
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Ремонт</div>
                                            <div className="card-info-feat-value">Дизайнерский</div>
                                        </div>
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Санузел</div>
                                            <div className="card-info-feat-value">Раздельная</div>
                                        </div>
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Коммуникации </div>
                                            <div className="card-info-feat-value">Скважина
                                                Электричество
                                                Центральная канализация
                                                Вывоз отходов
                                                Асфальтированная дорога</div>
                                        </div>
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Ландшафт до 1 км</div>
                                            <div className="card-info-feat-value">Море
                                                Парк</div>
                                        </div>
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Удобства</div>
                                            <div className="card-info-feat-value">
                                                Подогрев полов
                                                Мебель на кухне
                                                Гардероб
                                                Балкон
                                                лоджия
                                                Охраняемая территория
                                                Парковочное место</div>
                                        </div>
                                        <div className="card-info-feat-item">
                                            <div className="card-info-feat-name">Бытовая техника</div>
                                            <div className="card-info-feat-value">Варочная панель
                                                Духовой шкаф</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="card-other-mob" className="card-other-mob card-row"></div>
                        </div>

                        <div className="card-right">
                            <div className="card-price-row">
                                <div className="card-price-up">
                                    <div className="card-price-number">20 000$</div>
                                    <div className="card-price-span">Без торга</div>
                                </div>
                                <div className="card-price-down">
                                    <div className="card-price-btn st-btn btn_130 bg_dark_blue">В портфель</div>
                                </div>
                            </div>

                            <div className="card-special-row">
                                <div className="card-special-up">Специалист</div>
                                <div className="card-special-down">
                                    <div className="card-special-item">
                                        <div className="card-special-title">Объект риелтора</div>
                                        <div className="card-special-value">Филиал Днепропетровская дор. 108</div>
                                    </div>
                                    <div className="card-special-item">
                                        <div className="card-special-title">Ответственный риэлтор</div>
                                        <div className="card-special-value">Кравченко Марина</div>
                                    </div>
                                    <div className="card-special-item">
                                        <div className="card-special-title">Филиал</div>
                                        <div className="card-special-value">Днепропетровская дор. 108</div>
                                    </div>
                                    <div className="card-special-btn st-btn btn_130 c_dark_blue">Позвонить</div>
                                </div>
                            </div>
                            <div className="card-owner-row">
                                <div className="card-owner-up">Владелец</div>
                                <div className="card-owner-down">
                                    <div className="card-owner-name">Сухофруктов Андрей Петрович</div>
                                    <div className="card-special-btn st-btn btn_130 c_dark_blue">Позвонить</div>
                                    <div className="card-owner-comment">Комментарий:</div>
                                    <textarea className="card-owner-textarea" rows="4" title="Коментарий">

                              </textarea>
                                    <div className="card-owner-docs">
                                        <div className="card-owner-docs-item">
                                            Нет документов
                                        </div>
                                        <div className="card-owner-docs-item">
                                            Соглашение на продажу
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-history-row">
                                <div className="card-history-title">История изминений</div>
                                <div className="card-history-item">Внесен 23-05-2020</div>
                                <div className="card-history-item">Изменен 26-02-2020</div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default Object;
