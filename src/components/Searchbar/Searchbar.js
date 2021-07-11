import React from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';


export default class Searchbar extends React.Component {
    state = {
        showModal: false,
        image: null,
        imageName: '',
    };


    handleNameChange = e => {
        this.setState({ imageName: e.currentTarget.value.toLowerCase() });
}


    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imageName.trim() === '') {
             return  toast.error('Enter the name');
/* 

toast.error('🦄 Wow so easy!', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
 */

         
        }
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    }
    
    render() {
    
        return (
            <header className={s.searchbar}>
                <form className={s.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.searchForm_button}>
                        <span className={s.searchForm_button_label}>Search</span>
                    </button>

                    <input
                        value={this.state.imageName}
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
/* 

Searchbar.propTypes = {
  onSubmit: PropTypes.string.isRequired,
};
 */