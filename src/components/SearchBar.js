import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };
    
    onInputChange = (e) => {
        this.setState({term: e.target.value});
    };

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="term">
							Video Search
						</label>
						<input
							type="text"
							id="term"
                            value={this.state.term}
                            onChange={this.onInputChange}
						></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
