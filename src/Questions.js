import React from 'react';



const QuestionItem = ({ menuOpen, dataKey, isActive, questionBlock,  showDropdown }) => (

    <div className="question-item-box" data-key={dataKey} onClick={showDropdown}>
        <div className="question-item">
            <div className={isActive ? "active" : ""}> </div>
            <div className="question-edge"></div>
            <div className="question-info Color_800">
                <span className="question-span">{questionBlock.question}</span>
            </div>
            <div className="question-icon">
                <div className="question-chevron-bg">
                    <i style={{ 'transform': menuOpen? 'rotate(-180deg)':'' }} className="fa fa-chevron-down question-chevron  Primary_500_text"> </i>
                </div>
            </div>
        </div>
        <div className="question-drop Primary_100_bg" style={{ 'display': menuOpen ? 'block' : 'none' }}>{questionBlock.answer}</div>
    </div>
);

const DropdownMenu = ({ menuOpen, count, text, showDropdown }) => ( //props deconstruction
    <div className="dropdown__menu" onClick={showDropdown}>
        {text}
        {count && <b>{count}</b>}
        <div className="dropdown__content" style={{ 'display': menuOpen ? 'block' : 'none' }}>
            <li>New</li>
            <li>Old</li>
        </div>
    </div>
);

const addActive= e =>{
    alert("working");
    e.target.classList.toggleClass("active");
};


class QuestionBlock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            openedDropdown:null,
            menuOpen: false,
            highlight: false,
            isActive: false,
            // count: this.props.count | 0,
            questionBlock:[
                {   'key':'0',
                    'question':'Какие документы нужны для проведения оценки недвижимости?',
                    'answer':'Для оценки недвижимости необходимы ксерокопии правоустанавливающих документов, технического паспорта, копия паспорта и идентификационного кода (ИНН) собственника/заказчика, фото объекта оценки. Фотосъёмка объекта проводится специалистами по оценке, время проведения которой обсуждается заранее.'
                },
                {   'key':'1',
                    'question':'Какие объекты подлежат проведению оценки?',
                    'answer':'Согласно законодательству, необходимость в оценке нужна для квартир, комнат, домов и иного недвижимого имущества. К процедуре также прибегают при оценке ущерба недвижимости.'
                },
                {   'key':'2',
                    'question':'Какова стоимость оценки?',
                    'answer':'На сайте есть раздел, где расписана стоимость каждой услуги. Вопросы можно задать и онлайн-консультанту.'
                },
                {   'key':'3',
                    'question':'Сколько дней занимает оценка?',
                    'answer':'Процедура может заниматься от 2-х часов до 5 дней.'
                },
                {   'key':'4',
                    'question':'Какой срок действия отчета об оценке?',
                    'answer':'Отчет по оценке действителен в течение 6 или 12 месяцев в зависимости от типа имущества. Подробнее узнать об оценке недвижимости вы можете узнать по телефону.'
                },
                {   'key':'5',
                    'question':'Могу ли я выслать документы по почте?',
                    'answer':'Да. Вы можете выслать нужные для экспертной оценки, документы по почте и мы Вам перезвоним.'
                },
            ],
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    };
    dropdownClicked = openedDropdown => ev => {
        this.setState({ openedDropdown });
        // this.setState({ showMenu: true }, () => {
        //     document.addEventListener('click', this.closeMenu);
        // });
        // this.setState({
        //     menuOpen:!this.state.menuOpen
        // });
        console.log(this.state.openedDropdown);
    };
    // handleOnMark = (question) => {
    //     console.log(question);
    // };
    showDropdown = openedDropdown => e =>{
        e.preventDefault();
        // if(openedDropdown === this.state.openedDropdown){
        //     console.log(openedDropdown);
        // }else{
        //     console.log(this.state.openedDropdown);
        // }
        this.setState({ openedDropdown}, () => {
            document.addEventListener('click', this.closeMenu());
        });
        // e.classList.toggle("active");
        // this.setState({ isActive:!this.state.isActive });
        console.log(openedDropdown);
        // menuOpen:!this.state.menuOpen
        //this.setState({ openedDropdown });
    };
    closeMenu = openedDropdown => e => {
        e.preventDefault();
        console.log('close'+openedDropdown );
        document.removeEventListener('click', this.closeMenu());
        this.setState({  }, () => {

        });
    };
    renderQuestionItem() {
        return this.state.questionBlock.map(questionBlock=>
        // {
            // return(
                <QuestionItem dataKey={questionBlock.key} questionBlock={questionBlock} key={questionBlock.key} showDropdown={this.showDropdown(questionBlock.key)}  menuOpen={this.state.openedDropdown ===questionBlock.key}/>
            // )
        // }
        )
    };
    render(){
        return(
            <div className="st-main st-flex question-box">
                {this.renderQuestionItem()}
            </div>
        )
    }
}


export default QuestionBlock;