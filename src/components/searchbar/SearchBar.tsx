import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = {searchTerm: ''};
    }

    handleSubmit(event: any) {
        this.props.onSubmit(this.state.searchTerm);
        event.preventDefault();
    }

    handleChange(event: any) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <div>
                <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Gif search:
                    </label>
                    <input className={styles.input} type="text" name="searchbar" value={this.state.value} onChange={this.handleChange.bind(this)}  />
                    <input className={styles.submit} type="submit" value="Find it!" />
                </form>
            </div>
        );
    }
}

export default SearchBar;
