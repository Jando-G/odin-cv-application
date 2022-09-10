import React from 'react';
import cog from '../Assets/cog.png';
import trash from '../Assets/delete.png';
import check from '../Assets/check.png';

 class SchoolInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'major': '',
            'start': '',
            'end': '',
            editMode: true,
            visibility: 'hidden',
        };
    }
    handleChange = (e) => {
        e.target.id ? 
        this.setState({
            [e.target.id]: e.target.value,
        }) : 
        this.setState({
            [e.target.className]: e.target.value,
        })
    }
    handleClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    render() {
        return (
            <div className="SchoolInfo"
            onMouseEnter={e => {
                this.setState({visibility: 'visible'});
            }} 
            onMouseLeave={e => {
                this.setState({visibility: 'hidden'})
            }}>
                {this.state.editMode ? 
                (<div>
                    <input placeholder="Start Month" className="start" name="start" type="month" onChange={this.handleChange} value={this.state['start']}></input>
                    <input placeholder="Graduation Month" className="end" type="month" onChange={this.handleChange} value={this.state['end']}></input>
                    <input placeholder="School Name" className="title" name="title" onChange={this.handleChange} value={this.state['title']}></input>
                    <input placeholder="Major" id="major" onChange={this.handleChange} value={this.state['major']}></input>
                    <div className="SubmitBtn" onClick={this.handleClick}>
                        <img src={check} alt="submit" />
                    </div>
                </div>) : 
                (<div className="SectionGrid">
                    <h4>{this.state['start']} - {this.state['end']}</h4>
                    <h3>{this.state['title']}</h3>
                    <p>{this.state['major']}</p>
                    <div className="BtnCouple">
                        <div className="EditBtn" onClick={this.handleClick} style={{visibility: this.state.visibility}}>
                            <img src={cog} alt="Edit" />
                        </div>
                        <div className="DeleteBtn" onClick={() => this.props.onDelete(this.props.number)} style={{visibility: this.state.visibility}}>
                            <img src={trash} alt="Delete" />
                        </div>
                    </div>
                </div>)}
            </div>
        ); 
    }
}

export default SchoolInfo;