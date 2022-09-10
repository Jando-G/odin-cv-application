import React from 'react';
import WorkInfo from './WorkInfo';
import SchoolInfo from './SchoolInfo';
import GeneralInfo from './GeneralInfo';
import add from '../Assets/plus-box-outline.png';

class Content extends React.Component {
    state = {
        workCount: 1,
        schoolCount: 1,
        workSkip: [],
        schoolSkip: [],
    }

    onAddWork = () => {
        this.setState({
            workCount: this.state.workCount + 1,
        })
    }
    onAddSchool = () => {
        this.setState({
            schoolCount: this.state.schoolCount + 1,
        })
    }
    onDeleteSchool = (number) => {
        let newArray = this.state.schoolSkip;
        newArray.push(number);
        this.setState ({
            schoolSkip: newArray,
        })
    }
    onDeleteWork = (number) => {
        let newArray = this.state.schoolSkip;
        newArray.push(number);
        this.setState ({
            workSkip: newArray,
        })
    }
    render() {
        const workChildren = [];

        for (let i = 0; i < this.state.workCount; i += 1) {
                workChildren.push(<WorkInfo onDelete={this.onDeleteWork} key={i} number={i} />);
          };

        const schoolChildren = [];

        for (let i = 0; i < this.state.schoolCount; i += 1) {
            if(!this.state.schoolSkip.includes(i)) {
                schoolChildren.push(<SchoolInfo onDelete={this.onDeleteSchool} key={i} number={i} />);
            }
            else {
                console.log('skip', i)
            }
          };

        return (
            <div className="Content">
                <form>
                    <GeneralInfo/>
                    <h2><em>Education</em></h2>
                    {schoolChildren}
                    <div className="addBtn" onClick={this.onAddSchool}>
                        <img src={add} alt="Add"/>
                    </div>
                    <h2><em>Work Experience</em></h2>
                    {workChildren}
                    <div className="addBtn" onClick={this.onAddWork}>
                        <img src={add} alt="Add"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Content;