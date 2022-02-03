import React from "react";
import axios from "axios"

class CreateExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/exercises/add',this.state).then(res=>console.log(res)).catch(err=>console.log(err))
        //console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <h2>Create Exercise</h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='username'>Username</label>
                        <input className="form-control" type='text' name='username' id='exercise-username' value={this.state.username} onChange={this.handleChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='description'>Description</label>
                        <input className="form-control" type='text' name='description' id='exercise-description' value={this.state.description} onChange={this.handleChange}></input></div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='duration'>Duration</label>
                        <input className="form-control" type='number' name='duration' id='exercise-duration' value={this.state.duration} onChange={this.handleChange}></input></div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='date'>Date</label>
                        <input className="form-control" type='date' name='date' id='exercise-date' value={this.state.date} onChange={this.handleChange}></input>
                    </div>
                    <div className="mb-3"><button className="btn btn-primary" type="submit">Submit</button></div>

                </form>
            </div>
        )
    }
}

export default CreateExercise