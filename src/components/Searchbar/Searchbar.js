import React from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


export default class Searchbar extends React.Component {
    state = {
    searchQuery: '',
    };


    handleNameChange = e => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
}


    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
             return  toast.error('Enter the name');

        }
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    }


    
    render() {
    
        return (
            <header className={s.searchbar}>
                <form className={s.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.searchForm_button}>
                        <span className={s.searchForm_button_label}>Search</span>
                    </button>

                    <input
                        value={this.state.searchQuery}
                        onChange={this.handleNameChange}
                        className={s.searchForm_input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>)
    }
}
 Searchbar.propTypes = {
     onSubmit: PropTypes.string.isRequired,
     handleNameChange: PropTypes.func.isRequired,
     handleNameChange: PropTypes.func.isRequired,
     
};
 