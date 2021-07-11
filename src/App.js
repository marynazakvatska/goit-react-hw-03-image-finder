import React from "react";


import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer} from "react-toastify";
import ImageGallery from './components/ImageGallery/ImageGallery';
/* import Loader from './components/Loader/Loader'; */
import Button from './components/Button/Button';
import  Modal  from './components/Modal/Modal';
import s from './App.module.css';
import Loader from "react-loader-spinner";




class App extends React.Component {
  state = {
    showModal: false,
    imageName : '',
    image: null,
    page: 1,
    searchQuery: "",
  };


componentDidMount() {
  const APi_KEY = "21675881-9f2314d809854342b3af65054";
 const BASE_URL = "https://pixabay.com/api";
  fetch ('https://pixabay.com/api/?q=cat&page=1&key=21675881-9f2314d809854342b3af65054&image_type=photo&orientation=horizontal&per_page=12')
 /* fetch('https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${APi_KEY}&image_type=photo&orientation=horizontal&per_page=12') */
  
  
  .then(res => res.json())
  .then(console.log)
}


  handleFormSubmit = imageName => {
    console.log(imageName)
    this.setState({imageName})
  };
 


  toggleModal = (e) => {
   
    this.setState(({ showModal }) => ({ showModal: !showModal }))
    }
    


  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={ this.handleFormSubmit}/>
        <ImageGallery />
        <Loader
         type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} />
        {this.state.image && <Button />}


        <button type="button" onClick={this.toggleModal}>
          open modal
</button>

        {showModal && (<Modal onClose={this.toggleModal}>
        {/* <button type="button" onClick={this.toggleModal}>
          close modal
          </button> */}
        
        </ Modal >)}
        <ToastContainer /* position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover *//>
      </div>
    );
  }
}



export default App;
