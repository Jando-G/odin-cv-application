import React from 'react';
import check from '../Assets/check.png';
import trash from '../Assets/delete.png';
import cog from '../Assets/cog.png';

 class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'fName': '',
            'lName': '',
            'email': '',
            'phone': '',
            editMode: true,
            visibility: 'hidden',
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    render() {
        return (
            <div className="GeneralInfo" 
            onMouseEnter={e => {
                this.setState({visibility: 'visible'});
            }} 
            onMouseLeave={e => {
                this.setState({visibility: 'hidden'})
            }}>
                {this.state.editMode ? 
                (<div>
                    <input placeholder="First Name" id="fName" name="fname" onChange={this.handleChange} value={this.state['fName']}></input>
                    <input placeholder="Last Name" id="lName" name="lname" onChange={this.handleChange} value={this.state['lName']}></input>
                    <input placeholder="Email@email.com" id="email" type="email" onChange={this.handleChange} value={this.state['email']}></input>
                    <input placeholder="PhoneNumber" id="phone" type="phone" onChange={this.handleChange} value={this.state['phone']}></input>
                    <div className="SubmitBtn" onClick={this.handleClick}>
                        <img src={check} alt="Submit"/>
                    </div>
                </div>) : 
                (<div>
                    <h1>{this.state['fName']} {this.state['lName']}</h1>
                    <p><em>Phone </em>{this.state['phone']}</p>
                    <p><em>Email </em>{this.state['email']}</p>
                    <div className="BtnCouple">
                        <div className="EditBtn" onClick={this.handleClick} style={{visibility: this.state.visibility}}>
                            <img src={cog} alt="Edit" />
                        </div>
                    </div>
                    
                </div>)}
            </div>
        ); 
    }
}

export default GeneralInfo;